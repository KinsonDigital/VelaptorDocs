// <copyright file="Star.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;

public readonly record struct Star
{
    public Color Color { get; init; }

    public float X { get; init; }

    public float Y { get; init; }

    public float Size { get; init; }

    public float Speed { get; init; }

    public bool IsAlive { get; init; }
}
