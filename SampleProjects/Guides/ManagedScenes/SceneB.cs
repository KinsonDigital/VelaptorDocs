﻿// <copyright file="SceneB.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace ManagedScenes;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Content;
using Velaptor.Content.Fonts;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.Input;
using Velaptor.Scene;

/// <summary>
/// The second scene of the managed scene guide.
/// </summary>
public class SceneB : SceneBase
{
    private const int WindowWidth = 1000;
    private const int WindowHeight = 1000;
    private const string Instructions = "Left & right arrow keys to move to scenes.\nClick anywhere in the window.";
    private readonly ILoader<ITexture> textureLoader;
    private readonly ITextureRenderer textureRenderer;
    private readonly ILoader<IFont> fontLoader;
    private readonly IFontRenderer fontRenderer;
    private readonly ILoader<IAudio> audioLoader;
    private readonly IAppInput<MouseState> mouse;
    private Point logoPosition;
    private MouseState prevMouseState;
    private ITexture? logoTexture;
    private IFont? font;
    private IAudio? audio;

    /// <summary>
    /// Initializes a new instance of the <see cref="SceneB"/> class.
    /// </summary>
    public SceneB()
    {
        this.textureLoader = ContentLoaderFactory.CreateTextureLoader();
        this.fontLoader = ContentLoaderFactory.CreateFontLoader();
        this.audioLoader = ContentLoaderFactory.CreateAudioLoader();

        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.fontRenderer = RendererFactory.CreateFontRenderer();

        this.mouse = HardwareFactory.GetMouse();
    }

    /// <summary>
    /// Loads the scenes content.
    /// </summary>
    public override void LoadContent()
    {
        this.logoTexture = this.textureLoader.Load("velaptor-mascot");
        this.font = this.fontLoader.Load("TimesNewRoman-Regular", 12);
        this.audio = this.audioLoader.Load("mario-jump", AudioBuffer.Full);

        this.logoPosition = new Point(WindowWidth / 2, WindowHeight / 2);

        base.LoadContent();
    }

    /// <summary>
    /// Updates the scene.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    public override void Update(FrameTime frameTime)
    {
        ArgumentNullException.ThrowIfNull(this.audio);

        var currentMouseState = this.mouse.GetState();

        // If the left mouse button was fully clicked
        if (currentMouseState.IsLeftButtonUp() && this.prevMouseState.IsLeftButtonDown())
        {
            this.audio.Play();
            this.logoPosition = currentMouseState.GetPosition();
        }

        this.prevMouseState = currentMouseState;
        base.Update(frameTime);
    }

    /// <summary>
    /// Renders the scene.
    /// </summary>
    public override void Render()
    {
        ArgumentNullException.ThrowIfNull(this.font);
        ArgumentNullException.ThrowIfNull(this.logoTexture);

        var logoPos = new Vector2(this.logoPosition.X, this.logoPosition.Y);
        this.textureRenderer.Render(this.logoTexture, logoPos);

        this.fontRenderer.Render(this.font, Instructions, new Vector2(WindowWidth / 2f, 30));

        base.Render();
    }
}
