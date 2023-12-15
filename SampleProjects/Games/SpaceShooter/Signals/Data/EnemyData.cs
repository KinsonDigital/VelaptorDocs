// <copyright file="EnemyData.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Data;

using System.Drawing;

/// <summary>
/// Holds data about an enemy.
/// </summary>
public readonly record struct EnemyData
{
    /// <summary>
    /// Gets the bounds of the enemy.
    /// </summary>
    public RectangleF Bounds { get; init; }
}
