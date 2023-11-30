// <copyright file="ExtensionMethods.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;

public static class ExtensionMethods
{
    private static readonly Random Random = new ();

    public static Color RandomizeRGB(this Color color) =>
        Color.FromArgb(color.A, Random.Next(0, 255), Random.Next(0, 255), Random.Next(0, 255));

    public static Color SetAlpha(this Color value, int alpha) =>
        Color.FromArgb(alpha, value.R, value.G, value.B);

    public static T GetRandomItem<T>(this (T, float)[] items)
    {
        var randomNumber = Random.NextSingle();

        var cumulative = 0.0f;
        foreach (var item in items)
        {
            cumulative += item.Item2;
            if (randomNumber < cumulative)
            {
                return item.Item1;
            }
        }

        throw new InvalidOperationException("The probabilities in the item list do not sum up to 1.");
    }
}
