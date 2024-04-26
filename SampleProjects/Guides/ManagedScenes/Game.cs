// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace ManagedScenes;

using Velaptor;
using Velaptor.Factories;
using Velaptor.Input;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IAppInput<KeyboardState> keyboard;
    private KeyboardState prevKeyState;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Managed Scenes";
        Width = 1000;
        Height = 1000;

        this.keyboard = HardwareFactory.GetKeyboard();

        var sceneA = new SceneA { Name = "Scene A", };
        var sceneB = new SceneB { Name = "Scene B", };

        SceneManager.AddScene(sceneA, setToActive: true);
        SceneManager.AddScene(sceneB);
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        var currentKeyState = this.keyboard.GetState();

        // If the right arrow key has been pressed
        if (currentKeyState.IsKeyDown(KeyCode.Right) && this.prevKeyState.IsKeyUp(KeyCode.Right))
        {
            SceneManager.NextScene();
        }
        else if (currentKeyState.IsKeyDown(KeyCode.Left) && this.prevKeyState.IsKeyUp(KeyCode.Left))
        {
            SceneManager.PreviousScene();
        }

        this.prevKeyState = currentKeyState;
        base.OnUpdate(frameTime);
    }
}
