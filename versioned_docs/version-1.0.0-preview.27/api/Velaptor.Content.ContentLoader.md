---
title: Velaptor.Content.ContentLoader
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### ContentLoader Class

Loads content.

```csharp
public sealed class ContentLoader :
Velaptor.Content.IContentLoader
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → ContentLoader

Implements [IContentLoader](Velaptor.Content.IContentLoader.md 'Velaptor.Content.IContentLoader')
## Constructors

<a name='Velaptor.Content.ContentLoader.ContentLoader(Velaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ILoader<Velaptor.Content.ISound>,Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>,Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>)'></a>

### ContentLoader(ILoader&lt;ITexture&gt;, ILoader&lt;ISound&gt;, ILoader&lt;IAtlasData&gt;, ILoader&lt;IFont&gt;) Constructor

Initializes a new instance of the [ContentLoader](Velaptor.Content.ContentLoader.md 'Velaptor.Content.ContentLoader') class.

```csharp
public ContentLoader(Velaptor.Content.ILoader<Velaptor.Content.ITexture> textureLoader, Velaptor.Content.ILoader<Velaptor.Content.ISound> soundLoader, Velaptor.Content.ILoader<Velaptor.Content.IAtlasData> atlasLoader, Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont> fontLoader);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.ContentLoader(Velaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ILoader<Velaptor.Content.ISound>,Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>,Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>).textureLoader'></a>

`textureLoader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

Loads textures.

<a name='Velaptor.Content.ContentLoader.ContentLoader(Velaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ILoader<Velaptor.Content.ISound>,Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>,Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>).soundLoader'></a>

`soundLoader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

Loads sounds.

<a name='Velaptor.Content.ContentLoader.ContentLoader(Velaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ILoader<Velaptor.Content.ISound>,Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>,Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>).atlasLoader'></a>

`atlasLoader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

Loads a texture atlas.

<a name='Velaptor.Content.ContentLoader.ContentLoader(Velaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ILoader<Velaptor.Content.ISound>,Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>,Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>).fontLoader'></a>

`fontLoader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

Loads fonts for rendering text.
## Methods

<a name='Velaptor.Content.ContentLoader.LoadAtlas(string)'></a>

### LoadAtlas(string) 

Loads the texture atlas data using the given [nameOrFilePath](Velaptor.Content.ContentLoader.md#Velaptor.Content.ContentLoader.LoadAtlas(string).nameOrFilePath 'Velaptor.Content.ContentLoader.LoadAtlas(string).nameOrFilePath').

```csharp
public Velaptor.Content.IAtlasData LoadAtlas(string nameOrFilePath);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.LoadAtlas(string).nameOrFilePath'></a>

`nameOrFilePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name content in the application's content directory or direct file path to the content.

Implements [LoadAtlas(string)](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadAtlas(string) 'Velaptor.Content.IContentLoader.LoadAtlas(string)')

#### Returns
[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')  
The loaded texture atlas data.

<a name='Velaptor.Content.ContentLoader.LoadFont(string,uint)'></a>

### LoadFont(string, uint) 

Loads font content using the given [nameOrFilePath](Velaptor.Content.ContentLoader.md#Velaptor.Content.ContentLoader.LoadFont(string,uint).nameOrFilePath 'Velaptor.Content.ContentLoader.LoadFont(string, uint).nameOrFilePath') and [size](Velaptor.Content.ContentLoader.md#Velaptor.Content.ContentLoader.LoadFont(string,uint).size 'Velaptor.Content.ContentLoader.LoadFont(string, uint).size').

```csharp
public Velaptor.Content.Fonts.IFont LoadFont(string nameOrFilePath, uint size);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.LoadFont(string,uint).nameOrFilePath'></a>

`nameOrFilePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name content in the application's content directory or direct file path to the content.

<a name='Velaptor.Content.ContentLoader.LoadFont(string,uint).size'></a>

`size` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The point size of the font.

Implements [LoadFont(string, uint)](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadFont(string,uint) 'Velaptor.Content.IContentLoader.LoadFont(string, uint)')

#### Returns
[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
The loaded font content.

<a name='Velaptor.Content.ContentLoader.LoadSound(string)'></a>

### LoadSound(string) 

Loads sound content using the given [nameOrFilePath](Velaptor.Content.ContentLoader.md#Velaptor.Content.ContentLoader.LoadSound(string).nameOrFilePath 'Velaptor.Content.ContentLoader.LoadSound(string).nameOrFilePath').

```csharp
public Velaptor.Content.ISound LoadSound(string nameOrFilePath);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.LoadSound(string).nameOrFilePath'></a>

`nameOrFilePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name content in the application's content directory or direct file path to the content.

Implements [LoadSound(string)](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadSound(string) 'Velaptor.Content.IContentLoader.LoadSound(string)')

#### Returns
[ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')  
The loaded sound content.

<a name='Velaptor.Content.ContentLoader.LoadTexture(string)'></a>

### LoadTexture(string) 

Loads texture content using the given [nameOrFilePath](Velaptor.Content.ContentLoader.md#Velaptor.Content.ContentLoader.LoadTexture(string).nameOrFilePath 'Velaptor.Content.ContentLoader.LoadTexture(string).nameOrFilePath').

```csharp
public Velaptor.Content.ITexture LoadTexture(string nameOrFilePath);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.LoadTexture(string).nameOrFilePath'></a>

`nameOrFilePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name content in the application's content directory or direct file path to the content.

Implements [LoadTexture(string)](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadTexture(string) 'Velaptor.Content.IContentLoader.LoadTexture(string)')

#### Returns
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')  
The loaded texture content.

<a name='Velaptor.Content.ContentLoader.UnloadAtlas(Velaptor.Content.IAtlasData)'></a>

### UnloadAtlas(IAtlasData) 

Unloads the atlas data content.

```csharp
public void UnloadAtlas(Velaptor.Content.IAtlasData content);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.UnloadAtlas(Velaptor.Content.IAtlasData).content'></a>

`content` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The content to unload.

Implements [UnloadAtlas(IAtlasData)](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.UnloadAtlas(Velaptor.Content.IAtlasData) 'Velaptor.Content.IContentLoader.UnloadAtlas(Velaptor.Content.IAtlasData)')

<a name='Velaptor.Content.ContentLoader.UnloadFont(Velaptor.Content.Fonts.IFont)'></a>

### UnloadFont(IFont) 

Unloads the font.

```csharp
public void UnloadFont(Velaptor.Content.Fonts.IFont content);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.UnloadFont(Velaptor.Content.Fonts.IFont).content'></a>

`content` [IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The content to unload.

Implements [UnloadFont(IFont)](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.UnloadFont(Velaptor.Content.Fonts.IFont) 'Velaptor.Content.IContentLoader.UnloadFont(Velaptor.Content.Fonts.IFont)')

<a name='Velaptor.Content.ContentLoader.UnloadSound(Velaptor.Content.ISound)'></a>

### UnloadSound(ISound) 

Unloads the sound content.

```csharp
public void UnloadSound(Velaptor.Content.ISound content);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.UnloadSound(Velaptor.Content.ISound).content'></a>

`content` [ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')

The content to unload.

Implements [UnloadSound(ISound)](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.UnloadSound(Velaptor.Content.ISound) 'Velaptor.Content.IContentLoader.UnloadSound(Velaptor.Content.ISound)')

<a name='Velaptor.Content.ContentLoader.UnloadTexture(Velaptor.Content.ITexture)'></a>

### UnloadTexture(ITexture) 

Unloads the texture content.

```csharp
public void UnloadTexture(Velaptor.Content.ITexture content);
```
#### Parameters

<a name='Velaptor.Content.ContentLoader.UnloadTexture(Velaptor.Content.ITexture).content'></a>

`content` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The content to unload.

Implements [UnloadTexture(ITexture)](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.UnloadTexture(Velaptor.Content.ITexture) 'Velaptor.Content.IContentLoader.UnloadTexture(Velaptor.Content.ITexture)')