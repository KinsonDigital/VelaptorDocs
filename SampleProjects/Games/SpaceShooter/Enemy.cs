// <copyright file="Enemy.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using Carbonate.Fluent;
using Signals;
using Signals.Data;
using Signals.Interfaces;
using Velaptor;
using Velaptor.Content;
using Velaptor.Exceptions;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;

/// <summary>
/// Represents an enemy in the game.
/// </summary>
public class Enemy : IUpdatable, IDrawable, IContentLoadable
{
    private const double AngularVelocity = 100;
    private readonly ITextureRenderer textureRenderer;
    private readonly IDisposable worldSignalUnsubscriber;
    private readonly IEnemyUpdateSignal enemyUpdateSignal;
    private readonly RandomNumGenerator random = new ();
    private readonly string[] enemyTypes = ["red-enemy", "orange-enemy"];
    private readonly IContentManager contentManager;
    private readonly MultiPath multiPath = new ();
    private readonly Vector2 unsetVector = new (float.MinValue, float.MaxValue);
    private IAtlasData? atlasData;
    private RectangleF worldBounds;
    private Vector2 position;
    private Rectangle srcRect;
    private float angle;
    private bool rotateCw = true;

    /// <summary>
    /// Initializes a new instance of the <see cref="Enemy"/> class.
    /// </summary>
    /// <param name="worldSignal">Receives updates about the world.</param>
    /// <param name="enemyUpdateSignal">Sends out updates about the enemy.</param>
    public Enemy(IWorldSignal worldSignal, IEnemyUpdateSignal enemyUpdateSignal)
    {
        var worldUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(worldData => this.worldBounds = worldData.WorldBounds);

        this.worldSignalUnsubscriber = worldSignal.Subscribe(worldUpdateSubscription);

        this.enemyUpdateSignal = enemyUpdateSignal;
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.contentManager = ContentManager.Create();
    }

    /// <summary>
    /// Gets a value indicating whether the content is loaded.
    /// </summary>
    public bool IsLoaded { get; private set; }

    /// <summary>
    /// Gets a value indicating whether the enemy is visible.
    /// </summary>
    public bool Visible { get; private set; }

    /// <summary>
    /// Loads the enemy content.
    /// </summary>
    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        this.multiPath.IsLooping = false;
        this.atlasData = this.contentManager.Load<IAtlasData>("atlas");

        if (this.atlasData is null)
        {
            throw new AtlasException("Could not load the atlas.");
        }

        Randomize();

        IsLoaded = true;
    }

    /// <summary>
    /// Unloads the enemy content.
    /// </summary>
    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        this.worldSignalUnsubscriber.Dispose();

        if (this.atlasData is not null)
        {
            this.contentManager.Unload(this.atlasData);
        }
    }

    /// <summary>
    /// Updates the enemy.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    public void Update(FrameTime frameTime)
    {
        if (!Visible)
        {
            return;
        }

        var displacement = (float)(AngularVelocity * frameTime.ElapsedTime.TotalSeconds);
        this.angle = this.rotateCw ? this.angle + displacement : this.angle - displacement;

        this.multiPath.Update(frameTime);

        this.position = this.multiPath.CurrentPosition;

        var enemyData = new EnemyData
        {
            Bounds = new RectangleF(this.position.ToPointF(), new SizeF(this.srcRect.Width, this.srcRect.Height)),
        };

        if (this.position.Y >= this.worldBounds.Height + (this.srcRect.Height / 2f))
        {
            Visible = false;
            return;
        }

        var commandResult = this.enemyUpdateSignal.PushPull(SignalIds.EnemyUpdate, enemyData);

        if (commandResult == EnemyCommands.Die)
        {
            Visible = false;
        }
    }

    /// <summary>
    /// Renders the enemy.
    /// </summary>
    public void Render()
    {
        ArgumentNullException.ThrowIfNull(this.atlasData);
        ArgumentNullException.ThrowIfNull(this.atlasData.Texture);

        if (!Visible)
        {
            return;
        }

        var destRect = new Rectangle(
            (int)this.position.X,
            (int)this.position.Y,
            (int)this.atlasData.Texture.Width,
            (int)this.atlasData.Texture.Height);

        this.textureRenderer.Render(
            this.atlasData.Texture,
            this.srcRect,
            destRect,
            1,
            this.angle,
            Color.White,
            RenderEffects.None);
    }

    /// <summary>
    /// Respawns a new enemy.
    /// </summary>
    public void Respawn()
    {
        Visible = true;
        Randomize();
    }

    /// <summary>
    /// Randomizes the enemy.
    /// </summary>
    private void Randomize()
    {
        // Randomize between clockwise and counter clockwise rotation
        this.rotateCw = this.random.FlipCoin();

        ChooseRandomEnemy();

        var pathPoints = GeneratePathPoints();

        this.multiPath.SetPathPoints(pathPoints.ToArray());
        this.multiPath.Velocity = this.random.Next(1000, 3000);
    }

    /// <summary>
    /// Randomly chooses an enemy.
    /// </summary>
    private void ChooseRandomEnemy()
    {
        ArgumentNullException.ThrowIfNull(this.atlasData);

        var chosenEnemyIndex = this.random.Next(0, this.enemyTypes.Length);
        var chosenEnemy = this.enemyTypes[chosenEnemyIndex];
        this.srcRect = this.atlasData.GetFrames(chosenEnemy)[0].Bounds;
    }

    /// <summary>
    /// Creates a path of points that zig zag horizontally from the top of the window to the bottom.
    /// </summary>
    /// <returns>The list of random points.</returns>
    private Vector2[] GeneratePathPoints()
    {
        var startPos = CreateRandomPointFrom(this.unsetVector);
        var pathPoints = new List<Vector2>();
        pathPoints.Add(startPos);

        // Generate new points until past the bottom of the window
        while (true)
        {
            var newPoint = CreateRandomPointFrom(pathPoints[^1]);

            pathPoints.Add(newPoint);

            if (newPoint.Y > this.worldBounds.Height + this.srcRect.Height)
            {
                break;
            }
        }

        // If there is an odd number of points, add one more to make it even
        // The points passed into the multi-path must be even.
        if (pathPoints.Count % 2 != 0)
        {
            pathPoints.Add(pathPoints[^1]);
        }

        return pathPoints.ToArray();
    }

    /// <summary>
    /// Creates a new random point from the given point.
    /// </summary>
    /// <param name="from">The reference point.</param>
    /// <returns>The random point.</returns>
    private Vector2 CreateRandomPointFrom(Vector2 from)
    {
        var minTravelWidth = (int)this.worldBounds.Width / 8;
        var maxTravelWidth = (int)this.worldBounds.Width / 2;

        var enemyHalfWidth = this.srcRect.Width / 2;

        var travelWidth = this.random.Next(minTravelWidth, maxTravelWidth);
        var travelHalfWidth = travelWidth / 2;

        var winMinX = travelHalfWidth;
        var winMaxX = (int)this.worldBounds.Width - travelHalfWidth;

        // Take the half width of the enemy into account
        winMinX += enemyHalfWidth;
        winMaxX -= enemyHalfWidth;

        // Taking the horizontal zig zag travel distance into account, generate
        // a random horizontal starting pos that will make sure the enemy will not
        // go off the left and right edges of the screen as it travels vertically
        // down the screen.
        var startX = this.random.Next(winMinX, winMaxX);

        if (from == this.unsetVector)
        {
            return new Vector2(startX, -this.srcRect.Height);
        }

        // Make sure that the enemy cannot go past the left side of the window
        var leftSide = startX - enemyHalfWidth;
        if (leftSide < winMinX)
        {
            startX += Math.Abs(leftSide - winMinX);
        }

        // Make sure the enemy cannot go past the right side of the window
        var rightSide = startX + enemyHalfWidth;
        if (rightSide >= winMaxX)
        {
            startX -= Math.Abs(rightSide - winMaxX);
        }

        var minHeight = (int)this.worldBounds.Height / 8;
        var maxHeight = (int)this.worldBounds.Height / 4;

        var newX = this.random.Next(startX - travelHalfWidth, startX + travelHalfWidth);
        var newY = from.Y + this.random.Next(minHeight, maxHeight);

        return new Vector2(newX, newY);
    }
}
