// <copyright file="EnemyUpdateSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.TwoWay;
using Data;
using Interfaces;

/// <inheritdoc cref="IEnemyUpdateSignal"/>
public sealed class EnemyUpdateSignal : PushPullReactable<EnemyData, EnemyCommands>, IEnemyUpdateSignal
{
}
