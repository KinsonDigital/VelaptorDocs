---
title: Velaptor.Factories.ContentLoaderFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](Velaptor.Factories.md 'Velaptor.Factories')

#### ContentLoaderFactory Class

Creates instances of a content loader.

```csharp
public static class ContentLoaderFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → ContentLoaderFactory
## Methods

<a name='Velaptor.Factories.ContentLoaderFactory.CreateAtlasLoader()'></a>

### CreateAtlasLoader() 

Creates a loader for loading atlas data from disk.

```csharp
public static Velaptor.Content.ILoader<Velaptor.Content.IAtlasData> CreateAtlasLoader();
```

#### Returns
[Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')  
A loader for loading texture atlas data.

<a name='Velaptor.Factories.ContentLoaderFactory.CreateAudioLoader()'></a>

### CreateAudioLoader() 

Creates a loader that loads audio from disk.

```csharp
public static Velaptor.Content.ILoader<Velaptor.Content.IAudio> CreateAudioLoader();
```

#### Returns
[Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')  
A loader for loading audio data.

<a name='Velaptor.Factories.ContentLoaderFactory.CreateFontLoader()'></a>

### CreateFontLoader() 

Creates a loader that loads fonts from disk for rendering test.

```csharp
public static Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont> CreateFontLoader();
```

#### Returns
[Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')  
A loader for loading audio data.

<a name='Velaptor.Factories.ContentLoaderFactory.CreateTextureLoader()'></a>

### CreateTextureLoader() 

Creates a loader that loads textures from disk.

```csharp
public static Velaptor.Content.ILoader<Velaptor.Content.ITexture> CreateTextureLoader();
```

#### Returns
[Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')  
A loader for loading textures.
