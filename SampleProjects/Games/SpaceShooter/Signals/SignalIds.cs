// <copyright file="SignalIds.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

/// <summary>
/// Various unique notification signal ids.
/// </summary>
public class SignalIds
{
    /// <summary>
    /// Gets a unique id to represent the sending of notifications with world data.
    /// </summary>
    public static Guid WorldDataUpdate => new ("b8a1b49d-49dd-4fed-b1ef-f37ba43702c3");

    /// <summary>
    /// Gets a unique id to represent the sending of notifications to swap weapons.
    /// </summary>
    public static Guid SwapWeapon => new ("67847941-2336-4bff-8dcf-1db7c7f07f73");

    /// <summary>
    /// Gets a unique id to represent the sending of notifications to update the ship.
    /// </summary>
    public static Guid ShipUpdate => new ("bdcf8867-c664-46c6-a4f3-6ef91058a5f5");
}
