// <copyright file="ShipSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Data;
using Interfaces;

/// <inheritdoc cref="IShipSignal"/>
public sealed class ShipSignal : PushReactable<ShipData>, IShipSignal
{
}
