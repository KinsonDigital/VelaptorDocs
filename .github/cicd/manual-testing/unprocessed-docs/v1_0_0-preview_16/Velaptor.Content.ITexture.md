#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](./Velaptor.Content.md 'Velaptor.Content')

## ITexture Interface

The texture to render to a screen.

```csharp
public interface ITexture :
Velaptor.Content.IContent
```

Derived  
&#8627; [Texture](./Velaptor.Content.Texture.md 'Velaptor.Content.Texture')

Implements [IContent](./Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
### Properties

<a name='Velaptor.Content.ITexture.Height'></a>

## ITexture.Height Property

Gets the height of the texture.

```csharp
uint Height { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.ITexture.Id'></a>

## ITexture.Id Property

Gets he ID of the texture.

```csharp
uint Id { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.ITexture.Width'></a>

## ITexture.Width Property

Gets the width of the texture.

```csharp
uint Width { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')