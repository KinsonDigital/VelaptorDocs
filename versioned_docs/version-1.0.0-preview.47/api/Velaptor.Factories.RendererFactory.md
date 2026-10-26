---
title: Velaptor.Factories.RendererFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Factories](Velaptor.Factories.md 'Velaptor\.Factories')

#### RendererFactory Class

Creates renderers for rendering different types of graphics\.

```csharp
public static class RendererFactory
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → RendererFactory
## Methods

<a name='Velaptor.Factories.RendererFactory.CreateBatcher()'></a>

### CreateBatcher\(\) \{#Velaptor.Factories.RendererFactory.CreateBatcher()}

Creates an instance of [IBatcher](Velaptor.Batching.IBatcher.md 'Velaptor\.Batching\.IBatcher') to start and stop batching\.

```csharp
public static Velaptor.Batching.IBatcher CreateBatcher();
```

#### Returns
[IBatcher](Velaptor.Batching.IBatcher.md 'Velaptor\.Batching\.IBatcher')  
The batcher instance\.

<a name='Velaptor.Factories.RendererFactory.CreateFontRenderer()'></a>

### CreateFontRenderer\(\) \{#Velaptor.Factories.RendererFactory.CreateFontRenderer()}

Creates an instance of the [IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor\.Graphics\.Renderers\.IFontRenderer')\.

```csharp
public static Velaptor.Graphics.Renderers.IFontRenderer CreateFontRenderer();
```

#### Returns
[IFontRenderer](Velaptor.Graphics.Renderers.IFontRenderer.md 'Velaptor\.Graphics\.Renderers\.IFontRenderer')  
The font renderer\.

<a name='Velaptor.Factories.RendererFactory.CreateLineRenderer()'></a>

### CreateLineRenderer\(\) \{#Velaptor.Factories.RendererFactory.CreateLineRenderer()}

Creates an instance of the [ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor\.Graphics\.Renderers\.ILineRenderer')\.

```csharp
public static Velaptor.Graphics.Renderers.ILineRenderer CreateLineRenderer();
```

#### Returns
[ILineRenderer](Velaptor.Graphics.Renderers.ILineRenderer.md 'Velaptor\.Graphics\.Renderers\.ILineRenderer')  
The line renderer\.

<a name='Velaptor.Factories.RendererFactory.CreateShapeRenderer()'></a>

### CreateShapeRenderer\(\) \{#Velaptor.Factories.RendererFactory.CreateShapeRenderer()}

Creates an instance of the [IShapeRenderer](Velaptor.Graphics.Renderers.IShapeRenderer.md 'Velaptor\.Graphics\.Renderers\.IShapeRenderer')\.

```csharp
public static Velaptor.Graphics.Renderers.IShapeRenderer CreateShapeRenderer();
```

#### Returns
[IShapeRenderer](Velaptor.Graphics.Renderers.IShapeRenderer.md 'Velaptor\.Graphics\.Renderers\.IShapeRenderer')  
The rectangle renderer\.

<a name='Velaptor.Factories.RendererFactory.CreateTextureRenderer()'></a>

### CreateTextureRenderer\(\) \{#Velaptor.Factories.RendererFactory.CreateTextureRenderer()}

Creates an instance of the [ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor\.Graphics\.Renderers\.ITextureRenderer')\.

```csharp
public static Velaptor.Graphics.Renderers.ITextureRenderer CreateTextureRenderer();
```

#### Returns
[ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor\.Graphics\.Renderers\.ITextureRenderer')  
The texture renderer\.
