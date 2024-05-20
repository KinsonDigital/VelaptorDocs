// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace KeyboardInput;

using System.Numerics;
using Velaptor;
using Velaptor.Factories;
using Velaptor.Input;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private const float VelocityXAndY = 300f;
    private readonly IAppInput<KeyboardState> keyboard;
    private KeyboardState currKeyState;
    private KeyboardState prevKeyState;
    private Vector2 velocity = Vector2.Zero;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game() => this.keyboard = HardwareFactory.GetKeyboard();

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        this.currKeyState = this.keyboard.GetState();

        // If the left or right control key is pressed, move the window.
        if (this.currKeyState.AnyCtrlKeysDown())
        {
            MoveWindow(frameTime);
        }
        else
        {
            // Change the window size.
            ChangeWinSize();
        }

        this.velocity = Vector2.Zero;

        this.prevKeyState = this.currKeyState;
        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Invoked when the window is resized.  This includes minimizing, maximizing, and restoring the window.
    /// </summary>
    /// <param name="size">The new size the window.</param>
    protected override void OnResize(SizeU size)
    {
        Title = $"Window Size: W: {Width} H: {Height} | Window Position: X: {Position.X} Y: {Position.Y}";
        base.OnResize(size);
    }

    /// <summary>
    /// Moves the window using the arrow keys.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    private void MoveWindow(FrameTime frameTime)
    {
        if (this.currKeyState.IsKeyDown(KeyCode.Right))
        {
            this.velocity.X = VelocityXAndY;
        }

        if (this.currKeyState.IsKeyDown(KeyCode.Left))
        {
            this.velocity.X = -VelocityXAndY;
        }

        if (this.currKeyState.IsKeyDown(KeyCode.Up))
        {
            this.velocity.Y = -VelocityXAndY;
        }

        if (this.currKeyState.IsKeyDown(KeyCode.Down))
        {
            this.velocity.Y = VelocityXAndY;
        }

        var displacement = this.velocity * (float)frameTime.ElapsedTime.TotalSeconds;

        Position += displacement;
    }

    /// <summary>
    /// Changes the size of the window using the arrow keys.
    /// </summary>
    private void ChangeWinSize()
    {
        if (IsPressed(KeyCode.Right))
        {
            Width += 50;
        }

        if (IsPressed(KeyCode.Left))
        {
            Width -= 50;
        }

        if (IsPressed(KeyCode.Up))
        {
            Height -= 50;
        }

        if (IsPressed(KeyCode.Down))
        {
            Height += 50;
        }
    }

    /// <summary>
    /// Returns a value indicating whether or not the given <paramref name="key"/> is pressed.
    /// </summary>
    /// <param name="key">The key to check for.</param>
    /// <returns>True if the given <paramref name="key"/> has been pressed.</returns>
    private bool IsPressed(KeyCode key) => this.currKeyState.IsKeyUp(key) &&
                                           this.prevKeyState.IsKeyDown(key);
}
