---
title: Velaptor.Content.ContentManager
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### ContentManager Class

Loads various types of content.

```csharp
public sealed class ContentManager :
Velaptor.Content.IContentManager
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → ContentManager

Implements [IContentManager](Velaptor.Content.IContentManager.md 'Velaptor.Content.IContentManager')
## Methods

<a name='Velaptor.Content.ContentManager.Create()'></a>

### Create() 

Creates a singleton instance of the [IContentManager](Velaptor.Content.IContentManager.md 'Velaptor.Content.IContentManager').

```csharp
public static Velaptor.Content.IContentManager Create();
```

#### Returns
[IContentManager](Velaptor.Content.IContentManager.md 'Velaptor.Content.IContentManager')  
The singleton instance of the [IContentManager](Velaptor.Content.IContentManager.md 'Velaptor.Content.IContentManager').

<a name='Velaptor.Content.ContentManager.Load<T>(string)'></a>

### Load&lt;T&gt;(string) 

Loads the specified [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.Load<T>(string).pathOrName') for the given type [T](Velaptor.Content.ContentManager.md#t 'Velaptor.Content.ContentManager.Load<T>(string).T').

```csharp
public T Load<T>(string pathOrName)
    where T : Velaptor.Content.IContent;
```
#### Type parameters

<a name='Velaptor.Content.ContentManager.Load<T>(string).T'></a>

`T`

The type of content to use.
#### Parameters

<a name='Velaptor.Content.ContentManager.Load<T>(string).pathOrName'></a>

`pathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content file path or name.

Implements [Load&lt;T&gt;(string)](Velaptor.Content.IContentManager.md#Velaptor.Content.IContentManager.Load_T_(string) 'Velaptor.Content.IContentManager.Load<T>(string)')

#### Returns
[T](Velaptor.Content.ContentManager.md#t 'Velaptor.Content.ContentManager.Load<T>(string).T')  
The content object.

#### Remarks
  
When loading audio content, the default [Full](Velaptor.Content.AudioBuffer.md#full 'Velaptor.Content.AudioBuffer.Full') used will be used.  
To specify a different buffer type, use the [LoadAudio(string, AudioBuffer)](Velaptor.Content.IContentManager.md#Velaptor.Content.IContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer) 'Velaptor.Content.IContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer)') method.  
  
When loading font content, the default size of `12` will be used.  
To specify a different size, use the [LoadFont(string, uint)](Velaptor.Content.IContentManager.md#Velaptor.Content.IContentManager.LoadFont(string,uint) 'Velaptor.Content.IContentManager.LoadFont(string, uint)') method.  
  
If the [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.Load<T>(string).pathOrName') is a fully qualified file path, an attempt will be made to load the content  
using the file path directly.  If the [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.Load<T>(string).pathOrName') is just the name of the content item,  
the content manager system will try to find and resolve the location of the content item automatically.  
  
Only loads the following built in [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent') types.  
- [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')  
- [IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')  
- [IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
- [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

<a name='Velaptor.Content.ContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer)'></a>

### LoadAudio(string, AudioBuffer) 

Loads a font with the given [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer).pathOrName') and [bufferType](Velaptor.Content.ContentManager.md#buffertype 'Velaptor.Content.ContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer).bufferType').

```csharp
public Velaptor.Content.IAudio LoadAudio(string pathOrName, Velaptor.Content.AudioBuffer bufferType);
```
#### Parameters

<a name='Velaptor.Content.ContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer).pathOrName'></a>

`pathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The font file path or name.

<a name='Velaptor.Content.ContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer).bufferType'></a>

`bufferType` [AudioBuffer](Velaptor.Content.AudioBuffer.md 'Velaptor.Content.AudioBuffer')

The buffer mode of the audio.

Implements [LoadAudio(string, AudioBuffer)](Velaptor.Content.IContentManager.md#Velaptor.Content.IContentManager.LoadAudio(string,Velaptor.Content.AudioBuffer) 'Velaptor.Content.IContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer)')

#### Returns
[IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')  
The loaded audio.

#### Remarks
If the [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer).pathOrName') is a fully qualified file path, an attempt will be made to load the content  
using the file path directly.  If the [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.LoadAudio(string, Velaptor.Content.AudioBuffer).pathOrName') is just the name of the content item,  
the content manager system will try to find and resolve the location of the content item automatically.

<a name='Velaptor.Content.ContentManager.LoadFont(string,uint)'></a>

### LoadFont(string, uint) 

Loads a font with the given [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.LoadFont(string, uint).pathOrName') and [size](Velaptor.Content.ContentManager.md#size 'Velaptor.Content.ContentManager.LoadFont(string, uint).size').

```csharp
public Velaptor.Content.Fonts.IFont LoadFont(string pathOrName, uint size);
```
#### Parameters

<a name='Velaptor.Content.ContentManager.LoadFont(string,uint).pathOrName'></a>

`pathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The font file path or name.

<a name='Velaptor.Content.ContentManager.LoadFont(string,uint).size'></a>

`size` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The size of the font.

Implements [LoadFont(string, uint)](Velaptor.Content.IContentManager.md#Velaptor.Content.IContentManager.LoadFont(string,uint) 'Velaptor.Content.IContentManager.LoadFont(string, uint)')

#### Returns
[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
The loaded font.

#### Remarks
If the [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.LoadFont(string, uint).pathOrName') is a fully qualified file path, an attempt will be made to load the content  
using the file path directly.  If the [pathOrName](Velaptor.Content.ContentManager.md#pathorname 'Velaptor.Content.ContentManager.LoadFont(string, uint).pathOrName') is just the name of the content item,  
the content manager system will try to find and resolve the location of the content item automatically.

<a name='Velaptor.Content.ContentManager.Unload<T>(T)'></a>

### Unload&lt;T&gt;(T) 

Unloads the given [item](Velaptor.Content.ContentManager.md#item 'Velaptor.Content.ContentManager.Unload<T>(T).item').

```csharp
public void Unload<T>(T item)
    where T : Velaptor.Content.IContent;
```
#### Type parameters

<a name='Velaptor.Content.ContentManager.Unload<T>(T).T'></a>

`T`

The type of content item to unload.
#### Parameters

<a name='Velaptor.Content.ContentManager.Unload<T>(T).item'></a>

`item` [T](Velaptor.Content.ContentManager.md#t 'Velaptor.Content.ContentManager.Unload<T>(T).T')

The content item.

Implements [Unload&lt;T&gt;(T)](Velaptor.Content.IContentManager.md#Velaptor.Content.IContentManager.Unload_T_(T) 'Velaptor.Content.IContentManager.Unload<T>(T)')

#### Remarks
  
Only unloads the following built in [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent') types.  
- [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')  
- [IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')  
- [IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
- [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')
