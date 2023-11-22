// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace Sounds;

using CASL;
using Velaptor;
using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Input;
using Velaptor.UI;
using ISound = Velaptor.Content.ISound;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly ILoader<ISound> soundLoader;
    private readonly IAppInput<KeyboardState> keyboard;
    private ISound? music;
    private KeyboardState prevKeyState;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Sounds";
        Width = 900;
        Height = 600;

        this.keyboard = HardwareFactory.GetKeyboard();
        this.soundLoader = ContentLoaderFactory.CreateSoundLoader();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.music = this.soundLoader.Load("deep-consistency");

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        this.soundLoader.Unload(this.music);
        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        var currKeyState = this.keyboard.GetState();

        bool IsPressed(KeyCode key)
        {
            return this.prevKeyState.IsKeyDown(key) && currKeyState.IsKeyUp(key);
        }

        if (IsPressed(KeyCode.Space))
        {
            if (this.music.State is SoundState.Paused or SoundState.Stopped)
            {
                this.music.Play();
            }
            else
            {
                this.music.Pause();
            }
        }
        else if (IsPressed(KeyCode.Escape))
        {
            this.music.Reset();
        }
        else if (IsPressed(KeyCode.Left))
        {
            this.music.Rewind(5);
        }
        else if (IsPressed(KeyCode.Right))
        {
            this.music.FastForward(5);
        }

        this.prevKeyState = currKeyState;

        UpdateTitle();

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Updates the window title.
    /// </summary>
    private void UpdateTitle()
    {
        string state;

        if (this.music.State == SoundState.Stopped)
        {
            state = "Stopped";
        }
        else
        {
            state = this.music.State == SoundState.Playing ? "Playing" : "Paused";
        }

        var minutes = (int)this.music.Position.Minutes;
        var seconds = (int)this.music.Position.Seconds;

        var minStr = minutes <= 9 ? $"0{minutes}" : minutes.ToString();
        var secStr = seconds <= 9 ? $"0{seconds}" : seconds.ToString();

        var playTime = $"{minStr}:{secStr}";
        const string instructions = "Instructions: Space(play/pause) Esc(restart) Left(-5s) - Right(+5s)";

        Title = $"{state} - {playTime} | {instructions}";
    }
}
