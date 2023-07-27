---
title: Velaptor.Graphics.Renderers.IRendererFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics.Renderers](Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

#### IRendererFactory Interface

Creates renderer instances.

```csharp
public interface IRendererFactory
```

Derived  
&#8627; [RendererFactory](Velaptor.Factories.RendererFactory.md 'Velaptor.Factories.RendererFactory')
## Methods

<a name='Velaptor.Graphics.Renderers.IRendererFactory.CreateFontRenderer()'></a>

### CreateFontRenderer() 

Creates an instance of the [IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor.Graphics.Renderers.IFontRenderer').

```csharp
Velaptor.Graphics.Renderers.IFontRenderer CreateFontRenderer();
```

#### Returns
[IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor.Graphics.Renderers.IFontRenderer')  
The font renderer.

#### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Graphics.Renderers.IRendererFactory.CreateLineRenderer()'></a>

### CreateLineRenderer() 

Creates an instance of the [ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor.Graphics.Renderers.ILineRenderer').

```csharp
Velaptor.Graphics.Renderers.ILineRenderer CreateLineRenderer();
```

#### Returns
[ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor.Graphics.Renderers.ILineRenderer')  
The line renderer.

#### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Graphics.Renderers.IRendererFactory.CreateShapeRenderer()'></a>

### CreateShapeRenderer() 

Creates an instance of the [IShapeRenderer](Velaptor.Graphics.Renderers.IShapeRenderer.md 'Velaptor.Graphics.Renderers.IShapeRenderer').

```csharp
Velaptor.Graphics.Renderers.IShapeRenderer CreateShapeRenderer();
```

#### Returns
[IShapeRenderer](Velaptor.Graphics.Renderers.IShapeRenderer.md 'Velaptor.Graphics.Renderers.IShapeRenderer')  
The rectangle renderer.

#### Remarks
`NOTE:` the renderer is a singleton.

<a name='Velaptor.Graphics.Renderers.IRendererFactory.CreateTextureRenderer()'></a>

### CreateTextureRenderer() 

Creates an instance of the [ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor.Graphics.Renderers.ITextureRenderer').

```csharp
Velaptor.Graphics.Renderers.ITextureRenderer CreateTextureRenderer();
```

#### Returns
[ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor.Graphics.Renderers.ITextureRenderer')  
The texture renderer.

#### Remarks
`NOTE:` the renderer is a singleton.