// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace Audio;

using Velaptor;
using Velaptor.Content;
using Velaptor.Factories;
using Velaptor.Input;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IContentManager contentManager;
    private readonly IAppInput<KeyboardState> keyboard;
    private IAudio? music;
    private KeyboardState prevKeyState;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Audio";
        Width = 1210;
        Height = 600;

        this.keyboard = HardwareFactory.GetKeyboard();
        this.contentManager = ContentManager.Create();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.music = this.contentManager.LoadAudio("deep-consistency", AudioBuffer.Full);

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.music is not null)
        {
            this.contentManager.Unload(this.music);
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
        var currKeyState = this.keyboard.GetState();

        bool IsPressed(KeyCode key)
        {
            return this.prevKeyState.IsKeyDown(key) && currKeyState.IsKeyUp(key);
        }

        if (IsPressed(KeyCode.Space))
        {
            if (this.music.IsPaused || this.music.IsStopped)
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
            this.music.Stop();
        }
        else if (IsPressed(KeyCode.Left))
        {
            this.music.Rewind(5);
        }
        else if (IsPressed(KeyCode.Right))
        {
            this.music.FastForward(5);
        }
        else if (IsPressed(KeyCode.Up))
        {
            this.music.Volume += 10;
        }
        else if (IsPressed(KeyCode.Down))
        {
            this.music.Volume -= 10;
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
        var state = string.Empty;

        if (this.music.IsStopped)
        {
            state = "Stopped";
        }
        else if (this.music.IsPlaying)
        {
            state = "Playing";
        }
        else if (this.music.IsPaused)
        {
            state = "Paused";
        }

        var minutes = this.music.Position.Minutes;
        var seconds = this.music.Position.Seconds;

        var minStr = minutes <= 9 ? $"0{minutes}" : minutes.ToString();
        var secStr = seconds <= 9 ? $"0{seconds}" : seconds.ToString();

        var playTime = $"{minStr}:{secStr}";
        var volume = $"Volume: {this.music.Volume}";
        const string instructions = "Instructions: Space(play/pause) Esc(restart) Left(-5s) - Right(+5s) - Up(+vol) - Down(-vol)";

        Title = $"{state} - {playTime} - {volume} | {instructions}";
    }
}
