// <copyright file="Pathing.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter;

using System.Numerics;
using Velaptor;

public class Pathing
{
    private readonly Vector2 start;
    private readonly Vector2 stop;
    private float pathProgress;
    private bool isForward = true;
    private Vector2 prevOnBezierCurvePoint;
    private float velocity = 0.1f;

    public Pathing(Vector2 start, Vector2 stop)
    {
        this.start = start;
        this.stop = stop;
    }

    public float Velocity
    {
        get => this.velocity * 1000f;
        set => this.velocity = value / 1000f;
    }

    public bool IsLooping { get; set; } = true;

    public bool IsPaused { get; set; }

    public Vector2 UpdatePath(FrameTime frameTime)
    {
        if (!IsPaused)
        {
            this.pathProgress = this.isForward
                ? this.pathProgress + (this.velocity * (float)frameTime.ElapsedTime.TotalSeconds)
                : this.pathProgress - (this.velocity * (float)frameTime.ElapsedTime.TotalSeconds);

            this.pathProgress = Math.Clamp(this.pathProgress, 0f, 1f);
        }

        var onBezierCurvePoint = GetBezierPoint(this.start, this.stop, this.pathProgress);
        this.prevOnBezierCurvePoint = onBezierCurvePoint;

        var progressComplete = IsProgressComplete();

        if (progressComplete)
        {
            if (IsLooping)
            {
                this.isForward = !this.isForward;
            }
        }

        return onBezierCurvePoint;
    }

    private bool IsProgressComplete() => this.isForward ? this.pathProgress >= 1 : this.pathProgress <= 0;

    private Vector2 GetBezierPoint(Vector2 p1, Vector2 p2, float t) =>
        IsPaused ? this.prevOnBezierCurvePoint : p1.GetBezierPoint(p2, t);
}
