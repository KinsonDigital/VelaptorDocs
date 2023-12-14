// <copyright file="Background.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
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
    private readonly IBatcher batcher;
    private readonly ILoader<IAtlasData> atlasLoader;
    private readonly ITextureRenderer textureRenderer;
    private readonly RandomNumGenerator random = new ();
    private readonly List<Star> stars = new ();
    private readonly IDisposable worldSignalUnsubscriber;
    private double starSpawnIntervalElapsed = 0;
    private IAtlasData? atlasData;
    private Rectangle worldBounds;
    private (Color, float)[] starColors;
    private ShuffleBag<Vector2> screenPosBag = new ();
    private Rectangle srcRect;

    public Background(IWorldSignal worldSignal)
    {
        this.batcher = RendererFactory.CreateBatcher();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.atlasLoader = ContentLoaderFactory.CreateAtlasLoader();

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

        this.atlasData = this.atlasLoader.Load("atlas");
        this.srcRect = this.atlasData.GetFrames("star")[0].Bounds;

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

        this.atlasLoader.Unload(this.atlasData);
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
        ArgumentNullException.ThrowIfNull(this.atlasData);
        ArgumentNullException.ThrowIfNull(this.atlasData.Texture);

        this.batcher.ClearColor = Color.FromArgb(255, 5, 5, 5);

        foreach (var star in this.stars)
        {
            if (!star.IsAlive)
            {
                continue;
            }

            var destRect = new Rectangle(
                (int)star.X,
                (int)star.Y,
                (int)this.atlasData.Texture.Width,
                (int)this.atlasData.Texture.Height);

            this.textureRenderer.Render(
                this.atlasData.Texture,
                this.srcRect,
                destRect,
                star.Size,
                0f,
                star.Color,
                RenderEffects.None);
        }
    }

    private Star CreateStar(int x = -1, int y = -1)
    {
        var newClr = this.starColors.GetRandomItem();
        var alpha = this.random.Next(125, 255);
        newClr.SetAlpha(alpha);

        var newSize = this.random.Next(50, 100);

        var newX = this.random.Next(0, this.worldBounds.Width);
        var newY = this.random.Next(0, this.worldBounds.Height);

        return new Star
        {
            Color = newClr,
            X = x >= 0 ? x : newX,
            Y = y >= 0 ? y : newY,
            Size = newSize / 100f,
            Speed = newSize,
            IsAlive = true,
        };
    }
}
