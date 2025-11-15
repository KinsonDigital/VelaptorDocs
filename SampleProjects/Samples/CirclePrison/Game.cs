// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace CirclePrison;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
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
    private readonly IBatcher batcher;
    private readonly IShapeRenderer shapeRenderer;
    private readonly ILineRenderer lineRenderer;
    private readonly IContentManager contentManager;
    private readonly IAppInput<MouseState> mouse;
    private readonly Random random = new ();
    private CircleShape prisoner;
    private CircleShape prison;
    private Vector2 velocity;
    private IAudio? audio;
    private float startingVel;
    private bool shouldSpeedUpPrisonerVel = true;
    private Line line;
    private Vector2 prisonOrigin;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Circle Prison";
        Width = 800;
        Height = 800;

        this.batcher = RendererFactory.CreateBatcher();
        this.shapeRenderer = RendererFactory.CreateShapeRenderer();
        this.lineRenderer = RendererFactory.CreateLineRenderer();

        this.contentManager = ContentManager.Create();

        this.mouse = HardwareFactory.GetMouse();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.prisonOrigin = new Vector2(400, 400);

        this.prison = new CircleShape
        {
            Color = Color.Cyan,
            Position = this.prisonOrigin,
            Diameter = 400,
            IsSolid = false,
            BorderThickness = 2,
        };

        this.prisoner = new CircleShape
        {
            Radius = 12,
            Color = Color.MediumPurple,
        };

        this.line = new Line
        {
            Color = Color.Yellow,
            Thickness = 2,
        };

        // Generate a random angle
        var angle = (float)(this.random.NextDouble() * 2 * Math.PI);

        // Generate a random distance from the center of the prison ball
        var distance = (float)(this.random.NextDouble() * this.prison.Radius);

        // Calculate the x and y coordinates of the starting position
        var x = (this.prison.Position.X + distance) * MathF.Cos(angle);
        var y = (this.prison.Position.Y + distance) * MathF.Sin(angle);

        this.prisoner.Position = new Vector2(x, y);

        this.audio = this.contentManager.LoadAudio("bounce", AudioBuffer.Full);

        if (this.audio.IsPlaying)
        {
            this.audio.Stop();
        }

        this.audio.Play();

        var randomSign = this.random.Next(0, 2) == 0 ? -1 : 1;
        var randomX = this.random.Next(50, 60) * randomSign;

        randomSign = this.random.Next(0, 2) == 0 ? -1 : 1;
        var randomY = this.random.Next(50, 60) * randomSign;

        this.velocity = new Vector2(randomX, randomY);

        this.startingVel = 10;

        base.OnLoad();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        var deltaVelocity = this.velocity * (float)frameTime.ElapsedTime.TotalSeconds;
        this.prisoner.Position += deltaVelocity;

        ProcessMouse();
        ProcessCollision();

        this.line.P1 = this.prisoner.Position;
        this.line.P2 = this.prison.Position;

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnUpdate"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        this.batcher.Begin();

        this.shapeRenderer.Render(this.prison);
        this.lineRenderer.Render(this.line, 10);
        this.shapeRenderer.Render(this.prisoner, 20);

        this.batcher.End();

        base.OnDraw(frameTime);
    }

    protected override void OnUnload()
    {
        if (this.audio is not null)
        {
            this.contentManager.Unload(this.audio);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Process mouset input.
    /// </summary>
    private void ProcessMouse()
    {
        var currentMouseState = this.mouse.GetState();

        var mousePos = currentMouseState.GetPosition();

        this.prison.Position = new Vector2(mousePos.X, mousePos.Y);
    }

    /// <summary>
    /// Prociess collisions.
    /// </summary>
    private void ProcessCollision()
    {
        ArgumentNullException.ThrowIfNull(this.audio);

        var distance = Vector2.Distance(this.prison.Position, this.prisoner.Position);
        var boundary = this.prison.Radius - this.prisoner.Radius;

        if (distance < boundary)
        {
            return;
        }

        if (this.audio.IsPlaying)
        {
            this.audio.Stop();
        }

        this.audio.Play();

        // Swap colors between the prison wall and the line
        (this.prison.Color, this.line.Color) = (this.line.Color, this.prison.Color);

        var normal = Vector2.Normalize(this.prisoner.Position - this.prison.Position);

        // Reflect the velocity along the normal vector
        this.velocity = Vector2.Reflect(this.velocity, normal);

        // Add a small offset to the prisoner's position to ensure it's outside the boundary on the next frame update
        this.prisoner.Position = this.prison.Position + (normal * (this.prison.Radius - this.prisoner.Radius));

        var minVelocity = Math.Abs(Math.Min(this.velocity.X, this.velocity.Y));
        var maxVelocity = Math.Abs(Math.Max(this.velocity.X, this.velocity.Y));

        if (maxVelocity >= 2000)
        {
            this.shouldSpeedUpPrisonerVel = false;
        }
        else if (minVelocity <= this.startingVel)
        {
            this.shouldSpeedUpPrisonerVel = true;
        }

        const float velChangeAmount = 50f;

        if (this.shouldSpeedUpPrisonerVel)
        {
            this.velocity.X = this.velocity.X < 0 ? this.velocity.X - velChangeAmount : this.velocity.X + velChangeAmount;
            this.velocity.Y = this.velocity.Y < 0 ? this.velocity.Y - velChangeAmount : this.velocity.Y + velChangeAmount;
        }
        else
        {
            this.velocity.X = this.velocity.X < 0 ? this.velocity.X + velChangeAmount : this.velocity.X - velChangeAmount;
            this.velocity.Y = this.velocity.Y < 0 ? this.velocity.Y + velChangeAmount : this.velocity.Y - velChangeAmount;
        }
    }
}
