// <copyright file="IShipSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Data;

/// <summary>
/// Represents a signal to send ship related data.
/// </summary>
public interface IShipSignal : IPushReactable<ShipData>
{
}
