// <copyright file="SceneB.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace UnmanagedScenes;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Content;
using Velaptor.Content.Fonts;
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
    private const string Instructions = "Left & right arrow keys to navigate to scenes.\nClick anywhere in the window.";
    private readonly ITextureRenderer textureRenderer;
    private readonly IContentManager contentManager;
    private readonly IFontRenderer fontRenderer;
    private readonly IAppInput<MouseState> mouse;
    private PointF logoPosition;
    private MouseState prevMouseState;
    private ITexture? logoTexture;
    private IFont? font;
    private IAudio? audio;

    /// <summary>
    /// Initializes a new instance of the <see cref="SceneB"/> class.
    /// </summary>
    public SceneB()
    {
        this.contentManager = ContentManager.Create();

        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.fontRenderer = RendererFactory.CreateFontRenderer();

        this.mouse = HardwareFactory.GetMouse();
    }

    /// <summary>
    /// Loads the scenes content.
    /// </summary>
    public override void LoadContent()
    {
        this.logoTexture = this.contentManager.Load<ITexture>("velaptor-mascot");
        this.font = this.contentManager.LoadFont("TimesNewRoman-Regular", 12);
        this.audio = this.contentManager.LoadAudio("mario-jump", AudioBuffer.Full);

        // Set the default location of the texture to the center of the window
        this.logoPosition = new Point(WindowWidth / 2, WindowHeight / 2);

        base.LoadContent();
    }

    /// <summary>
    /// Unloades the scenes content.
    /// </summary>
    public override void UnloadContent()
    {
        if (this.logoTexture is not null)
        {
            this.contentManager.Unload(this.logoTexture);
        }

        if (this.font is not null)
        {
            this.contentManager.Unload(this.font);
        }

        if (this.audio is not null)
        {
            this.contentManager.Unload(this.audio);
        }

        base.UnloadContent();
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
        ArgumentNullException.ThrowIfNull(this.logoTexture);
        ArgumentNullException.ThrowIfNull(this.font);

        // Convert the `PointF` to a `Vector2`
        var logoPos = new Vector2(this.logoPosition.X, this.logoPosition.Y);

        // Render the image
        this.textureRenderer.Render(this.logoTexture, logoPos);

        // Render the text
        this.fontRenderer.Render(this.font, Instructions, new Vector2(WindowWidth / 2f, 30));

        base.Render();
    }
}
