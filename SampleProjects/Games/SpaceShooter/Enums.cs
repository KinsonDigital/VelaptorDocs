// <copyright file="Enums.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

/// <summary>
/// Represents the direction of movement.
/// </summary>
public enum Direction
{
    /// <summary>
    /// Movement is moving in the forward direction.
    /// </summary>
    Forward,

    /// <summary>
    /// Movement is moving in the reverse direction.
    /// </summary>
    Reverse,
}

/// <summary>
/// Represents different kinds of math operations.
/// </summary>
public enum MathOperations
{
    /// <summary>
    /// An add operation.
    /// </summary>
    Add,

    /// <summary>
    /// A subtract operation.
    /// </summary>
    Subtract,
}

/// <summary>
/// Represents the different kinds of enemy commands.
/// </summary>
public enum EnemyCommands
{
    /// <summary>
    /// Do nothing.
    /// </summary>
    Nothing,

    /// <summary>
    /// The enemy should die.
    /// </summary>
    Die,
}
