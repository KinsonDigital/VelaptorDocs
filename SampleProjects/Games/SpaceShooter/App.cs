// <copyright file="App.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using Signals;
using SimpleInjector;
using UI;

/// <summary>
/// The application.
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
    /// Sets up the IoC container.
    /// </summary>
    private static void SetupContainer()
    {
        SetupSignaling();
        SetupUi();

        FactoryContainer.Register<Weapon>(Lifestyle.Singleton);
        FactoryContainer.Register<Ship>(Lifestyle.Singleton);

        isInitialized = true;
    }

    /// <summary>
    /// Sets up dependency injection for signaling.
    /// </summary>
    private static void SetupSignaling()
    {
        FactoryContainer.Register<IWorldSignal, WorldSignal>(Lifestyle.Singleton);
        FactoryContainer.Register<ISwapWeaponSignal, SwapWeaponSignal>(Lifestyle.Singleton);
        FactoryContainer.Register<IShipSignal, ShipSignal>(Lifestyle.Singleton);
    }

    /// <summary>
    /// Sets up dependency injection for UI.
    /// </summary>
    private static void SetupUi() => FactoryContainer.Register<WeaponSelectionUi>(Lifestyle.Singleton);
}
