// <copyright file="WeaponSelectionUI.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

namespace SpaceShooter.UI;

using System.ComponentModel;
using System.Drawing;
using System.Net.Mime;
using System.Numerics;
using Carbonate.Fluent;
using Signals;
using Signals.Data;
using Velaptor;
using Velaptor.Content;
using Velaptor.ExtensionMethods;
using Velaptor.Factories;
using Velaptor.Graphics;
using Velaptor.Graphics.Renderers;

/// <summary>
/// Shows an indicator of the currently selected weapon.
/// </summary>
public sealed class WeaponSelectionUI : IContentLoadable
{
    private const int SelectionItemMargin = 5;
    private const int SelectionUIMargin = 10;
    private readonly ITextureRenderer textureRenderer;
    private readonly ILoader<IAtlasData> atlasLoader;
    private Vector2 orangePos;
    private Vector2 redPos;
    private Vector2 greenPos;
    private Vector2 bluePos;
    private Rectangle worldBounds;
    private int weaponUiWidth;
    private IAtlasData atlasData;
    private Rectangle selectionSrcRect;
    private Rectangle lazerSrcRect;

    public WeaponSelectionUI(
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

        this.atlasLoader = ContentLoaderFactory.CreateAtlasLoader();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
    }

    public Vector2 Position { get; set; }

    public WeaponType TypeOfWeapon { get; private set; }

    public bool IsLoaded { get; }

    public void LoadContent()
    {
        this.atlasData = this.atlasLoader.Load("atlas");

        this.selectionSrcRect = this.atlasData.GetFrames("weapon-selection")[0].Bounds;
        this.lazerSrcRect = this.atlasData.GetFrames("laser")[0].Bounds;

        this.weaponUiWidth = (4 * this.selectionSrcRect.Width) + (3 * SelectionItemMargin);
        var selectionRectHalfHeight = this.selectionSrcRect.Height / 2;
        Position = new Vector2(
            this.worldBounds.Width - (this.weaponUiWidth + SelectionUIMargin),
            selectionRectHalfHeight + SelectionUIMargin);
    }

    public void UnloadContent()
    {
        this.atlasLoader.Unload(this.atlasData);
    }

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

    private void RenderLazer(Vector2 lazerPos, Color color)
    {
        var destRect = new Rectangle(
            (int)lazerPos.X,
            (int)lazerPos.Y,
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

    public void Render()
    {
        // Render the colored lazer options
        RenderLazer(this.orangePos, Color.Orange);
        RenderLazer(this.redPos, Color.Red);
        RenderLazer(this.greenPos, Color.Green);
        RenderLazer(this.bluePos, Color.Blue);

        var selectionPos = TypeOfWeapon switch
        {
            WeaponType.Red => this.redPos,
            WeaponType.Orange => this.orangePos,
            WeaponType.Green => this.greenPos,
            WeaponType.Blue => this.bluePos,
            _ => throw new InvalidEnumArgumentException(nameof(TypeOfWeapon), (int)TypeOfWeapon, typeof(WeaponType)),
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
}
