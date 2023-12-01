// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using CASL;
using Signals;
using Signals.Data;
using UI;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.UI;
using ISound = Velaptor.Content.ISound;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IBatcher batcher;
    private readonly ILoader<ISound> soundLoader;
    private readonly IWorldSignal worldSignal;
    private readonly Ship ship;
    private readonly Enemy enemy;
    private readonly WeaponSelectionUI weaponSelectionUi;
    private ISound music;
    private Background background;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Space Shooter";
        Width = Height;
        UpdateFrequency = 120;

        this.batcher = RendererFactory.CreateBatcher();
        this.soundLoader = ContentLoaderFactory.CreateSoundLoader();
        this.ship = App.Factory.GetInstance<Ship>();
        this.enemy = App.Factory.GetInstance<Enemy>();

        this.worldSignal = App.Factory.GetInstance<IWorldSignal>();
        this.weaponSelectionUi = App.Factory.GetInstance<WeaponSelectionUI>();

        this.background = new Background(this.worldSignal);
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.weaponSelectionUi.Position = new Vector2(Width - 300, 23);

        var worldBounds = new Rectangle(0, 0, (int)Width, (int)Height);
        this.worldSignal.Push(new WorldData { WorldBounds = worldBounds }, SignalIds.WorldDataUpdate);

        this.background.LoadContent();

        this.ship.LoadContent();
        this.weaponSelectionUi.LoadContent();

        this.enemy.LoadContent();

        this.music = this.soundLoader.Load("music");

        this.music.IsLooping = true;

        base.OnLoad();
    }

    /// <summary>
    /// Unloads the content.
    /// </summary>
    protected override void OnUnload()
    {
        this.background.UnloadContent();

        this.ship.UnloadContent();
        this.weaponSelectionUi.UnloadContent();

        this.enemy.UnloadContent();

        this.soundLoader.Unload(this.music);

        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        this.background.Update(frameTime);
        this.ship.Update(frameTime);
        this.enemy.Update(frameTime);
        this.weaponSelectionUi.Update(frameTime);

        if (this.music.State != SoundState.Playing)
        {
            this.music.Play();
        }

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

        this.background.Render();
        this.ship.Render();
        this.enemy.Render();

        this.weaponSelectionUi.Render();

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
