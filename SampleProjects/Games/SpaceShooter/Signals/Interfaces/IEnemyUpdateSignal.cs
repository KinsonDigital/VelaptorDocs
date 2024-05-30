// <copyright file="IEnemyUpdateSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals.Interfaces;

using Carbonate.TwoWay;
using Data;

/// <summary>
/// Used for sending and receiving data about an enemy.
/// </summary>
public interface IEnemyUpdateSignal : IPushPullReactable<EnemyData, EnemyCommands>
{
}
