// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

// ReSharper disable RedundantOverriddenMember
// ReSharper disable ArrangeMethodOrOperatorBody
// ReSharper disable ArrangeConstructorOrDestructorBody
namespace EmptyProject;

using Velaptor;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    /// <summary>
    /// Load content here.
    /// </summary>
    protected override void OnLoad()
    {
        base.OnLoad();
    }

    /// <summary>
    /// Unload content here.
    /// </summary>
    protected override void OnUnload()
    {
        base.OnUnload();
    }

    /// <summary>
    /// Update size dependent related game objects and more here.
    /// </summary>
    /// <param name="size">The new window size.</param>
    protected override void OnResize(SizeU size)
    {
        base.OnResize(size);
    }

    /// <summary>
    /// Add game logic here.
    /// </summary>
    /// <param name="frameTime">The amount of time that passed for the current game loop frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Render graphics here.
    /// </summary>
    /// <param name="frameTime">The amount of time that passed for the current game loop frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        base.OnDraw(frameTime);
    }
}
