#### [Velaptor](index.md 'index')
### [Velaptor.Factories](Velaptor.Factories.md 'Velaptor.Factories')

## RendererFactory Class

Creates renderer instances.

```csharp
public sealed class RendererFactory :
Velaptor.Graphics.Renderers.IRendererFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; RendererFactory

Implements [IRendererFactory](Velaptor.Graphics.Renderers.IRendererFactory.md 'Velaptor.Graphics.Renderers.IRendererFactory')
### Methods

<a name='Velaptor.Factories.RendererFactory.CreateFontRenderer()'></a>

## RendererFactory.CreateFontRenderer() Method

Creates an instance of the [IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor.Graphics.Renderers.IFontRenderer').

```csharp
public Velaptor.Graphics.Renderers.IFontRenderer CreateFontRenderer();
```

Implements [CreateFontRenderer()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateFontRenderer() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateFontRenderer()')

#### Returns
[IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor.Graphics.Renderers.IFontRenderer')  
The font renderer.

### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Factories.RendererFactory.CreateLineRenderer()'></a>

## RendererFactory.CreateLineRenderer() Method

Creates an instance of the [ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor.Graphics.Renderers.ILineRenderer').

```csharp
public Velaptor.Graphics.Renderers.ILineRenderer CreateLineRenderer();
```

Implements [CreateLineRenderer()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateLineRenderer() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateLineRenderer()')

#### Returns
[ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor.Graphics.Renderers.ILineRenderer')  
The line renderer.

### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Factories.RendererFactory.CreateRectangleRenderer()'></a>

## RendererFactory.CreateRectangleRenderer() Method

Creates an instance of the [IRectangleRenderer](Velaptor.Graphics.Renderers.IRectangleRenderer.md 'Velaptor.Graphics.Renderers.IRectangleRenderer').

```csharp
public Velaptor.Graphics.Renderers.IRectangleRenderer CreateRectangleRenderer();
```

Implements [CreateRectangleRenderer()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateRectangleRenderer() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateRectangleRenderer()')

#### Returns
[IRectangleRenderer](Velaptor.Graphics.Renderers.IRectangleRenderer.md 'Velaptor.Graphics.Renderers.IRectangleRenderer')  
The rectangle renderer.

### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Factories.RendererFactory.CreateTextureRenderer()'></a>

## RendererFactory.CreateTextureRenderer() Method

Creates an instance of the [ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor.Graphics.Renderers.ITextureRenderer').

```csharp
public Velaptor.Graphics.Renderers.ITextureRenderer CreateTextureRenderer();
```

Implements [CreateTextureRenderer()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateTextureRenderer() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateTextureRenderer()')

#### Returns
[ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor.Graphics.Renderers.ITextureRenderer')  
The texture renderer.

### Remarks
`NOTE:` the renderer is a singleton.