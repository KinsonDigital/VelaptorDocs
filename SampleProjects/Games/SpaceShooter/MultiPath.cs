// <copyright file="MultiPath.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.ComponentModel;
using System.Numerics;
using Velaptor;

public class MultiPath : IUpdatable
{
    private readonly List<IPath> paths = new ();
    private int activePathIndex;
    private float velocity = 0.1f;
    private Direction direction = Direction.Forward;

    public MultiPath(Vector2[] points)
    {
        if (points.Length % 2 != 0)
        {
            throw new ArgumentException("Must contain an even number of points.");
        }

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

    public bool IsLooping { get; set; }

    public Direction Direction
    {
        get => this.direction;
        set
        {
            this.direction = value;
            SetPathDirections(value);
        }
    }

    public Vector2 CurrentPosition { get; private set; }

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

    private void NextPath()
    {
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

    private bool IsPathComplete() => this.paths.All(p => p.IsComplete);

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
