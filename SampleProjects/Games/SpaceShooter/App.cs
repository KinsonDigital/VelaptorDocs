// <copyright file="App.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using Signals;
using Signals.Interfaces;
using SimpleInjector;
using UI;

public static class App
{
    private static readonly Container factory = new ();
    private static bool isInitialized;

    public static Container Factory
    {
        get
        {
            if (!isInitialized)
            {
                SetupContainer();
            }

            return factory;
        }
    }

    private static void SetupContainer()
    {
        SetupSignaling();
        SetupUI();

        factory.Register<Weapon>(Lifestyle.Singleton);
        factory.Register<Ship>(Lifestyle.Singleton);
        factory.Register<Enemy>();

        isInitialized = true;

    }

    private static void SetupSignaling()
    {
        factory.Register<IWorldSignal, WorldSignal>(Lifestyle.Singleton);
        factory.Register<ISwapWeaponSignal, SwapWeaponSignal>(Lifestyle.Singleton);
        factory.Register<IShipSignal, ShipSignal>(Lifestyle.Singleton);
        factory.Register<IScoreSignal, ScoreSignal>(Lifestyle.Singleton);
        factory.Register<IEnemyUpdateSignal, EnemyUpdateSignal>(Lifestyle.Singleton);
    }

    private static void SetupUI()
    {
        factory.Register<WeaponSelectionUi>(Lifestyle.Singleton);
    }
}
