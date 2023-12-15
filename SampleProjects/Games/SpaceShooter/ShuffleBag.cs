// <copyright file="ShuffleBag.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

/// <summary>
/// Provides a bag of values that can be shuffled and then retrieved in a random order.
/// </summary>
/// <typeparam name="T">The type of items in the bag.</typeparam>
public class ShuffleBag<T>
{
    private readonly List<T> bag = new ();
    private readonly RandomNumGenerator random = new ();
    private int currentIndex;

    /// <summary>
    /// Adds the given <paramref name="item"/> to the bag with the given <paramref name="quantity"/>.
    /// </summary>
    /// <param name="item">The item to add.</param>
    /// <param name="quantity">The quantity to add.</param>
    /// <param name="skipShuffle">If true, will shuffle the bag after adding the item(s).</param>
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

    /// <summary>
    /// Gets the next item in the bag.
    /// </summary>
    /// <returns>The item from the bag.</returns>
    /// <remarks>
    ///     If all of the items have been used, the bag will be shuffled.
    /// </remarks>
    public T Next()
    {
        if (this.currentIndex >= 1)
        {
            return this.bag[--this.currentIndex];
        }

        this.currentIndex = this.bag.Count;
        Shuffle();

        return this.bag[--this.currentIndex];
    }

    /// <summary>
    /// Shuffles the order of the items in the bag.
    /// </summary>
    public void Shuffle()
    {
        for (var i = this.bag.Count - 1; i > 0; i--)
        {
            var swapIndex = this.random.Next(0, i + 1);

            (this.bag[i], this.bag[swapIndex]) = (this.bag[swapIndex], this.bag[i]);
        }
    }
}
