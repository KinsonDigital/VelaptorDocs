// <copyright file="IFireWeaponSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Interfaces;

using Carbonate.NonDirectional;

/// <summary>
/// Sends a notification to fire a weapon.
/// </summary>
public interface IFireWeaponSignal : IPushReactable
{
}
