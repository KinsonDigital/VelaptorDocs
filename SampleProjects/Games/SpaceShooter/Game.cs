// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using Signals;
using Signals.Data;
using Signals.Interfaces;
using UI;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Factories;
using Velaptor.UI;
using IAudio = Velaptor.Content.IAudio;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IBatcher batcher;
    private readonly IContentManager contentManager;
    private readonly IWorldSignal worldSignal;
    private readonly Ship ship;
    private readonly List<Enemy> enemies = new ();
    private readonly WeaponSelectionUi weaponSelectionUi;
    private readonly RandomNumGenerator random = new ();
    private readonly Background background;
    private readonly Score score;
    private IAudio? music;
    private double elapsedTime;
    private int spawnInterval;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Space Shooter";
        Width = Height;
        UpdateFrequency = 120;

        this.spawnInterval = this.random.Next(1000, 5000);

        this.batcher = RendererFactory.CreateBatcher();
        this.contentManager = ContentManager.Create();
        this.ship = App.Factory.GetInstance<Ship>();

        for (var i = 0; i < 10; i++)
        {
            var newEnemy = App.Factory.GetInstance<Enemy>();

            this.enemies.Add(newEnemy);
        }

        this.worldSignal = App.Factory.GetInstance<IWorldSignal>();
        var scoreSignal = App.Factory.GetInstance<IScoreSignal>();
        this.weaponSelectionUi = App.Factory.GetInstance<WeaponSelectionUi>();

        this.background = new Background(this.worldSignal);
        this.score = new Score(scoreSignal);
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.weaponSelectionUi.Position = new Vector2(Width - 300, 23);

        var worldBounds = new Rectangle(0, 0, (int)Width, (int)Height);
        this.worldSignal.Push(SignalIds.WorldDataUpdate, new WorldData { WorldBounds = worldBounds });

        this.background.LoadContent();
        this.score.LoadContent();

        this.ship.LoadContent();
        this.weaponSelectionUi.LoadContent();

        foreach (var enemy in this.enemies)
        {
            enemy.LoadContent();
        }

        this.music = this.contentManager.LoadAudio("music", AudioBuffer.Stream);

        this.music.IsLooping = true;

        base.OnLoad();
    }

    /// <summary>
    /// Unloads the content.
    /// </summary>
    protected override void OnUnload()
    {
        this.background.UnloadContent();
        this.score.UnloadContent();
        this.ship.UnloadContent();
        this.weaponSelectionUi.UnloadContent();

        if (this.music is not null)
        {
            this.contentManager.Unload(this.music);
        }

        foreach (var enemy in this.enemies)
        {
            enemy.UnloadContent();
        }

        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        ArgumentNullException.ThrowIfNull(this.music);

        this.elapsedTime += frameTime.ElapsedTime.TotalMilliseconds;

        if (this.elapsedTime >= this.spawnInterval)
        {
            SpawnNewEnemy();

            this.elapsedTime = 0;

            // Generate a new spawn internal
            this.spawnInterval = this.random.Next(500, 1000);
        }

        this.background.Update(frameTime);
        this.ship.Update(frameTime);

        foreach (var enemy in this.enemies)
        {
            enemy.Update(frameTime);
        }

        this.weaponSelectionUi.Update(frameTime);
        this.score.Update(frameTime);

        if (this.music.IsStopped)
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

        foreach (var enemy in this.enemies)
        {
            enemy.Render();
        }

        this.weaponSelectionUi.Render();
        this.score.Render();

        this.batcher.End();

        base.OnDraw(frameTime);
    }

    /// <summary>
    /// Spawns a new enemy.
    /// </summary>
    private void SpawnNewEnemy()
    {
        foreach (var t in this.enemies)
        {
            if (t.Visible)
            {
                continue;
            }

            t.Respawn();
            break;
        }
    }
}
