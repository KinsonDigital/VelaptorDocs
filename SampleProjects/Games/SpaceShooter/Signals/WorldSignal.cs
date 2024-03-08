// <copyright file="WorldSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Data;

/// <inheritdoc cref="IWorldSignal"/>
public class WorldSignal : PushReactable<WorldData>, IWorldSignal
{
    // Nothing required here
}
