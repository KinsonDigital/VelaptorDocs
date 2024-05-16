// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace Lines;

using Velaptor;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Render Lines Guide";
        Width = 1500;
        Height = 1000;
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnDraw"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        base.OnDraw(frameTime);
    }
}
