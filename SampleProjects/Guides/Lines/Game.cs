// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace Lines;

using System.Drawing;
using System.Numerics;
using Carbonate.Fluent;
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
    private const float Speed = 300;
    private readonly IContentManager contentManager;
    private readonly IBatcher batcher;
    private readonly ILineRenderer lineRenderer;
    private readonly IFontRenderer fontRenderer;
    private readonly IAppInput<MouseState> mouse;
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly Color[] colors =
    [
        Color.WhiteSmoke,
        Color.IndianRed,
        Color.RoyalBlue,
        Color.MediumPurple,
        Color.MediumSeaGreen,
        Color.Yellow,
        Color.Black,
    ];
    private IFont? font;
    private string instructions;
    private KeyboardState prevKeyState;
    private MouseState prevMouseState;
    private Line line;
    private Vector2 velocity = new (0, 0);
    private int currentColorIndex;
    private SizeF textSize;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Render Lines Guide";
        Width = 1500;
        Height = 1000;

        this.contentManager = ContentManager.Create();

        this.batcher = RendererFactory.CreateBatcher();
        this.lineRenderer = RendererFactory.CreateLineRenderer();
        this.fontRenderer = RendererFactory.CreateFontRenderer();

        this.mouse = HardwareFactory.GetMouse();
        this.keyboard = HardwareFactory.GetKeyboard();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.font = this.contentManager.LoadFont("TimesNewRoman-Regular", 12);
        this.line = new Line
        {
            Color = Color.MediumPurple,
            P1 = new Vector2(1500f / 2f, 1000f / 2f),
            P2 = new Vector2(300, 300), Thickness = 10,
        };

        this.instructions = "Use the 'W' and 'S' keys to move the line up and down.\n" +
                           "Use the 'A' and 'D' keys to move the line left and right.\n" +
                           "Use the mouse wheel to increase or decrease the line thickness.\n" +
                           "Left click to change the line color to the next color.\n" +
                           "Right click to change the line color to the previous color.";

        this.textSize = this.font.Measure(this.instructions);

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.font is not null)
        {
            this.contentManager.Unload(this.font);
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

        var deltaVel = this.velocity * (float)frameTime.ElapsedTime.TotalSeconds;
        this.line.P1 += deltaVel;

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

        this.lineRenderer.Render(this.line);

        const int topMargin = 25;
        var textPos = new Vector2(1500f / 2f, (this.textSize.Height / 2f) + topMargin);

        this.fontRenderer.Render(this.font, this.instructions, textPos);

        this.batcher.End();

        base.OnDraw(frameTime);
    }

    /// <summary>
    /// Process keyboard input.
    /// </summary>
    private void ProcessKeyboard()
    {
        var currentKeyState = this.keyboard.GetState();

        if (this.prevKeyState.IsKeyDown(KeyCode.A))
        {
            this.velocity.X = -Speed;
        }
        else if (this.prevKeyState.IsKeyDown(KeyCode.D))
        {
            this.velocity.X = Speed;
        }
        else
        {
            this.velocity.X = 0;
        }

        if (this.prevKeyState.IsKeyDown(KeyCode.W))
        {
            this.velocity.Y = -Speed;
        }
        else if (this.prevKeyState.IsKeyDown(KeyCode.S))
        {
            this.velocity.Y = Speed;
        }
        else
        {
            this.velocity.Y = 0;
        }

        this.prevKeyState = currentKeyState;
    }

    /// <summary>
    /// Process mouse input.
    /// </summary>
    private void ProcessMouse()
    {
        var currentMouseState = this.mouse.GetState();

        this.line.P2 = new Vector2(currentMouseState.GetX(), currentMouseState.GetY());

        var scrollDir = currentMouseState.GetScrollDirection();

        if (scrollDir == MouseScrollDirection.ScrollDown)
        {
            this.line.Thickness += 10;
        }
        else if (scrollDir == MouseScrollDirection.ScrollUp)
        {
            this.line.Thickness -= 10;
        }

        if (currentMouseState.IsLeftButtonUp() && this.prevMouseState.IsLeftButtonDown())
        {
            this.currentColorIndex += 1;

            this.currentColorIndex = this.currentColorIndex > this.colors.Length - 1 ? 0 : this.currentColorIndex;
        }

        if (currentMouseState.IsRightButtonUp() && this.prevMouseState.IsRightButtonDown())
        {
            this.currentColorIndex -= 1;

            this.currentColorIndex = this.currentColorIndex < 0 ? this.colors.Length - 1 : this.currentColorIndex;
        }

        this.line.Color = this.colors[this.currentColorIndex];

        this.prevMouseState = currentMouseState;
    }
}
