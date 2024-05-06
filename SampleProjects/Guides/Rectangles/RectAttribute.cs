// <copyright file="RectAttribute.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace Rectangles;

/// <summary>
/// Represents different attributes of a rectangle.
/// </summary>
public enum RectAttribute
{
    /// <summary>
    /// The width of the rectangle.
    /// </summary>
    Width,

    /// <summary>
    /// The height of the rectangle.
    /// </summary>
    Height,

    /// <summary>
    /// The color of the rectangle.
    /// </summary>
    Color,

    /// <summary>
    /// The border thickness of the rectangle.
    /// </summary>
    BorderThickness,

    /// <summary>
    /// Solid state of the rectangle.
    /// </summary>
    IsSolid,

    /// <summary>
    /// The gradient type of the rectangle.
    /// </summary>
    GradientType,

    /// <summary>
    /// The start color of the gradient.
    /// </summary>
    GradientStart,

    /// <summary>
    /// The stop color of the gradient.
    /// </summary>
    GradientStop,

    /// <summary>
    /// The corner radius of the rectangle.
    /// </summary>
    CornerRadius,
}
