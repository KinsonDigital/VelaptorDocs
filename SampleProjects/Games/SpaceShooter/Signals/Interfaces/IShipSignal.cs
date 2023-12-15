// <copyright file="IShipSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Interfaces;

using Carbonate.OneWay;
using Data;

/// <summary>
/// Sends a notification about the ship.
/// </summary>
public interface IShipSignal : IPushReactable<ShipData>
{
}
