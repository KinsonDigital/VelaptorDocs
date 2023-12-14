// <copyright file="StraightPath.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.ComponentModel;
using System.Numerics;
using Velaptor;

public class StraightPath : IPath
{
    private readonly Vector2 start;
    private readonly Vector2 stop;
    private float pathProgress;
    private float velocity = 0.1f;
    private Vector2 prevInterpolatedPos;

    public StraightPath(Vector2 start, Vector2 stop)
    {
        this.start = start;
        this.stop = stop;
    }

    public float Velocity
    {
        get => this.velocity * 1000f;
        set => this.velocity = value / 1000f;
    }

    public bool IsLooping { get; set; }

    public bool IsComplete => IsPathComplete();

    public bool IsPaused { get; set; }

    public Direction Direction { get; set; } = Direction.Forward;

    public Vector2 CurrentPosition { get; private set; }

    public void Update(FrameTime frameTime) => CurrentPosition = UpdatePath(frameTime);

    private Vector2 UpdatePath(FrameTime frameTime)
    {
        if (!IsPaused)
        {
            var change = this.velocity * (float)frameTime.ElapsedTime.TotalSeconds;
            this.pathProgress = Direction switch
            {
                Direction.Forward => this.pathProgress + change,
                Direction.Reverse => this.pathProgress - change,
                _ => throw new InvalidEnumArgumentException("Direction", (int)Direction, typeof(Direction)),
            };

            this.pathProgress = Math.Clamp(this.pathProgress, 0f, 1f);
        }

        var interpolatedPos = Vector2.Lerp(this.start, this.stop, this.pathProgress);
        this.prevInterpolatedPos = interpolatedPos;

        if (IsPathComplete() && IsLooping)
        {
            Direction = Direction switch
            {
                Direction.Forward => Direction.Reverse,
                Direction.Reverse => Direction.Forward,
                _ => throw new InvalidEnumArgumentException("Direction", (int)Direction, typeof(Direction)),
            };
        }

        return interpolatedPos;
    }

    private bool IsPathComplete() =>
        Direction switch
        {
            Direction.Forward => this.pathProgress >= 1,
            Direction.Reverse => this.pathProgress <= 0,
            _ => throw new InvalidEnumArgumentException("Direction", (int)Direction, typeof(Direction)),
        };
}
