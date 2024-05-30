// <copyright file="ExtensionMethods.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Drawing;
using System.Numerics;
using Velaptor;

/// <summary>
/// Provides extension methods for various types.
/// </summary>
public static class ExtensionMethods
{
    private static readonly RandomNumGenerator Random = new ();

    /// <summary>
    /// Sets the alpha component of the color to the given <paramref name="alpha"/> value.
    /// </summary>
    /// <param name="value">The color to change.</param>
    /// <param name="alpha">The new alpha value.</param>
    /// <returns>The color with the new alpha applied.</returns>
    public static Color SetAlpha(this Color value, int alpha) =>
        Color.FromArgb(alpha, value.R, value.G, value.B);

    /// <summary>
    /// Converts the <see cref="PointF"/> value ot a <see cref="Vector2"/>.
    /// </summary>
    /// <param name="value">The value to convert.</param>
    /// <returns>The <see cref="Vector2"/> representation of the <see cref="PointF"/>.</returns>
    public static Vector2 ToVector2(this PointF value) => new (value.X, value.Y);

    /// <summary>
    /// Converts the <see cref="Vector2"/> value ot a <see cref="PointF"/>.
    /// </summary>
    /// <param name="value">The value to convert.</param>
    /// <returns>The <see cref="PointF"/> representation of the <see cref="Vector2"/>.</returns>
    public static PointF ToPointF(this Vector2 value) => new (value.X, value.Y);

    /// <summary>
    /// Randomly chooses an item from the given array of items.
    /// </summary>
    /// <param name="items">The list of items to choose from.</param>
    /// <typeparam name="T">The type of items in the list.</typeparam>
    /// <returns>The chosen item.</returns>
    public static T GetRandomItem<T>(this (T, float)[] items)
    {
        var randomIndex = Random.Next(0, items.Length);
        return items[randomIndex].Item1;
    }

    /// <summary>
    /// Gets a new point along a bezier curve between the given <paramref name="start"/> and <paramref name="stop"/> points.
    /// </summary>
    /// <param name="start">The starting point.</param>
    /// <param name="stop">The stopping point.</param>
    /// <param name="t">The progress along the path.</param>
    /// <returns>The new point along the path.</returns>
    /// <remarks>The <paramref name="t"/> is a value between 0 and 1.</remarks>
    public static Vector2 GetBezierPoint(this Vector2 start, Vector2 stop, float t)
    {
        const bool ccw = false;

        var midPoint = Vector2.Lerp(start, stop, 0.5f);

        var p0 = start;
        var p1 = midPoint.RotateAround(p0, 90, ccw);
        var p3 = stop;
        var p2 = midPoint.RotateAround(p3, 90);

        var a = Vector2.Lerp(p0, p1, t);
        var b = Vector2.Lerp(p1, p2, t);
        var c = Vector2.Lerp(p2, p3, t);
        var d = Vector2.Lerp(a, b, t);
        var e = Vector2.Lerp(b, c, t);

        return Vector2.Lerp(d, e, t);
    }
}
