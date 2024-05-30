// <copyright file="IPath.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Numerics;
using Velaptor;

/// <summary>
/// Represents a path from one point to another.
/// </summary>
public interface IPath : IUpdatable
{
    /// <summary>
    /// Gets or sets the velocity of movement along the path.
    /// </summary>
    float Velocity { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether or not the path is looping.
    /// </summary>
    bool IsLooping { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether or not movement along the path is paused.
    /// </summary>
    bool IsPaused { get; set; }

    /// <summary>
    /// Gets a value indicating whether or not the path is complete.
    /// </summary>
    bool IsComplete { get; }

    /// <summary>
    /// Gets or sets the direction of movement along the path.
    /// </summary>
    /// <remarks>This is either from the start to stop or from stop to start.</remarks>
    Direction Direction { get; set; }

    /// <summary>
    /// Gets the current position along the path.
    /// </summary>
    Vector2 CurrentPosition { get; }
}
