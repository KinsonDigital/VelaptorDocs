// <copyright file="Enemy.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Diagnostics;
using System.Drawing;
using System.Numerics;
using System.Reflection.Metadata.Ecma335;
using Carbonate.Fluent;
using Signals;
using Signals.Data;
using SixLabors.ImageSharp.Processing.Processors.Normalization;
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
    private ITexture? enemyTexture;
    private Rectangle worldBounds;
    private float angle;
    private Vector2 position;
    private readonly IShapeRenderer shapeRenderer;
    private Pathing pathing;
    private readonly IAppInput<KeyboardState> keyboard;
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

        const int totalPoints = 4;

        var startPos = new Vector2(worldHalfWidth, 0);
        var endPos = new Vector2(worldHalfWidth, this.worldBounds.Height);

        var pDist = 1f / totalPoints;
        var curDist = 0f;

        var pathPoints = new List<Vector2>();

        for (var i = 0; i < totalPoints; i++)
        {
            var newPoint = Vector2.Lerp(startPos, endPos, curDist);

            pathPoints.Add(newPoint);
            curDist += pDist;
        }

        this.position = startPos;
        this.pathing = new Pathing(startPos, endPos);
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
            this.pathing.Velocity += 10f;
        }

        if (this.curKeyState.IsKeyDown(KeyCode.Left))
        {
            this.pathing.Velocity -= 10f;
        }

        this.position = this.pathing.UpdatePath(frameTime);

        if (this.curKeyState.IsKeyUp(KeyCode.Space) && this.prevKeyState.IsKeyDown(KeyCode.Space))
        {
            this.pathing.IsPaused = !this.pathing.IsPaused;
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
