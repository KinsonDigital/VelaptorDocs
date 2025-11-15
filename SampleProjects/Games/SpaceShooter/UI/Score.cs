// <copyright file="Score.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.UI;

using System.ComponentModel;
using System.Drawing;
using Carbonate.Fluent;
using Signals;
using Signals.Data;
using Signals.Interfaces;
using Velaptor;
using Velaptor.Content;
using Velaptor.Content.Fonts;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;

/// <summary>
/// Manages the score.
/// </summary>
public class Score : IContentLoadable, IUpdatable, IDrawable
{
    private const int Margin = 10;
    private readonly IFontRenderer fontRenderer;
    private readonly IContentManager contentManager;
    private readonly IDisposable scoreSignalUnsubscriber;
    private IFont? font;
    private SizeF textSize;
    private string scoreText = "Score: 0";
    private int currentScore;

    /// <summary>
    /// Initializes a new instance of the <see cref="Score"/> class.
    /// </summary>
    /// <param name="scoreSignal">Receives notifications about changes to the score.</param>
    public Score(IScoreSignal scoreSignal)
    {
        var scoreSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.ScoreUpdate)
            .BuildOneWayReceive<ScoreData>(UpdateScore);

        this.scoreSignalUnsubscriber = scoreSignal.Subscribe(scoreSubscription);

        this.fontRenderer = RendererFactory.CreateFontRenderer();
        this.contentManager = ContentManager.Create();
    }

    /// <summary>
    /// Gets a value indicating whether the content has been loaded.
    /// </summary>
    public bool IsLoaded { get; private set; }

    /// <summary>
    /// Loads the content.
    /// </summary>
    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        this.font = this.contentManager.LoadFont("TimesNewRoman-Regular", 24);

        IsLoaded = true;
    }

    /// <summary>
    /// Unloads the content.
    /// </summary>
    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        if (this.font is not null)
        {
            this.contentManager.Unload(this.font);
        }

        this.scoreSignalUnsubscriber.Dispose();
    }

    /// <summary>
    /// Updates the score.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    public void Update(FrameTime frameTime)
    {
        ArgumentNullException.ThrowIfNull(this.font);

        this.textSize = this.font.Measure(this.scoreText);
    }

    /// <summary>
    /// Renders the score.
    /// </summary>
    public void Render()
    {
        ArgumentNullException.ThrowIfNull(this.font);

        var halfWidth = this.textSize.Width / 2f;
        var halfHeight = this.textSize.Height / 2f;
        var x = (int)halfWidth + Margin;
        var y = (int)halfHeight + Margin;

        this.fontRenderer.Render(this.font, this.scoreText, x, y, Color.White);
    }

    /// <summary>
    /// Updates the score based on the type of way to apply the amount ot change the score.
    /// </summary>
    /// <param name="scoreData">Data about the score.</param>
    /// <exception cref="InvalidEnumArgumentException">
    ///     Thrown if the <see cref="ScoreData.ApplyMethod"/> is not a valid enum value.
    /// </exception>
    private void UpdateScore(ScoreData scoreData)
    {
        this.currentScore = scoreData.ApplyMethod switch
        {
            MathOperations.Add => this.currentScore + scoreData.Amount,
            MathOperations.Subtract => this.currentScore - scoreData.Amount,
            _ => throw new InvalidEnumArgumentException(
                $"{nameof(scoreData)}.{nameof(scoreData.ApplyMethod)}",
                (int)scoreData.ApplyMethod,
                typeof(MathOperations)),
        };

        this.scoreText = $"Score: {this.currentScore}";
    }
}
