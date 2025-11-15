---
title: Velaptor.Factories.PathResolverFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](Velaptor.Factories.md 'Velaptor.Factories')

#### PathResolverFactory Class

Creates path resolver instances.

```csharp
public static class PathResolverFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → PathResolverFactory
## Methods

<a name='Velaptor.Factories.PathResolverFactory.CreateAtlasPathResolver()'></a>

### CreateAtlasPathResolver() 

Creates a path resolver that resolves paths to texture atlas textures.

```csharp
public static Velaptor.Content.IContentPathResolver CreateAtlasPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver to texture content.

<a name='Velaptor.Factories.PathResolverFactory.CreateAudioPathResolver()'></a>

### CreateAudioPathResolver() 

Creates a path resolver that resolves paths to audio content.

```csharp
public static Velaptor.Content.IContentPathResolver CreateAudioPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver to audio content.

<a name='Velaptor.Factories.PathResolverFactory.CreateFontPathResolver()'></a>

### CreateFontPathResolver() 

Creates a path resolver that resolves paths to font content.

```csharp
public static Velaptor.Content.IContentPathResolver CreateFontPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver to atlas content.

<a name='Velaptor.Factories.PathResolverFactory.CreateTexturePathResolver()'></a>

### CreateTexturePathResolver() 

Creates a path resolver that resolves paths to texture content.

```csharp
public static Velaptor.Content.IContentPathResolver CreateTexturePathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver to texture content.
