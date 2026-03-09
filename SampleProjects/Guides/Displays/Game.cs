// <copyright file="Game.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace Displays;

using Velaptor;
using Velaptor.Batching;
using Velaptor.Content;
using Velaptor.Content.Fonts;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;
using Velaptor.Hardware;
using Velaptor.UI;

/// <summary>
/// The main game class.
/// </summary>
public class Game : Window
{
    private const int LineSpacing = 20;
    private readonly IContentManager contentManager;
    private readonly IFontRenderer fontRenderer;
    private readonly IBatcher batcher;
    private readonly SystemDisplay mainDisplay;
    private readonly List<string> info = [];
    private readonly int totalDisplays;
    private IFont? font;
    private int winCenterX;
    private int textStartY;

    /// <summary>
    /// Initializes a new instance of the <see cref="Game"/> class.
    /// </summary>
    public Game()
    {
        this.batcher = RendererFactory.CreateBatcher();
        this.fontRenderer = RendererFactory.CreateFontRenderer();
        this.contentManager = ContentManager.Create();
        this.mainDisplay = HardwareFactory.GetMainDisplay();
        this.totalDisplays = HardwareFactory.GetDisplays().Length;
    }

    /// <summary>
    /// Load content here.
    /// </summary>
    protected override void OnLoad()
    {
        this.font = this.contentManager.LoadFont("TimesNewRoman-Regular", 12);

        this.winCenterX = (int)Width / 2;
        this.textStartY = (int)Height / 4;
        this.info.Add($"Total Displays: {this.totalDisplays}");
        this.info.Add($"Main Display Center: {this.mainDisplay.Center.X} x {this.mainDisplay.Center.Y}");
        this.info.Add($"Horizontal Scale: {this.mainDisplay.HorizontalScale}");
        this.info.Add($"Horizontal DPI: {this.mainDisplay.HorizontalDPI}");
        this.info.Add($"Vertical Scale: {this.mainDisplay.VerticalScale}");
        this.info.Add($"Vertical DPI: {this.mainDisplay.VerticalDPI}");
        this.info.Add($"Red Bit Depth: {this.mainDisplay.RedBitDepth}");
        this.info.Add($"Green Bit Depth: {this.mainDisplay.GreenBitDepth}");
        this.info.Add($"Blue Bit Depth: {this.mainDisplay.BlueBitDepth}");

        base.OnLoad();
    }

    /// <summary>
    /// Unload content here.
    /// </summary>
    protected override void OnUnload()
    {
        if (this.font is not null)
        {
            this.contentManager.Unload(this.font);
        }

        base.OnUnload();
    }

    /// <summary>
    /// Add game logic here.
    /// </summary>
    /// <param name="frameTime">The amount of time that passed for the current game loop frame.</param>
    protected override void OnUpdate(FrameTime frameTime)
    {
        ArgumentNullException.ThrowIfNull(this.font);

        base.OnUpdate(frameTime);
    }

    /// <summary>
    /// Render graphics here.
    /// </summary>
    /// <param name="frameTime">The amount of time that passed for the current game loop frame.</param>
    protected override void OnDraw(FrameTime frameTime)
    {
        ArgumentNullException.ThrowIfNull(this.font);

        this.batcher.Begin();

        const int lineHeight = 20;
        var posY = this.textStartY;

        foreach (var line in this.info)
        {
            posY += lineHeight + LineSpacing;

            this.fontRenderer.Render(this.font, line, this.winCenterX, posY);
        }

        this.batcher.End();

        base.OnDraw(frameTime);
    }
}
