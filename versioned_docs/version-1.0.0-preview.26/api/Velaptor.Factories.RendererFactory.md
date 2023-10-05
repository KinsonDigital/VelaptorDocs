---
title: Velaptor.Factories.RendererFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](Velaptor.Factories.md 'Velaptor.Factories')

#### RendererFactory Class

Creates renderer instances.

```csharp
public sealed class RendererFactory :
Velaptor.Graphics.Renderers.IRendererFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → RendererFactory

Implements [IRendererFactory](Velaptor.Graphics.Renderers.IRendererFactory.md 'Velaptor.Graphics.Renderers.IRendererFactory')
## Methods

<a name='Velaptor.Factories.RendererFactory.CreateBatcher()'></a>

### CreateBatcher() 

Creates an instance of [IBatcher](Velaptor.Batching.IBatcher.md 'Velaptor.Batching.IBatcher') to start and stop batching.

```csharp
public Velaptor.Batching.IBatcher CreateBatcher();
```

Implements [CreateBatcher()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateBatcher() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateBatcher()')

#### Returns
[IBatcher](Velaptor.Batching.IBatcher.md 'Velaptor.Batching.IBatcher')  
The batcher instance.

<a name='Velaptor.Factories.RendererFactory.CreateFontRenderer()'></a>

### CreateFontRenderer() 

Creates an instance of the [IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor.Graphics.Renderers.IFontRenderer').

```csharp
public Velaptor.Graphics.Renderers.IFontRenderer CreateFontRenderer();
```

Implements [CreateFontRenderer()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateFontRenderer() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateFontRenderer()')

#### Returns
[IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor.Graphics.Renderers.IFontRenderer')  
The font renderer.

#### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Factories.RendererFactory.CreateLineRenderer()'></a>

### CreateLineRenderer() 

Creates an instance of the [ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor.Graphics.Renderers.ILineRenderer').

```csharp
public Velaptor.Graphics.Renderers.ILineRenderer CreateLineRenderer();
```

Implements [CreateLineRenderer()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateLineRenderer() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateLineRenderer()')

#### Returns
[ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor.Graphics.Renderers.ILineRenderer')  
The line renderer.

#### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Factories.RendererFactory.CreateShapeRenderer()'></a>

### CreateShapeRenderer() 

Creates an instance of the [IShapeRenderer](Velaptor.Graphics.Renderers.IShapeRenderer.md 'Velaptor.Graphics.Renderers.IShapeRenderer').

```csharp
public Velaptor.Graphics.Renderers.IShapeRenderer CreateShapeRenderer();
```

Implements [CreateShapeRenderer()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateShapeRenderer() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateShapeRenderer()')

#### Returns
[IShapeRenderer](Velaptor.Graphics.Renderers.IShapeRenderer.md 'Velaptor.Graphics.Renderers.IShapeRenderer')  
The rectangle renderer.

#### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Factories.RendererFactory.CreateTextureRenderer()'></a>

### CreateTextureRenderer() 

Creates an instance of the [ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor.Graphics.Renderers.ITextureRenderer').

```csharp
public Velaptor.Graphics.Renderers.ITextureRenderer CreateTextureRenderer();
```

Implements [CreateTextureRenderer()](Velaptor.Graphics.Renderers.IRendererFactory.md#Velaptor.Graphics.Renderers.IRendererFactory.CreateTextureRenderer() 'Velaptor.Graphics.Renderers.IRendererFactory.CreateTextureRenderer()')

#### Returns
[ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor.Graphics.Renderers.ITextureRenderer')  
The texture renderer.

#### Remarks
`NOTE:` the renderer is a singleton.