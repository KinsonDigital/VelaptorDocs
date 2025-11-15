---
title: Velaptor.Content.IContentManager
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### IContentManager Interface

Loads various types of content.

```csharp
public interface IContentManager
```

Derived  
&#8627; [ContentManager](Velaptor.Content.ContentManager.md 'Velaptor.Content.ContentManager')
## Methods

<a name='Velaptor.Content.IContentManager.Load<T>(string)'></a>

### Load&lt;T&gt;(string) 

Loads the specified [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.Load<T>(string).pathOrName') for the given type [T](Velaptor.Content.IContentManager.md#t 'Velaptor.Content.IContentManager.Load<T>(string).T').

```csharp
T Load<T>(string pathOrName)
    where T : Velaptor.Content.IContent;
```
#### Type parameters

<a name='Velaptor.Content.IContentManager.Load<T>(string).T'></a>

`T`

The type of content to use.
#### Parameters

<a name='Velaptor.Content.IContentManager.Load<T>(string).pathOrName'></a>

`pathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content file path or name.

#### Returns
[T](Velaptor.Content.IContentManager.md#t 'Velaptor.Content.IContentManager.Load<T>(string).T')  
The content object.

#### Remarks
  
When loading audio content, the default [Full](Velaptor.Content.AudioBuffer.md#full 'Velaptor.Content.AudioBuffer.Full') used will be used.  
To specify a different buffer type, use the [LoadAudio(string, AudioBuffer)](Velaptor.Content.IContentManager.md#Velaptor.Content.IContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer) 'Velaptor.Content.IContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer)') method.  
  
When loading font content, the default size of `12` will be used.  
To specify a different size, use the [LoadFont(string, uint)](Velaptor.Content.IContentManager.md#Velaptor.Content.IContentManager.LoadFont(string,uint) 'Velaptor.Content.IContentManager.LoadFont(string, uint)') method.  
  
If the [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.Load<T>(string).pathOrName') is a fully qualified file path, an attempt will be made to load the content  
using the file path directly.  If the [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.Load<T>(string).pathOrName') is just the name of the content item,  
the content manager system will try to find and resolve the location of the content item automatically.  
  
Only loads the following built in [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent') types.  
- [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')  
- [IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')  
- [IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
- [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

<a name='Velaptor.Content.IContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer)'></a>

### LoadAudio(string, AudioBuffer) 

Loads a font with the given [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer).pathOrName') and [bufferType](Velaptor.Content.IContentManager.md#buffertype 'Velaptor.Content.IContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer).bufferType').

```csharp
Velaptor.Content.IAudio LoadAudio(string pathOrName, Velaptor.Content.AudioBuffer bufferType);
```
#### Parameters

<a name='Velaptor.Content.IContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer).pathOrName'></a>

`pathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The font file path or name.

<a name='Velaptor.Content.IContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer).bufferType'></a>

`bufferType` [AudioBuffer](Velaptor.Content.AudioBuffer.md 'Velaptor.Content.AudioBuffer')

The buffer mode of the audio.

#### Returns
[IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')  
The loaded audio.

#### Remarks
If the [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer).pathOrName') is a fully qualified file path, an attempt will be made to load the content  
using the file path directly.  If the [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer).pathOrName') is just the name of the content item,  
the content manager system will try to find and resolve the location of the content item automatically.

<a name='Velaptor.Content.IContentManager.LoadFont(string,uint)'></a>

### LoadFont(string, uint) 

Loads a font with the given [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.LoadFont(string, uint).pathOrName') and [size](Velaptor.Content.IContentManager.md#size 'Velaptor.Content.IContentManager.LoadFont(string, uint).size').

```csharp
Velaptor.Content.Fonts.IFont LoadFont(string pathOrName, uint size);
```
#### Parameters

<a name='Velaptor.Content.IContentManager.LoadFont(string,uint).pathOrName'></a>

`pathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The font file path or name.

<a name='Velaptor.Content.IContentManager.LoadFont(string,uint).size'></a>

`size` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The size of the font.

#### Returns
[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
The loaded font.

#### Remarks
If the [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.LoadFont(string, uint).pathOrName') is a fully qualified file path, an attempt will be made to load the content  
using the file path directly.  If the [pathOrName](Velaptor.Content.IContentManager.md#pathorname 'Velaptor.Content.IContentManager.LoadFont(string, uint).pathOrName') is just the name of the content item,  
the content manager system will try to find and resolve the location of the content item automatically.

<a name='Velaptor.Content.IContentManager.Unload<T>(T)'></a>

### Unload&lt;T&gt;(T) 

Unloads the given [item](Velaptor.Content.IContentManager.md#item 'Velaptor.Content.IContentManager.Unload<T>(T).item').

```csharp
void Unload<T>(T? item)
    where T : Velaptor.Content.IContent;
```
#### Type parameters

<a name='Velaptor.Content.IContentManager.Unload<T>(T).T'></a>

`T`

The type of content item to unload.
#### Parameters

<a name='Velaptor.Content.IContentManager.Unload<T>(T).item'></a>

`item` [T](Velaptor.Content.IContentManager.md#t 'Velaptor.Content.IContentManager.Unload<T>(T).T')

The content item.

#### Remarks
  
Only unloads the following built in [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent') types.  
- [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')  
- [IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')  
- [IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
- [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')  
  
NOTE: Null items will simply be ignored.
