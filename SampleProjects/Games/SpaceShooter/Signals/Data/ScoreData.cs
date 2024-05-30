// <copyright file="ScoreData.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Data;

/// <summary>
/// Holds data about updating the score.
/// </summary>
public readonly record struct ScoreData
{
    /// <summary>
    /// Gets amount to apply to the score.
    /// </summary>
    public int Amount { get; init; }

    /// <summary>
    /// Gets the type of math operation to apply to the score.
    /// </summary>
    public MathOperations ApplyMethod { get; init; }
}
