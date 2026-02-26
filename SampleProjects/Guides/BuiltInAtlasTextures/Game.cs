// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace BuiltInAtlasTextures;

using System.Drawing;
using System.Numerics;
using Velaptor.Graphics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Content.Exceptions;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private const int FullSizeStartFrame = 8;
    private readonly ITextureRenderer textureRenderer;
    private readonly IContentManager contentManager;
    private readonly IBatcher batcher;
    private readonly Random random = new ();
    private IAtlasData? atlasData;
    private AtlasSubTextureData[]? subTextureData;
    private RenderEffects renderEffects;
    private float elapsedMs;
    private int currentFrame;
    private bool isFullSize;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Built In Atlas Textures";
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
        this.atlasData = this.contentManager.Load<IAtlasData>("atlas");
        this.subTextureData = this.atlasData.GetFrames("flame");

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.atlasData is not null)
        {
            this.contentManager.Unload(this.atlasData);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Updates the game state. Executes one time for every iteration of the game loop.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        if (this.subTextureData is null)
        {
            throw new LoadContentException("The atlas data has not been loaded");
        }

        this.elapsedMs += (float)frameTime.ElapsedTime.TotalMilliseconds;

        // Move to the next frame every 124ms
        if (this.elapsedMs >= 124)
        {
            // If the current frame is one of the frames after
            // the flame has grown to full size.
            if (this.currentFrame >= FullSizeStartFrame)
            {
                this.isFullSize = true;
            }

            // Get the starting frame index based on if the flame has
            // grown to full size or not.
            var startFrame = this.isFullSize ? FullSizeStartFrame : 0;

            // If the last frame has been reached, reset to the starting frame
            this.currentFrame = this.currentFrame >= this.subTextureData.Length - 1
                ? startFrame
                : this.currentFrame + 1;

            // Reset the elapsed time so we can wait for another
            // 124ms before moving to the next frame
            this.elapsedMs = 0;

            // Randomly choose to have the flame flipped horizontally or not flipped at all
            this.renderEffects = this.random.Next(0, 2) == 0
                ? RenderEffects.FlipHorizontally
                : RenderEffects.None;
        }

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnDraw"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        // Start the batch
        this.batcher.Begin();

        var pos = new Vector2(Width / 2f, Height / 2f);

        // Render only the sub-texture in the atlas at the center of the window
        this.textureRenderer.Render(this.atlasData,
            "flame",
            pos,
            0f,
            0.25f,
            Color.White,
            this.renderEffects,
            this.currentFrame);

        // End the batch to render the entire batch
        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
