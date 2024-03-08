// <copyright file="Bullet.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using Velaptor;

/// <summary>
/// A bullet that is fired from a <see cref="Weapon"/>.
/// </summary>
public class Bullet
{
    private const float VelocityY = -400;
    private readonly Rectangle worldBounds;
    private readonly Vector2 bulletSize;

    /// <summary>
    /// Initializes a new instance of the <see cref="Bullet"/> class.
    /// </summary>
    /// <param name="worldBounds">The world bounds.</param>
    /// <param name="bulletSize">The size of the bullet.</param>
    public Bullet(Rectangle worldBounds, Vector2 bulletSize)
    {
        this.worldBounds = worldBounds;
        this.bulletSize = bulletSize;
    }

    /// <summary>
    /// Gets or sets the world position of the bullet.
    /// </summary>
    public Vector2 Position { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether or not the bullet is visible.
    /// </summary>
    public bool IsVisible { get; set; }

    /// <summary>
    /// Gets or sets the type of weapon that the bullet was fired from.
    /// </summary>
    public WeaponType FiredFromWeapon { get; set; }

    /// <summary>
    /// Updates the bullet.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    public void Update(FrameTime frameTime)
    {
        // If the bullet is not visible, do not update it
        if (!IsVisible)
        {
            return;
        }

        var velocity = new Vector2(0, VelocityY);
        var displacement = velocity * (float)frameTime.ElapsedTime.TotalSeconds;

        Position += displacement;

        var bulletBounds = new Rectangle(
            (int)Position.X,
            (int)Position.Y,
            (int)this.bulletSize.X,
            (int)this.bulletSize.Y);

        if (!this.worldBounds.Contains(bulletBounds))
        {
            IsVisible = false;
        }
    }
}
