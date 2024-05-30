// <copyright file="BezierPath.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.ComponentModel;
using System.Numerics;
using Velaptor;

/// <summary>
/// A single bezier path from one point to another.
/// </summary>
public class BezierPath : IPath
{
    private readonly Vector2 start;
    private readonly Vector2 stop;
    private float pathProgress;
    private Vector2 prevInterpolatedPos;
    private float velocity = 0.1f;

    /// <summary>
    /// Initializes a new instance of the <see cref="BezierPath"/> class.
    /// </summary>
    /// <param name="start">The starting point of the path.</param>
    /// <param name="stop">The stopping point of the path.</param>
    public BezierPath(Vector2 start, Vector2 stop)
    {
        this.start = start;
        this.stop = stop;
    }

    /// <inheritdoc/>
    public float Velocity
    {
        get => this.velocity * 1000f;
        set => this.velocity = value / 1000f;
    }

    /// <inheritdoc/>
    public bool IsLooping { get; set; }

    /// <inheritdoc/>
    public bool IsPaused { get; set; }

    /// <inheritdoc/>
    public bool IsComplete => IsPathComplete();

    /// <inheritdoc/>
    public Direction Direction { get; set; } = Direction.Forward;

    /// <inheritdoc/>
    public Vector2 CurrentPosition { get; private set; }

    /// <inheritdoc cref="IUpdatable"/>
    public void Update(FrameTime frameTime) => CurrentPosition = UpdatePath(frameTime);

    /// <summary>
    /// Updates the path.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    /// <returns>The new position along the path.</returns>
    /// <exception cref="InvalidEnumArgumentException">
    ///     Thrown if the <see cref="Direction"/> property is set to an invalid value.
    /// </exception>
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

        var interpolatedPos = GetBezierPoint(this.start, this.stop, this.pathProgress);
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

    /// <summary>
    /// Returns a value indicating whether the path is complete.
    /// </summary>
    /// <returns>True if complete.</returns>
    /// <exception cref="InvalidEnumArgumentException">
    ///     Thrown if the <see cref="Direction"/> property is set to an invalid value.
    /// </exception>
    private bool IsPathComplete() =>
        Direction switch
        {
            Direction.Forward => this.pathProgress >= 1,
            Direction.Reverse => this.pathProgress <= 0,
            _ => throw new InvalidEnumArgumentException("Direction", (int)Direction, typeof(Direction)),
        };

    /// <summary>
    /// Gets a new point along the bezier curve path.
    /// </summary>
    /// <param name="p1">The starting point of the path.</param>
    /// <param name="p2">The stopping point of the path.</param>
    /// <param name="t">The progress along the path.</param>
    /// <returns>The new point.</returns>
    private Vector2 GetBezierPoint(Vector2 p1, Vector2 p2, float t) =>
        IsPaused ? this.prevInterpolatedPos : p1.GetBezierPoint(p2, t);
}
