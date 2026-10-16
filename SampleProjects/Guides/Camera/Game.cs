// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace Camera;

using System;
using System.Drawing;
using System.Numerics;
using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Content.Fonts;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.Input;
using Velaptor.UI;

/// <summary>
/// Demonstrates the Velaptor 2D camera system.
/// Shows how to pan (drag with mouse) and zoom (scroll wheel) around a large map.
/// </summary>
/// <remarks>
/// <para>
/// The camera transforms <b>world coordinates</b> to <b>screen coordinates</b>:
/// </para>
/// <list type="bullet">
/// <item><b>World coordinates</b>: Where objects exist in your game world (can be huge, like a 2500×2052 map)</item>
/// <item><b>Screen coordinates</b>: Pixel positions on the window (limited to window size, like 1000×820)</item>
/// </list>
/// <para>
/// The camera lets you view any part of a large world inside a small window.
/// Move the camera to pan around; change zoom to see more or less of the world.
/// </para>
/// </remarks>
public class Game : Window
{
    private const float MaxZoom = 2.0f; // Zoom in up to 200% (see half the map)
    private const float MinZoom = 0.40f; // Zoom out to 40% (see the whole map)
    private const float CamZoomSpeed = 4.0f; // How fast zoom changes per scroll tick
    private readonly IBatcher batcher; // Groups draw calls for better performance
    private readonly ITextureRenderer textureRenderer; // Draws images/textures to the screen
    private readonly ITextRenderer textRenderer; // Draws text to the screen
    private readonly IContentManager contentManager; // Loads and unloads game assets (textures, fonts, etc.)
    private readonly ICamera2D camera; // The actual 2D camera
    private readonly IAppInput<MouseState> mouse; // Used to pan and zoom the camera
    private readonly string instructionsText; // Text shown on screen explaining the controls

    private ITexture? metroidMapTexture; // The actual texture of the map

    // The map's position in WORLD coordinates. This NEVER changes — we move the camera, not the map
    private Vector2 mapWorldPos; // The world position of the map
    private IFont? font; // Used to render the instruction text
    private bool isDragging; // True while the left mouse button is held down
    private Point dragStartMousePos; // Mouse position (in screen pixels) when the drag started
    private Vector2 dragStartCameraPos; // Camera position (in world units) when the drag started

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        // Size the window to show the entire map at minimum zoom
        // The map is 2500×2052 pixels. At 40% zoom, that fits in a 1000×820 window
        const int mapWidth = 2500;
        const int mapHeight = 2052;
        Width = (uint)(mapWidth * MinZoom);
        Height = (uint)(mapHeight * MinZoom);

        // Create rendering services using Velaptor's factory classes
        // Factories make it easy to create commonly used objects
        this.batcher = RendererFactory.CreateBatcher();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
        this.textRenderer = RendererFactory.CreateTextRenderer();

        // Create the content manager for loading assets like textures and fonts
        this.contentManager = ContentManager.Create();

        // Create the camera and configure its zoom limits
        this.camera = CameraFactory.CreateCamera();
        this.camera.Zoom = MinZoom;    // Start zoomed out so the whole map is visible
        this.camera.ZoomMin = MinZoom; // Don't allow zooming out past 40%
        this.camera.ZoomMax = MaxZoom; // Don't allow zooming in past 200%

        // Get the mouse input device
        this.mouse = HardwareFactory.GetMouse();

        // Instructions displayed on screen
        this.instructionsText =
            "Camera Controls:\n" +
            "- Left Mouse Drag: Pan the map\n" +
            "- Scroll Wheel: Zoom in/out\n";
    }

    /// <summary>
    /// Loads game content.
    /// </summary>
    protected override void OnLoad()
    {
        // Load the map texture and the font from the content directory
        this.metroidMapTexture = this.contentManager.Load<ITexture>("metroid-world-map");
        this.font = this.contentManager.LoadFont("TimesNewRoman-Bold.ttf", 12);

        // Place the map's center at the center of the world.
        // This is a WORLD position — it stays fixed. We move the CAMERA to look around, not the map.
        this.mapWorldPos = new Vector2(Width / 2f, Height / 2f);

        base.OnLoad();
    }

    /// <summary>
    /// Unload the content to free resources.
    /// </summary>
    protected override void OnUnload()
    {
        // Unload the texture if it was loaded
        if (this.metroidMapTexture is not null)
        {
            this.contentManager.Unload(this.metroidMapTexture);
        }

        // Unload the font if it was loaded
        if (this.font is not null)
        {
            this.contentManager.Unload(this.font);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Updates the application. Executes one time for every iteration of the game loop
    /// and always BEFORE the <see cref="Window.OnDraw"/> method.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        // Calculate zoom change per frame based on elapsed time.
        // Multiplying by elapsed time makes zoom speed consistent regardless of frame rate.
        var camZoomVelocityIn = (float)frameTime.ElapsedTime.TotalSeconds * CamZoomSpeed;
        var camZoomVelocityOut = (float)frameTime.ElapsedTime.TotalSeconds * CamZoomSpeed;

        // Get the current state of the mouse (position, buttons, scroll wheel)
        var currentMouseState = this.mouse.GetState();

        // Get the scroll wheel value to control the zoom level of the map
        var scrollValue = currentMouseState.GetScrollWheelValue();

        if (scrollValue > 0)
        {
            // Scroll up = zoom IN (see less of the map, but bigger)
            this.camera.Zoom += camZoomVelocityIn;
        }
        else if (scrollValue < 0)
        {
            // Scroll down = zoom OUT (see more of the map, but smaller)
            this.camera.Zoom -= camZoomVelocityOut;
        }

        // If the mouse is down, we can pan the camera
        if (currentMouseState.IsLeftButtonDown())
        {
            // Get the current mouse position in screen pixels
            var currentMousePos = currentMouseState.GetPosition();

            if (!this.isDragging)
            {
                // This is the FIRST frame of the drag — remember where we started.
                // We need both the mouse position (screen px) and camera position (world units)
                // so we can calculate how far things have moved.
                this.isDragging = true;
                this.dragStartMousePos = currentMousePos;
                this.dragStartCameraPos = this.camera.Position;
            }

            // Calculate how far the mouse has moved since the drag started (in screen pixels)
            var delta = new Vector2(
                currentMousePos.X - this.dragStartMousePos.X,
                currentMousePos.Y - this.dragStartMousePos.Y);

            /*
             * Convert the mouse movement into camera movement.
             *
             * The formula: camera.Position = dragStartCameraPos - (delta / camera.Zoom)
             *
             * WHY NEGATIVE?
             *   Moving the camera RIGHT makes the world appear to move LEFT on screen.
             *   To make the map follow the mouse (move right when the mouse moves right),
             *   we move the camera in the OPPOSITE direction of the mouse.
             * WHY DIVIDE BY ZOOM?
             *   The mouse delta is in SCREEN pixels, but camera.Position is in WORLD units.
             *   At 50% zoom, moving the camera by 100 world units only moves the view by 50 screen pixels.
             *   Dividing the mouse delta by Zoom converts screen pixels → world units,
             *   so the grabbed point on the map stays exactly under the cursor at any zoom level.
            */
            this.camera.Position = this.dragStartCameraPos - (delta / this.camera.Zoom);
        }
        else
        {
            // Mouse button is not pressed — end the drag
            this.isDragging = false;
        }

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Called every frame to render graphics. All drawing happens here.
    /// </summary>
    /// <param name="frameTime">Timing information for the current frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        if (this.font is null)
        {
            throw new InvalidOperationException("Font was not loaded.");
        }

        if (this.metroidMapTexture is null)
        {
            throw new InvalidOperationException("Texture not loaded");
        }

        // Transform the map's WORLD position to a SCREEN position
        // This applies the camera's pan (Position) and zoom, converting where the map
        // exists in the world to where it should be drawn on the screen
        var mapPos = this.camera.TransformPosition(this.mapWorldPos);

        // Get the scale factor for rendering. TransformSize multiplies by the camera's Zoom,
        // so at 50% zoom, the map is drawn at half size
        var textureScale = this.camera.TransformSize(1f);

        // Show the current zoom level in the window title
        Title = $"Camera Guide | Zoom: {this.camera.Zoom:0.00}";

        // Begin a batch of draw calls. Everything between Begin() and End() is grouped
        // together and sent to the GPU efficiently in one operation
        this.batcher.Begin();

        // Draw the map.
        this.textureRenderer.Render(
            this.metroidMapTexture,
            mapPos, // WHERE to draw (screen position after camera transform)
            0f, // No rotation
            textureScale, // HOW BIG to draw (affected by camera zoom)
            -100); // Z-index (lower values are drawn behind higher values)

        // Draw the instructions text.
        // NOTE: We use raw screen coordinates here (not camera.TransformPosition)
        // because we want the text to stay fixed on the screen, not move with the map
        this.textRenderer.Render(
            this.font,
            this.instructionsText,
            new Vector2(150, 60f), // Screen position (fixed, not affected by camera)
            0.5f, // Text scale
            0f, // Rotation in degrees
            Color.White);

        // End the batch — submit all the draw calls to the GPU
        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
