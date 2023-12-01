namespace UnitCircle;

using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Content.Fonts;
using Velaptor.ExtensionMethods;
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
    private readonly ILoader<IFont> fontLoader;
    private readonly IFontRenderer fontRenderer;
    private readonly IAppInput<KeyboardState> keyboard;
    private CircleShape centerPoint;
    private CircleShape circle;
    private IFont? font;
    private Vector2 lineStart;
    private Vector2 lineEnd;
    private float currAngle;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        Title = "Unit Circle";
        Width = Height;

        this.batcher = RendererFactory.CreateBatcher();
        this.shapeRenderer = RendererFactory.CreateShapeRenderer();
        this.lineRenderer = RendererFactory.CreateLineRenderer();
        this.fontRenderer = RendererFactory.CreateFontRenderer();
        this.fontLoader = ContentLoaderFactory.CreateFontLoader();
        this.keyboard = HardwareFactory.GetKeyboard();
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        this.font = this.fontLoader.Load("TimesNewRoman-Regular", 12);

        var circleCenter = new Vector2(Width / 2f, Height / 2f);
        var radius = Width / 4f * 2 / 2;

        this.circle = new CircleShape
        {
            Color = Color.White,
            Position = circleCenter,
            IsSolid = false,
            BorderThickness = 2,
            Radius = radius,
        };

        this.centerPoint = new CircleShape
        {
            Color = Color.White,
            Position = circleCenter,
            IsSolid = false,
            BorderThickness = 2,
            Radius = 2.5f,
        };

        this.lineStart = circleCenter;
        this.lineEnd = circleCenter + new Vector2(radius, 0);

        base.OnLoad();
    }

    /// <summary>
    /// Unloads the content.
    /// </summary>
    protected override void OnUnload()
    {
        this.fontLoader.Unload(this.font);
        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        var curKeyState = this.keyboard.GetState();

        const float angularVelocity = 50;

        // Determine the amount of degrees to change based on the angular
        // velocity and taking the frame rate into account
        var angleChangeAmount = angularVelocity * (float)frameTime.ElapsedTime.TotalSeconds;

        // Rotate clockwise
        if (curKeyState.IsKeyDown(KeyCode.Right))
        {
            this.lineEnd = this.lineEnd.RotateAround(this.lineStart, angleChangeAmount);

            // Prevent the angle from going over 360
            var newAngle = this.currAngle + angleChangeAmount > 360
                ? this.currAngle + angleChangeAmount - 360
                : this.currAngle + angleChangeAmount;
            this.currAngle = newAngle;
        }

        // Rotate counter clockwise
        if (curKeyState.IsKeyDown(KeyCode.Left))
        {
            this.lineEnd = this.lineEnd.RotateAround(this.lineStart, -angleChangeAmount);

            // Prevent the angle from going under 0
            var newAngle = this.currAngle - angleChangeAmount < 0
                ? this.currAngle - angleChangeAmount + 360
                : this.currAngle - angleChangeAmount;
            this.currAngle = newAngle;
        }

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Draws to the screen. Executes one time for every iteration of the game loop
    /// and always AFTER the <see cref="OnUpdate"/> method has finished.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        ArgumentNullException.ThrowIfNull(this.font);

        this.batcher.Begin();

        this.shapeRenderer.Render(this.circle);
        this.shapeRenderer.Render(this.centerPoint);
        this.lineRenderer.Render(new Line(this.lineStart, this.lineEnd));

        var textPos = new Vector2(Width / 2f, 100f);
        var angleText = $"Angle: {this.currAngle}";

        this.fontRenderer.Render(this.font, angleText, textPos);

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
