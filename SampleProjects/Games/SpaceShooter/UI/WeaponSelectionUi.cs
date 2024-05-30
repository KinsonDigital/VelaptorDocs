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
using Signals.Interfaces;
using Velaptor;
using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;

/// <summary>
/// Shows an indicator of the currently selected weapon.
/// </summary>
public sealed class WeaponSelectionUi : IContentLoadable, IUpdatable, IDrawable
{
    private const int SelectionItemMargin = 5;
    private const int SelectionUiMargin = 10;
    private readonly ITextureRenderer textureRenderer;
    private readonly ILoader<IAtlasData> atlasLoader;
    private WeaponType typeOfWeapon;
    private Vector2 orangePos;
    private Vector2 redPos;
    private Vector2 greenPos;
    private Vector2 bluePos;
    private RectangleF worldBounds;
    private IAtlasData atlasData;
    private Rectangle selectionSrcRect;
    private Rectangle lazerSrcRect;

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
            .BuildOneWayReceive<WeaponType>(weaponType => this.typeOfWeapon = weaponType);

        swapWeaponSignal.Subscribe(swapSubscription);
        worldSignal.Subscribe(worldSubscription);

        this.atlasLoader = ContentLoaderFactory.CreateAtlasLoader();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
    }

    /// <summary>
    /// Gets or sets the position of the UI element.
    /// </summary>
    public Vector2 Position { get; set; }

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

        this.atlasData = this.atlasLoader.Load("atlas");

        this.selectionSrcRect = this.atlasData.GetFrames("weapon-selection")[0].Bounds;
        this.lazerSrcRect = this.atlasData.GetFrames("laser")[0].Bounds;

        var weaponUiWidth = (4 * this.selectionSrcRect.Width) + (3 * SelectionItemMargin);
        var selectionRectHalfHeight = this.selectionSrcRect.Height / 2;

        Position = new Vector2(
            this.worldBounds.Width - (weaponUiWidth + SelectionUiMargin),
            selectionRectHalfHeight + SelectionUiMargin);

        IsLoaded = true;
    }

    /// <summary>
    /// Unloads the weapons selection UI content.
    /// </summary>
    public void UnloadContent() => this.atlasLoader.Unload(this.atlasData);

    /// <summary>
    /// Updates the weapon selection UI.
    /// </summary>
    /// <param name="frameTime">The amount of time that has passed for the current frame.</param>
    public void Update(FrameTime frameTime)
    {
        // Calculate the position for all of the lasers
        var orangeX = Position.X;
        var redX = orangeX + SelectionItemMargin + this.selectionSrcRect.Width;
        var greenX = redX + SelectionItemMargin + this.selectionSrcRect.Width;
        var blueX = greenX + SelectionItemMargin + this.selectionSrcRect.Width;

        this.orangePos = Position with { X = orangeX };
        this.redPos = Position with { X = redX };
        this.greenPos = Position with { X = greenX };
        this.bluePos = Position with { X = blueX };
    }

    /// <summary>
    /// Renders the weapon selection UI.
    /// </summary>
    /// <exception cref="InvalidEnumArgumentException">
    ///     Thrown if the <see cref="typeOfWeapon"/> is not a valid enum value.
    /// </exception>
    public void Render()
    {
        // Render the colored lazer options
        RenderWeaponTypes(this.orangePos, Color.Orange);
        RenderWeaponTypes(this.redPos, Color.Red);
        RenderWeaponTypes(this.greenPos, Color.Green);
        RenderWeaponTypes(this.bluePos, Color.Blue);

        var selectionPos = this.typeOfWeapon switch
        {
            WeaponType.Red => this.redPos,
            WeaponType.Orange => this.orangePos,
            WeaponType.Green => this.greenPos,
            WeaponType.Blue => this.bluePos,
            _ => throw new InvalidEnumArgumentException(nameof(this.typeOfWeapon), (int)this.typeOfWeapon, typeof(WeaponType)),
        };

        var destRect = new Rectangle(
            (int)selectionPos.X,
            (int)Position.Y,
            (int)this.atlasData.Texture.Width,
            (int)this.atlasData.Texture.Height);

        this.textureRenderer.Render(
            this.atlasData.Texture,
            this.selectionSrcRect,
            destRect,
            1,
            0,
            Color.White,
            RenderEffects.None);
    }

    /// <summary>
    /// Renders the types of weapons to choose from.
    /// </summary>
    /// <param name="pos">The position of the weapon.</param>
    /// <param name="color">The color of the weapon.</param>
    private void RenderWeaponTypes(Vector2 pos, Color color)
    {
        var destRect = new Rectangle(
            (int)pos.X,
            (int)pos.Y,
            (int)this.atlasData.Texture.Width,
            (int)this.atlasData.Texture.Height);

        this.textureRenderer.Render(
            this.atlasData.Texture,
            this.lazerSrcRect,
            destRect,
            1,
            0,
            color,
            RenderEffects.None);
    }
}
