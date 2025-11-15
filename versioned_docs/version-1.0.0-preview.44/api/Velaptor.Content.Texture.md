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
## Properties

<a name='Velaptor.Content.Texture.FilePath'></a>

### FilePath 

Gets the path to the content.

```csharp
public string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IContent.md#filepath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Texture.Height'></a>

### Height 

Gets the height of the texture.

```csharp
public uint Height { get; set; }
```

Implements [Height](Velaptor.Content.ITexture.md#height 'Velaptor.Content.ITexture.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Texture.Id'></a>

### Id 

Gets the ID of the texture.

```csharp
public uint Id { get; set; }
```

Implements [Id](Velaptor.Content.ITexture.md#id 'Velaptor.Content.ITexture.Id')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Texture.Name'></a>

### Name 

Gets the name of the content.

```csharp
public string Name { get; set; }
```

Implements [Name](Velaptor.Content.IContent.md#name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Texture.Width'></a>

### Width 

Gets the width of the texture.

```csharp
public uint Width { get; set; }
```

Implements [Width](Velaptor.Content.ITexture.md#width 'Velaptor.Content.ITexture.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
