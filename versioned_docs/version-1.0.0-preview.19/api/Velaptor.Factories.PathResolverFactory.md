---
title: Velaptor.Factories.PathResolverFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](Velaptor.Factories.md 'Velaptor.Factories')

## PathResolverFactory Class

Creates path resolver instances.

```csharp
public static class PathResolverFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → PathResolverFactory
### Methods

<a name='Velaptor.Factories.PathResolverFactory.CreateAtlasPathResolver()'></a>

## PathResolverFactory.CreateAtlasPathResolver() Method

Creates a path resolver that resolves paths to texture atlas textures.

```csharp
public static Velaptor.Content.IContentPathResolver CreateAtlasPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver to texture content.

<a name='Velaptor.Factories.PathResolverFactory.CreateContentFontPathResolver()'></a>

## PathResolverFactory.CreateContentFontPathResolver() Method

Creates a path resolver that resolves paths to fonts in the application's content directory.

```csharp
public static Velaptor.Content.IContentPathResolver CreateContentFontPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver instance.

<a name='Velaptor.Factories.PathResolverFactory.CreateFontPathResolver()'></a>

## PathResolverFactory.CreateFontPathResolver() Method

Creates a path resolver that resolves paths to font content.

```csharp
public static Velaptor.Content.IContentPathResolver CreateFontPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver to atlas content.

<a name='Velaptor.Factories.PathResolverFactory.CreateSoundPathResolver()'></a>

## PathResolverFactory.CreateSoundPathResolver() Method

Creates a path resolver that resolves paths to sound content.

```csharp
public static Velaptor.Content.IContentPathResolver CreateSoundPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver to sound content.

<a name='Velaptor.Factories.PathResolverFactory.CreateSystemFontPathResolver()'></a>

## PathResolverFactory.CreateSystemFontPathResolver() Method

Creates a path resolver that resolves paths to fonts in the system's font directory.

```csharp
public static Velaptor.Content.IContentPathResolver CreateSystemFontPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver instance.

<a name='Velaptor.Factories.PathResolverFactory.CreateTexturePathResolver()'></a>

## PathResolverFactory.CreateTexturePathResolver() Method

Creates a path resolver that resolves paths to texture content.

```csharp
public static Velaptor.Content.IContentPathResolver CreateTexturePathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor.Content.IContentPathResolver')  
The resolver to texture content.