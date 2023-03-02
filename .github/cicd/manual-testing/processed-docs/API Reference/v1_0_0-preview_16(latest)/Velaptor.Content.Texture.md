#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](./Velaptor.Content.md 'Velaptor.Content')

## Texture Class

The texture to render to a screen.

```csharp
public sealed class Texture :
Velaptor.Content.ITexture,
Velaptor.Content.IContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → Texture

Implements [ITexture](./Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture'), [IContent](./Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
### Constructors

<a name='Velaptor.Content.Texture.Texture(string,string,Velaptor.Graphics.ImageData)'></a>

## Texture(string, string, ImageData) Constructor

Initializes a new instance of the [Texture](./Velaptor.Content.Texture.md 'Velaptor.Content.Texture') class.

```csharp
public Texture(string name, string filePath, Velaptor.Graphics.ImageData imageData);
```
#### Parameters

<a name='Velaptor.Content.Texture.Texture(string,string,Velaptor.Graphics.ImageData).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the texture.

<a name='Velaptor.Content.Texture.Texture(string,string,Velaptor.Graphics.ImageData).filePath'></a>

`filePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The file path to the image file.

<a name='Velaptor.Content.Texture.Texture(string,string,Velaptor.Graphics.ImageData).imageData'></a>

`imageData` [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The image data of the texture.
### Properties

<a name='Velaptor.Content.Texture.FilePath'></a>

## Texture.FilePath Property

Gets the path to the content.

```csharp
public string FilePath { get; }
```

Implements [FilePath](./Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Texture.Height'></a>

## Texture.Height Property

Gets the height of the texture.

```csharp
public uint Height { get; set; }
```

Implements [Height](./Velaptor.Content.ITexture.md#Velaptor.Content.ITexture.Height 'Velaptor.Content.ITexture.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Texture.Id'></a>

## Texture.Id Property

Gets he ID of the texture.

```csharp
public uint Id { get; set; }
```

Implements [Id](./Velaptor.Content.ITexture.md#Velaptor.Content.ITexture.Id 'Velaptor.Content.ITexture.Id')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Texture.Name'></a>

## Texture.Name Property

Gets the name of the content.

```csharp
public string Name { get; set; }
```

Implements [Name](./Velaptor.Content.IContent.md#Velaptor.Content.IContent.Name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Texture.Width'></a>

## Texture.Width Property

Gets the width of the texture.

```csharp
public uint Width { get; set; }
```

Implements [Width](./Velaptor.Content.ITexture.md#Velaptor.Content.ITexture.Width 'Velaptor.Content.ITexture.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')