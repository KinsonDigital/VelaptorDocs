// <copyright file="FireWeaponSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.NonDirectional;
using Interfaces;

/// <inheritdoc cref="IFireWeaponSignal"/>
public sealed class FireWeaponSignal : PushReactable, IFireWeaponSignal
{
}
