// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace RotatingTextures;

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
    private const float AngleSpeed = 50;
    private readonly ITextureRenderer textureRenderer;
    private readonly IBatcher batcher;
    private readonly IContentManager contentManager;
    private ITexture? textTexture;
    private ITexture? gearTexture;
    private float angle;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Rotating Textures";
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
        this.textTexture = this.contentManager.Load<ITexture>("text");
        this.gearTexture = this.contentManager.Load<ITexture>("gear");

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.textTexture is not null)
        {
            this.contentManager.Unload(this.textTexture);
        }

        if (this.gearTexture is not null)
        {
            this.contentManager.Unload(this.gearTexture);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Updates the game state. Executes one time for every iteration of the game loop.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        var angleVelocity = AngleSpeed * (float)frameTime.ElapsedTime.TotalSeconds;

        this.angle += angleVelocity;

        base.OnUpdate(frameTime);
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

        // Render the gear texture in the center of the window
        this.textureRenderer.Render(this.gearTexture, x, y, this.angle);

        // Render the text texture on top of the gear texture in the center of the window
        this.textureRenderer.Render(this.textTexture, x, y, 2);

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
