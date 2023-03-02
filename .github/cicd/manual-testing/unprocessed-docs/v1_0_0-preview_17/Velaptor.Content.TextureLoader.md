#### [Velaptor](index.md 'index')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## TextureLoader Class

Loads textures.

```csharp
public sealed class TextureLoader :
Velaptor.Content.ILoader<Velaptor.Content.ITexture>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; TextureLoader

Implements [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')
### Constructors

<a name='Velaptor.Content.TextureLoader.TextureLoader()'></a>

## TextureLoader() Constructor

Initializes a new instance of the [TextureLoader](Velaptor.Content.TextureLoader.md 'Velaptor.Content.TextureLoader') class.

```csharp
public TextureLoader();
```
### Methods

<a name='Velaptor.Content.TextureLoader.Load(string)'></a>

## TextureLoader.Load(string) Method

Loads a texture with the given [contentPathOrName](Velaptor.Content.TextureLoader.md#Velaptor.Content.TextureLoader.Load(string).contentPathOrName 'Velaptor.Content.TextureLoader.Load(string).contentPathOrName').

```csharp
public Velaptor.Content.ITexture Load(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.TextureLoader.Load(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The full file path or name of the texture to load.

Implements [Load(string)](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Load(string) 'Velaptor.Content.ILoader<T>.Load(string)')

#### Returns
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')  
The loaded texture.

#### Exceptions

[LoadTextureException](Velaptor.Content.Exceptions.LoadTextureException.md 'Velaptor.Content.Exceptions.LoadTextureException')  
Thrown if the resulting texture content file path is invalid.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Thrown if the texture file does not exist.

<a name='Velaptor.Content.TextureLoader.Unload(string)'></a>

## TextureLoader.Unload(string) Method

Unloads the data with the given contentPathOrName.

```csharp
public void Unload(string contentNameOrPath);
```
#### Parameters

<a name='Velaptor.Content.TextureLoader.Unload(string).contentNameOrPath'></a>

`contentNameOrPath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Implements [Unload(string)](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Unload(string) 'Velaptor.Content.ILoader<T>.Unload(string)')