// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace RenderingTextures;

using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IBatcher batcher;
    private readonly ITextureRenderer textureRenderer;
    private readonly IContentManager contentManager;
    private ITexture? mascotTexture;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Render Textures";
        Width = 800;
        Height = 800;

        this.contentManager = ContentManager.Create();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.batcher = RendererFactory.CreateBatcher();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.mascotTexture = this.contentManager.Load<ITexture>("velaptor-mascot");

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.mascotTexture is not null)
        {
            this.contentManager.Unload(this.mascotTexture);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnDraw"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        this.batcher.Begin();

        var x = (int)(Width / 2); // Center of the window horizontally
        var y = (int)(Height / 2); // Center of the window vertically

        // Render the mascot image in the center of the window
        this.textureRenderer.Render(this.mascotTexture, x, y);

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
