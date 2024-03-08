// <copyright file="SwapWeaponSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;

/// <inheritdoc cref="ISwapWeaponSignal"/>
public class SwapWeaponSignal : PushReactable<WeaponType>, ISwapWeaponSignal
{
    // Nothing required here
}
