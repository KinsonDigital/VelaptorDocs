---
title: Velaptor.Content.AtlasData
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### AtlasData Class

Holds data relating to a texture atlas.

```csharp
public sealed class AtlasData :
Velaptor.Content.IAtlasData,
Velaptor.Content.IContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → AtlasData

Implements [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData'), [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
## Properties

<a name='Velaptor.Content.AtlasData.AtlasDataFilePath'></a>

### AtlasDataFilePath 

Gets the file path to the atlas data.

```csharp
public string AtlasDataFilePath { get; }
```

Implements [AtlasDataFilePath](Velaptor.Content.IAtlasData.md#atlasdatafilepath 'Velaptor.Content.IAtlasData.AtlasDataFilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.AtlasData.FilePath'></a>

### FilePath 

Gets the path to the texture.

```csharp
public string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IContent.md#filepath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.AtlasData.Height'></a>

### Height 

Gets the height of the entire texture atlas texture.

```csharp
public uint Height { get; }
```

Implements [Height](Velaptor.Content.IAtlasData.md#height 'Velaptor.Content.IAtlasData.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.AtlasData.Name'></a>

### Name 

Gets the name of the atlas.

```csharp
public string Name { get; }
```

Implements [Name](Velaptor.Content.IContent.md#name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.AtlasData.SubTextureNames'></a>

### SubTextureNames 

Gets a list of unique sub texture names.

```csharp
public System.Collections.Generic.IReadOnlyCollection<string> SubTextureNames { get; }
```

Implements [SubTextureNames](Velaptor.Content.IAtlasData.md#subtexturenames 'Velaptor.Content.IAtlasData.SubTextureNames')

#### Property Value
[System.Collections.Generic.IReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')

#### Remarks
Will not return duplicate names of animating sub textures.  
Animating sub textures will have identical names.

<a name='Velaptor.Content.AtlasData.Texture'></a>

### Texture 

Gets the texture of the atlas.

```csharp
public Velaptor.Content.ITexture Texture { get; }
```

Implements [Texture](Velaptor.Content.IAtlasData.md#texture 'Velaptor.Content.IAtlasData.Texture')

#### Property Value
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

<a name='Velaptor.Content.AtlasData.this[int]'></a>

### this[int] 

The iterator for the atlas sub texture data.

```csharp
public Velaptor.Graphics.AtlasSubTextureData this[int index] { get; }
```
#### Parameters

<a name='Velaptor.Content.AtlasData.this[int].index'></a>

`index` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The index of the item to retrieve.

Implements [this[int](Velaptor.Content.IAtlasData.md#this[int] 'Velaptor.Content.IAtlasData.this[int]')

#### Property Value
[AtlasSubTextureData](Velaptor.Graphics.AtlasSubTextureData.md 'Velaptor.Graphics.AtlasSubTextureData')

<a name='Velaptor.Content.AtlasData.Width'></a>

### Width 

Gets the width of the entire texture atlas texture.

```csharp
public uint Width { get; }
```

Implements [Width](Velaptor.Content.IAtlasData.md#width 'Velaptor.Content.IAtlasData.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
## Methods

<a name='Velaptor.Content.AtlasData.GetFrames(string)'></a>

### GetFrames(string) 

Gets the all the frames that have the given sub texture id.

```csharp
public Velaptor.Graphics.AtlasSubTextureData[] GetFrames(string subTextureId);
```
#### Parameters

<a name='Velaptor.Content.AtlasData.GetFrames(string).subTextureId'></a>

`subTextureId` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The sub texture ID of the frames to return.

Implements [GetFrames(string)](Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.GetFrames(string) 'Velaptor.Content.IAtlasData.GetFrames(string)')

#### Returns
[AtlasSubTextureData](Velaptor.Graphics.AtlasSubTextureData.md 'Velaptor.Graphics.AtlasSubTextureData')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The list of frame rectangles.
