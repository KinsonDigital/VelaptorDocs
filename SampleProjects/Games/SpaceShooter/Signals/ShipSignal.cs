// <copyright file="ShipSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Data;

/// <inheritdoc cref="IShipSignal"/>
public class ShipSignal : PushReactable<ShipData>, IShipSignal
{
    // Nothing required here
}
