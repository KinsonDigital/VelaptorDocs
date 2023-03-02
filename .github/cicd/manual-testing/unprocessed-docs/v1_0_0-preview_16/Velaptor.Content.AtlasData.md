#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](./Velaptor.Content.md 'Velaptor.Content')

## AtlasData Class

Holds data relating to a texture atlas.

```csharp
public sealed class AtlasData :
Velaptor.Content.IAtlasData,
Velaptor.Content.IContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → AtlasData

Implements [IAtlasData](./Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData'), [IContent](./Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
### Constructors

<a name='Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache_string,Velaptor.Content.ITexture_,IDirectory,IPath,System.Collections.Generic.IEnumerable_Velaptor.Graphics.AtlasSubTextureData_,string,string)'></a>

## AtlasData(IItemCache<string,ITexture>, IDirectory, IPath, IEnumerable<AtlasSubTextureData>, string, string) Constructor

Initializes a new instance of the [AtlasData](./Velaptor.Content.AtlasData.md 'Velaptor.Content.AtlasData') class.

```csharp
public AtlasData(Velaptor.Content.Caching.IItemCache<string,Velaptor.Content.ITexture> textureCache, IDirectory directory, IPath path, System.Collections.Generic.IEnumerable<Velaptor.Graphics.AtlasSubTextureData> atlasSubTextureData, string dirPath, string atlasName);
```
#### Parameters

<a name='Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache_string,Velaptor.Content.ITexture_,IDirectory,IPath,System.Collections.Generic.IEnumerable_Velaptor.Graphics.AtlasSubTextureData_,string,string).textureCache'></a>

`textureCache` [Velaptor.Content.Caching.IItemCache&lt;](./Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[,](./Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>')[ITexture](./Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')[&gt;](./Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>')

Caches textures for later use to improve performance.

<a name='Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache_string,Velaptor.Content.ITexture_,IDirectory,IPath,System.Collections.Generic.IEnumerable_Velaptor.Graphics.AtlasSubTextureData_,string,string).directory'></a>

`directory` [System.IO.Abstractions.IDirectory](https://docs.microsoft.com/en-us/dotnet/api/System.IO.Abstractions.IDirectory 'System.IO.Abstractions.IDirectory')

Performs operations with directories.

<a name='Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache_string,Velaptor.Content.ITexture_,IDirectory,IPath,System.Collections.Generic.IEnumerable_Velaptor.Graphics.AtlasSubTextureData_,string,string).path'></a>

`path` [System.IO.Abstractions.IPath](https://docs.microsoft.com/en-us/dotnet/api/System.IO.Abstractions.IPath 'System.IO.Abstractions.IPath')

Performs path related operations.

<a name='Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache_string,Velaptor.Content.ITexture_,IDirectory,IPath,System.Collections.Generic.IEnumerable_Velaptor.Graphics.AtlasSubTextureData_,string,string).atlasSubTextureData'></a>

`atlasSubTextureData` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[AtlasSubTextureData](./Velaptor.Graphics.AtlasSubTextureData.md 'Velaptor.Graphics.AtlasSubTextureData')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The sub texture data of all sub textures in the atlas.

<a name='Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache_string,Velaptor.Content.ITexture_,IDirectory,IPath,System.Collections.Generic.IEnumerable_Velaptor.Graphics.AtlasSubTextureData_,string,string).dirPath'></a>

`dirPath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The path to the content.

<a name='Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache_string,Velaptor.Content.ITexture_,IDirectory,IPath,System.Collections.Generic.IEnumerable_Velaptor.Graphics.AtlasSubTextureData_,string,string).atlasName'></a>

`atlasName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the atlas.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Thrown if any of the constructor parameters are null.

[System.IO.DirectoryNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.DirectoryNotFoundException 'System.IO.DirectoryNotFoundException')  
Thrown if the [dirPath](./Velaptor.Content.AtlasData.md#Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache_string,Velaptor.Content.ITexture_,IDirectory,IPath,System.Collections.Generic.IEnumerable_Velaptor.Graphics.AtlasSubTextureData_,string,string).dirPath 'Velaptor.Content.AtlasData.AtlasData(Velaptor.Content.Caching.IItemCache<string,Velaptor.Content.ITexture>, IDirectory, IPath, System.Collections.Generic.IEnumerable<Velaptor.Graphics.AtlasSubTextureData>, string, string).dirPath') does not exist.
### Properties

<a name='Velaptor.Content.AtlasData.AtlasDataFilePath'></a>

## AtlasData.AtlasDataFilePath Property

Gets the file path to the atlas data.

```csharp
public string AtlasDataFilePath { get; }
```

Implements [AtlasDataFilePath](./Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.AtlasDataFilePath 'Velaptor.Content.IAtlasData.AtlasDataFilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.AtlasData.FilePath'></a>

## AtlasData.FilePath Property

Gets the path to the texture.

```csharp
public string FilePath { get; }
```

Implements [FilePath](./Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.AtlasData.Height'></a>

## AtlasData.Height Property

Gets the height of the entire texture atlas texture.

```csharp
public uint Height { get; }
```

Implements [Height](./Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.Height 'Velaptor.Content.IAtlasData.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.AtlasData.Name'></a>

## AtlasData.Name Property

Gets the name of the atlas.

```csharp
public string Name { get; }
```

Implements [Name](./Velaptor.Content.IContent.md#Velaptor.Content.IContent.Name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.AtlasData.SubTextureNames'></a>

## AtlasData.SubTextureNames Property

Gets a list of unique sub texture names.

```csharp
public System.Collections.ObjectModel.ReadOnlyCollection<string> SubTextureNames { get; }
```

Implements [SubTextureNames](./Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.SubTextureNames 'Velaptor.Content.IAtlasData.SubTextureNames')

#### Property Value
[System.Collections.ObjectModel.ReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')

### Remarks
Will not return duplicate names of animating sub textures.  
Animating sub textures will have identical names.

<a name='Velaptor.Content.AtlasData.Texture'></a>

## AtlasData.Texture Property

Gets the the texture of the atlas.

```csharp
public Velaptor.Content.ITexture Texture { get; }
```

Implements [Texture](./Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.Texture 'Velaptor.Content.IAtlasData.Texture')

#### Property Value
[ITexture](./Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

<a name='Velaptor.Content.AtlasData.this[int]'></a>

## AtlasData.this[int] Property

The iterator for the atlas sub texture data.

```csharp
public Velaptor.Graphics.AtlasSubTextureData this[int index] { get; }
```
#### Parameters

<a name='Velaptor.Content.AtlasData.this[int].index'></a>

`index` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The index of the item to retrieve.

Implements [this[int](Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.this[int] 'Velaptor.Content.IAtlasData.this[int]](./Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.this[int] 'Velaptor.Content.IAtlasData.this[int]')

#### Property Value
[AtlasSubTextureData](./Velaptor.Graphics.AtlasSubTextureData.md 'Velaptor.Graphics.AtlasSubTextureData')

<a name='Velaptor.Content.AtlasData.Width'></a>

## AtlasData.Width Property

Gets the width of the entire texture atlas texture.

```csharp
public uint Width { get; }
```

Implements [Width](./Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.Width 'Velaptor.Content.IAtlasData.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
### Methods

<a name='Velaptor.Content.AtlasData.GetFrames(string)'></a>

## AtlasData.GetFrames(string) Method

Gets the all of the frames that have the given sub texture id.

```csharp
public Velaptor.Graphics.AtlasSubTextureData[] GetFrames(string subTextureId);
```
#### Parameters

<a name='Velaptor.Content.AtlasData.GetFrames(string).subTextureId'></a>

`subTextureId` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The sub texture ID of the frames to return.

Implements [GetFrames(string)](./string](Velaptor.Content.IAtlasData.md#Velaptor.Content.IAtlasData.GetFrames(string)) 'Velaptor.Content.IAtlasData.GetFrames(string)')

#### Returns
[AtlasSubTextureData](./Velaptor.Graphics.AtlasSubTextureData.md 'Velaptor.Graphics.AtlasSubTextureData')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The list of frame rectangles.