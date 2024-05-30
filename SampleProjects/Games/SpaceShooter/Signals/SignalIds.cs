// <copyright file="SignalIds.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

/// <summary>
/// Various identifiers for signals.
/// </summary>
public static class SignalIds
{
    /// <summary>
    /// Gets the ID for the signal for world data updates.
    /// </summary>
    public static Guid WorldDataUpdate => new ("b8a1b49d-49dd-4fed-b1ef-f37ba43702c3");

    /// <summary>
    /// Gets the ID for the signal for swapping a weapon.
    /// </summary>
    public static Guid SwapWeapon => new ("67847941-2336-4bff-8dcf-1db7c7f07f73");

    /// <summary>
    /// Gets the ID for the signal for updating the ship.
    /// </summary>
    public static Guid ShipUpdate => new ("bdcf8867-c664-46c6-a4f3-6ef91058a5f5");

    /// <summary>
    /// Gets the ID for the signal for updating the score.
    /// </summary>
    public static Guid ScoreUpdate => new ("ae8ff2ff-410d-4057-851f-1741cd9e9796");

    /// <summary>
    /// Gets the ID for the signal for updating the enemy.
    /// </summary>
    public static Guid EnemyUpdate => new ("24cb2b21-7f60-4c42-9770-cc07720fe57c");
}
