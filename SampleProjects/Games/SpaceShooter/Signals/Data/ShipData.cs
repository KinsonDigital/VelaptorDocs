// <copyright file="ShipData.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Data;

using System.Drawing;
using System.Numerics;

public readonly record struct ShipData
{
    public Vector2 ShipPos { get; init; }

    public SizeF ShipSize { get; init; }
}
