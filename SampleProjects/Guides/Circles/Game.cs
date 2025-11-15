// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

#pragma warning disable CS8524 // The switch expression does not handle some values of its input type (it is not exhaustive) involving an unnamed enum value.

namespace Circles;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Content.Fonts;
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
    private const string CtrlText = "Press 'Up' or 'Down' to change the selected attribute.\nMouse 'Click' & 'Scroll' to change the attribute values.";
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly IAppInput<MouseState> mouse;
    private readonly IBatcher batcher;
    private readonly IShapeRenderer shapeRenderer;
    private readonly IFontRenderer fontRenderer;
    private readonly IContentManager contentManager;
    private readonly (string Text, SizeF Size)[] circleText =
    [
        ("Radius (Scroll)", SizeF.Empty),
        ("Color (Left Click)", SizeF.Empty),
        ("Border Thickness (Scroll)", SizeF.Empty),
        ("Is Solid (Left Click)", SizeF.Empty),
        ("Gradient Type (Left Click)", SizeF.Empty),
        ("Gradient Start (Left Click)", SizeF.Empty),
        ("Gradient Stop (Left Click)", SizeF.Empty),
    ];
    private readonly Color[] colors = [Color.RoyalBlue, Color.MediumPurple, Color.DarkOrange, Color.MediumSeaGreen];
    private readonly Color[] gradStartClrs = [Color.RoyalBlue, Color.MediumPurple, Color.DarkOrange, Color.MediumSeaGreen];
    private readonly Color[] gradStopClrs = [Color.RoyalBlue, Color.MediumPurple, Color.DarkOrange, Color.MediumSeaGreen];
    private int colorIndex;
    private int gradStartClrIndex;
    private int gradStopClrIndex;
    private CircleShape circle;
    private CircleAttribute circleAttribute = CircleAttribute.Radius;
    private KeyboardState prevKeyState;
    private MouseState prevMouseState;
    private IFont? regularFont;
    private IFont? boldFont;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Render Circles Guide";
        Width = 1500;
        Height = 1000;

        this.contentManager = ContentManager.Create();
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
        this.regularFont = this.contentManager.LoadFont("regular-font", 12);
        this.boldFont = this.contentManager.LoadFont("bold-font", 12);

        this.circle = new CircleShape
        {
            Radius = 100,
            Color = this.colors[this.colorIndex],
            Position = new Vector2(Width / 2f, Height / 2f),
            BorderThickness = 12,
            IsSolid = false,
            GradientType = ColorGradient.None,
            GradientStart = Color.RoyalBlue,
            GradientStop = Color.MediumPurple,
        };

        for (var i = 0; i < this.circleText.Length; i++)
        {
            this.circleText[i].Size = this.regularFont.Measure(this.circleText[i].Text);
        }

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.regularFont is not null)
        {
            this.contentManager.Unload(this.regularFont);
        }

        if (this.boldFont is not null)
        {
            this.contentManager.Unload(this.boldFont);
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
        ArgumentNullException.ThrowIfNull(this.regularFont);
        ArgumentNullException.ThrowIfNull(this.boldFont);

        this.batcher.Begin();

        this.shapeRenderer.Render(this.circle);

        var largestWidth = this.circleText.Max(x => x.Size.Width);
        var totalHeightWithSpacing = this.circleText.Sum(x => x.Size.Height) + ((this.circleText.Length - 1) * 10);
        var totalTextHalfHeight = totalHeightWithSpacing / 2;

        var winHalfHeight = Height / 2f;
        var startPos = new Vector2((largestWidth / 2) + 5, winHalfHeight - totalTextHalfHeight);
        var selectedIndex = (int)this.circleAttribute;

        for (var i = 0; i < this.circleText.Length; i++)
        {
            var (text, size) = this.circleText[i];
            var color = i == selectedIndex ? Color.LightCyan : Color.DarkGray;

            var renderPos = new Vector2((size.Width / 2) + 20, startPos.Y + ((size.Height + 10) * i));

            var chosenFont = i == selectedIndex ? this.boldFont : this.regularFont;
            this.fontRenderer.Render(chosenFont, text, renderPos, color);
        }

        this.fontRenderer.Render(this.regularFont, CtrlText, new Vector2(Width / 2f, 50), Color.White);

        this.batcher.End();

        base.OnDraw(frameTime);
    }

    /// <summary>
    /// Process keyboard input.
    /// </summary>
    private void ProcessKeyboard()
    {
        var currentKeyState = this.keyboard.GetState();

        if (currentKeyState.IsKeyUp(KeyCode.Down) && this.prevKeyState.IsKeyDown(KeyCode.Down))
        {
            var currentValue = (int)this.circleAttribute;
            currentValue += 1;
            currentValue = currentValue > this.circleText.Length - 1 ? 0 : currentValue;
            this.circleAttribute = (CircleAttribute)currentValue;
        }
        else if (currentKeyState.IsKeyUp(KeyCode.Up) && this.prevKeyState.IsKeyDown(KeyCode.Up))
        {
            var currentValue = (int)this.circleAttribute;
            currentValue -= 1;
            currentValue = currentValue < 0 ? this.circleText.Length - 1 : currentValue;
            this.circleAttribute = (CircleAttribute)currentValue;
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
            switch (this.circleAttribute)
            {
                case CircleAttribute.Color:
                    this.colorIndex += 1;
                    this.colorIndex = this.colorIndex > this.colors.Length - 1 ? 0 : this.colorIndex;
                    this.circle.Color = this.colors[this.colorIndex];
                    break;
                case CircleAttribute.IsSolid:
                    this.circle.IsSolid = !this.circle.IsSolid;
                    break;
                case CircleAttribute.GradientType:
                    this.circle.GradientType = this.circle.GradientType switch
                    {
                        ColorGradient.None => ColorGradient.Horizontal,
                        ColorGradient.Horizontal => ColorGradient.Vertical,
                        ColorGradient.Vertical => ColorGradient.None,
                    };
                    break;
                case CircleAttribute.GradientStart:
                    this.gradStartClrIndex += 1;
                    this.gradStartClrIndex = this.gradStartClrIndex > this.gradStartClrs.Length - 1 ? 0 : this.gradStartClrIndex;
                    this.circle.GradientStart = this.gradStartClrs[this.gradStartClrIndex];
                    break;
                case CircleAttribute.GradientStop:
                    this.gradStopClrIndex += 1;
                    this.gradStopClrIndex = this.gradStopClrIndex > this.gradStopClrs.Length - 1 ? 0 : this.gradStopClrIndex;
                    this.circle.GradientStop = this.gradStopClrs[this.gradStopClrIndex];
                    break;
            }
        }

        if (currentMouseState.GetScrollDirection() == MouseScrollDirection.ScrollDown)
        {
            switch (this.circleAttribute)
            {
                case CircleAttribute.Radius:
                    this.circle.Radius -= 20;
                    break;
                case CircleAttribute.BorderThickness:
                    this.circle.BorderThickness -= 10;
                    break;
            }
        }
        else if (currentMouseState.GetScrollDirection() == MouseScrollDirection.ScrollUp)
        {
            switch (this.circleAttribute)
            {
                case CircleAttribute.Radius:
                    this.circle.Radius += 20;
                    break;
                case CircleAttribute.BorderThickness:
                    this.circle.BorderThickness += 10;
                    break;
            }
        }

        this.prevMouseState = currentMouseState;
    }
}
