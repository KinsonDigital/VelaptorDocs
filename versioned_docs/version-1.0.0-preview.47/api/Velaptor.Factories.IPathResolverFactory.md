---
title: Velaptor.Factories.IPathResolverFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Factories](Velaptor.Factories.md 'Velaptor\.Factories')

#### IPathResolverFactory Interface

Creates path resolver instances\.

```csharp
public interface IPathResolverFactory
```

Derived  
&#8627; [PathResolverFactory](Velaptor.Factories.PathResolverFactory.md 'Velaptor\.Factories\.PathResolverFactory')
## Methods

<a name='Velaptor.Factories.IPathResolverFactory.CreateAtlasPathResolver()'></a>

### CreateAtlasPathResolver\(\) 

Creates a path resolver that resolves paths to texture atlas textures\.

```csharp
Velaptor.Content.IContentPathResolver CreateAtlasPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor\.Content\.IContentPathResolver')  
The resolver to texture content\.

<a name='Velaptor.Factories.IPathResolverFactory.CreateAudioPathResolver()'></a>

### CreateAudioPathResolver\(\) 

Creates a path resolver that resolves paths to audio content\.

```csharp
Velaptor.Content.IContentPathResolver CreateAudioPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor\.Content\.IContentPathResolver')  
The resolver to audio content\.

<a name='Velaptor.Factories.IPathResolverFactory.CreateFontPathResolver()'></a>

### CreateFontPathResolver\(\) 

Creates a path resolver that resolves paths to font content\.

```csharp
Velaptor.Content.IContentPathResolver CreateFontPathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor\.Content\.IContentPathResolver')  
The resolver to atlas content\.

<a name='Velaptor.Factories.IPathResolverFactory.CreateTexturePathResolver()'></a>

### CreateTexturePathResolver\(\) 

Creates a path resolver that resolves paths to texture content\.

```csharp
Velaptor.Content.IContentPathResolver CreateTexturePathResolver();
```

#### Returns
[IContentPathResolver](Velaptor.Content.IContentPathResolver.md 'Velaptor\.Content\.IContentPathResolver')  
The resolver to texture content\.
