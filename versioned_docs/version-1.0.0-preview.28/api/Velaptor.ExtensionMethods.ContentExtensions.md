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

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.Fonts.FontLoader,string,uint)'></a>

### Load(this FontLoader, string, uint) 

Loads font content from the application's content directory or directly using a full file path.

```csharp
public static Velaptor.Content.Fonts.IFont Load(this Velaptor.Content.Fonts.FontLoader loader, string fontName, uint size);
```
#### Parameters

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.Fonts.FontLoader,string,uint).loader'></a>

`loader` [FontLoader](Velaptor.Content.Fonts.FontLoader.md 'Velaptor.Content.Fonts.FontLoader')

The font loader.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.Fonts.FontLoader,string,uint).fontName'></a>

`fontName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name or full file path to the font with metadata.

<a name='Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.Fonts.FontLoader,string,uint).size'></a>

`size` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The size of the font.

#### Returns
[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
The loaded font.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Occurs when the [fontName](Velaptor.ExtensionMethods.ContentExtensions.md#Velaptor.ExtensionMethods.ContentExtensions.Load(thisVelaptor.Content.Fonts.FontLoader,string,uint).fontName 'Velaptor.ExtensionMethods.ContentExtensions.Load(this Velaptor.Content.Fonts.FontLoader, string, uint).fontName') argument is null or empty.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Occurs if the font file does not exist.

#### Remarks
If a path is used, it must be a fully qualified file path.  
  
Directory paths are not valid.

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