// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using Signals;
using Signals.Data;
using UI;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Factories;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IBatcher batcher;
    private readonly IWorldSignal worldSignal;
    private readonly Ship ship;
    private readonly WeaponSelectionUI weaponSelectionUi;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Space Shooter";
        Width = Height;
        UpdateFrequency = 120;

        this.batcher = RendererFactory.CreateBatcher();
        this.ship = App.Factory.GetInstance<Ship>();
        this.worldSignal = App.Factory.GetInstance<IWorldSignal>();
        this.weaponSelectionUi = App.Factory.GetInstance<WeaponSelectionUI>();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.weaponSelectionUi.Position = new Vector2(Width - 300, 23);

        var worldBounds = new Rectangle(0, 0, (int)Width, (int)Height);
        this.worldSignal.Push(new WorldData { WorldBounds = worldBounds }, SignalIds.WorldDataUpdate);

        this.ship.LoadContent();
        this.weaponSelectionUi.LoadContent();

        base.OnLoad();
    }

    protected override void OnUnload()
    {
        this.ship.UnloadContent();
        this.weaponSelectionUi.UnloadContent();
        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        this.ship.Update(frameTime);
        this.weaponSelectionUi.Update(frameTime);

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

        this.ship.Render();
        this.weaponSelectionUi.Render();

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
