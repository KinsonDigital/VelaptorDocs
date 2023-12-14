// <copyright file="IPath.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Numerics;
using Velaptor;

public interface IPath : IUpdatable
{
    float Velocity { get; set; }

    bool IsLooping { get; set; }

    bool IsPaused { get; set; }

    bool IsComplete { get; }

    Direction Direction { get; set; }

    Vector2 CurrentPosition { get; }
}
