namespace QuadBezierCurve;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;
using Velaptor.Input;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private readonly IBatcher batcher;
    private readonly IShapeRenderer shapeRenderer;
    private readonly ILineRenderer lineRenderer;
    private readonly IAppInput<KeyboardState> keyboard;
    private readonly List<Vector2> quadPoints = new ();
    private readonly List<(Vector2, Vector2)> quadLines = new ();
    private readonly List<Vector2> t1LerpLinePoints = new ();
    private readonly List<Vector2> t2LerpLinePoints = new ();
    private readonly List<(Vector2, Vector2)> t1Lines = new ();
    private readonly List<(Vector2, Vector2)> t2Lines = new ();
    private Vector2 mainPoint;
    private float t;
    private float lerpSpeed = 0.01f;
    private bool runForwards = true;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Quad Bezier Curve";
        Width = 800;

        this.batcher = RendererFactory.CreateBatcher();
        this.shapeRenderer = RendererFactory.CreateShapeRenderer();
        this.lineRenderer = RendererFactory.CreateLineRenderer();
        this.keyboard = HardwareFactory.GetKeyboard();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        var widthDiv = Width / 6f;
        var heightDiv = Height / 6f;
        var bottom = Height;

        this.quadPoints.Add(new Vector2(widthDiv, bottom));
        this.quadPoints.Add(new Vector2(widthDiv, heightDiv * 3));
        this.quadPoints.Add(new Vector2(widthDiv * 5, heightDiv * 3));
        this.quadPoints.Add(new Vector2(widthDiv * 5, bottom));

        base.OnLoad();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        UpdateKeyState();

        if (this.runForwards)
        {
            if (this.t < 1)
            {
                this.t += this.lerpSpeed * (float)frameTime.ElapsedTime.TotalSeconds;

                this.t = this.t > 1 ? 1 : this.t;
            }
            else
            {
                this.runForwards = !this.runForwards;
            }
        }
        else
        {
            if (this.t > 0)
            {
                this.t -= this.lerpSpeed * (float)frameTime.ElapsedTime.TotalSeconds;

                this.t = this.t < 0 ? 0 : this.t;
            }
            else
            {
                this.runForwards = !this.runForwards;
            }
        }

        var p0 = this.quadPoints[0];
        var p1 = this.quadPoints[1];
        var p2 = this.quadPoints[2];
        var p3 = this.quadPoints[3];

        this.quadLines.Clear();
        this.quadLines.Add((this.quadPoints[0], this.quadPoints[1]));
        this.quadLines.Add((this.quadPoints[1], this.quadPoints[2]));
        this.quadLines.Add((this.quadPoints[2], this.quadPoints[3]));

        var a = Vector2.Lerp(p0, p1, this.t);
        var b = Vector2.Lerp(p1, p2, this.t);
        var c = Vector2.Lerp(p2, p3, this.t);
        var d = Vector2.Lerp(a, b, this.t);
        var e = Vector2.Lerp(b, c, this.t);

        this.mainPoint = Vector2.Lerp(d, e, this.t);

        this.t1LerpLinePoints.Clear();
        this.t1LerpLinePoints.Add(a);
        this.t1LerpLinePoints.Add(b);
        this.t1LerpLinePoints.Add(c);

        this.t2LerpLinePoints.Clear();
        this.t2LerpLinePoints.Add(d);
        this.t2LerpLinePoints.Add(e);

        this.t1Lines.Clear();
        this.t1Lines.Add((a, b));
        this.t1Lines.Add((b, c));

        this.t2Lines.Clear();
        this.t2Lines.Add((d, e));

        base.OnUpdate(frameTime);
    }

    private void UpdateKeyState()
    {
        var curKeyState = this.keyboard.GetState();

        if (curKeyState.IsKeyDown(KeyCode.Up))
        {
            this.lerpSpeed += 0.05f;
        }

        if (curKeyState.IsKeyDown(KeyCode.Down))
        {
            this.lerpSpeed -= 0.05f;
        }
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnUpdate"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        this.batcher.Begin();

        RenderPoints(this.quadPoints, Color.White);
        RenderPoints(this.t1LerpLinePoints, Color.CornflowerBlue);
        RenderPoints(this.t2LerpLinePoints, Color.IndianRed);

        RenderLines(this.quadLines, Color.White);
        RenderLines(this.t1Lines, Color.CornflowerBlue);
        RenderLines(this.t2Lines, Color.IndianRed);

        var mainCirc = new CircleShape
        {
            Position = this.mainPoint,
            Color = Color.White,
            Radius = 10,
            IsSolid = false,
            BorderThickness = 2,
        };

        this.shapeRenderer.Render(mainCirc);

        this.batcher.End();

        base.OnDraw(frameTime);
    }

    public static Vector2 GetBezierPoint(Vector2 point1, Vector2 point2, float t)
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

    private void RenderPoints(List<Vector2> points, Color clr)
    {
        foreach (var point in points)
        {
            var circ = new CircleShape
            {
                Position = point,
                Color = clr,
                Radius = 10,
                IsSolid = false,
                BorderThickness = 2,
            };

            this.shapeRenderer.Render(circ);
        }
    }

    private void RenderLines(List<(Vector2, Vector2)> lines, Color clr)
    {
        foreach (var lineToRender in lines)
        {
            var line = new Line
            {
                P1 = lineToRender.Item1,
                P2 = lineToRender.Item2,
                Thickness = 2,
                Color = clr,
            };

            this.lineRenderer.Render(line);
        }
    }
}
