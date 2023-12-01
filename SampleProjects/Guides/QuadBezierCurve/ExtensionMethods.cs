namespace QuadBezierCurve;

using System.Numerics;
using Velaptor;
using Velaptor.Graphics;

public static class ExtensionMethods
{
    public static Vector2 GetBezierPoint(this Vector2 point1, Vector2 point2, float t)
    {
        var p0 = point1;
        var p1 = (p0 * 0.10f).RotateAround(p0, 90, false);
        var p3 = point2;
        var p2 = (p3 * 0.10f).RotateAround(p3, 90, false);

        var a = Vector2.Lerp(p0, p1, t);
        var b = Vector2.Lerp(p1, p2, t);
        var c = Vector2.Lerp(p2, p3, t);
        var d = Vector2.Lerp(a, b, t);
        var e = Vector2.Lerp(b, c, t);

        return Vector2.Lerp(d, e, t);
    }

    /// <summary>
    /// Gets the angle in degrees of the given vector.
    /// </summary>
    /// <param name="v">The vector.</param>
    /// <returns>The angle in degrees.</returns>
    /// <remarks>
    ///     This angle is clockwise from the positive X-axis.
    ///     <para/>
    ///     This always gets the angle relative to origin (0, 0).
    ///     If you need to get the angle relative to another point, make sure to translate
    ///     this vector to that other point first.
    ///     <code>
    ///     var p1 = new Vector2(10, 10);
    ///     var p2 = new Vector2(20, 20);
    ///
    ///     // Change the origin from (0, 0) to p1
    ///     var translatedVector = p2 - p1;
    ///
    ///     // Should result in 45 degrees
    ///     var angle = translatedVector.AngleOfVector();
    ///     </code>
    /// </remarks>
    public static float AngleOfVector(this Vector2 v)
    {
        // Calculate the angle in radians
        var thetaRad = MathF.Atan2(v.Y, v.X);

        // Convert the angle to degrees
        var thetaDeg = thetaRad.ToDegrees();

        // Adjust for the clockwise direction
        thetaDeg = (thetaDeg < 0) ? thetaDeg + 360 : thetaDeg;

        return thetaDeg;
    }

    public static float AngleBetweenVectors(this Vector2 point1, Vector2 point2)
    {
        // Create vectors from the origin to each point
        Vector2 vector1 = point1 - new Vector2(0, 0);
        Vector2 vector2 = point2 - new Vector2(0, 0);

        // Calculate the angle of each vector
        float angle1 = vector1.AngleOfVector();
        float angle2 = vector2.AngleOfVector();

        // Calculate the difference between the two angles
        float angleBetween = angle2 - angle1;

        // Adjust the result to be in the range [0, 360)
        angleBetween = (angleBetween < 0) ? angleBetween + 360 : angleBetween;

        return angleBetween;
    }

    public static float AngleBetweenVectorsNEW(this Vector2 point1, Vector2 point2)
    {
        // Create a vector from point1 to point2
        Vector2 vector = point2 - point1;

        // Calculate the angle of the vector
        float angle = vector.AngleOfVector();

        return angle - 45;
    }

    /// <summary>
    /// Returns a number determining which side of the given <paramref name="line"/> the given <paramref name="vector"/> is on.
    /// </summary>
    /// <param name="line">The <see cref="Line"/> that the given <paramref name="vector"/> is to the left or right of.</param>
    /// <param name="vector">The <see cref="Vector"/> that resides on either side of the <see cref="Line"/>.</param>
    /// <returns>A positive number means its on one side of the line and a negative number is the other side of the line.
    /// If the number is 0, then the vector lies directly on the line.</returns>
    public static float DetermineWhichSide(Line line, Vector2 vector)
    {
        return DetermineWhichSide(line, vector.X, vector.Y);
    }

    /// <summary>
    /// Returns a number determining which side of the given <paramref name="line"/> the given <paramref name="vector"/> is on.
    /// </summary>
    /// <param name="line">The <see cref="Line"/> that the given <paramref name="vector"/> is to the left or right of.</param>
    /// <param name="x">The x component of the point that resides on either side of the <see cref="Line"/>.</param>
    /// <param name="y">The y component of the point that resides on either side of the <see cref="Line"/>.</param>
    /// <returns>A positive number means its on one side of the line and a negative number is the other side of the line.
    /// If the number is 0, then the vector lies directly on the line.</returns>
    public static float DetermineWhichSide(Line line, float x, float y)
    {
        return (line.P2.X - line.P1.X) * (y - line.P1.Y) - (line.P2.Y - line.P1.Y) * (x - line.P1.X);
    }
}
