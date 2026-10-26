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

<a name='Velaptor.Factories.RendererFactory.CreateShapeRenderer()'></a>

### CreateShapeRenderer\(\) \{#Velaptor.Factories.RendererFactory.CreateShapeRenderer()}

Creates an instance of the [IShapeRenderer](Velaptor.Graphics.Renderers.IShapeRenderer.md 'Velaptor\.Graphics\.Renderers\.IShapeRenderer')\.

```csharp
public static Velaptor.Graphics.Renderers.IShapeRenderer CreateShapeRenderer();
```

#### Returns
[IShapeRenderer](Velaptor.Graphics.Renderers.IShapeRenderer.md 'Velaptor\.Graphics\.Renderers\.IShapeRenderer')  
The rectangle renderer\.

<a name='Velaptor.Factories.RendererFactory.CreateTextRenderer()'></a>

### CreateTextRenderer\(\) \{#Velaptor.Factories.RendererFactory.CreateTextRenderer()}

Creates an instance of the [ITextRenderer](Velaptor.Graphics.Renderers.ITextRenderer.md 'Velaptor\.Graphics\.Renderers\.ITextRenderer')\.

```csharp
public static Velaptor.Graphics.Renderers.ITextRenderer CreateTextRenderer();
```

#### Returns
[ITextRenderer](Velaptor.Graphics.Renderers.ITextRenderer.md 'Velaptor\.Graphics\.Renderers\.ITextRenderer')  
The text renderer\.

<a name='Velaptor.Factories.RendererFactory.CreateTextureRenderer()'></a>

### CreateTextureRenderer\(\) \{#Velaptor.Factories.RendererFactory.CreateTextureRenderer()}

Creates an instance of the [ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor\.Graphics\.Renderers\.ITextureRenderer')\.

```csharp
public static Velaptor.Graphics.Renderers.ITextureRenderer CreateTextureRenderer();
```

#### Returns
[ITextureRenderer](Velaptor.Graphics.Renderers.ITextureRenderer.md 'Velaptor\.Graphics\.Renderers\.ITextureRenderer')  
The texture renderer\.
