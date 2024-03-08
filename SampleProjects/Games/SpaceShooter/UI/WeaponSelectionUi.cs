// <copyright file="WeaponSelectionUi.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.UI;

using System.ComponentModel;
using System.Drawing;
using System.Numerics;
using Carbonate.Fluent;
using Signals;
using Signals.Data;
using Velaptor;
using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics.Renderers;

/// <summary>
/// Shows an indicator of the currently selected weapon.
/// </summary>
public sealed class WeaponSelectionUi : IContentLoadable
{
    private const int SelectionItemMargin = 5;
    private const int SelectionUiMargin = 10;
    private readonly ITextureRenderer textureRenderer;
    private readonly ILoader<ITexture> contentLoader;
    private ITexture selectionRect;
    private ITexture laser;
    private Vector2 orangePos;
    private Vector2 redPos;
    private Vector2 greenPos;
    private Vector2 bluePos;
    private Rectangle worldBounds;

    /// <summary>
    /// Initializes a new instance of the <see cref="WeaponSelectionUi"/> class.
    /// </summary>
    /// <param name="worldSignal">Receives updates about the world.</param>
    /// <param name="swapWeaponSignal">Sends a signal that a weapon has been swapped.</param>
    public WeaponSelectionUi(
        IWorldSignal worldSignal,
        ISwapWeaponSignal swapWeaponSignal)
    {
        var worldSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.WorldDataUpdate)
            .BuildOneWayReceive<WorldData>(data => this.worldBounds = data.WorldBounds);

        var swapSubscription = ISubscriptionBuilder.Create()
            .WithId(SignalIds.SwapWeapon)
            .BuildOneWayReceive<WeaponType>(weaponType => TypeOfWeapon = weaponType);

        swapWeaponSignal.Subscribe(swapSubscription);
        worldSignal.Subscribe(worldSubscription);

        this.contentLoader = ContentLoaderFactory.CreateTextureLoader();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
    }

    /// <summary>
    /// Gets or sets the position of the weapon selection UI.
    /// </summary>
    public Vector2 Position { get; set; }

    /// <summary>
    /// Gets the type of weapon.
    /// </summary>
    public WeaponType TypeOfWeapon { get; private set; }

    /// <summary>
    /// Gets a value indicating whether or not the content is loaded.
    /// </summary>
    public bool IsLoaded { get; private set; }

    /// <summary>
    /// Loads the weapons selection UI content.
    /// </summary>
    public void LoadContent()
    {
        if (IsLoaded)
        {
            return;
        }

        this.selectionRect = this.contentLoader.Load("weapon-selection");
        this.laser = this.contentLoader.Load("laser.png");

        var weaponUiWidth = (4 * this.selectionRect.Width) + (3 * SelectionItemMargin);
        var selectionRectHalfHeight = this.selectionRect.Height / 2;
        Position = new Vector2(
            this.worldBounds.Width - (weaponUiWidth + SelectionUiMargin),
            selectionRectHalfHeight + SelectionUiMargin);

        IsLoaded = true;
    }

    /// <summary>
    /// Unloads the weapons selection UI content.
    /// </summary>
    public void UnloadContent()
    {
        if (!IsLoaded)
        {
            return;
        }

        this.contentLoader.Unload(this.selectionRect);
        this.contentLoader.Unload(this.laser);
    }

    /// <summary>
    /// Updates the weapon selection UI.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    public void Update(FrameTime frameTime)
    {
        // Calculate the position for all of the lasers
        var orangeX = Position.X;
        var redX = orangeX + SelectionItemMargin + this.selectionRect.Width;
        var greenX = redX + SelectionItemMargin + this.selectionRect.Width;
        var blueX = greenX + SelectionItemMargin + this.selectionRect.Width;

        this.orangePos = Position with { X = orangeX };
        this.redPos = Position with { X = redX };
        this.greenPos = Position with { X = greenX };
        this.bluePos = Position with { X = blueX };
    }

    /// <summary>
    /// Renders the weapon selection UI.
    /// </summary>
    /// <exception cref="InvalidEnumArgumentException">
    ///     Trhown if the <see cref="TypeOfWeapon"/> has an invalid value.
    /// </exception>
    public void Render()
    {
        // Render the white laser
        this.textureRenderer.Render(this.laser, this.orangePos, Color.Orange);
        this.textureRenderer.Render(this.laser, this.redPos, Color.Red);
        this.textureRenderer.Render(this.laser, this.greenPos, Color.Green);
        this.textureRenderer.Render(this.laser, this.bluePos, Color.Blue);

        var selectionPos = TypeOfWeapon switch
        {
            WeaponType.Red => this.redPos,
            WeaponType.Orange => this.orangePos,
            WeaponType.Green => this.greenPos,
            WeaponType.Blue => this.bluePos,
            _ => throw new InvalidEnumArgumentException(nameof(TypeOfWeapon), (int)TypeOfWeapon, typeof(WeaponType)),
        };

        this.textureRenderer.Render(this.selectionRect, new Vector2(selectionPos.X, Position.Y));
    }
}
