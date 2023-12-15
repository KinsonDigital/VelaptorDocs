// <copyright file="RandomNumGenerator.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Security.Cryptography;

/// <summary>
/// Randomly generates values.
/// </summary>
public class RandomNumGenerator
{
    /// <summary>
    /// Randomly choose a value between the given <paramref name="min"/> and <paramref name="max"/>.
    /// </summary>
    /// <param name="min">The minimum value.</param>
    /// <param name="max">The maximum value.</param>
    /// <returns>A random value.</returns>
    /// <remarks>
    ///     The result is inclusive of the <paramref name="min"/> value and exclusive
    ///     of the <paramref name="max"/> value.
    ///     <para/>
    ///     This means that if you want a value between 1 and 10, you need to use the values 1 and 11.
    /// </remarks>
    public int Next(int min, int max)
    {
        using var rng = RandomNumberGenerator.Create();

        var randomNumber = new byte[4]; // 4 bytes to hold a 32-bit integer
        rng.GetBytes(randomNumber);

        var value = BitConverter.ToInt32(randomNumber, 0);

        return Math.Abs(value % (max - min)) + min;
    }

    /// <summary>
    /// Flip a coin returning either true or false.
    /// </summary>
    /// <returns>The result.</returns>
    public bool FlipCoin() => Next(0, 2) == 0;
}
