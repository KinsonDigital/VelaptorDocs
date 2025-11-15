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
    private readonly (string Text, SizeF Size)[] rectAttrText =
    [
        ("Width (Scroll)", SizeF.Empty),
        ("Height (Scroll)", SizeF.Empty),
        ("Color (Left Click)", SizeF.Empty),
        ("Border Thickness (Scroll)", SizeF.Empty),
        ("Is Solid (Left Click)", SizeF.Empty),
        ("Gradient Type (Left Click)", SizeF.Empty),
        ("Gradient Start (Left Click)", SizeF.Empty),
        ("Gradient Stop (Left Click)", SizeF.Empty),
        ("Top Left Corner Radius (Scroll)", SizeF.Empty),
        ("Top Right Corner Radius (Scroll)", SizeF.Empty),
        ("Bottom Left Corner Radius (Scroll)", SizeF.Empty),
        ("Bottom Right Corner Radius (Scroll)", SizeF.Empty),
    ];
    private readonly Color[] colors = [Color.RoyalBlue, Color.MediumPurple, Color.DarkOrange, Color.MediumSeaGreen];
    private readonly Color[] gradStartClrs = [Color.RoyalBlue, Color.MediumPurple, Color.DarkOrange, Color.MediumSeaGreen];
    private readonly Color[] gradStopClrs = [Color.RoyalBlue, Color.MediumPurple, Color.DarkOrange, Color.MediumSeaGreen];
    private int colorIndex;
    private int gradStartClrIndex;
    private int gradStopClrIndex;
    private RectShape rect;
    private RectAttribute rectAttribute = RectAttribute.Width;
    private KeyboardState prevKeyState;
    private MouseState prevMouseState;
    private IFont? regularFont;
    private IFont? boldFont;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Render Rectangles Guide";
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

        this.rect = new RectShape
        {
            Width = 12,
            Height = 10,
            Color = this.colors[this.colorIndex],
            Position = new Vector2(100, 200),
            BorderThickness = 12,
            IsSolid = false,
            GradientType = ColorGradient.None,
            GradientStart = Color.RoyalBlue,
            GradientStop = Color.MediumPurple,
            CornerRadius = default,
        };

        for (var i = 0; i < this.rectAttrText.Length; i++)
        {
            this.rectAttrText[i].Size = this.regularFont.Measure(this.rectAttrText[i].Text);
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
        this.rect.Left = (Width / 2f) - (this.rect.Width / 2f);
        this.rect.Top = (Height / 2f) - (this.rect.Height / 2f);

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

        this.shapeRenderer.Render(this.rect);

        var largestWidth = this.rectAttrText.Max(x => x.Size.Width);
        var totalHeightWithSpacing = this.rectAttrText.Sum(x => x.Size.Height) + ((this.rectAttrText.Length - 1) * 10);
        var totalTextHalfHeight = totalHeightWithSpacing / 2;

        var winHalfHeight = Height / 2f;
        var startPos = new Vector2((largestWidth / 2) + 5, winHalfHeight - totalTextHalfHeight);
        var selectedIndex = (int)this.rectAttribute;

        for (var i = 0; i < this.rectAttrText.Length; i++)
        {
            var (text, size) = this.rectAttrText[i];
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
            var currentValue = (int)this.rectAttribute;
            currentValue += 1;
            currentValue = currentValue > this.rectAttrText.Length - 1 ? 0 : currentValue;
            this.rectAttribute = (RectAttribute)currentValue;
        }
        else if (currentKeyState.IsKeyUp(KeyCode.Up) && this.prevKeyState.IsKeyDown(KeyCode.Up))
        {
            var currentValue = (int)this.rectAttribute;
            currentValue -= 1;
            currentValue = currentValue < 0 ? this.rectAttrText.Length - 1 : currentValue;
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
                    this.colorIndex += 1;
                    this.colorIndex = this.colorIndex > this.colors.Length - 1 ? 0 : this.colorIndex;
                    this.rect.Color = this.colors[this.colorIndex];
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
                    this.gradStartClrIndex += 1;
                    this.gradStartClrIndex = this.gradStartClrIndex > this.gradStartClrs.Length - 1 ? 0 : this.gradStartClrIndex;
                    this.rect.GradientStart = this.gradStartClrs[this.gradStartClrIndex];
                    break;
                case RectAttribute.GradientStop:
                    this.gradStopClrIndex += 1;
                    this.gradStopClrIndex = this.gradStopClrIndex > this.gradStopClrs.Length - 1 ? 0 : this.gradStopClrIndex;
                    this.rect.GradientStop = this.gradStopClrs[this.gradStopClrIndex];
                    break;
            }
        }

        var halfWidth = this.rect.Width / 2;

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
                    this.rect.BorderThickness -= 10;
                    break;
                case RectAttribute.TopLeftRadius:
                    var newTopLeft = Math.Clamp(this.rect.CornerRadius.TopLeft + 12, 0, halfWidth);
                    this.rect.CornerRadius = CornerRadius.SetTopLeft(this.rect.CornerRadius, newTopLeft);
                    break;
                case RectAttribute.TopRightRadius:
                    var newTopRight = Math.Clamp(this.rect.CornerRadius.TopRight + 12, 0, halfWidth);
                    this.rect.CornerRadius = CornerRadius.SetTopRight(this.rect.CornerRadius, newTopRight);
                    break;
                case RectAttribute.BottomRightRadius:
                    var newBottomRight = Math.Clamp(this.rect.CornerRadius.BottomRight + 12, 0, halfWidth);
                    this.rect.CornerRadius = CornerRadius.SetBottomRight(this.rect.CornerRadius, newBottomRight);
                    break;
                case RectAttribute.BottomLeftRadius:
                    var newBottomLeft = Math.Clamp(this.rect.CornerRadius.BottomLeft + 12, 0, halfWidth);
                    this.rect.CornerRadius = CornerRadius.SetBottomLeft(this.rect.CornerRadius, newBottomLeft);
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
                case RectAttribute.BorderThickness:
                    this.rect.BorderThickness += 10;
                    break;
                case RectAttribute.TopLeftRadius:
                    var newTopLeft = Math.Clamp(this.rect.CornerRadius.TopLeft - 12, 0, halfWidth);
                    this.rect.CornerRadius = CornerRadius.SetTopLeft(this.rect.CornerRadius, newTopLeft);
                    break;
                case RectAttribute.TopRightRadius:
                    var newTopRight = Math.Clamp(this.rect.CornerRadius.TopRight - 12, 0, halfWidth);
                    this.rect.CornerRadius = CornerRadius.SetTopRight(this.rect.CornerRadius, newTopRight);
                    break;
                case RectAttribute.BottomRightRadius:
                    var newBottomRight = Math.Clamp(this.rect.CornerRadius.BottomRight - 12, 0, halfWidth);
                    this.rect.CornerRadius = CornerRadius.SetBottomRight(this.rect.CornerRadius, newBottomRight);
                    break;
                case RectAttribute.BottomLeftRadius:
                    var newBottomLeft = Math.Clamp(this.rect.CornerRadius.BottomLeft - 12, 0, halfWidth);
                    this.rect.CornerRadius = CornerRadius.SetBottomLeft(this.rect.CornerRadius, newBottomLeft);
                    break;
            }
        }

        this.prevMouseState = currentMouseState;
    }
}
