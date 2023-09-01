---
title: Velaptor.Content.IContentLoader
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### IContentLoader Interface

Loads various kinds of content.

```csharp
public interface IContentLoader
```

Derived  
&#8627; [ContentLoader](Velaptor.Content.ContentLoader.md 'Velaptor.Content.ContentLoader')
## Methods

<a name='Velaptor.Content.IContentLoader.LoadAtlas(string)'></a>

### LoadAtlas(string) 

Loads the texture atlas data using the given [nameOrFilePath](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadAtlas(string).nameOrFilePath 'Velaptor.Content.IContentLoader.LoadAtlas(string).nameOrFilePath').

```csharp
Velaptor.Content.IAtlasData LoadAtlas(string nameOrFilePath);
```
#### Parameters

<a name='Velaptor.Content.IContentLoader.LoadAtlas(string).nameOrFilePath'></a>

`nameOrFilePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name content in the application's content directory or direct file path to the content.

#### Returns
[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')  
The loaded texture atlas data.

<a name='Velaptor.Content.IContentLoader.LoadFont(string,uint)'></a>

### LoadFont(string, uint) 

Loads font content using the given [nameOrFilePath](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadFont(string,uint).nameOrFilePath 'Velaptor.Content.IContentLoader.LoadFont(string, uint).nameOrFilePath') and [size](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadFont(string,uint).size 'Velaptor.Content.IContentLoader.LoadFont(string, uint).size').

```csharp
Velaptor.Content.Fonts.IFont LoadFont(string nameOrFilePath, uint size);
```
#### Parameters

<a name='Velaptor.Content.IContentLoader.LoadFont(string,uint).nameOrFilePath'></a>

`nameOrFilePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name content in the application's content directory or direct file path to the content.

<a name='Velaptor.Content.IContentLoader.LoadFont(string,uint).size'></a>

`size` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The point size of the font.

#### Returns
[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
The loaded font content.

<a name='Velaptor.Content.IContentLoader.LoadSound(string)'></a>

### LoadSound(string) 

Loads sound content using the given [nameOrFilePath](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadSound(string).nameOrFilePath 'Velaptor.Content.IContentLoader.LoadSound(string).nameOrFilePath').

```csharp
Velaptor.Content.ISound LoadSound(string nameOrFilePath);
```
#### Parameters

<a name='Velaptor.Content.IContentLoader.LoadSound(string).nameOrFilePath'></a>

`nameOrFilePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name content in the application's content directory or direct file path to the content.

#### Returns
[ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')  
The loaded sound content.

<a name='Velaptor.Content.IContentLoader.LoadTexture(string)'></a>

### LoadTexture(string) 

Loads texture content using the given [nameOrFilePath](Velaptor.Content.IContentLoader.md#Velaptor.Content.IContentLoader.LoadTexture(string).nameOrFilePath 'Velaptor.Content.IContentLoader.LoadTexture(string).nameOrFilePath').

```csharp
Velaptor.Content.ITexture LoadTexture(string nameOrFilePath);
```
#### Parameters

<a name='Velaptor.Content.IContentLoader.LoadTexture(string).nameOrFilePath'></a>

`nameOrFilePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name content in the application's content directory or direct file path to the content.

#### Returns
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')  
The loaded texture content.

<a name='Velaptor.Content.IContentLoader.UnloadAtlas(Velaptor.Content.IAtlasData)'></a>

### UnloadAtlas(IAtlasData) 

Unloads the atlas data content.

```csharp
void UnloadAtlas(Velaptor.Content.IAtlasData content);
```
#### Parameters

<a name='Velaptor.Content.IContentLoader.UnloadAtlas(Velaptor.Content.IAtlasData).content'></a>

`content` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The content to unload.

<a name='Velaptor.Content.IContentLoader.UnloadFont(Velaptor.Content.Fonts.IFont)'></a>

### UnloadFont(IFont) 

Unloads the font.

```csharp
void UnloadFont(Velaptor.Content.Fonts.IFont content);
```
#### Parameters

<a name='Velaptor.Content.IContentLoader.UnloadFont(Velaptor.Content.Fonts.IFont).content'></a>

`content` [IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The content to unload.

<a name='Velaptor.Content.IContentLoader.UnloadSound(Velaptor.Content.ISound)'></a>

### UnloadSound(ISound) 

Unloads the sound content.

```csharp
void UnloadSound(Velaptor.Content.ISound content);
```
#### Parameters

<a name='Velaptor.Content.IContentLoader.UnloadSound(Velaptor.Content.ISound).content'></a>

`content` [ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')

The content to unload.

<a name='Velaptor.Content.IContentLoader.UnloadTexture(Velaptor.Content.ITexture)'></a>

### UnloadTexture(ITexture) 

Unloads the texture content.

```csharp
void UnloadTexture(Velaptor.Content.ITexture content);
```
#### Parameters

<a name='Velaptor.Content.IContentLoader.UnloadTexture(Velaptor.Content.ITexture).content'></a>

`content` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The content to unload.