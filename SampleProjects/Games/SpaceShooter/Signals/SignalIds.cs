// <copyright file="SignalIds.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

public class SignalIds
{
    public static Guid WorldDataUpdate => new ("b8a1b49d-49dd-4fed-b1ef-f37ba43702c3");

    public static Guid SwapWeapon => new ("67847941-2336-4bff-8dcf-1db7c7f07f73");

    public static Guid ShipUpdate => new ("bdcf8867-c664-46c6-a4f3-6ef91058a5f5");

    public static Guid ScoreUpdate = new ("ae8ff2ff-410d-4057-851f-1741cd9e9796");

    public static Guid EnemyUpdate = new ("24cb2b21-7f60-4c42-9770-cc07720fe57c");
}
