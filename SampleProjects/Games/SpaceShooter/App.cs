// <copyright file="App.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using Signals;
using Signals.Interfaces;
using SimpleInjector;
using UI;

/// <summary>
/// Represents the application.
/// </summary>
public static class App
{
    private static readonly Container FactoryContainer = new ();
    private static bool isInitialized;

    /// <summary>
    /// Gets the factory container.
    /// </summary>
    public static Container Factory
    {
        get
        {
            if (!isInitialized)
            {
                SetupContainer();
            }

            return FactoryContainer;
        }
    }

    /// <summary>
    /// Sets up the factory container.
    /// </summary>
    private static void SetupContainer()
    {
        SetupSignaling();
        SetupUI();

        FactoryContainer.Register<Weapon>(Lifestyle.Singleton);
        FactoryContainer.Register<Ship>(Lifestyle.Singleton);
        FactoryContainer.Register<Enemy>();

        isInitialized = true;
    }

    /// <summary>
    /// Sets up the signals used for communication.
    /// </summary>
    private static void SetupSignaling()
    {
        FactoryContainer.Register<IWorldSignal, WorldSignal>(Lifestyle.Singleton);
        FactoryContainer.Register<ISwapWeaponSignal, SwapWeaponSignal>(Lifestyle.Singleton);
        FactoryContainer.Register<IShipSignal, ShipSignal>(Lifestyle.Singleton);
        FactoryContainer.Register<IScoreSignal, ScoreSignal>(Lifestyle.Singleton);
        FactoryContainer.Register<IEnemyUpdateSignal, EnemyUpdateSignal>(Lifestyle.Singleton);
    }

    /// <summary>
    /// Sets up UI related registrations.
    /// </summary>
    private static void SetupUI() => FactoryContainer.Register<WeaponSelectionUi>(Lifestyle.Singleton);
}
