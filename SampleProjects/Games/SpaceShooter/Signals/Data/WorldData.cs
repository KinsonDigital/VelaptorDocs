// <copyright file="WorldData.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Data;

using System.Drawing;

public readonly record struct WorldData
{
    public Rectangle WorldBounds { get; init; }
}
