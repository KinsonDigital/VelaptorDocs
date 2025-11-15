---
title: Velaptor.Content.Fonts.IFont
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Fonts](Velaptor.Content.Fonts.md 'Velaptor.Content.Fonts')

#### IFont Interface

Represents a font with a set size and style that can be used to render text to the screen.

```csharp
public interface IFont :
Velaptor.Content.IContent
```

Derived  
&#8627; [Font](Velaptor.Content.Fonts.Font.md 'Velaptor.Content.Fonts.Font')

Implements [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
## Properties

<a name='Velaptor.Content.Fonts.IFont.Atlas'></a>

### Atlas 

Gets the font atlas texture that contains all the bitmap data for all available glyphs for the font.

```csharp
Velaptor.Content.ITexture Atlas { get; }
```

#### Property Value
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

<a name='Velaptor.Content.Fonts.IFont.AvailableStylesForFamily'></a>

### AvailableStylesForFamily 

Gets a list of all the available font styles for the current font [FamilyName](Velaptor.Content.Fonts.IFont.md#familyname 'Velaptor.Content.Fonts.IFont.FamilyName').

```csharp
System.Collections.Generic.IEnumerable<Velaptor.Content.Fonts.FontStyle> AvailableStylesForFamily { get; }
```

#### Property Value
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[FontStyle](Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

<a name='Velaptor.Content.Fonts.IFont.CacheEnabled'></a>

### CacheEnabled 

Gets or sets a value indicating whether to cache the measurements of the text.

```csharp
bool CacheEnabled { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.IFont.CurrentMeasureCacheSize'></a>

### CurrentMeasureCacheSize 

Gets the total number of text size measurements that are cached.

```csharp
int CurrentMeasureCacheSize { get; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Content.Fonts.IFont.FamilyName'></a>

### FamilyName 

Gets the name of the font family.

```csharp
string FamilyName { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Fonts.IFont.HasKerning'></a>

### HasKerning 

Gets a value indicating whether the font has kerning for text rendering layout.

```csharp
bool HasKerning { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.IFont.IsDefaultFont'></a>

### IsDefaultFont 

Gets a value indicating whether the font is a default font.

```csharp
bool IsDefaultFont { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.IFont.LineSpacing'></a>

### LineSpacing 

Gets the spacing between lines of text in pixels.

```csharp
float LineSpacing { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Content.Fonts.IFont.MaxMeasureCacheSize'></a>

### MaxMeasureCacheSize 

Gets or sets the maximum number of text measurements to cache.

```csharp
int MaxMeasureCacheSize { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Content.Fonts.IFont.Metrics'></a>

### Metrics 

Gets the list of metrics for all the glyphs supported by the font.

```csharp
System.Collections.Generic.IReadOnlyCollection<Velaptor.Graphics.GlyphMetrics> Metrics { get; }
```

#### Property Value
[System.Collections.Generic.IReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')[GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')

<a name='Velaptor.Content.Fonts.IFont.Size'></a>

### Size 

Gets the size of the font in points.

```csharp
uint Size { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Fonts.IFont.Source'></a>

### Source 

Gets the source of where the font was loaded.

```csharp
Velaptor.Content.Fonts.FontSource Source { get; }
```

#### Property Value
[FontSource](Velaptor.Content.Fonts.FontSource.md 'Velaptor.Content.Fonts.FontSource')

<a name='Velaptor.Content.Fonts.IFont.Style'></a>

### Style 

Gets the style of the font.

```csharp
Velaptor.Content.Fonts.FontStyle Style { get; }
```

#### Property Value
[FontStyle](Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')
## Methods

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2)'></a>

### GetCharacterBounds(string, Vector2) 

Returns the bounds of each character in the given [text](Velaptor.Content.Fonts.IFont.md#text 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(string, System.Numerics.Vector2).text') based on the  
given [textPos](Velaptor.Content.Fonts.IFont.md#textpos 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(string, System.Numerics.Vector2).textPos').

```csharp
System.Collections.Generic.IEnumerable<(char character,System.Drawing.RectangleF bounds)> GetCharacterBounds(string text, System.Numerics.Vector2 textPos);
```
#### Parameters

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to get the bounds' data.

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2).textPos'></a>

`textPos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of the text as a whole.

#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[,](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
The bounds for each character.

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(System.Text.StringBuilder,System.Numerics.Vector2)'></a>

### GetCharacterBounds(StringBuilder, Vector2) 

Returns the bounds of each character in the given [text](Velaptor.Content.Fonts.IFont.md#text 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(System.Text.StringBuilder, System.Numerics.Vector2).text') based on the  
given [textPos](Velaptor.Content.Fonts.IFont.md#textpos 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(System.Text.StringBuilder, System.Numerics.Vector2).textPos').

```csharp
System.Collections.Generic.IEnumerable<(char character,System.Drawing.RectangleF bounds)> GetCharacterBounds(System.Text.StringBuilder text, System.Numerics.Vector2 textPos);
```
#### Parameters

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(System.Text.StringBuilder,System.Numerics.Vector2).text'></a>

`text` [System.Text.StringBuilder](https://docs.microsoft.com/en-us/dotnet/api/System.Text.StringBuilder 'System.Text.StringBuilder')

The text to get the bounds' data.

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(System.Text.StringBuilder,System.Numerics.Vector2).textPos'></a>

`textPos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of the text as a whole.

#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[,](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
The bounds for each character.

<a name='Velaptor.Content.Fonts.IFont.GetKerning(uint,uint)'></a>

### GetKerning(uint, uint) 

Gets the kerning between two glyphs using the given [leftGlyphIndex](Velaptor.Content.Fonts.IFont.md#leftglyphindex 'Velaptor.Content.Fonts.IFont.GetKerning(uint, uint).leftGlyphIndex') and [rightGlyphIndex](Velaptor.Content.Fonts.IFont.md#rightglyphindex 'Velaptor.Content.Fonts.IFont.GetKerning(uint, uint).rightGlyphIndex').

```csharp
float GetKerning(uint leftGlyphIndex, uint rightGlyphIndex);
```
#### Parameters

<a name='Velaptor.Content.Fonts.IFont.GetKerning(uint,uint).leftGlyphIndex'></a>

`leftGlyphIndex` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The index of the left glyph.

<a name='Velaptor.Content.Fonts.IFont.GetKerning(uint,uint).rightGlyphIndex'></a>

`rightGlyphIndex` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The index of the right glyph.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The kerning result between the glyphs.

#### Remarks
Refer to https://freetype.org/freetype2/docs/glyphs/glyphs-4.html for more info.

<a name='Velaptor.Content.Fonts.IFont.Measure(string)'></a>

### Measure(string) 

Measures the width and height bounds of the given [text](Velaptor.Content.Fonts.IFont.md#text 'Velaptor.Content.Fonts.IFont.Measure(string).text').

```csharp
System.Drawing.SizeF Measure(string text);
```
#### Parameters

<a name='Velaptor.Content.Fonts.IFont.Measure(string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to measure.

#### Returns
[System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF')  
The width and height of the text in pixels.

<a name='Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string)'></a>

### ToGlyphMetrics(string) 

Gets the glyph metrics using the given [text](Velaptor.Content.Fonts.IFont.md#text 'Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string).text').

```csharp
Velaptor.Graphics.GlyphMetrics[] ToGlyphMetrics(string text);
```
#### Parameters

<a name='Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to get the metrics for.

#### Returns
[GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The metrics of each individual glyph/character.
