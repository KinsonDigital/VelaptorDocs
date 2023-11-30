// <copyright file="Weapon.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.ComponentModel;
using System.Drawing;
using System.Numerics;
using Carbonate.Fluent;
using Carbonate.OneWay;
using Signals;
using Signals.Data;
using Velaptor;
using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;

/// <summary>
/// The ship's weapon.
/// </summary>
public class Weapon : IUpdatable, IDrawable, IContentLoadable
{
    private readonly IPushReactable<WeaponType> swapWeaponSignal;
    private readonly ITextureRenderer renderer;
    private readonly ILoader<ITexture> textureLoader;
    private readonly ILoader<ISound> soundLoader;
    private readonly IDisposable unsubscriber;
    private readonly List<Bullet> bullets = new ();
    private readonly int[] weaponTypeValues;
    private ITexture? texture;
    private ISound? lazerSound;
    private ISound? changeWeaponSound;
    private Rectangle worldBounds;
    private SizeF shipSize;
    private Vector2 shipPos;
    private uint textureHeight;

    /// <summary>
    /// Initializes a new instance of the <see cref="Weapon"/> class.
    /// </summary>
    /// <param name="shipSignal">Provides notifications of the ships position.</param>
    /// <param name="swapWeaponSignal">Sends a signal that a weapon has been swapped.</param>
    /// <param name="worldDataSignal">Receives updates about the world.</param>
    public Weapon(
        IShipSignal shipSignal,
        ISwapWeaponSignal swapWeaponSignal,
        IWorldSignal worldDataSignal)
    {
        this.swapWeaponSignal = swapWeaponSignal;

        var worldUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(worldData => this.worldBounds = worldData.WorldBounds);

        this.unsubscriber = worldDataSignal.Subscribe(worldUpdateSubscription);

        this.weaponTypeValues = Enum.GetValues(typeof(WeaponType)).Cast<int>().ToArray();

        this.renderer = RendererFactory.CreateTextureRenderer();

        this.textureLoader = ContentLoaderFactory.CreateTextureLoader();
        this.soundLoader = ContentLoaderFactory.CreateSoundLoader();

        var shipSignalSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.ShipUpdate)
            .BuildOneWayReceive<ShipData>(shipData =>
            {
                this.shipPos = shipData.ShipPos;
                this.shipSize = shipData.ShipSize;
            });

        shipSignal.Subscribe(shipSignalSubscription);
    }

    public WeaponType TypeOfWeapon { get; private set; } = WeaponType.Orange;

    public bool IsLoaded { get; private set; }

    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        this.texture = this.textureLoader.Load("laser");
        this.textureHeight = this.texture.Height;

        this.lazerSound = this.soundLoader.Load("space-lazer-5");
        this.changeWeaponSound = this.soundLoader.Load("change-weapon");

        IsLoaded = true;
    }

    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        this.unsubscriber.Dispose();
        this.textureLoader.Unload(this.texture);
        this.soundLoader.Unload(this.lazerSound);
        this.soundLoader.Unload(this.changeWeaponSound);
    }

    /// <summary>
    /// Updates the bullets of the weapon.
    /// </summary>
    /// <param name="frameTime">The total amount of time for the current frame.</param>
    public void Update(FrameTime frameTime)
    {
        foreach (var bullet in this.bullets)
        {
            bullet.Update(frameTime);
        }
    }

    /// <summary>
    /// Renders the bullets of the weapon.
    /// </summary>
    public void Render()
    {
        // Render all of the bullets
        foreach (var bullet in this.bullets)
        {
            if (bullet.IsVisible && this.texture is not null)
            {
                var bulletClr = bullet.FiredFromWeapon switch
                {
                    WeaponType.Orange => Color.Orange,
                    WeaponType.Red => Color.Red,
                    WeaponType.Green => Color.Green,
                    WeaponType.Blue => Color.Blue,
                    _ => throw new InvalidEnumArgumentException(nameof(TypeOfWeapon), (int)TypeOfWeapon, typeof(WeaponType)),
                };

                this.renderer.Render(this.texture, (int)bullet.Position.X, (int)bullet.Position.Y, bulletClr);
            }
        }
    }

    /// <summary>
    /// Fires the weapon.
    /// </summary>
    public void Fire()
    {
        var noBulletExists = true;

        this.lazerSound?.Stop();
        this.lazerSound?.Play();

        for (var i = 0; i < this.bullets.Count; i++)
        {
            if (this.bullets[i].IsVisible)
            {
                continue;
            }

            noBulletExists = false;

            this.bullets[i] = SetupBullet(this.bullets[i]);

            break;
        }

        if (!noBulletExists)
        {
            return;
        }

        var bullet = CreateBullet();

        bullet = SetupBullet(bullet);
        this.bullets.Add(bullet);
    }

    /// <summary>
    /// Swaps to the next weapon.
    /// </summary>
    public void SwapWeapon()
    {
        if ((int)TypeOfWeapon >= this.weaponTypeValues.Max())
        {
            TypeOfWeapon = (WeaponType)this.weaponTypeValues.Min();
        }
        else
        {
            TypeOfWeapon += 1;
        }

        // Send a notification to the UI that the weapon has been swapped
        this.swapWeaponSignal.Push(TypeOfWeapon, SignalIds.SwapWeapon);
        this.changeWeaponSound?.Stop();
        this.changeWeaponSound?.Play();
    }

    /// <summary>
    /// Creates a new bullet.
    /// </summary>
    /// <returns>The new bullet.</returns>
    private Bullet CreateBullet()
    {
        // Check the object pool to see if any bullets are available
        foreach (var bullet in this.bullets)
        {
            // If the bullet is hidden, it is not being used.
            // Return the bullet to put it to use
            if (!bullet.IsVisible)
            {
                return bullet;
            }
        }

        // If this point is reached, then no bullets are available in the pool
        // Create a brand new bullet object to add to the pool and return it
        var newBullet = new Bullet(
            new Rectangle(0, 0, this.worldBounds.Width, this.worldBounds.Height),
            new Vector2(this.texture.Width, this.texture.Height));

        this.bullets.Add(newBullet);

        return newBullet;
    }

    /// <summary>
    /// Sets up the given <paramref name="bullet"/> before it is fired from the weapon.
    /// </summary>
    /// <param name="bullet">The bullet to setup.</param>
    /// <returns>The ready to fire bullet.</returns>
    private Bullet SetupBullet(Bullet bullet)
    {
        bullet.IsVisible = true;

        const int bulletVerticalOffset = 15;
        var shipHalfHeight = this.shipSize.Width / 2f;
        var shipTop = this.shipPos.Y - shipHalfHeight;
        var bulletHalfHeight = this.textureHeight / 2f;
        var bulletPosY = shipTop - bulletHalfHeight + bulletVerticalOffset;

        bullet.Position = this.shipPos with { Y = bulletPosY };
        bullet.FiredFromWeapon = TypeOfWeapon;

        return bullet;
    }
}
