#### [Velaptor](index.md 'index')
### [Velaptor.Graphics.Renderers](Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

## IRendererFactory Interface

Creates renderer instances.

```csharp
public interface IRendererFactory
```

Derived  
&#8627; [RendererFactory](Velaptor.Factories.RendererFactory.md 'Velaptor.Factories.RendererFactory')
### Methods

<a name='Velaptor.Graphics.Renderers.IRendererFactory.CreateFontRenderer()'></a>

## IRendererFactory.CreateFontRenderer() Method

Creates an instance of the [IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor.Graphics.Renderers.IFontRenderer').

```csharp
Velaptor.Graphics.Renderers.IFontRenderer CreateFontRenderer();
```

#### Returns
[IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor.Graphics.Renderers.IFontRenderer')  
The font renderer.

### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Graphics.Renderers.IRendererFactory.CreateLineRenderer()'></a>

## IRendererFactory.CreateLineRenderer() Method

Creates an instance of the [ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor.Graphics.Renderers.ILineRenderer').

```csharp
Velaptor.Graphics.Renderers.ILineRenderer CreateLineRenderer();
```

#### Returns
[ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor.Graphics.Renderers.ILineRenderer')  
The line renderer.

### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Graphics.Renderers.IRendererFactory.CreateRectangleRenderer()'></a>

## IRendererFactory.CreateRectangleRenderer() Method

Creates an instance of the [IRectangleRenderer](Velaptor.Graphics.Renderers.IRectangleRenderer.md 'Velaptor.Graphics.Renderers.IRectangleRenderer').

```csharp
Velaptor.Graphics.Renderers.IRectangleRenderer CreateRectangleRenderer();
```

#### Returns
[IRectangleRenderer](Velaptor.Graphics.Renderers.IRectangleRenderer.md 'Velaptor.Graphics.Renderers.IRectangleRenderer')  
The rectangle renderer.

### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Graphics.Renderers.IRendererFactory.CreateTextureRenderer()'></a>

## IRendererFactory.CreateTextureRenderer() Method

Creates an instance of the [ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor.Graphics.Renderers.ITextureRenderer').

```csharp
Velaptor.Graphics.Renderers.ITextureRenderer CreateTextureRenderer();
```

#### Returns
[ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor.Graphics.Renderers.ITextureRenderer')  
The texture renderer.

### Remarks
`NOTE:` the renderer is a singleton.