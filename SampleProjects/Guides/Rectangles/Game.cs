// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

#pragma warning disable CS8524 // The switch expression does not handle some values of its input type (it is not exhaustive) involving an unnamed enum value.

namespace Rectangles;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Content.Fonts;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;
using Velaptor.Input;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly IAppInput<MouseState> mouse;
    private readonly IBatcher batcher;
    private readonly IShapeRenderer shapeRenderer;
    private readonly IFontRenderer fontRenderer;
    private readonly ILoader<IFont> fontLoader;
    private RectShape rect;
    private RectAttribute rectAttribute = RectAttribute.Width;
    private KeyboardState prevKeyState;
    private MouseState prevMouseState;
    private IFont? font;
    private Dictionary<RectAttribute, string> rectAttrText = new ()
    {
        { RectAttribute.Width, "Width" },
        { RectAttribute.Height, "Height" },
        { RectAttribute.Color, "Color" },
        { RectAttribute.BorderThickness, "Border Thickness" },
        { RectAttribute.IsSolid, "Is Solid" },
        { RectAttribute.GradientType, "Gradient Type" },
        { RectAttribute.GradientStart, "Gradient Start" },
        { RectAttribute.GradientStop, "Gradient Stop" },
        { RectAttribute.CornerRadius, "Corner Radius" },
    };

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Render Rectangles Guide";
        Width = 800;
        Height = 800;

        this.fontLoader = ContentLoaderFactory.CreateFontLoader();
        this.keyboard = HardwareFactory.GetKeyboard();
        this.mouse = HardwareFactory.GetMouse();

        this.batcher = RendererFactory.CreateBatcher();
        this.shapeRenderer = RendererFactory.CreateShapeRenderer();
        this.fontRenderer = RendererFactory.CreateFontRenderer();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.font = this.fontLoader.Load("app-font", 14);

        this.rect = new RectShape
        {
            Width = 100,
            Height = 100,
            Color = Color.CornflowerBlue,
            Position = new Vector2(400, 400),
            BorderThickness = 1,
            IsSolid = true,
            GradientType = ColorGradient.None,
            GradientStart = Color.CornflowerBlue,
            GradientStop = Color.MediumPurple,
            CornerRadius = default,
        };

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        this.fontLoader.Unload(this.font);
        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        ProcessKeyboard();
        ProcessMouse();

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnDraw"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        ArgumentNullException.ThrowIfNull(this.font);

        this.batcher.Begin();

        this.shapeRenderer.Render(this.rect);
        this.fontRenderer.Render(this.font, $"Current Rect Attribute: {this.rectAttrText[this.rectAttribute]}", new Vector2(400, 30));

        this.batcher.End();

        base.OnDraw(frameTime);
    }

    /// <summary>
    /// Process keyboard input.
    /// </summary>
    private void ProcessKeyboard()
    {
        var currentKeyState = this.keyboard.GetState();

        if (currentKeyState.IsKeyUp(KeyCode.Space) && this.prevKeyState.IsKeyDown(KeyCode.Space))
        {
            var anyShiftKeyDown = currentKeyState.IsKeyDown(KeyCode.LeftShift) || currentKeyState.IsKeyDown(KeyCode.RightShift);
            var incrementAmount = anyShiftKeyDown ? -1 : 1;

            var currentValue = (int)this.rectAttribute;
            var lastIndex = Enum.GetValues<RectAttribute>().Length - 1;

            currentValue += incrementAmount;

            if (currentValue < 0)
            {
                currentValue = lastIndex;
            }
            else if (currentValue > lastIndex)
            {
                currentValue = 0;
            }

            this.rectAttribute = (RectAttribute)currentValue;
        }

        this.prevKeyState = currentKeyState;
    }

    /// <summary>
    /// Process mouse input.
    /// </summary>
    private void ProcessMouse()
    {
        var currentMouseState = this.mouse.GetState();

        // If the left mouse button has been clicked
        if (currentMouseState.IsLeftButtonUp() && this.prevMouseState.IsLeftButtonDown())
        {
            switch (this.rectAttribute)
            {
                case RectAttribute.Color:
                    break;
                case RectAttribute.IsSolid:
                    this.rect.IsSolid = !this.rect.IsSolid;
                    break;
                case RectAttribute.GradientType:
                    this.rect.GradientType = this.rect.GradientType switch
                    {
                        ColorGradient.None => ColorGradient.Horizontal,
                        ColorGradient.Horizontal => ColorGradient.Vertical,
                        ColorGradient.Vertical => ColorGradient.None,
                    };
                    break;
                case RectAttribute.GradientStart:
                    break;
                case RectAttribute.GradientStop:
                    break;
            }
        }

        if (currentMouseState.GetScrollDirection() == MouseScrollDirection.ScrollDown)
        {
            switch (this.rectAttribute)
            {
                case RectAttribute.Width:
                    this.rect.Width -= 20;
                    break;
                case RectAttribute.Height:
                    this.rect.Height -= 20;
                    break;
                case RectAttribute.BorderThickness:
                    break;
                case RectAttribute.CornerRadius:
                    break;
            }
        }
        else if (currentMouseState.GetScrollDirection() == MouseScrollDirection.ScrollUp)
        {
            switch (this.rectAttribute)
            {
                case RectAttribute.Width:
                    this.rect.Width += 20;
                    break;
                case RectAttribute.Height:
                    this.rect.Height += 20;
                    break;
                case RectAttribute.Color:
                    break;
                case RectAttribute.BorderThickness:
                    break;
                case RectAttribute.IsSolid:
                    break;
                case RectAttribute.GradientType:
                    break;
                case RectAttribute.GradientStart:
                    break;
                case RectAttribute.GradientStop:
                    break;
                case RectAttribute.CornerRadius:
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        this.prevMouseState = currentMouseState;
    }
}
