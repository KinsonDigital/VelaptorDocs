// <copyright file="SwapWeaponSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Interfaces;

/// <inheritdoc cref="ISwapWeaponSignal"/>
public sealed class SwapWeaponSignal : PushReactable<WeaponType>, ISwapWeaponSignal
{
}
