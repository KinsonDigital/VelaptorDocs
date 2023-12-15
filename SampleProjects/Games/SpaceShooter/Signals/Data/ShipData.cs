// <copyright file="ShipData.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Data;

using System.Drawing;
using System.Numerics;

/// <summary>
/// Holds data about a ship.
/// </summary>
public readonly record struct ShipData
{
    /// <summary>
    /// Gets the position of the ship.
    /// </summary>
    public Vector2 ShipPos { get; init; }

    /// <summary>
    /// Gets the size of the ship.
    /// </summary>
    public SizeF ShipSize { get; init; }
}
