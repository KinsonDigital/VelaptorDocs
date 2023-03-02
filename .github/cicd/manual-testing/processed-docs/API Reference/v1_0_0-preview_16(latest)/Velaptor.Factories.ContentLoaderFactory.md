#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](./Velaptor.Factories.md 'Velaptor.Factories')

## ContentLoaderFactory Class

Creates instances of a content loader.

```csharp
public static class ContentLoaderFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → ContentLoaderFactory
### Methods

<a name='Velaptor.Factories.ContentLoaderFactory.CreateAtlasLoader()'></a>

## ContentLoaderFactory.CreateAtlasLoader() Method

Creates a loader for loading atlas data from disk.

```csharp
public static Velaptor.Content.ILoader<Velaptor.Content.IAtlasData> CreateAtlasLoader();
```

#### Returns
[Velaptor.Content.ILoader&lt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAtlasData](./Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')[&gt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')  
A loader for loading texture atlas data.

<a name='Velaptor.Factories.ContentLoaderFactory.CreateContentLoader()'></a>

## ContentLoaderFactory.CreateContentLoader() Method

Creates a single instance of a content loader.

```csharp
public static Velaptor.Content.IContentLoader CreateContentLoader();
```

#### Returns
[IContentLoader](./Velaptor.Content.IContentLoader.md 'Velaptor.Content.IContentLoader')  
A framework content loader implementation.

<a name='Velaptor.Factories.ContentLoaderFactory.CreateFontLoader()'></a>

## ContentLoaderFactory.CreateFontLoader() Method

Creates a loader that loads fonts from disk for rendering test.

```csharp
public static Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont> CreateFontLoader();
```

#### Returns
[Velaptor.Content.ILoader&lt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')[&gt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')  
A loader for loading sound data.

<a name='Velaptor.Factories.ContentLoaderFactory.CreateSoundLoader()'></a>

## ContentLoaderFactory.CreateSoundLoader() Method

Creates a loader that loads sounds from disk.

```csharp
public static Velaptor.Content.ILoader<Velaptor.Content.ISound> CreateSoundLoader();
```

#### Returns
[Velaptor.Content.ILoader&lt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ISound](./Velaptor.Content.ISound.md 'Velaptor.Content.ISound')[&gt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')  
A loader for loading sound data.

<a name='Velaptor.Factories.ContentLoaderFactory.CreateTextureLoader()'></a>

## ContentLoaderFactory.CreateTextureLoader() Method

Creates a loader that loads textures from disk.

```csharp
public static Velaptor.Content.ILoader<Velaptor.Content.ITexture> CreateTextureLoader();
```

#### Returns
[Velaptor.Content.ILoader&lt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ITexture](./Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')[&gt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')  
A loader for loading textures.