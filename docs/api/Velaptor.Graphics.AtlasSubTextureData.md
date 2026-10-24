---
title: Velaptor.Graphics.AtlasSubTextureData
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Graphics](Velaptor.Graphics.md 'Velaptor\.Graphics')

#### AtlasSubTextureData Struct

Holds data about a texture atlas sub texture\.

```csharp
public readonly record struct AtlasSubTextureData : System.IEquatable<Velaptor.Graphics.AtlasSubTextureData>
```

Implements [System\.IEquatable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1 'System\.IEquatable\`1')[AtlasSubTextureData](Velaptor.Graphics.AtlasSubTextureData.md 'Velaptor\.Graphics\.AtlasSubTextureData')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1 'System\.IEquatable\`1')
## Properties

<a name='Velaptor.Graphics.AtlasSubTextureData.Bounds'></a>

### Bounds \{#Velaptor.Graphics.AtlasSubTextureData.Bounds}

Gets the bounds of the sub texture data\.

```csharp
public System.Drawing.Rectangle Bounds { get; init; }
```

#### Property Value
[System\.Drawing\.Rectangle](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.rectangle 'System\.Drawing\.Rectangle')

<a name='Velaptor.Graphics.AtlasSubTextureData.FrameIndex'></a>

### FrameIndex \{#Velaptor.Graphics.AtlasSubTextureData.FrameIndex}

Gets the index of the sub texture frame\.

```csharp
public int FrameIndex { get; init; }
```

#### Property Value
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

#### Remarks
This is used for frames of animation\.  A negative value indicates
whether the sub texture is part of any animation frames\.

<a name='Velaptor.Graphics.AtlasSubTextureData.Name'></a>

### Name \{#Velaptor.Graphics.AtlasSubTextureData.Name}

Gets the name of the sub texture\.

```csharp
public string Name { get; init; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')
