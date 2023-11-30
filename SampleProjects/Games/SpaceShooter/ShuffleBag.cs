// <copyright file="ShuffleBag.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

public class ShuffleBag<T>
{
    private List<T> bag = new();
    private Random random = new();
    private int currentIndex = 0;

    public void Add(T item, int quantity, bool skipShuffle = false)
    {
        for (var i = 0; i < quantity; i++)
        {
            this.bag.Add(item);
        }

        if (skipShuffle)
        {
            Shuffle();
        }
    }

    public T Next()
    {
        if (this.currentIndex < 1)
        {
            this.currentIndex = this.bag.Count;
            Shuffle();
        }

        return this.bag[--this.currentIndex];
    }

    public void Shuffle()
    {
        for (var i = this.bag.Count - 1; i > 0; i--)
        {
            var swapIndex = this.random.Next(i + 1);

            (this.bag[i], this.bag[swapIndex]) = (this.bag[swapIndex], this.bag[i]);
        }
    }
}
