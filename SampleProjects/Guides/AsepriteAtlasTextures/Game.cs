// <copyright file="Game.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace AsepriteAtlasTextures;

using System.Drawing;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Content.Exceptions;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;
using Velaptor.UI;
using VelaptorAseprite;
using VelaptorAseprite.Data;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly ITextureRenderer textureRenderer;
    private readonly IContentManager contentManager;
    private readonly IBatcher batcher;
    private readonly Random random = new ();
    private RenderEffects renderEffects;
    private IAsepriteAtlas? atlasData;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Aseprite Atlas Textures";
        Width = 500;
        Height = 500;

        this.contentManager = ContentManager.Create();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();

        this.batcher = RendererFactory.CreateBatcher();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        // Loads the atlas.png and atlas.json file
        this.atlasData = this.contentManager.LoadAsepriteAtlas("fire-atlas", "grow");
        this.atlasData.Enabled = true;
        this.atlasData.OnFrameChange = (_, _) =>
        {
            // Randomly choose to have the flame flipped horizontally or not flipped at all
            this.renderEffects = this.random.Next(0, 2) == 0
                ? RenderEffects.FlipHorizontally
                : RenderEffects.None;
        };
        this.atlasData.OnCycleComplete = (_) =>
        {
            this.atlasData.Play("burn");
        };
        this.atlasData.Play();

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.atlasData is not null)
        {
            this.contentManager.UnloadAsepriteAtlas(this.atlasData);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Updates the game state. Executes one time for every iteration of the game loop.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        if (this.atlasData is null)
        {
            return;
        }

        this.atlasData.Update(frameTime);

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnDraw"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        if (this.atlasData is null)
        {
            throw new LoadContentException("The atlas data has not been loaded");
        }

        // Start the batch
        this.batcher.Begin();

        var frame = this.atlasData.GetCurrentFrame();

        var srcRect = frame.Bounds;
        var destX = (int)(Width / 2);
        var destY = (int)(Height / 2);
        var destRect = new Rectangle(destX, destY, (int)this.atlasData.Texture.Width, (int)this.atlasData.Texture.Height);

        this.textureRenderer.Render(
            this.atlasData.Texture,
            srcRect,
            destRect,
            1f,
            0f,
            Color.White,
            this.renderEffects);

        // End the batch to render the entire batch
        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
