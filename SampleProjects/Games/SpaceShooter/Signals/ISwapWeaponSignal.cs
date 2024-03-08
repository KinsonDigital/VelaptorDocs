// <copyright file="ISwapWeaponSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;

/// <summary>
/// Represents a signal to swap a weapon.
/// </summary>
public interface ISwapWeaponSignal : IPushReactable<WeaponType>
{
    // Nothing required here
}
