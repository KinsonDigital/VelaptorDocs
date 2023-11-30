// <copyright file="RandomNumGenerator.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Security.Cryptography;

public class RandomNumGenerator
{
    public int Next(int min, int max)
    {
        using var rng = RandomNumberGenerator.Create();

        var randomNumber = new byte[4]; // 4 bytes to hold a 32-bit integer
        rng.GetBytes(randomNumber);

        var value = BitConverter.ToInt32(randomNumber, 0);

        return Math.Abs(value % (max - min)) + min;
    }
}
