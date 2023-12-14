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
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;
using Velaptor.Input;

public class Enemy : IUpdatable, IDrawable, IContentLoadable
{
    private const double AngularVelocity = 100;
    private readonly ILoader<ITexture> textureLoader;
    private readonly ITextureRenderer textureRenderer;
    private readonly IDisposable unsubscriber;
    private readonly IShapeRenderer shapeRenderer;
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly RandomNumGenerator random = new ();
    private ITexture? enemyTexture;
    private Rectangle worldBounds;
    private float angle;
    private Vector2 position;
    private BezierPath bezierPath;
    private StraightPath straightPath;
    private MultiPath multiPath;
    private KeyboardState curKeyState;
    private KeyboardState prevKeyState;

    public bool IsLoaded { get; }

    public Enemy(IWorldSignal worldSignal)
    {
        var worldUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(worldData => this.worldBounds = worldData.WorldBounds);

        this.unsubscriber = worldSignal.Subscribe(worldUpdateSubscription);

        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.shapeRenderer = RendererFactory.CreateShapeRenderer();
        this.textureLoader = ContentLoaderFactory.CreateTextureLoader();
        this.keyboard = HardwareFactory.GetKeyboard();
    }

    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        this.enemyTexture = this.textureLoader.Load("red-enemy");

        var worldHalfWidth = this.worldBounds.Width / 2f;
        this.position = new Vector2(worldHalfWidth, 0);

        const int totalPoints = 5;

        // var startPos = new Vector2(worldHalfWidth, 0);
        // var endPos = new Vector2(worldHalfWidth, this.worldBounds.Height);
        var startPos = Vector2.Zero;
        var endPos = new Vector2(this.worldBounds.Width, this.worldBounds.Height);

        var pathPoints = new List<Vector2>();

        for (var i = 0; i < totalPoints; i++)
        {
            var newX = this.random.Next(0, this.worldBounds.Width);
            var newY = this.random.Next(0, this.worldBounds.Height);
            var newPoint = new Vector2(newX, newY);

            pathPoints.Add(newPoint);
        }

        // pathPoints.Add(Vector2.Zero);
        // pathPoints.Add(new Vector2(this.worldBounds.Width, 0));
        // pathPoints.Add(new Vector2(0, this.worldBounds.Height));
        // pathPoints.Add(new Vector2(this.worldBounds.Width, this.worldBounds.Height));

        this.position = startPos;
        this.bezierPath = new BezierPath(startPos, endPos) { IsLooping = true, };
        this.straightPath = new StraightPath(startPos, endPos) { IsLooping = true, };
        this.multiPath = new MultiPath(pathPoints.ToArray()) { IsLooping = true };
    }

    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        this.unsubscriber.Dispose();
        this.textureLoader.Unload("enemy");
    }

    public void Update(FrameTime frameTime)
    {
        this.angle += (float)(AngularVelocity * frameTime.ElapsedTime.TotalSeconds);

        this.curKeyState = this.keyboard.GetState();

        if (this.curKeyState.IsKeyDown(KeyCode.Right))
        {
            this.bezierPath.Velocity += 10f;
            this.straightPath.Velocity += 10f;
            this.multiPath.Velocity += 10f;
        }

        if (this.curKeyState.IsKeyDown(KeyCode.Left))
        {
            this.bezierPath.Velocity -= 10f;
            this.straightPath.Velocity -= 10f;
            this.multiPath.Velocity -= 10f;
        }

        this.bezierPath.Update(frameTime);
        this.straightPath.Update(frameTime);
        this.multiPath.Update(frameTime);

        this.position = this.multiPath.CurrentPosition;

        if (this.curKeyState.IsKeyUp(KeyCode.Space) && this.prevKeyState.IsKeyDown(KeyCode.Space))
        {
            this.bezierPath.IsPaused = !this.bezierPath.IsPaused;
            this.straightPath.IsPaused = !this.straightPath.IsPaused;
        }

        this.prevKeyState = this.curKeyState;
    }

    public void Render()
    {
        ArgumentNullException.ThrowIfNull(this.enemyTexture);

        var srcRect = new Rectangle(0, 0, (int)this.enemyTexture.Width, (int)this.enemyTexture.Height);
        var destRect = new Rectangle((int)this.position.X, (int)this.position.Y, (int)this.enemyTexture.Width, (int)this.enemyTexture.Height);

        this.textureRenderer.Render(
            this.enemyTexture,
            srcRect,
            destRect,
            1,
            this.angle,
            Color.White,
            RenderEffects.None);
    }

    private void RenderPoints(List<Vector2> points, Color clr)
    {
        if (points is null)
        {
            return;
        }

        foreach (Vector2 point in points)
        {
            var circle = new CircleShape
            {
                Color = clr,
                Position = point,
                Radius = 5,
            };

            this.shapeRenderer.Render(circle);
        }
    }

    private void RenderBPoints(Vector2[] points)
    {
        if (points is null)
        {
            return;
        }

        for (var i = 0; i < points.Length; i++)
        {
            Vector2 point = points[i];

            var circle = new CircleShape { Color = Color.White, Position = point, Radius = 5, };

            this.shapeRenderer.Render(circle);
        }
    }
}
