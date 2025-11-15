---
title: Velaptor.Graphics.IRenderContext
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### IRenderContext Interface

Represents where and how rendering will occur.

```csharp
public interface IRenderContext
```
## Methods

<a name='Velaptor.Graphics.IRenderContext.GetRenderAreaSize()'></a>

### GetRenderAreaSize() 

Gets the current size of the rendering area.

```csharp
System.Drawing.Size GetRenderAreaSize();
```

#### Returns
[System.Drawing.Size](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Size 'System.Drawing.Size')  
The render area size.

#### Remarks
This is synonymous with the OpenGL viewport.

<a name='Velaptor.Graphics.IRenderContext.SetRenderAreaSize(int,int)'></a>

### SetRenderAreaSize(int, int) 

Sets the size of the rendering area.

```csharp
void SetRenderAreaSize(int width, int height);
```
#### Parameters

<a name='Velaptor.Graphics.IRenderContext.SetRenderAreaSize(int,int).width'></a>

`width` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The width in pixels of the area.

<a name='Velaptor.Graphics.IRenderContext.SetRenderAreaSize(int,int).height'></a>

`height` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The height in pixels of the area.

#### Remarks
This is synonymous with the OpenGL viewport.
