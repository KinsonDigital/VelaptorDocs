// <copyright file="SceneA.cs" company="KinsonDigital">
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
/// The first scene of the managed scene guide.
/// </summary>
public class SceneA : SceneBase
{
    private const int WindowWidth = 1000;
    private const string Instructions = "Left & right arrow keys to move to scenes.";
    private readonly ILoader<ITexture> textureLoader;
    private readonly ILoader<IFont> fontLoader;
    private readonly ITextureRenderer textureRenderer;
    private readonly IFontRenderer fontRenderer;
    private readonly IAppInput<MouseState> mouse;
    private ITexture? logoTexture;
    private IFont? font;
    private PointF logoPosition;

    /// <summary>
    /// Initializes a new instance of the <see cref="SceneA"/> class.
    /// </summary>
    public SceneA()
    {
        this.textureLoader = ContentLoaderFactory.CreateTextureLoader();
        this.fontLoader = ContentLoaderFactory.CreateFontLoader();

        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.fontRenderer = RendererFactory.CreateFontRenderer();

        this.mouse = HardwareFactory.GetMouse();
    }

    /// <summary>
    /// Loads the scenes content.
    /// </summary>
    public override void LoadContent()
    {
        this.logoTexture = this.textureLoader.Load("kd-logo");
        this.font = this.fontLoader.Load("TimesNewRoman-Regular", 12);

        base.LoadContent();
    }

    /// <summary>
    /// Updates the scene.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    public override void Update(FrameTime frameTime)
    {
        var mouseState = this.mouse.GetState();

        this.logoPosition = mouseState.GetPosition();

        base.Update(frameTime);
    }

    /// <summary>
    /// Renders the scene.
    /// </summary>
    public override void Render()
    {
        ArgumentNullException.ThrowIfNull(this.logoTexture);
        ArgumentNullException.ThrowIfNull(this.font);

        // Render the image
        var logoPos = new Vector2(this.logoPosition.X, this.logoPosition.Y);
        this.textureRenderer.Render(this.logoTexture, logoPos);

        // Render the text
        this.fontRenderer.Render(this.font, Instructions, new Vector2(WindowWidth / 2f, 20));

        base.Render();
    }
}
