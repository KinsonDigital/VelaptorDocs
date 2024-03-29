﻿// <copyright file="IWorldSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Data;

/// <summary>
/// Represents a signal to send world related data.
/// </summary>
public interface IWorldSignal : IPushReactable<WorldData>
{
    // Nothing required here
}
