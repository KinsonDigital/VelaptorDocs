// <copyright file="SceneA.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace ManagedScenes;

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
/// The first scene of the managed scene guide.
/// </summary>
public class SceneA : SceneBase
{
    private const int WindowWidth = 1000;
    private const string Instructions = "Left & right arrow keys to navigate to scenes.";
    private readonly IContentManager contentManager;
    private readonly ITextureRenderer textureRenderer;
    private readonly IFontRenderer fontRenderer;
    private readonly IAppInput<MouseState> mouse;
    private ITexture? logoTexture;
    private PointF logoPosition;
    private IFont? font;

    /// <summary>
    /// Initializes a new instance of the <see cref="SceneA"/> class.
    /// </summary>
    public SceneA()
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
        this.logoTexture = this.contentManager.Load<ITexture>("kd-logo");
        this.font = this.contentManager.LoadFont("TimesNewRoman-Regular", 12);

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

        base.UnloadContent();
    }

    /// <summary>
    /// Updates the scene.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    public override void Update(FrameTime frameTime)
    {
        var currentMouseState = this.mouse.GetState();
        this.logoPosition = currentMouseState.GetPosition();

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
        this.fontRenderer.Render(this.font, Instructions, new Vector2(WindowWidth / 2f, 20));

        base.Render();
    }
}
