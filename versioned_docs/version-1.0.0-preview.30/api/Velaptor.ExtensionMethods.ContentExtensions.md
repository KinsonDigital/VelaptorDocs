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
Occurs when the [fontName](Velaptor.ExtensionMethods.ContentExtensions.md#Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.ILoader_Velaptor.Content.Fonts.IFont_,string,uint).fontName 'Velaptor.ExtensionMethods.ContentExtensions.Load(this Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>, string, uint).fontName') argument is null or empty.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Occurs if the font file does not exist.

#### Remarks
If a path is used, it must be a fully qualified file path.  
  
Directory paths are not valid.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>,Velaptor.Content.Fonts.IFont)'></a>

### Unload(this ILoader&lt;IFont&gt;, IFont) 

Unloads the given [font](Velaptor.ExtensionMethods.ContentExtensions.md#Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader_Velaptor.Content.Fonts.IFont_,Velaptor.Content.Fonts.IFont).font 'Velaptor.ExtensionMethods.ContentExtensions.Unload(this Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>, Velaptor.Content.Fonts.IFont).font').

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

Unloads the given [atlas](Velaptor.ExtensionMethods.ContentExtensions.md#Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader_Velaptor.Content.IAtlasData_,Velaptor.Content.IAtlasData).atlas 'Velaptor.ExtensionMethods.ContentExtensions.Unload(this Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>, Velaptor.Content.IAtlasData).atlas').

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

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.ISound>,Velaptor.Content.ISound)'></a>

### Unload(this ILoader&lt;ISound&gt;, ISound) 

Unloads the given [sound](Velaptor.ExtensionMethods.ContentExtensions.md#Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader_Velaptor.Content.ISound_,Velaptor.Content.ISound).sound 'Velaptor.ExtensionMethods.ContentExtensions.Unload(this Velaptor.Content.ILoader<Velaptor.Content.ISound>, Velaptor.Content.ISound).sound').

```csharp
public static void Unload(this Velaptor.Content.ILoader<Velaptor.Content.ISound> loader, Velaptor.Content.ISound? sound);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.ISound>,Velaptor.Content.ISound).loader'></a>

`loader` [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')

The loader.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.ISound>,Velaptor.Content.ISound).sound'></a>

`sound` [ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')

The content to unload.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader<Velaptor.Content.ITexture>,Velaptor.Content.ITexture)'></a>

### Unload(this ILoader&lt;ITexture&gt;, ITexture) 

Unloads the given [texture](Velaptor.ExtensionMethods.ContentExtensions.md#Velaptor.ExtensionMethods.ContentExtensions.Unload(thisVelaptor.Content.ILoader_Velaptor.Content.ITexture_,Velaptor.Content.ITexture).texture 'Velaptor.ExtensionMethods.ContentExtensions.Unload(this Velaptor.Content.ILoader<Velaptor.Content.ITexture>, Velaptor.Content.ITexture).texture').

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