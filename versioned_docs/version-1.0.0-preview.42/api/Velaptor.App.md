---
title: Velaptor.App
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor](Velaptor.md 'Velaptor')

#### App Class

Represents a Velaptor application.

```csharp
public static class App
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → App
## Methods

<a name='Velaptor.App.UseAvaloniaRenderContext(Silk.NET.OpenGL.GL,uint,uint)'></a>

### UseAvaloniaRenderContext(GL, uint, uint) 

Sets Velaptor to render to an Avalonia control.

```csharp
public static Velaptor.Graphics.IRenderContext UseAvaloniaRenderContext(Silk.NET.OpenGL.GL gl, uint renderAreaWidth, uint renderAreaHeight);
```
#### Parameters

<a name='Velaptor.App.UseAvaloniaRenderContext(Silk.NET.OpenGL.GL,uint,uint).gl'></a>

`gl` [Silk.NET.OpenGL.GL](https://docs.microsoft.com/en-us/dotnet/api/Silk.NET.OpenGL.GL 'Silk.NET.OpenGL.GL')

The [Silk](https://docs.microsoft.com/en-us/dotnet/api/Silk 'Silk') OpenGL object.

<a name='Velaptor.App.UseAvaloniaRenderContext(Silk.NET.OpenGL.GL,uint,uint).renderAreaWidth'></a>

`renderAreaWidth` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The width of the render area.

<a name='Velaptor.App.UseAvaloniaRenderContext(Silk.NET.OpenGL.GL,uint,uint).renderAreaHeight'></a>

`renderAreaHeight` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The height of the render area.

#### Returns
[IRenderContext](Velaptor.Graphics.IRenderContext.md 'Velaptor.Graphics.IRenderContext')  
The Avalonia render context.
