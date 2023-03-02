#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](./Velaptor.Factories.md 'Velaptor.Factories')

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
public static Velaptor.Content.IPathResolver CreateAtlasPathResolver();
```

#### Returns
[IPathResolver](./Velaptor.Content.IPathResolver.md 'Velaptor.Content.IPathResolver')  
The resolver to texture content.

<a name='Velaptor.Factories.PathResolverFactory.CreateContentFontPathResolver()'></a>

## PathResolverFactory.CreateContentFontPathResolver() Method

Creates a path resolver that resolves paths to fonts in the application's content directory.

```csharp
public static Velaptor.Content.IPathResolver CreateContentFontPathResolver();
```

#### Returns
[IPathResolver](./Velaptor.Content.IPathResolver.md 'Velaptor.Content.IPathResolver')  
The resolver instance.

<a name='Velaptor.Factories.PathResolverFactory.CreateFontPathResolver()'></a>

## PathResolverFactory.CreateFontPathResolver() Method

Creates a path resolver that resolves paths to font content.

```csharp
public static Velaptor.Content.IPathResolver CreateFontPathResolver();
```

#### Returns
[IPathResolver](./Velaptor.Content.IPathResolver.md 'Velaptor.Content.IPathResolver')  
The resolver to atlas content.

<a name='Velaptor.Factories.PathResolverFactory.CreateSoundPathResolver()'></a>

## PathResolverFactory.CreateSoundPathResolver() Method

Creates a path resolver that resolves paths to sound content.

```csharp
public static Velaptor.Content.IPathResolver CreateSoundPathResolver();
```

#### Returns
[IPathResolver](./Velaptor.Content.IPathResolver.md 'Velaptor.Content.IPathResolver')  
The resolver to sound content.

<a name='Velaptor.Factories.PathResolverFactory.CreateSystemFontPathResolver()'></a>

## PathResolverFactory.CreateSystemFontPathResolver() Method

Creates a path resolver that resolves paths to fonts in the system's font directory.

```csharp
public static Velaptor.Content.IPathResolver CreateSystemFontPathResolver();
```

#### Returns
[IPathResolver](./Velaptor.Content.IPathResolver.md 'Velaptor.Content.IPathResolver')  
The resolver instance.

<a name='Velaptor.Factories.PathResolverFactory.CreateTexturePathResolver()'></a>

## PathResolverFactory.CreateTexturePathResolver() Method

Creates a path resolver that resolves paths to texture content.

```csharp
public static Velaptor.Content.IPathResolver CreateTexturePathResolver();
```

#### Returns
[IPathResolver](./Velaptor.Content.IPathResolver.md 'Velaptor.Content.IPathResolver')  
The resolver to texture content.