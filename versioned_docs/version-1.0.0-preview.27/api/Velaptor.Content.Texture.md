---
title: Velaptor.Content.Texture
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### Texture Class

The texture to render to a screen.

```csharp
public sealed class Texture :
Velaptor.Content.ITexture,
Velaptor.Content.IContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → Texture

Implements [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture'), [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
## Constructors

<a name='Velaptor.Content.Texture.Texture(string,string)'></a>

### Texture(string, string) Constructor

Initializes a new instance of the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') class.

```csharp
public Texture(string name, string filePath);
```
#### Parameters

<a name='Velaptor.Content.Texture.Texture(string,string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the texture.

<a name='Velaptor.Content.Texture.Texture(string,string).filePath'></a>

`filePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The file path to the image file.

#### Exceptions

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Thrown if the [filePath](Velaptor.Content.Texture.md#Velaptor.Content.Texture.Texture(string,string).filePath 'Velaptor.Content.Texture.Texture(string, string).filePath') is not found.

<a name='Velaptor.Content.Texture.Texture(string,Velaptor.Graphics.ImageData)'></a>

### Texture(string, ImageData) Constructor

Initializes a new instance of the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') class.

```csharp
public Texture(string name, Velaptor.Graphics.ImageData imageData);
```
#### Parameters

<a name='Velaptor.Content.Texture.Texture(string,Velaptor.Graphics.ImageData).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the texture.

<a name='Velaptor.Content.Texture.Texture(string,Velaptor.Graphics.ImageData).imageData'></a>

`imageData` [ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The image data of the texture.

#### Exceptions

[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the [imageData](Velaptor.Content.Texture.md#Velaptor.Content.Texture.Texture(string,Velaptor.Graphics.ImageData).imageData 'Velaptor.Content.Texture.Texture(string, Velaptor.Graphics.ImageData).imageData') is empty.
## Properties

<a name='Velaptor.Content.Texture.FilePath'></a>

### FilePath 

Gets the path to the content.

```csharp
public string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Texture.Height'></a>

### Height 

Gets the height of the texture.

```csharp
public uint Height { get; set; }
```

Implements [Height](Velaptor.Content.ITexture.md#Velaptor.Content.ITexture.Height 'Velaptor.Content.ITexture.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Texture.Id'></a>

### Id 

Gets the ID of the texture.

```csharp
public uint Id { get; set; }
```

Implements [Id](Velaptor.Content.ITexture.md#Velaptor.Content.ITexture.Id 'Velaptor.Content.ITexture.Id')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Texture.Name'></a>

### Name 

Gets the name of the content.

```csharp
public string Name { get; set; }
```

Implements [Name](Velaptor.Content.IContent.md#Velaptor.Content.IContent.Name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Texture.Width'></a>

### Width 

Gets the width of the texture.

```csharp
public uint Width { get; set; }
```

Implements [Width](Velaptor.Content.ITexture.md#Velaptor.Content.ITexture.Width 'Velaptor.Content.ITexture.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')