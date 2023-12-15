// <copyright file="ISwapWeaponSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Interfaces;

using Carbonate.OneWay;

/// <summary>
/// Sends a notification to swap a weapon.
/// </summary>
public interface ISwapWeaponSignal : IPushReactable<WeaponType>
{
}
