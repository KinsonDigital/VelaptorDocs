#### [Velaptor](index.md 'index')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## IAtlasData Interface

Holds data for a texture atlas.

```csharp
public interface IAtlasData :
Velaptor.Content.IContent
```

Derived  
&#8627; [AtlasData](Velaptor.Content.AtlasData.md 'Velaptor.Content.AtlasData')

Implements [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
### Properties

<a name='Velaptor.Content.IAtlasData.AtlasDataFilePath'></a>

## IAtlasData.AtlasDataFilePath Property

Gets the file path to the atlas data.

```csharp
string AtlasDataFilePath { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.IAtlasData.Height'></a>

## IAtlasData.Height Property

Gets the height of the entire texture atlas texture.

```csharp
uint Height { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.IAtlasData.SubTextureNames'></a>

## IAtlasData.SubTextureNames Property

Gets the list of frame names.

```csharp
System.Collections.ObjectModel.ReadOnlyCollection<string> SubTextureNames { get; }
```

#### Property Value
[System.Collections.ObjectModel.ReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')

<a name='Velaptor.Content.IAtlasData.Texture'></a>

## IAtlasData.Texture Property

Gets the the texture of the atlas.

```csharp
Velaptor.Content.ITexture Texture { get; }
```

#### Property Value
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

<a name='Velaptor.Content.IAtlasData.this[int]'></a>

## IAtlasData.this[int] Property

The iterator for the atlas sub texture data.

```csharp
Velaptor.Graphics.AtlasSubTextureData this[int index] { get; }
```
#### Parameters

<a name='Velaptor.Content.IAtlasData.this[int].index'></a>

`index` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The index of the item to retrieve.

#### Property Value
[AtlasSubTextureData](Velaptor.Graphics.AtlasSubTextureData.md 'Velaptor.Graphics.AtlasSubTextureData')

<a name='Velaptor.Content.IAtlasData.Width'></a>

## IAtlasData.Width Property

Gets the width of the entire texture atlas texture.

```csharp
uint Width { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
### Methods

<a name='Velaptor.Content.IAtlasData.GetFrames(string)'></a>

## IAtlasData.GetFrames(string) Method

Gets the all of the frames that have the given sub texture id.

```csharp
Velaptor.Graphics.AtlasSubTextureData[] GetFrames(string subTextureId);
```
#### Parameters

<a name='Velaptor.Content.IAtlasData.GetFrames(string).subTextureId'></a>

`subTextureId` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The sub texture ID of the frames to return.

#### Returns
[AtlasSubTextureData](Velaptor.Graphics.AtlasSubTextureData.md 'Velaptor.Graphics.AtlasSubTextureData')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The list of frame rectangles.