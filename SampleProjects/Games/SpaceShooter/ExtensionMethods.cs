// <copyright file="ExtensionMethods.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using Velaptor;

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

    public static Vector2 GetBezierPoint(this Vector2 point1, Vector2 point2, float t)
    {
        const bool cw = true;
        const bool ccw = false;

        var midPoint = Vector2.Lerp(point1, point2, 0.5f);

        var p0 = point1;
        var p1 = midPoint.RotateAround(p0, 90, ccw);
        var p3 = point2;
        var p2 = midPoint.RotateAround(p3, 90, cw);

        var a = Vector2.Lerp(p0, p1, t);
        var b = Vector2.Lerp(p1, p2, t);
        var c = Vector2.Lerp(p2, p3, t);
        var d = Vector2.Lerp(a, b, t);
        var e = Vector2.Lerp(b, c, t);

        return Vector2.Lerp(d, e, t);
    }
}
