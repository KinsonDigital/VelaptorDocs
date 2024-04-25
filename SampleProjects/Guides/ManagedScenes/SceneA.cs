// <copyright file="SceneA.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace ManagedScenes;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Content;
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
    private readonly ILoader<ITexture> textureLoader;
    private readonly ITextureRenderer renderer;
    private readonly IAppInput<MouseState> mouse;
    private ITexture? logoTexture;
    private PointF logoPosition;

    /// <summary>
    /// Initializes a new instance of the <see cref="SceneA"/> class.
    /// </summary>
    public SceneA()
    {
        this.textureLoader = ContentLoaderFactory.CreateTextureLoader();
        this.renderer = RendererFactory.CreateTextureRenderer();
        this.mouse = HardwareFactory.GetMouse();
    }

    /// <summary>
    /// Loads the scenes content.
    /// </summary>
    public override void LoadContent()
    {
        this.logoTexture = this.textureLoader.Load("kd-logo");
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

        var logoPos = new Vector2(this.logoPosition.X, this.logoPosition.Y);
        this.renderer.Render(this.logoTexture, logoPos);

        base.Render();
    }
}
