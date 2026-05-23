---
title: Velaptor.Factories.PathResolverFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Factories](Velaptor.Factories.md 'Velaptor\.Factories')

#### PathResolverFactory Class

Creates path resolver instances\.

```csharp
public class PathResolverFactory : Velaptor.Factories.IPathResolverFactory
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → PathResolverFactory

Implements [IPathResolverFactory](Velaptor.Factories.IPathResolverFactory.md 'Velaptor\.Factories\.IPathResolverFactory')
## Methods

<a name='Velaptor.Factories.PathResolverFactory.CreateAtlasPathResolver()'></a>

### CreateAtlasPathResolver\(\) 

Creates a path resolver that resolves paths to texture atlas textures\.

```csharp
public Velaptor.Content.IContentPathResolver CreateAtlasPathResolver();
```

Implements [CreateAtlasPathResolver\(\)](Velaptor.Factories.IPathResolverFactory.md#Velaptor.Factories.IPathResolverFactory.CreateAtlasPathResolver() 'Velaptor\.Factories\.IPathResolverFactory\.CreateAtlasPathResolver\(\)')

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor\.Content\.IContentPathResolver')  
The resolver to texture content\.

<a name='Velaptor.Factories.PathResolverFactory.CreateAudioPathResolver()'></a>

### CreateAudioPathResolver\(\) 

Creates a path resolver that resolves paths to audio content\.

```csharp
public Velaptor.Content.IContentPathResolver CreateAudioPathResolver();
```

Implements [CreateAudioPathResolver\(\)](Velaptor.Factories.IPathResolverFactory.md#Velaptor.Factories.IPathResolverFactory.CreateAudioPathResolver() 'Velaptor\.Factories\.IPathResolverFactory\.CreateAudioPathResolver\(\)')

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor\.Content\.IContentPathResolver')  
The resolver to audio content\.

<a name='Velaptor.Factories.PathResolverFactory.CreateFontPathResolver()'></a>

### CreateFontPathResolver\(\) 

Creates a path resolver that resolves paths to font content\.

```csharp
public Velaptor.Content.IContentPathResolver CreateFontPathResolver();
```

Implements [CreateFontPathResolver\(\)](Velaptor.Factories.IPathResolverFactory.md#Velaptor.Factories.IPathResolverFactory.CreateFontPathResolver() 'Velaptor\.Factories\.IPathResolverFactory\.CreateFontPathResolver\(\)')

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor\.Content\.IContentPathResolver')  
The resolver to atlas content\.

<a name='Velaptor.Factories.PathResolverFactory.CreateTexturePathResolver()'></a>

### CreateTexturePathResolver\(\) 

Creates a path resolver that resolves paths to texture content\.

```csharp
public Velaptor.Content.IContentPathResolver CreateTexturePathResolver();
```

Implements [CreateTexturePathResolver\(\)](Velaptor.Factories.IPathResolverFactory.md#Velaptor.Factories.IPathResolverFactory.CreateTexturePathResolver() 'Velaptor\.Factories\.IPathResolverFactory\.CreateTexturePathResolver\(\)')

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor\.Content\.IContentPathResolver')  
The resolver to texture content\.
