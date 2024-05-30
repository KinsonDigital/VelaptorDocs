// <copyright file="ScoreSignal.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.Signals;

using Carbonate.OneWay;
using Data;
using Interfaces;

/// <inheritdoc cref="IScoreSignal"/>
public sealed class ScoreSignal : PushReactable<ScoreData>, IScoreSignal
{
}
