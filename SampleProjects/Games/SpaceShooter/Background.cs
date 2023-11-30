﻿// <copyright file="Background.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using System.Security.Cryptography;
using Carbonate.Fluent;
using Signals;
using Signals.Data;
using Velaptor;
using Velaptor.Batching;using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;

public class Background : IContentLoadable, IUpdatable, IDrawable
{
    private const int StarSpawnXOffset = 10;
    private const double StarSpawnInterval = 125;
    private const int MinStarSize = 50;
    private const int MaxStarSize = 100;
    private double starSpawnIntervalElapsed = 0;
    private readonly IBatcher batcher;
    private readonly ITextureRenderer textureRenderer;
    private readonly ILoader<ITexture> textureLoader;
    private readonly RandomNumGenerator randomNEW = new ();
    private readonly List<Star> stars = new ();
    private readonly IDisposable worldSignalUnsubscriber;
    private ITexture? starTexture;
    private Rectangle worldBounds;
    private (Color, float)[] starColors;
    private ShuffleBag<Vector2> screenPosBag = new ();

    public Background(IWorldSignal worldSignal)
    {
        this.batcher = RendererFactory.CreateBatcher();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.textureLoader = ContentLoaderFactory.CreateTextureLoader();

        var worldUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(worldData => this.worldBounds = worldData.WorldBounds);

        this.worldSignalUnsubscriber = worldSignal.Subscribe(worldUpdateSubscription);
    }

    public bool IsLoaded { get; }

    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        for (var x = 0; x < this.worldBounds.Width; x++)
        {
            for (var y = 0; y < this.worldBounds.Height; y++)
            {
                this.screenPosBag.Add(new Vector2(x, y), 1);
            }
        }

        this.screenPosBag.Shuffle();

        this.starColors = new[]
        {
            (Color.White, 0.7f),
            (Color.DarkOrange, 0.15f),
            (Color.CornflowerBlue, 0.10f),
            (Color.MediumPurple, 0.05f),
        };

        this.starTexture = this.textureLoader.Load("star");

        for (var i = 0; i < 300; i++)
        {
            var newStar = CreateStar();
            this.stars.Add(newStar);
        }
    }

    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        this.textureLoader.Unload(this.starTexture);
        this.worldSignalUnsubscriber.Dispose();
    }

    public void Update(FrameTime frameTime)
    {
        for (var i = 0; i < this.stars.Count; i++)
        {
            if (!this.stars[i].IsAlive)
            {
                continue;
            }

            var star = this.stars[i];

            star = star with { Y = star.Y + (star.Speed * (float)frameTime.ElapsedTime.TotalSeconds) };

            var killBoundary = this.worldBounds.Height + StarSpawnXOffset;

            if (star.Y > killBoundary)
            {
                star = star with { IsAlive = false };
            }

            this.stars[i] = star;
        }

        this.starSpawnIntervalElapsed += frameTime.ElapsedTime.TotalMilliseconds;

        if (this.starSpawnIntervalElapsed > 125)
        {
            var notEnoughStars = true;

            for (var i = 0; i < this.stars.Count; i++)
            {
                if (!this.stars[i].IsAlive)
                {
                    notEnoughStars = false;
                    this.stars[i] = CreateStar(y: 0);
                    break;
                }
            }

            if (notEnoughStars)
            {
                this.stars.Add(CreateStar(y: 0));
            }

            this.starSpawnIntervalElapsed = 0;
        }
    }

    public void Render()
    {
        ArgumentNullException.ThrowIfNull(this.starTexture);

        this.batcher.ClearColor = Color.FromArgb(255, 5, 5, 5);

        foreach (var star in this.stars)
        {
            if (!star.IsAlive)
            {
                continue;
            }

            var srcRect = new Rectangle(0, 0, (int)this.starTexture.Width, (int)this.starTexture.Height);
            var destRect = new Rectangle((int)star.X, (int)star.Y, (int)this.starTexture.Width, (int)this.starTexture.Height);
            this.textureRenderer.Render(this.starTexture, srcRect, destRect, star.Size, 0f, star.Color, RenderEffects.None);
        }
    }

    private Star CreateStar(int x = -1, int y = -1)
    {
        var newClr = this.starColors.GetRandomItem();
        var alpha = this.randomNEW.Next(125, 255);
        newClr.SetAlpha(alpha);

        var newSize = this.randomNEW.Next(50, 100);

        var newX = this.randomNEW.Next(0, this.worldBounds.Width);
        var newY = this.randomNEW.Next(0, this.worldBounds.Height);

        return new Star
        {
            Color = newClr,
            // X = x >= 0 ? x : this.random.Next(0, this.worldBounds.Width),
            // Y = y >= 0 ? y : this.random.Next(0, this.worldBounds.Height),
            X = x >= 0 ? x : newX,
            Y = y >= 0 ? y : newY,
            Size = newSize / 100f,
            Speed = newSize,
            IsAlive = true,
        };
    }
}