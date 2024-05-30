// <copyright file="Star.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;

/// <summary>
/// Represents a star in the background.
/// </summary>
public readonly record struct Star
{
    /// <summary>
    /// Gets the color.
    /// </summary>
    public Color Color { get; init; }

    /// <summary>
    /// Gets the X coordinate.
    /// </summary>
    public float X { get; init; }

    /// <summary>
    /// Gets the Y coordinate.
    /// </summary>
    public float Y { get; init; }

    /// <summary>
    /// Gets the size.
    /// </summary>
    public float Size { get; init; }

    /// <summary>
    /// Gets the speed of the star.
    /// </summary>
    public float Speed { get; init; }

    /// <summary>
    /// Gets a value indicating whether the star is alive.
    /// </summary>
    public bool IsAlive { get; init; }
}
