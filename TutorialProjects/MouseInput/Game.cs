// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace MouseInput;

using Velaptor;
using Velaptor.Factories;
using Velaptor.Input;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private const int HeightChangeAmount = 50;
    private readonly IAppInput<MouseState> mouse;
    private MouseState prevMouseState;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game() => this.mouse = HardwareFactory.GetMouse();

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        var currMouseState = this.mouse.GetState();

        // If the left mouse button is currently being held in the down position
        if (currMouseState.GetButtonState(MouseButton.LeftButton))
        {
            // The position of the mouse for the current frame
            var currMousePos = currMouseState.GetPosition();

            // The position of the mouse in the previous frame
            var prevMousePos = this.prevMouseState.GetPosition();

            // Add the mouse movement amount to the current width of the window
            Width += (uint)(currMousePos.X - prevMousePos.X);
        }

        // Get the current value of the mouse scroll wheel
        var wheelValue = currMouseState.GetScrollWheelValue();

        // If the mouse wheel was not scrolled, exit the method
        if (wheelValue != 0)
        {
            // Check if the mouse wheel was scrolled down or up.
            // If the value is negative, the mouse wheel has been scrolled in the down direction.
            var scrolledDown = wheelValue < 0;

            // Change the height of the window based on the direction the mouse wheel was scrolled.
            Height = scrolledDown
                ? Height - HeightChangeAmount
                : Height + HeightChangeAmount;
        }

        this.prevMouseState = currMouseState;

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Invoked when the window is resized.  This includes minimizing, maximizing, and restoring the window.
    /// </summary>
    /// <param name="size">The new size the window.</param>
    protected override void OnResize(SizeU size)
    {
        Title = $"Window Size: W: {Width} H: {Height}";
        base.OnResize(size);
    }
}
