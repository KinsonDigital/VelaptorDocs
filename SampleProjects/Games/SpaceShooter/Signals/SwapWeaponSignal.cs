// <copyright file="SwapWeaponSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;

public interface ISwapWeaponSignal : IPushReactable<WeaponType>
{
}

public class SwapWeaponSignal : PushReactable<WeaponType>, ISwapWeaponSignal
{
}
