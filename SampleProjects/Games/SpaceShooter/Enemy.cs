// <copyright file="Enemy.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using Carbonate.Fluent;
using Signals;
using Signals.Data;
using Velaptor;
using Velaptor.Content;
using Velaptor.Exceptions;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;
using Velaptor.Input;

/// <summary>
/// Represents an enemy in the game.
/// </summary>
public class Enemy : IUpdatable, IDrawable, IContentLoadable
{
    private const double AngularVelocity = 100;
    private readonly ITextureRenderer textureRenderer;
    private readonly ILoader<IAtlasData> atlasLoader;
    private readonly IDisposable unsubscriber;
    private readonly RandomNumGenerator random = new ();
    private readonly string[] enemyTypes = { "red-enemy", "orange-enemy" };
    private IAtlasData? atlasData;
    private Rectangle worldBounds;
    private float angle;
    private Vector2 position;
    private MultiPath multiPath;
    private Rectangle srcRect;

    /// <summary>
    /// Initializes a new instance of the <see cref="Enemy"/> class.
    /// </summary>
    /// <param name="worldSignal">Receives notifications of changes to the world.</param>
    public Enemy(IWorldSignal worldSignal)
    {
        var worldUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(worldData => this.worldBounds = worldData.WorldBounds);

        this.unsubscriber = worldSignal.Subscribe(worldUpdateSubscription);

        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.atlasLoader = ContentLoaderFactory.CreateAtlasLoader();
    }

    /// <summary>
    /// Gets a value indicating whether or not the content is loaded.
    /// </summary>
    public bool IsLoaded { get; private set; }

    /// <summary>
    /// Loads the enemy content.
    /// </summary>
    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        this.atlasData = this.atlasLoader.Load("atlas");

        if (this.atlasData is null)
        {
            throw new AtlasException("Could not load the atlas.");
        }

        var chosenEnemyIndex = this.random.Next(0, this.enemyTypes.Length);
        var chosenEnemy = this.enemyTypes[chosenEnemyIndex];

        this.srcRect = this.atlasData.GetFrames(chosenEnemy)[0].Bounds;

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

        this.unsubscriber.Dispose();
        this.atlasLoader.Unload(this.atlasData);
    }

    /// <summary>
    /// Updates the enemy.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for this frame.</param>
    public void Update(FrameTime frameTime)
    {
        this.angle += (float)(AngularVelocity * frameTime.ElapsedTime.TotalSeconds);

        this.multiPath.Update(frameTime);

        this.position = this.multiPath.CurrentPosition;
    }

    /// <summary>
    /// Renders the enemy.
    /// </summary>
    public void Render()
    {
        ArgumentNullException.ThrowIfNull(this.atlasData);
        ArgumentNullException.ThrowIfNull(this.atlasData.Texture);

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

    private void Randomize()
    {
        const int totalPoints = 6;

        var startPos = Vector2.Zero;

        var pathPoints = new List<Vector2>();

        for (var i = 0; i < totalPoints; i++)
        {
            var newX = this.random.Next(0, this.worldBounds.Width);
            var newY = this.random.Next(0, this.worldBounds.Height);
            var newPoint = new Vector2(newX, newY);

            pathPoints.Add(newPoint);
        }

        this.position = startPos;
        this.multiPath = new MultiPath(pathPoints.ToArray()) { IsLooping = true };
        this.multiPath.Velocity = this.random.Next(100, 500);
    }
}
