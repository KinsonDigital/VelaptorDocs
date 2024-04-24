// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace Scenes;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.Input;
using Velaptor.UI;

public class Game : Window
{
    private readonly ILoader<ITexture> textureLoader;
    private readonly ITextureRenderer renderer;
    private readonly IBatcher batcher;
    private readonly IAppInput<MouseState> mouse;
    private ITexture logoTexture;
    private MouseState currentMouseState;
    private Point logoPosition;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Scenes";
        Width = 1000;
        Height = 1000;

        this.textureLoader = ContentLoaderFactory.CreateTextureLoader();
        this.batcher = RendererFactory.CreateBatcher();
        this.renderer = RendererFactory.CreateTextureRenderer();
        this.mouse = HardwareFactory.GetMouse();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.logoTexture = this.textureLoader.Load("kd-logo");

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        this.currentMouseState = this.mouse.GetState();

        this.logoPosition = this.currentMouseState.GetPosition();

        base.OnUpdate(frameTime);
    }

    protected override void OnDraw(FrameTime frameTime)
    {
        this.batcher.Begin();

        this.renderer.Render(this.logoTexture, this.logoPosition.X, this.logoPosition.Y);

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
