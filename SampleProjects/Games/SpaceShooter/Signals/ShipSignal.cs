// <copyright file="ShipSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Data;

public interface IShipSignal : IPushReactable<ShipData>
{
}

public class ShipSignal : PushReactable<ShipData>, IShipSignal
{
}
