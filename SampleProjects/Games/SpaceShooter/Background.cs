// <copyright file="Background.cs" company="KinsonDigital">
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
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;

/// <summary>
/// The background graphics.
/// </summary>
public class Background : IContentLoadable, IUpdatable, IDrawable
{
    private const int StarSpawnXOffset = 10;
    private readonly IBatcher batcher;
    private readonly ITextureRenderer textureRenderer;
    private readonly IContentManager contentManager;
    private readonly RandomNumGenerator random = new ();
    private readonly List<Star> stars = [];
    private readonly IDisposable worldSignalUnsubscriber;
    private readonly ShuffleBag<Vector2> screenPosBag = new ();
    private readonly (Color, float)[] starColors;
    private double starSpawnIntervalElapsed;
    private IAtlasData? atlasData;
    private RectangleF worldBounds;
    private Rectangle srcRect;

    /// <summary>
    /// Initializes a new instance of the <see cref="Background"/> class.
    /// </summary>
    /// <param name="worldSignal">Receives updates about the world.</param>
    public Background(IWorldSignal worldSignal)
    {
        this.batcher = RendererFactory.CreateBatcher();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.contentManager = ContentManager.Create();

        var worldUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(worldData => this.worldBounds = worldData.WorldBounds);

        this.worldSignalUnsubscriber = worldSignal.Subscribe(worldUpdateSubscription);

        this.starColors =
        [
            (Color.White, 0.7f),
            (Color.DarkOrange, 0.15f),
            (Color.CornflowerBlue, 0.10f),
            (Color.MediumPurple, 0.05f)
        ];
    }

    /// <summary>
    /// Gets a value indicating whether the content is loaded.
    /// </summary>
    public bool IsLoaded { get; private set; }

    /// <summary>
    /// Loads the background content.
    /// </summary>
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

        this.atlasData = this.contentManager.Load<IAtlasData>("atlas");
        this.srcRect = this.atlasData.GetFrames("star")[0].Bounds;

        for (var i = 0; i < 300; i++)
        {
            var newStar = CreateStar();
            this.stars.Add(newStar);
        }

        IsLoaded = true;
    }

    /// <summary>
    /// Unloads the background content.
    /// </summary>
    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        if (this.atlasData is not null)
        {
            this.contentManager.Unload(this.atlasData);
        }

        this.worldSignalUnsubscriber.Dispose();
    }

    /// <summary>
    /// Updates the background.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
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

    /// <summary>
    /// Renders the background.
    /// </summary>
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

    /// <summary>
    /// Creates a start using the given x and y coordinates.
    /// </summary>
    /// <param name="x">The X coordinate.</param>
    /// <param name="y">The Y coordinate.</param>
    /// <returns>The star object.</returns>
    private Star CreateStar(int x = -1, int y = -1)
    {
        var newClr = this.starColors.GetRandomItem();
        var alpha = this.random.Next(125, 255);
        newClr.SetAlpha(alpha);

        var newSize = this.random.Next(50, 100);

        var newX = this.random.Next(0, (int)this.worldBounds.Width);
        var newY = this.random.Next(0, (int)this.worldBounds.Height);

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
