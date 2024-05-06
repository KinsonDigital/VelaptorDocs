---
title: Velaptor.Graphics.AtlasSubTextureData
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### AtlasSubTextureData Struct

Holds data about a texture atlas sub texture.

```csharp
public readonly struct AtlasSubTextureData
```
## Properties

<a name='Velaptor.Graphics.AtlasSubTextureData.Bounds'></a>

### Bounds 

Gets the bounds of the sub texture data.

```csharp
public System.Drawing.Rectangle Bounds { get; set; }
```

#### Property Value
[System.Drawing.Rectangle](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Rectangle 'System.Drawing.Rectangle')

<a name='Velaptor.Graphics.AtlasSubTextureData.FrameIndex'></a>

### FrameIndex 

Gets the index of the sub texture frame.

```csharp
public int FrameIndex { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

#### Remarks
This is used for frames of animation.  A negative value indicates  
whether the sub texture is part of any animation frames.

<a name='Velaptor.Graphics.AtlasSubTextureData.Name'></a>

### Name 

Gets the name of the sub texture.

```csharp
public string Name { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')