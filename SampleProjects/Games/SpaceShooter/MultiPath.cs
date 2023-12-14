// <copyright file="MultiPath.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.ComponentModel;
using System.Numerics;
using Velaptor;

public class MultiPath : IUpdatable
{
    private readonly List<(bool enabled, IPath path)> paths = new ();
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
            this.paths.Add((i == 0, newPath));
        }
    }

    public float Velocity
    {
        get => this.velocity;
        set
        {
            this.velocity = value;

            for (var i = 0; i < this.paths.Count; i++)
            {
                var (enabled, path) = this.paths[i];
                path.Velocity = value;
                this.paths[i] = (enabled, path);
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

        for (var i = 0; i < this.paths.Count; i++)
        {
            (bool, IPath) pathData = this.paths[i];
            var (enabled, path) = pathData;

            if (enabled)
            {
                path.Update(frameTime);
            }
        }

        CurrentPosition = this.paths[this.activePathIndex].path.CurrentPosition;
    }

    private void NextPath()
    {
        // Set the current path to paused & disabled
        this.paths[this.activePathIndex].path.IsPaused = true;
        this.paths[this.activePathIndex] = (false, this.paths[this.activePathIndex].path);

        var subPathComplete = this.paths[this.activePathIndex].path.IsComplete;

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
        this.paths[this.activePathIndex].path.IsPaused = false;
        this.paths[this.activePathIndex] = (true, this.paths[this.activePathIndex].path);
    }

    private bool IsPathComplete() => this.paths.All(p => p.path.IsComplete);

    private void SetPathDirections(Direction newDirection)
    {
        for (var i = 0; i < this.paths.Count; i++)
        {
            var (enabled, path) = this.paths[i];
            path.Direction = newDirection;

            this.paths[i] = (enabled, path);
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
