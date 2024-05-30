// <copyright file="MultiPath.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Numerics;
using Velaptor;

/// <summary>
/// A path that can be followed by an object.
/// </summary>
public class MultiPath : IUpdatable
{
    private readonly List<IPath> paths = new ();
    private int activePathIndex;
    private float velocity = 0.1f;
    private Direction direction = Direction.Forward;

    /// <summary>
    /// Initializes a new instance of the <see cref="MultiPath"/> class.
    /// </summary>
    public MultiPath()
    {
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="MultiPath"/> class.
    /// </summary>
    /// <param name="points">The list of points along the path.</param>
    [SuppressMessage("ReSharper", "UnusedMember.Global", Justification = "Could be used in the future.")]
    public MultiPath(Vector2[] points) => SetPathPoints(points);

    /// <summary>
    /// Gets or sets the velocity of movement along the path.
    /// </summary>
    public float Velocity
    {
        get => this.velocity;
        set
        {
            this.velocity = value;

            foreach (var t in this.paths)
            {
                t.Velocity = value;
            }
        }
    }

    /// <summary>
    /// Gets or sets a value indicating whether the path is looping.
    /// </summary>
    public bool IsLooping { get; set; }

    /// <summary>
    /// Gets or sets the direction of movement along the path.
    /// </summary>
    /// <remarks>This is either from the start to stop or from stop to start.</remarks>
    public Direction Direction
    {
        get => this.direction;
        set
        {
            this.direction = value;
            SetPathDirections(value);
        }
    }

    /// <summary>
    /// Gets the current position along the path.
    /// </summary>
    public Vector2 CurrentPosition { get; private set; }

    /// <inheritdoc cref="IUpdatable"/>
    public void Update(FrameTime frameTime)
    {
        NextPath();

        foreach (var path in this.paths)
        {
            if (!path.IsPaused)
            {
                path.Update(frameTime);
            }
        }

        CurrentPosition = this.paths[this.activePathIndex].CurrentPosition;
    }

    /// <summary>
    /// Sets the points of the path to the given list of <paramref name="points"/>.
    /// </summary>
    /// <param name="points">The list of points.</param>
    /// <exception cref="ArgumentException">
    ///     Thrown if the list of points does not contain an even number of points.
    /// </exception>
    public void SetPathPoints(Vector2[] points)
    {
        if (points.Length % 2 != 0)
        {
            throw new ArgumentException("Must contain an even number of points.");
        }

        this.activePathIndex = 0;
        this.direction = Direction.Forward;
        this.paths.Clear();

        for (var i = 0; i < points.Length - 1; i++)
        {
            var start = points[i];
            var stop = points[i + 1];

            var newPath = new StraightPath(start, stop);
            newPath.IsPaused = i != 0;
            newPath.IsLooping = false;
            this.paths.Add(newPath);
        }
    }

    private void NextPath()
    {
        if (this.paths.Count <= 0)
        {
            return;
        }

        // Set the current path to paused & disabled
        this.paths[this.activePathIndex].IsPaused = true;

        var subPathComplete = this.paths[this.activePathIndex].IsComplete;

        var fullPathComplete = IsPathComplete();

        if (IsLooping && fullPathComplete)
        {
            SwapDirection();
        }
        else
        {
            // Move to the next index
            this.activePathIndex = Direction switch
            {
                Direction.Forward => subPathComplete ? this.activePathIndex + 1 : this.activePathIndex,
                Direction.Reverse => subPathComplete ? this.activePathIndex - 1 : this.activePathIndex,
                _ => throw new InvalidEnumArgumentException("Direction", (int)Direction, typeof(Direction)),
            };
        }

        // Set the next path to un-paused & enabled
        this.paths[this.activePathIndex].IsPaused = false;
    }

    private bool IsPathComplete() => this.paths.TrueForAll(p => p.IsComplete);

    private void SetPathDirections(Direction newDirection)
    {
        foreach (var path in this.paths)
        {
            path.Direction = newDirection;
        }
    }

    private void SwapDirection() =>
        Direction = Direction switch
        {
            Direction.Forward => Direction.Reverse,
            Direction.Reverse => Direction.Forward,
            _ => throw new InvalidEnumArgumentException("Direction", (int)Direction, typeof(Direction)),
        };
}
