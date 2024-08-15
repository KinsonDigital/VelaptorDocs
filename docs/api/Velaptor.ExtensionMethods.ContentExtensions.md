---
title: Velaptor.ExtensionMethods.ContentExtensions
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.ExtensionMethods](Velaptor.ExtensionMethods.md 'Velaptor.ExtensionMethods')

#### ContentExtensions Class

Provides content related extension methods.

```csharp
public static class ContentExtensions
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → ContentExtensions
## Methods

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>,string,uint)'></a>

### Load(this ILoader&lt;IFont&gt;, string, uint) 

Loads font content from the application's content directory or directly using a full file path.

```csharp
public static Velaptor.Content.Fonts.IFont Load(this Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont> loader, string fontName, uint size);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>,string,uint).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The font loader.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>,string,uint).fontName'></a>

`fontName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name or full file path to the font with metadata.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>,string,uint).size'></a>

`size` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The size of the font.

#### Returns
[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
The loaded font.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Occurs when the [fontName](Velaptor.ExtensionMethods.ContentExtensions.md#fontname 'Velaptor.ExtensionMethods.ContentExtensions.Load(this Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>, string, uint).fontName') argument is null or empty.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Occurs if the font file does not exist.

#### Remarks
If a path is used, it must be a fully qualified file path.  
  
Directory paths are not valid.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.IAtlasData>,string)'></a>

### Load(this ILoader&lt;IAtlasData&gt;, string) 

Loads texture atlas data using the given [atlasPathOrName](Velaptor.ExtensionMethods.ContentExtensions.md#atlaspathorname 'Velaptor.ExtensionMethods.ContentExtensions.Load(this Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>, string).atlasPathOrName').

```csharp
public static Velaptor.Content.IAtlasData Load(this Velaptor.Content.ILoader<Velaptor.Content.IAtlasData> loader, string atlasPathOrName);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.IAtlasData>,string).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The loader that loads the atlas data.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.IAtlasData>,string).atlasPathOrName'></a>

`atlasPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content name or file path to the atlas data.

#### Returns
[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')  
The loaded atlas data.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Thrown if the [atlasPathOrName](Velaptor.ExtensionMethods.ContentExtensions.md#atlaspathorname 'Velaptor.ExtensionMethods.ContentExtensions.Load(this Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>, string).atlasPathOrName') is null or empty.

[LoadTextureException](Velaptor.Content.Exceptions.LoadTextureException.md 'Velaptor.Content.Exceptions.LoadTextureException')  
Thrown if the resulting texture content file path is invalid.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Thrown if the texture file does not exist.

[System.IO.IOException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.IOException 'System.IO.IOException')  
The directory specified a file or the network name is not known.

[System.UnauthorizedAccessException](https://docs.microsoft.com/en-us/dotnet/api/System.UnauthorizedAccessException 'System.UnauthorizedAccessException')  
The caller does not have the required permissions.

[System.IO.PathTooLongException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.PathTooLongException 'System.IO.PathTooLongException')  
The specified path, file name, or both exceed the system-defined maximum length.

[System.IO.DirectoryNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.DirectoryNotFoundException 'System.IO.DirectoryNotFoundException')  
The specified path is invalid (for example, it is on an unmapped drive).

[System.NotSupportedException](https://docs.microsoft.com/en-us/dotnet/api/System.NotSupportedException 'System.NotSupportedException')  
The path contains a colon character `:` that is not part of a drive label.

#### Remarks
Valid Values:  
- MyAtlas  
- C:/Atlas/MyAtlas.png  
- C:/Atlas/MyAtlas.json  
  
Invalid Values:  
- C:/Atlas/MyAtlas  
- C:/Atlas/MyAtlas.txt

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.IAudio>,string,Velaptor.Content.AudioBuffer)'></a>

### Load(this ILoader&lt;IAudio&gt;, string, AudioBuffer) 

Loads the audio with the given name.

```csharp
public static Velaptor.Content.IAudio Load(this Velaptor.Content.ILoader<Velaptor.Content.IAudio> loader, string audioPathOrName, Velaptor.Content.AudioBuffer bufferType);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.IAudio>,string,Velaptor.Content.AudioBuffer).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The loader that loads the texture.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.IAudio>,string,Velaptor.Content.AudioBuffer).audioPathOrName'></a>

`audioPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The full file path or name of the audio to load.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.IAudio>,string,Velaptor.Content.AudioBuffer).bufferType'></a>

`bufferType` [AudioBuffer](Velaptor.Content.AudioBuffer.md 'Velaptor.Content.AudioBuffer')

The type of buffer to use.

#### Returns
[IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')  
The loaded audio.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Thrown if the [audioPathOrName](Velaptor.ExtensionMethods.ContentExtensions.md#audiopathorname 'Velaptor.ExtensionMethods.ContentExtensions.Load(this Velaptor.Content.ILoader<Velaptor.Content.IAudio>, string, Velaptor.Content.AudioBuffer).audioPathOrName') is null or empty.

[LoadTextureException](Velaptor.Content.Exceptions.LoadTextureException.md 'Velaptor.Content.Exceptions.LoadTextureException')  
Thrown if the resulting texture content file path is invalid.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Thrown if the texture file does not exist.

[System.IO.IOException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.IOException 'System.IO.IOException')  
The directory specified a file or the network name is not known.

[System.UnauthorizedAccessException](https://docs.microsoft.com/en-us/dotnet/api/System.UnauthorizedAccessException 'System.UnauthorizedAccessException')  
The caller does not have the required permissions.

[System.IO.PathTooLongException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.PathTooLongException 'System.IO.PathTooLongException')  
The specified path, file name, or both exceed the system-defined maximum length.

[System.IO.DirectoryNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.DirectoryNotFoundException 'System.IO.DirectoryNotFoundException')  
The specified path is invalid (for example, it is on an unmapped drive).

[System.NotSupportedException](https://docs.microsoft.com/en-us/dotnet/api/System.NotSupportedException 'System.NotSupportedException')  
The path contains a colon character `:` that is not part of a drive label.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.ITexture>,string)'></a>

### Load(this ILoader&lt;ITexture&gt;, string) 

Loads a texture with the given [texturePathOrName](Velaptor.ExtensionMethods.ContentExtensions.md#texturepathorname 'Velaptor.ExtensionMethods.ContentExtensions.Load(this Velaptor.Content.ILoader<Velaptor.Content.ITexture>, string).texturePathOrName').

```csharp
public static Velaptor.Content.ITexture Load(this Velaptor.Content.ILoader<Velaptor.Content.ITexture> loader, string texturePathOrName);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.ITexture>,string).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The loader that loads the texture.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader<Velaptor.Content.ITexture>,string).texturePathOrName'></a>

`texturePathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The full file path or name of the texture to load.

#### Returns
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')  
The loaded texture.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Thrown if the [texturePathOrName](Velaptor.ExtensionMethods.ContentExtensions.md#texturepathorname 'Velaptor.ExtensionMethods.ContentExtensions.Load(this Velaptor.Content.ILoader<Velaptor.Content.ITexture>, string).texturePathOrName') is null or empty.

[LoadTextureException](Velaptor.Content.Exceptions.LoadTextureException.md 'Velaptor.Content.Exceptions.LoadTextureException')  
Thrown if the resulting texture content file path is invalid.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Thrown if the texture file does not exist.

[System.IO.IOException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.IOException 'System.IO.IOException')  
The directory specified a file or the network name is not known.

[System.UnauthorizedAccessException](https://docs.microsoft.com/en-us/dotnet/api/System.UnauthorizedAccessException 'System.UnauthorizedAccessException')  
The caller does not have the required permissions.

[System.IO.PathTooLongException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.PathTooLongException 'System.IO.PathTooLongException')  
The specified path, file name, or both exceed the system-defined maximum length.

[System.IO.DirectoryNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.DirectoryNotFoundException 'System.IO.DirectoryNotFoundException')  
The specified path is invalid (for example, it is on an unmapped drive).

[System.NotSupportedException](https://docs.microsoft.com/en-us/dotnet/api/System.NotSupportedException 'System.NotSupportedException')  
The path contains a colon character `:` that is not part of a drive label.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>,Velaptor.Content.Fonts.IFont)'></a>

### Unload(this ILoader&lt;IFont&gt;, IFont) 

Unloads the given [font](Velaptor.ExtensionMethods.ContentExtensions.md#font 'Velaptor.ExtensionMethods.ContentExtensions.Unload(this Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>, Velaptor.Content.Fonts.IFont).font').

```csharp
public static void Unload(this Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont> loader, Velaptor.Content.Fonts.IFont? font);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>,Velaptor.Content.Fonts.IFont).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The loader.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>,Velaptor.Content.Fonts.IFont).font'></a>

`font` [IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The content to unload.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.IAtlasData>,Velaptor.Content.IAtlasData)'></a>

### Unload(this ILoader&lt;IAtlasData&gt;, IAtlasData) 

Unloads the given [atlas](Velaptor.ExtensionMethods.ContentExtensions.md#atlas 'Velaptor.ExtensionMethods.ContentExtensions.Unload(this Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>, Velaptor.Content.IAtlasData).atlas').

```csharp
public static void Unload(this Velaptor.Content.ILoader<Velaptor.Content.IAtlasData> loader, Velaptor.Content.IAtlasData? atlas);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.IAtlasData>,Velaptor.Content.IAtlasData).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The loader.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.IAtlasData>,Velaptor.Content.IAtlasData).atlas'></a>

`atlas` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The content to unload.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.IAudio>,Velaptor.Content.IAudio)'></a>

### Unload(this ILoader&lt;IAudio&gt;, IAudio) 

Unloads the given [audio](Velaptor.ExtensionMethods.ContentExtensions.md#audio 'Velaptor.ExtensionMethods.ContentExtensions.Unload(this Velaptor.Content.ILoader<Velaptor.Content.IAudio>, Velaptor.Content.IAudio).audio').

```csharp
public static void Unload(this Velaptor.Content.ILoader<Velaptor.Content.IAudio> loader, Velaptor.Content.IAudio? audio);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.IAudio>,Velaptor.Content.IAudio).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The loader.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.IAudio>,Velaptor.Content.IAudio).audio'></a>

`audio` [IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')

The content to unload.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ITexture)'></a>

### Unload(this ILoader&lt;ITexture&gt;, ITexture) 

Unloads the given [texture](Velaptor.ExtensionMethods.ContentExtensions.md#texture 'Velaptor.ExtensionMethods.ContentExtensions.Unload(this Velaptor.Content.ILoader<Velaptor.Content.ITexture>, Velaptor.Content.ITexture).texture').

```csharp
public static void Unload(this Velaptor.Content.ILoader<Velaptor.Content.ITexture> loader, Velaptor.Content.ITexture? texture);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ITexture).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The loader.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ITexture).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The content to unload.
