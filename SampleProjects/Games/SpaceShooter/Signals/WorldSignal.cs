// <copyright file="WorldSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Data;
using Interfaces;

/// <inheritdoc cref="IWorldSignal"/>
public sealed class WorldSignal : PushReactable<WorldData>, IWorldSignal
{
}
