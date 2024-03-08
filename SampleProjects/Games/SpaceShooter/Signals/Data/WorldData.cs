// <copyright file="WorldData.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Data;

using System.Drawing;

/// <summary>
/// Holds data about the world.
/// </summary>
public readonly record struct WorldData
{
    /// <summary>
    /// Gets the bounds of the world.
    /// </summary>
    public Rectangle WorldBounds { get; init; }
}
