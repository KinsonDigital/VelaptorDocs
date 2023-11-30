// <copyright file="Ship.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using Carbonate.Fluent;
using Signals;
using Signals.Data;
using Velaptor;
using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.Input;

/// <summary>
/// The player ship.
/// </summary>
public class Ship : IUpdatable, IDrawable, IContentLoadable
{
    private const float VelocityX = 50;
    private const float VelocityY = 50;
    private const float MaxVel = 350;
    private readonly ITextureRenderer renderer;
    private readonly ILoader<ITexture> contentLoader;
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly Vector2 minVelocity = new (-MaxVel, -MaxVel);
    private readonly Vector2 maxVelocity = new (MaxVel, MaxVel);
    private readonly IShipSignal shipSignal;
    private readonly Weapon weapon;
    private ITexture? texture;
    private Rectangle worldBounds;
    private KeyboardState currentKeyState;
    private KeyboardState prevKeyState;
    private Vector2 shipPos;
    private Vector2 velocity;
    private float halfWidth;
    private float halfHeight;
    private bool leftKeyDown;
    private bool rightKeyDown;
    private bool upKeyDown;
    private bool downKeyDown;
    private bool isNotMovingHorizontally;
    private bool isNotMovingVertically;

    /// <summary>
    /// Initializes a new instance of the <see cref="Ship"/> class.
    /// </summary>
    /// <param name="worldSignal">Receives updates about the world.</param>
    public Ship(
        IWorldSignal worldSignal,
        IShipSignal shipSignal,
        Weapon weapon)
    {
        var worldUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(worldData => this.worldBounds = worldData.WorldBounds);

        worldSignal.Subscribe(worldUpdateSubscription);

        this.shipSignal = shipSignal;

        this.renderer = RendererFactory.CreateTextureRenderer();
        this.contentLoader = ContentLoaderFactory.CreateTextureLoader();

        this.keyboard = HardwareFactory.GetKeyboard();

        this.weapon = weapon;
    }

    public bool IsLoaded { get; }

    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        this.texture = this.contentLoader.Load("ghost-ship");
        this.halfWidth = this.texture.Width / 2f;
        this.halfHeight = this.texture.Height / 2f;

        this.weapon.LoadContent();

        var shipSize = new SizeF(this.texture.Width, this.texture.Height);

        // Set the starting position of the ship to the center of the world
        this.shipPos = new Vector2(this.worldBounds.Width / 2f, this.worldBounds.Height - (this.worldBounds.Height / 4f));

        // Send a signal of the ship data
        this.shipSignal.Push(new ShipData { ShipPos = this.shipPos, ShipSize = shipSize }, SignalIds.ShipUpdate);
    }

    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        this.contentLoader.Unload(this.texture);
        this.weapon.UnloadContent();
    }

    /// <summary>
    /// Updates the ship.
    /// </summary>
    /// <param name="frameTime">The total amount of time for the current frame.</param>
    public void Update(FrameTime frameTime)
    {
        this.currentKeyState = this.keyboard.GetState();

        UpdateKeyStates();
        MoveShip(frameTime);

        var shouldSwapWeapon = this.prevKeyState.IsKeyDown(KeyCode.S) &&
                               this.currentKeyState.IsKeyUp(KeyCode.S);

        var shouldFireWeapon = this.prevKeyState.IsKeyDown(KeyCode.Space) &&
                                  this.currentKeyState.IsKeyUp(KeyCode.Space);

        if (shouldSwapWeapon)
        {
            this.weapon.SwapWeapon();
        }

        if (shouldFireWeapon)
        {
            this.weapon.Fire();
        }

        this.weapon.Update(frameTime);

        this.prevKeyState = this.currentKeyState;
    }

    /// <summary>
    /// Renders the ship.
    /// </summary>
    public void Render()
    {
        ArgumentNullException.ThrowIfNull(this.texture);

        this.weapon.Render();

        // Render the ship image in the center of the window
        this.renderer.Render(this.texture, (int)this.shipPos.X, (int)this.shipPos.Y);
    }

    /// <summary>
    /// Moves the ship based on keyboard input.
    /// </summary>
    /// <param name="frameTime">The total amount of time for the current frame.</param>
    private void MoveShip(FrameTime frameTime)
    {
        // Increase velocity in each direction of commanded
        this.velocity.X -= this.leftKeyDown ? VelocityX : 0;
        this.velocity.X += this.rightKeyDown ? VelocityX : 0;
        this.velocity.Y -= this.upKeyDown ? VelocityY : 0;
        this.velocity.Y += this.downKeyDown ? VelocityY : 0;

        // Stop moving the ship if the left or right key is no longer being pressed
        this.velocity.X = this.isNotMovingHorizontally ? 0 : this.velocity.X;

        // Stop moving the ship if the up or down key is no longer being pressed
        this.velocity.Y = this.isNotMovingVertically ? 0 : this.velocity.Y;

        // Limit the maximum velocity of the ship in any direction
        this.velocity = Vector2.Clamp(this.velocity, this.minVelocity, this.maxVelocity);

        // Calculate the movement distance for this frame
        var displacement = this.velocity * (float)frameTime.ElapsedTime.TotalSeconds;

        // Apply the movement distance to the ship's position
        this.shipPos += displacement;

        // Check if the ship is past the left side of the world
        this.shipPos.X = this.shipPos.X - this.halfWidth < 0
            ? this.halfWidth
            : this.shipPos.X;

        // Check if the ship is past the right side of the world
        this.shipPos.X = this.shipPos.X > this.worldBounds.Right - this.halfWidth
            ? this.worldBounds.Right - this.halfWidth
            : this.shipPos.X;

        // Check if the ship is past the top of the world
        this.shipPos.Y = this.shipPos.Y - this.halfHeight < 0
            ? this.halfHeight
            : this.shipPos.Y;

        // Check if the ship is past the bottom of the world
        this.shipPos.Y = this.shipPos.Y > this.worldBounds.Bottom - this.halfHeight
            ? this.worldBounds.Bottom - this.halfHeight
            : this.shipPos.Y;

        var shipSize = new SizeF(this.texture.Width, this.texture.Height);

        // Update the position of the ship to the weapon for bullet positioning
        this.shipSignal.Push(new ShipData { ShipPos = this.shipPos, ShipSize = shipSize }, SignalIds.ShipUpdate);
    }

    /// <summary>
    /// Updates the state of the keys.
    /// </summary>
    private void UpdateKeyStates()
    {
        this.leftKeyDown = this.currentKeyState.IsKeyDown(KeyCode.Left);
        this.rightKeyDown = this.currentKeyState.IsKeyDown(KeyCode.Right);
        this.upKeyDown = this.currentKeyState.IsKeyDown(KeyCode.Up);
        this.downKeyDown = this.currentKeyState.IsKeyDown(KeyCode.Down);
        this.isNotMovingHorizontally = this.currentKeyState.IsKeyUp(KeyCode.Right) && this.currentKeyState.IsKeyUp(KeyCode.Left);
        this.isNotMovingVertically = this.currentKeyState.IsKeyUp(KeyCode.Up) && this.currentKeyState.IsKeyUp(KeyCode.Down);
    }
}
