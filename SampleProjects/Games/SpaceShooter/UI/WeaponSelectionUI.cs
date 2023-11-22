// <copyright file="WeaponSelectionUI.cs" company="KinsonDigital">
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
public sealed class WeaponSelectionUI : IContentLoadable
{
    private const int SelectionItemMargin = 5;
    private const int SelectionUIMargin = 10;
    private readonly ITextureRenderer textureRenderer;
    private readonly ILoader<ITexture> contentLoader;
    private ITexture selectionRect;
    private ITexture laser;
    private Vector2 orangePos;
    private Vector2 redPos;
    private Vector2 greenPos;
    private Vector2 bluePos;
    private Rectangle worldBounds;
    private uint weaponUiWidth;

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

        this.contentLoader = ContentLoaderFactory.CreateTextureLoader();
        this.textureRenderer = RendererFactory.CreateTextureRenderer();
    }

    public Vector2 Position { get; set; }

    public WeaponType TypeOfWeapon { get; private set; }

    public bool IsLoaded { get; }

    public void LoadContent()
    {
        this.selectionRect = this.contentLoader.Load("weapon-selection");
        this.laser = this.contentLoader.Load("laser.png");

        this.weaponUiWidth = (4 * this.selectionRect.Width) + (3 * SelectionItemMargin);
        var selectionRectHalfHeight = this.selectionRect.Height / 2;
        Position = new Vector2(
            this.worldBounds.Width - (this.weaponUiWidth + SelectionUIMargin),
            selectionRectHalfHeight + SelectionUIMargin);
    }

    public void UnloadContent()
    {
        this.contentLoader.Unload(this.selectionRect);
        this.contentLoader.Unload(this.laser);
    }

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
