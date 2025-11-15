// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace RenderingText;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Content.Fonts;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private const string Text = "Hello Velaptor!";
    private readonly Random random = new ();
    private readonly IContentManager contentManager;
    private readonly IFontRenderer fontRenderer;
    private readonly IBatcher batcher;
    private IFont? font;
    private Vector2 velocity = new (200, 200);
    private Vector2 position = new (400, 400);
    private Color textColor = Color.White;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Render Text Guide";
        Width = 800;
        Height = 800;

        this.contentManager = ContentManager.Create();
        this.batcher = RendererFactory.CreateBatcher();
        this.fontRenderer = RendererFactory.CreateFontRenderer();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.font = this.contentManager.LoadFont("TimesNewRoman-Regular", 22);

        base.OnLoad();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        ProcessCollision();
        var displacement = this.velocity * (float)frameTime.ElapsedTime.TotalSeconds;
        this.position += displacement;

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnDraw"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        this.batcher.Begin();

        this.fontRenderer.Render(this.font, Text, (int)this.position.X, (int)this.position.Y, this.textColor);

        this.batcher.End();

        base.OnDraw(frameTime);
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

    private void ProcessCollision()
    {
        var textSize = this.font.Measure(Text);
        var halfWidth = textSize.Width / 2;
        var halfHeight = textSize.Height / 2;

        var leftSide = this.position.X - halfWidth;
        var top = this.position.Y - halfHeight;
        var rightSide = this.position.X + halfWidth;
        var bottom = this.position.Y + halfHeight;

        if (leftSide <= 0)
        {
            this.velocity.X *= -1;
            RandomizeColor();
        }

        if (top <= 0)
        {
            this.velocity.Y *= -1;
            RandomizeColor();
        }

        if (rightSide >= Width)
        {
            this.velocity.X *= -1;
            RandomizeColor();
        }

        if (bottom >= Height)
        {
            this.velocity.Y *= -1;
            RandomizeColor();
        }

        // Left readjustment
        this.position.X = leftSide <= 0
            ? this.position.X + -leftSide
            : this.position.X;

        // Right readjustment
        this.position.X = rightSide >= Width
            ? this.position.X - (rightSide - Width)
            : this.position.X;

        // Top readjustment
        this.position.Y = top <= 0
            ? this.position.Y + -top
            : this.position.Y;

        // Bottom readjustment
        this.position.Y = bottom >= Height
            ? this.position.Y - (bottom - Height)
            : this.position.Y;
    }

    /// <summary>
    /// Randomizes the text color.
    /// </summary>
    private void RandomizeColor()
    {
        var red = this.random.Next(0, 255); // Create a random red value
        var green = this.random.Next(0, 255); // Create a random green value
        var blue = this.random.Next(0, 255); // Create a random blue value

        // Set the text color
        this.textColor = Color.FromArgb(255, red, green, blue);
    }
}
