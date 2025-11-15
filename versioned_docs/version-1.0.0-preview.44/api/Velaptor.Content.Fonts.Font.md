---
title: Velaptor.Content.Fonts.Font
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Fonts](Velaptor.Content.Fonts.md 'Velaptor.Content.Fonts')

#### Font Class

Represents a font with a set size and style that can be used to render text to the screen.

```csharp
public sealed class Font :
Velaptor.Content.Fonts.IFont,
Velaptor.Content.IContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → Font

Implements [IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont'), [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
## Properties

<a name='Velaptor.Content.Fonts.Font.Atlas'></a>

### Atlas 

Gets the font atlas texture that contains all the bitmap data for all available glyphs for the font.

```csharp
public Velaptor.Content.ITexture Atlas { get; }
```

Implements [Atlas](Velaptor.Content.Fonts.IFont.md#atlas 'Velaptor.Content.Fonts.IFont.Atlas')

#### Property Value
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

<a name='Velaptor.Content.Fonts.Font.AvailableStylesForFamily'></a>

### AvailableStylesForFamily 

Gets a list of all the available font styles for the current font [FamilyName](Velaptor.Content.Fonts.IFont.md#familyname 'Velaptor.Content.Fonts.IFont.FamilyName').

```csharp
public System.Collections.Generic.IEnumerable<Velaptor.Content.Fonts.FontStyle> AvailableStylesForFamily { get; }
```

Implements [AvailableStylesForFamily](Velaptor.Content.Fonts.IFont.md#availablestylesforfamily 'Velaptor.Content.Fonts.IFont.AvailableStylesForFamily')

#### Property Value
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[FontStyle](Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

<a name='Velaptor.Content.Fonts.Font.CacheEnabled'></a>

### CacheEnabled 

Gets or sets a value indicating whether to cache the measurements of the text.

```csharp
public bool CacheEnabled { get; set; }
```

Implements [CacheEnabled](Velaptor.Content.Fonts.IFont.md#cacheenabled 'Velaptor.Content.Fonts.IFont.CacheEnabled')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.Font.CurrentMeasureCacheSize'></a>

### CurrentMeasureCacheSize 

Gets the total number of text size measurements that are cached.

```csharp
public int CurrentMeasureCacheSize { get; }
```

Implements [CurrentMeasureCacheSize](Velaptor.Content.Fonts.IFont.md#currentmeasurecachesize 'Velaptor.Content.Fonts.IFont.CurrentMeasureCacheSize')

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Content.Fonts.Font.FamilyName'></a>

### FamilyName 

Gets the name of the font family.

```csharp
public string FamilyName { get; }
```

Implements [FamilyName](Velaptor.Content.Fonts.IFont.md#familyname 'Velaptor.Content.Fonts.IFont.FamilyName')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Fonts.Font.FilePath'></a>

### FilePath 

Gets the path to the content.

```csharp
public string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IContent.md#filepath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Fonts.Font.HasKerning'></a>

### HasKerning 

Gets a value indicating whether the font has kerning for text rendering layout.

```csharp
public bool HasKerning { get; }
```

Implements [HasKerning](Velaptor.Content.Fonts.IFont.md#haskerning 'Velaptor.Content.Fonts.IFont.HasKerning')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.Font.IsDefaultFont'></a>

### IsDefaultFont 

Gets a value indicating whether the font is a default font.

```csharp
public bool IsDefaultFont { get; }
```

Implements [IsDefaultFont](Velaptor.Content.Fonts.IFont.md#isdefaultfont 'Velaptor.Content.Fonts.IFont.IsDefaultFont')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.Font.LineSpacing'></a>

### LineSpacing 

Gets the spacing between lines of text in pixels.

```csharp
public float LineSpacing { get; }
```

Implements [LineSpacing](Velaptor.Content.Fonts.IFont.md#linespacing 'Velaptor.Content.Fonts.IFont.LineSpacing')

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Content.Fonts.Font.MaxMeasureCacheSize'></a>

### MaxMeasureCacheSize 

Gets or sets the maximum number of text measurements to cache.

```csharp
public int MaxMeasureCacheSize { get; set; }
```

Implements [MaxMeasureCacheSize](Velaptor.Content.Fonts.IFont.md#maxmeasurecachesize 'Velaptor.Content.Fonts.IFont.MaxMeasureCacheSize')

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Content.Fonts.Font.Metrics'></a>

### Metrics 

Gets the list of metrics for all the glyphs supported by the font.

```csharp
public System.Collections.Generic.IReadOnlyCollection<Velaptor.Graphics.GlyphMetrics> Metrics { get; }
```

Implements [Metrics](Velaptor.Content.Fonts.IFont.md#metrics 'Velaptor.Content.Fonts.IFont.Metrics')

#### Property Value
[System.Collections.Generic.IReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')[GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')

<a name='Velaptor.Content.Fonts.Font.Name'></a>

### Name 

Gets the name of the content.

```csharp
public string Name { get; }
```

Implements [Name](Velaptor.Content.IContent.md#name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Fonts.Font.Size'></a>

### Size 

Gets the size of the font in points.

```csharp
public uint Size { get; set; }
```

Implements [Size](Velaptor.Content.Fonts.IFont.md#size 'Velaptor.Content.Fonts.IFont.Size')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Fonts.Font.Source'></a>

### Source 

Gets the source of where the font was loaded.

```csharp
public Velaptor.Content.Fonts.FontSource Source { get; }
```

Implements [Source](Velaptor.Content.Fonts.IFont.md#source 'Velaptor.Content.Fonts.IFont.Source')

#### Property Value
[FontSource](Velaptor.Content.Fonts.FontSource.md 'Velaptor.Content.Fonts.FontSource')

<a name='Velaptor.Content.Fonts.Font.Style'></a>

### Style 

Gets the style of the font.

```csharp
public Velaptor.Content.Fonts.FontStyle Style { get; set; }
```

Implements [Style](Velaptor.Content.Fonts.IFont.md#style 'Velaptor.Content.Fonts.IFont.Style')

#### Property Value
[FontStyle](Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')
## Methods

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2)'></a>

### GetCharacterBounds(string, Vector2) 

Returns the bounds of each character in the given [text](Velaptor.Content.Fonts.Font.md#text 'Velaptor.Content.Fonts.Font.GetCharacterBounds(string, System.Numerics.Vector2).text') based on the  
given [textPos](Velaptor.Content.Fonts.Font.md#textpos 'Velaptor.Content.Fonts.Font.GetCharacterBounds(string, System.Numerics.Vector2).textPos').

```csharp
public System.Collections.Generic.IEnumerable<(char character,System.Drawing.RectangleF bounds)> GetCharacterBounds(string text, System.Numerics.Vector2 textPos);
```
#### Parameters

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to get the bounds' data.

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2).textPos'></a>

`textPos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of the text as a whole.

Implements [GetCharacterBounds(string, Vector2)](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2) 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(string, System.Numerics.Vector2)')

#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[,](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
The bounds for each character.

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(System.Text.StringBuilder,System.Numerics.Vector2)'></a>

### GetCharacterBounds(StringBuilder, Vector2) 

Returns the bounds of each character in the given [text](Velaptor.Content.Fonts.Font.md#text 'Velaptor.Content.Fonts.Font.GetCharacterBounds(System.Text.StringBuilder, System.Numerics.Vector2).text') based on the  
given [textPos](Velaptor.Content.Fonts.Font.md#textpos 'Velaptor.Content.Fonts.Font.GetCharacterBounds(System.Text.StringBuilder, System.Numerics.Vector2).textPos').

```csharp
public System.Collections.Generic.IEnumerable<(char character,System.Drawing.RectangleF bounds)> GetCharacterBounds(System.Text.StringBuilder text, System.Numerics.Vector2 textPos);
```
#### Parameters

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(System.Text.StringBuilder,System.Numerics.Vector2).text'></a>

`text` [System.Text.StringBuilder](https://docs.microsoft.com/en-us/dotnet/api/System.Text.StringBuilder 'System.Text.StringBuilder')

The text to get the bounds' data.

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(System.Text.StringBuilder,System.Numerics.Vector2).textPos'></a>

`textPos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of the text as a whole.

Implements [GetCharacterBounds(StringBuilder, Vector2)](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetCharacterBounds(System.Text.StringBuilder,System.Numerics.Vector2) 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(System.Text.StringBuilder, System.Numerics.Vector2)')

#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[,](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
The bounds for each character.

<a name='Velaptor.Content.Fonts.Font.GetKerning(uint,uint)'></a>

### GetKerning(uint, uint) 

Gets the kerning value between two glyphs.

```csharp
public float GetKerning(uint leftGlyphIndex, uint rightGlyphIndex);
```
#### Parameters

<a name='Velaptor.Content.Fonts.Font.GetKerning(uint,uint).leftGlyphIndex'></a>

`leftGlyphIndex` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The character index of the glyph to the left of the right glyph.

<a name='Velaptor.Content.Fonts.Font.GetKerning(uint,uint).rightGlyphIndex'></a>

`rightGlyphIndex` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The character index of the glyph to the right of the left glyph.

Implements [GetKerning(uint, uint)](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetKerning(uint,uint) 'Velaptor.Content.Fonts.IFont.GetKerning(uint, uint)')

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The kerning (horizontal spacing) between the glyphs.

#### Remarks
Refer to the URL below for more info.  
  
https://freetype.org/freetype2/docs/glyphs/glyphs-4.html#section-1.

<a name='Velaptor.Content.Fonts.Font.Measure(string)'></a>

### Measure(string) 

Measures the width and height bounds of the given [text](Velaptor.Content.Fonts.Font.md#text 'Velaptor.Content.Fonts.Font.Measure(string).text').

```csharp
public System.Drawing.SizeF Measure(string text);
```
#### Parameters

<a name='Velaptor.Content.Fonts.Font.Measure(string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to measure.

Implements [Measure(string)](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.Measure(string) 'Velaptor.Content.Fonts.IFont.Measure(string)')

#### Returns
[System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF')  
The width and height of the text in pixels.

<a name='Velaptor.Content.Fonts.Font.ToGlyphMetrics(string)'></a>

### ToGlyphMetrics(string) 

Returns all the glyph metrics for the given text.

```csharp
public Velaptor.Graphics.GlyphMetrics[] ToGlyphMetrics(string text);
```
#### Parameters

<a name='Velaptor.Content.Fonts.Font.ToGlyphMetrics(string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to convert to glyph metrics.

Implements [ToGlyphMetrics(string)](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string) 'Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string)')

#### Returns
[GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The list of glyph metrics of the given [text](Velaptor.Content.Fonts.Font.md#text 'Velaptor.Content.Fonts.Font.ToGlyphMetrics(string).text').
