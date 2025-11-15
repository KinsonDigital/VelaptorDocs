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
using Signals.Interfaces;
using Velaptor;
using Velaptor.Content;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;

/// <summary>
/// The ship's weapon.
/// </summary>
public class Weapon : IUpdatable, IDrawable, IContentLoadable
{
    private readonly IPushReactable<WeaponType> swapWeaponSignal;
    private readonly ITextureRenderer textureRenderer;
    private readonly IContentManager contentManager;
    private readonly IScoreSignal scoreSignal;
    private readonly IDisposable worldSignalUnsubscriber;
    private readonly IDisposable shipSignalUnsubscriber;
    private readonly IDisposable enemySignalUnsubscriber;
    private readonly List<Bullet> bullets = new ();
    private readonly int[] weaponTypeValues;
    private IAudio? lazerSound;
    private IAudio? changeWeaponSound;
    private RectangleF worldBounds;
    private SizeF shipSize;
    private Vector2 shipPos;
    private IAtlasData? atlasData;
    private Rectangle srcRect;

    /// <summary>
    /// Initializes a new instance of the <see cref="Weapon"/> class.
    /// </summary>
    /// <param name="shipSignal">Provides notifications of the ships position.</param>
    /// <param name="swapWeaponSignal">Sends a signal that a weapon has been swapped.</param>
    /// <param name="worldDataSignal">Receives updates about the world.</param>
    /// <param name="enemyUpdateSignal">Receives updates about enemies.</param>
    /// <param name="scoreSignal">Updates the score.</param>
    public Weapon(
        IShipSignal shipSignal,
        ISwapWeaponSignal swapWeaponSignal,
        IWorldSignal worldDataSignal,
        IEnemyUpdateSignal enemyUpdateSignal,
        IScoreSignal scoreSignal)
    {
        this.swapWeaponSignal = swapWeaponSignal;

        var worldUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(
                worldData =>
                {
                    this.worldBounds = worldData.WorldBounds;
                    foreach (var bullet in this.bullets)
                    {
                        bullet.WorldBounds = worldData.WorldBounds;
                    }
                });
        this.worldSignalUnsubscriber = worldDataSignal.Subscribe(worldUpdateSubscription);

        var shipSignalSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.ShipUpdate)
            .BuildOneWayReceive<ShipData>(
                shipData =>
                {
                    this.shipPos = shipData.ShipPos;
                    this.shipSize = shipData.ShipSize;
                });
        this.shipSignalUnsubscriber = shipSignal.Subscribe(shipSignalSubscription);

        var enemyUpdateSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.EnemyUpdate)
            .BuildTwoWay<EnemyData, EnemyCommands>(ProcessEnemyCollisions);
        this.enemySignalUnsubscriber = enemyUpdateSignal.Subscribe(enemyUpdateSubscription);

        this.scoreSignal = scoreSignal;

        this.weaponTypeValues = Enum.GetValues(typeof(WeaponType)).Cast<int>().ToArray();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.contentManager = ContentManager.Create();
    }

    /// <summary>
    /// Gets the type of weapon currently equipped.
    /// </summary>
    public WeaponType TypeOfWeapon { get; private set; } = WeaponType.Orange;

    /// <summary>
    /// Gets a value indicating whether the content is loaded.
    /// </summary>
    public bool IsLoaded { get; private set; }

    /// <summary>
    /// Loads the weapon content.
    /// </summary>
    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        this.atlasData = this.contentManager.Load<IAtlasData>("atlas");
        this.srcRect = this.atlasData.GetFrames("laser")[0].Bounds;

        this.lazerSound = this.contentManager.LoadAudio("space-lazer-5", AudioBuffer.Full);
        this.changeWeaponSound = this.contentManager.LoadAudio("change-weapon", AudioBuffer.Full);

        IsLoaded = true;
    }

    /// <summary>
    /// Unloads the weapon content.
    /// </summary>
    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        this.worldSignalUnsubscriber.Dispose();
        this.shipSignalUnsubscriber.Dispose();
        this.enemySignalUnsubscriber.Dispose();

        if (this.atlasData is not null)
        {
            this.contentManager.Unload(this.atlasData);
        }

        if (this.lazerSound is not null)
        {
            this.contentManager.Unload(this.lazerSound);
        }

        if (this.changeWeaponSound is not null)
        {
            this.contentManager.Unload(this.changeWeaponSound);
        }
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
        ArgumentNullException.ThrowIfNull(this.atlasData);
        ArgumentNullException.ThrowIfNull(this.atlasData.Texture);

        // Render all the bullets
        foreach (var bullet in this.bullets)
        {
            if (bullet.IsVisible)
            {
                var bulletClr = bullet.FiredFromWeapon switch
                {
                    WeaponType.Orange => Color.Orange,
                    WeaponType.Red => Color.Red,
                    WeaponType.Green => Color.Green,
                    WeaponType.Blue => Color.Blue,
                    _ => throw new InvalidEnumArgumentException(nameof(TypeOfWeapon), (int)TypeOfWeapon, typeof(WeaponType)),
                };

                var destRect = new Rectangle(
                    (int)bullet.BulletBounds.Location.X,
                    (int)bullet.BulletBounds.Location.Y,
                    (int)this.atlasData.Texture.Width,
                    (int)this.atlasData.Texture.Height);

                this.textureRenderer.Render(
                    this.atlasData.Texture,
                    this.srcRect,
                    destRect,
                    1,
                    0,
                    bulletClr,
                    RenderEffects.None);
            }
        }
    }

    /// <summary>
    /// Fires the weapon.
    /// </summary>
    public void Fire()
    {
        var bulletExists = false;

        this.lazerSound?.Stop();
        this.lazerSound?.Play();

        for (var i = 0; i < this.bullets.Count; i++)
        {
            if (this.bullets[i].IsVisible)
            {
                continue;
            }

            bulletExists = true;

            this.bullets[i] = SetupBullet(this.bullets[i]);

            break;
        }

        if (bulletExists)
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
        this.swapWeaponSignal.Push(SignalIds.SwapWeapon, TypeOfWeapon);
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
        // Create a brand-new bullet object to add to the pool and return it
        var newBullet = new Bullet(new Vector2(this.srcRect.Width, this.srcRect.Height)) { WorldBounds = this.worldBounds, };

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
        var bulletHalfHeight = this.srcRect.Height / 2f;
        var bulletPosY = shipTop - bulletHalfHeight + bulletVerticalOffset;
        var bulletPos = this.shipPos with { Y = bulletPosY };

        bullet.BulletBounds = bullet.BulletBounds with
        {
            Location = bulletPos.ToPointF(),
        };
        bullet.FiredFromWeapon = TypeOfWeapon;

        return bullet;
    }

    /// <summary>
    /// Processes enemy collisions against the bullets.
    /// </summary>
    private EnemyCommands ProcessEnemyCollisions(EnemyData enemy)
    {
        foreach (var bullet in this.bullets)
        {
            if (!bullet.IsVisible)
            {
                continue;
            }

            if (!enemy.Bounds.IntersectsWith(bullet.BulletBounds))
            {
                continue;
            }

            bullet.IsVisible = false;

            // Update the score
            this.scoreSignal.Push(SignalIds.ScoreUpdate, new ScoreData { Amount = 1, ApplyMethod = MathOperations.Add });

            return EnemyCommands.Die;
        }

        return EnemyCommands.Nothing;
    }
}
