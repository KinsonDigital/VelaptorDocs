// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace UnmanagedScenes;

using Velaptor;
using Velaptor.Batching;
using Velaptor.Factories;
using Velaptor.Input;
using Velaptor.Scene;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly IBatcher batcher;
    private readonly List<SceneBase> scenes = [];
    private int sceneIndex;
    private KeyboardState prevKeyState;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Unmanaged Scenes";
        Width = 1000;
        Height = 1000;

        this.keyboard = HardwareFactory.GetKeyboard();
        this.batcher = RendererFactory.CreateBatcher();

        var scene1 = new SceneA { Name = "Scene A", };
        var scene2 = new SceneB { Name = "Scene B", };

        this.scenes.Add(scene1);
        this.scenes.Add(scene2);
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        foreach (var scene in this.scenes)
        {
            scene.LoadContent();
        }

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        foreach (var scene in this.scenes)
        {
            scene.UnloadContent();
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
        var currentKeyState = this.keyboard.GetState();

        if (currentKeyState.IsKeyDown(KeyCode.Right) && this.prevKeyState.IsKeyUp(KeyCode.Right))
        {
            this.sceneIndex++;

            if (this.sceneIndex >= this.scenes.Count)
            {
                this.sceneIndex = 0;
            }
        }

        if (currentKeyState.IsKeyDown(KeyCode.Left) && this.prevKeyState.IsKeyUp(KeyCode.Left))
        {
            this.sceneIndex--;

            if (this.sceneIndex < 0)
            {
                this.sceneIndex = this.scenes.Count - 1;
            }
        }

        this.prevKeyState = currentKeyState;

        this.scenes[this.sceneIndex].Update(frameTime);

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

        this.scenes[this.sceneIndex].Render();

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
