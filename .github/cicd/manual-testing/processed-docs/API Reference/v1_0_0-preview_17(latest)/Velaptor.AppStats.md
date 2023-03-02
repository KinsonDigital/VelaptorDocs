#### [Velaptor](index.md 'index')
### [Velaptor](Velaptor.md 'Velaptor')

## AppStats Class

Records and retrieves information about the running application.

```csharp
public static class AppStats
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; AppStats
### Methods

<a name='Velaptor.AppStats.GetFontGlyphRenderingData()'></a>

## AppStats.GetFontGlyphRenderingData() Method

Gets all of the rendered textures for the last two frames in `string` format.

```csharp
public static string GetFontGlyphRenderingData();
```

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The recorded frame information.

<a name='Velaptor.AppStats.GetLoadedFonts()'></a>

## AppStats.GetLoadedFonts() Method

Returns all of the loaded fonts.

```csharp
public static string GetLoadedFonts();
```

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The string result of all the loaded fonts.

<a name='Velaptor.AppStats.GetLoadedTextures()'></a>

## AppStats.GetLoadedTextures() Method

Returns all of the loaded textures.

```csharp
public static string GetLoadedTextures();
```

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The string result of all the loaded textures.