// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace QuickStart;

using Velaptor;
using Velaptor.Content;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.UI;
using Velaptor.Batching;
using Velaptor.Input;
using System.Numerics;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private const float Speed = 300f;
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly IBatcher batcher;
    private readonly ITextureRenderer textureRenderer;
    private readonly IContentManager contentManager;
    private Vector2 spritePosition;
    private ITexture? logoTexture;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Quick Start";
        Width = 800;
        Height = 800;

        this.contentManager = ContentManager.Create();
        this.batcher = RendererFactory.CreateBatcher();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();

        this.keyboard = HardwareFactory.GetKeyboard();
        this.spritePosition = new Vector2(Width / 2f, Height / 2f);
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.logoTexture = this.contentManager.Load<ITexture>("velaptor-logo");

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.logoTexture is not null)
        {
            this.contentManager.Unload(this.logoTexture);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        var keyState = this.keyboard.GetState();
        var velocity = Vector2.Zero;

        if (keyState.IsKeyDown(KeyCode.Left))
        {
            velocity.X = -Speed;
        }

        if (keyState.IsKeyDown(KeyCode.Right))
        {
            velocity.X = Speed;
        }

        if (keyState.IsKeyDown(KeyCode.Up))
        {
            velocity.Y = -Speed;
        }

        if (keyState.IsKeyDown(KeyCode.Down))
        {
            velocity.Y = Speed;
        }

        this.spritePosition += velocity * (float)frameTime.ElapsedTime.TotalSeconds;

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

        this.textureRenderer.Render(
            this.logoTexture,
            (int)this.spritePosition.X,
            (int)this.spritePosition.Y);

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
