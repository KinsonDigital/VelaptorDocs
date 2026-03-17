// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace JumpingLogo;

using System.Drawing;
using Velaptor.Input;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private const float MaxVel = 350;
    private const float VelocityX = 50f;
    private readonly IBatcher batcher;
    private readonly ITextureRenderer textureRenderer;
    private readonly ILineRenderer lineRenderer;
    private readonly IContentManager contentManager;
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly Vector2 minVelocity = new (-MaxVel, -MaxVel);
    private readonly Vector2 maxVelocity = new (MaxVel, MaxVel);
    private ITexture? logo;
    private IAudio? jumpSound;
    private KeyboardState prevKeyState;
    private Vector2 position;
    private Vector2 velocity = new (0, 0);
    private float velocityY;
    private bool isGrounded = true;
    private int groundPosY;
    private bool leftKeyDown;
    private bool rightKeyDown;
    private RenderEffects facingDirection;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Jumping Logo";

        // Used for rendering textures in a batch.  This is required.
        this.batcher = RendererFactory.CreateBatcher();

        // Used for rendering textures.
        this.textureRenderer = RendererFactory.CreateTextureRenderer();

        // Used for rendering the ground
        this.lineRenderer = RendererFactory.CreateLineRenderer();

        // Used for loading textures.
        this.contentManager = ContentManager.Create();

        // Used for detecting keyboard input.
        this.keyboard = HardwareFactory.GetKeyboard();
    }

    /// <summary>
    /// Load content here.
    /// </summary>
    protected override void OnLoad()
    {
        this.groundPosY = (int)Height - ((int)Height / 4);

        // This loads the 'velaptor-logo' texture from the 'Content/Graphics' directory located in the project.
        this.logo = this.contentManager.Load<ITexture>("velaptor-logo");

        // Load the jump sound
        this.jumpSound = this.contentManager.LoadAudio("jump.mp3", AudioBuffer.Full);

        // Set the starting position of the logo to the center of the window.
        this.position = new Vector2(Width / 2f, this.groundPosY - (this.logo.Height / 2f));

        base.OnLoad();
    }

    /// <summary>
    /// Unload content here.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.logo is not null)
        {
            this.contentManager.Unload(this.logo);
        }

        if (this.jumpSound is not null)
        {
            this.contentManager.Unload(this.jumpSound);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Add game logic here.
    /// </summary>
    /// <param name="frameTime">The amount of time that passed for the current game loop frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        if (this.logo is null)
        {
            return;
        }

        var currentKeyState = this.keyboard.GetState();
        var dt = (float)frameTime.ElapsedTime.TotalSeconds;

        // Record the state of the arrow keys.
        this.leftKeyDown = currentKeyState.IsKeyDown(KeyCode.Left);
        this.rightKeyDown = currentKeyState.IsKeyDown(KeyCode.Right);

        if (currentKeyState.IsKeyDown(KeyCode.Left) && this.prevKeyState.IsKeyUp(KeyCode.Left))
        {
            this.facingDirection = RenderEffects.FlipHorizontally;
        }

        if (currentKeyState.IsKeyDown(KeyCode.Right) && this.prevKeyState.IsKeyUp(KeyCode.Right))
        {
            this.facingDirection = RenderEffects.None;
        }

        ProcessJump(currentKeyState, dt);
        ProcessMovement(currentKeyState, dt);
        ProcessScreenCollision();
        ProcessGroundCollision();

        // Save the current key state for the next frame.
        this.prevKeyState = currentKeyState;

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Processes the movement of mr. velaptor.
    /// </summary>
    /// <param name="currentKeyState">The current state of the keyboard.</param>
    /// <param name="dt">The delta time for the current frame compared to the previous frame.</param>
    private void ProcessMovement(KeyboardState currentKeyState, float dt)
    {
        // Check if movement is or is not happening.
        var isNotMovingHorizontally = currentKeyState.IsKeyUp(KeyCode.Right) && currentKeyState.IsKeyUp(KeyCode.Left);

        // Increase velocity in each direction based on which keys are pressed.
        this.velocity.X -= this.leftKeyDown ? VelocityX : 0;
        this.velocity.X += this.rightKeyDown ? VelocityX : 0;

        // Stop moving if the left or right key is no longer being pressed.
        this.velocity.X = isNotMovingHorizontally ? 0 : this.velocity.X;

        // Limit the maximum velocity in any direction.
        this.velocity = Vector2.Clamp(this.velocity, this.minVelocity, this.maxVelocity);

        // Move the logo using horizontal input velocity and vertical jump/gravity velocity.
        this.position += new Vector2(this.velocity.X * dt, this.velocityY * dt);
    }

    /// <summary>
    /// Render graphics here.
    /// </summary>
    /// <param name="frameTime">The amount of time that passed for the current game loop frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        if (this.logo is null)
        {
            throw new InvalidOperationException("The logo texture is not loaded.");
        }

        // This must be called first before rendering anything.
        this.batcher.Begin();

        // Render the logo texture in the center of the window.
        this.textureRenderer.Render(this.logo, this.position, this.facingDirection);

        // Render the ground
        this.lineRenderer.Render(new Line(new Vector2(0, this.groundPosY), new Vector2(Width, this.groundPosY), Color.White));

        // This must be called for the batch of render calls to be rendered.
        this.batcher.End();

        base.OnDraw(frameTime);
    }

    /// <summary>
    /// Process the jump.
    /// </summary>
    /// <param name="currentKeyState">The current state of the keyboard.</param>
    /// <param name="dt">The delta time for the current frame compared to the previous frame.</param>
    private void ProcessJump(KeyboardState currentKeyState, float dt)
    {
        // Jump
        if (currentKeyState.IsKeyDown(KeyCode.Space) && this.isGrounded)
        {
            this.velocityY = -500f;
            this.isGrounded = false;
            this.jumpSound?.Play();
        }

        this.velocityY += 980 * dt;
    }

    /// <summary>
    /// Process any screen collisions to prevent the logo from going off the screen.
    /// </summary>
    private void ProcessScreenCollision()
    {
        if (this.logo is null)
        {
            return;
        }

        // If past the left edge of the window
        if (this.position.X - (this.logo.Width / 2f) < 0)
        {
            this.position = new Vector2(this.logo.Width / 2f, this.position.Y);
        }

        // If past the right edge of the window
        if (this.position.X + (this.logo.Width / 2f) > Width)
        {
            this.position = new Vector2(Width - (this.logo.Width / 2f), this.position.Y);
        }
    }

    /// <summary>
    /// Process collisions with the ground. This prevents mr. velaptor from falling through the ground.
    /// </summary>
    private void ProcessGroundCollision()
    {
        if (this.logo is null)
        {
            return;
        }

        var feetPosY = this.position.Y + (this.logo.Height / 2f);

        // Clamp to ground after movement so the jump arc can happen above ground level.
        if (feetPosY >= this.groundPosY)
        {
            this.position = new Vector2(this.position.X, this.groundPosY - (this.logo.Height / 2f));
            this.velocityY = 0;
            this.isGrounded = true;
        }
    }
}
