#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Fonts](./Velaptor.Content.Fonts.md 'Velaptor.Content.Fonts')

## Font Class

Represents a font with a set size and style that can be used to render text to the screen.

```csharp
public sealed class Font :
Velaptor.Content.Fonts.IFont,
Velaptor.Content.IContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → Font

Implements [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont'), [IContent](./Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
### Properties

<a name='Velaptor.Content.Fonts.Font.Atlas'></a>

## Font.Atlas Property

Gets the font atlas texture that contains all of the bitmap data for all available glyphs for the font.

```csharp
public Velaptor.Content.ITexture Atlas { get; set; }
```

Implements [Atlas](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.Atlas 'Velaptor.Content.Fonts.IFont.Atlas')

#### Property Value
[ITexture](./Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

<a name='Velaptor.Content.Fonts.Font.AvailableStylesForFamily'></a>

## Font.AvailableStylesForFamily Property

Gets a list of all the available font styles for the current font [FamilyName](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.FamilyName 'Velaptor.Content.Fonts.IFont.FamilyName').

```csharp
public System.Collections.Generic.IEnumerable<Velaptor.Content.Fonts.FontStyle> AvailableStylesForFamily { get; }
```

Implements [AvailableStylesForFamily](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.AvailableStylesForFamily 'Velaptor.Content.Fonts.IFont.AvailableStylesForFamily')

#### Property Value
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[FontStyle](./Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

<a name='Velaptor.Content.Fonts.Font.FamilyName'></a>

## Font.FamilyName Property

Gets the name of the font family.

```csharp
public string FamilyName { get; }
```

Implements [FamilyName](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.FamilyName 'Velaptor.Content.Fonts.IFont.FamilyName')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Fonts.Font.FilePath'></a>

## Font.FilePath Property

Gets the path to the content.

```csharp
public string FilePath { get; }
```

Implements [FilePath](./Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Fonts.Font.HasKerning'></a>

## Font.HasKerning Property

Gets a value indicating whether or not the font has kerning for text rendering layout.

```csharp
public bool HasKerning { get; }
```

Implements [HasKerning](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.HasKerning 'Velaptor.Content.Fonts.IFont.HasKerning')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.Font.IsDefaultFont'></a>

## Font.IsDefaultFont Property

Gets a value indicating whether or not the font is a default font.

```csharp
public bool IsDefaultFont { get; }
```

Implements [IsDefaultFont](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.IsDefaultFont 'Velaptor.Content.Fonts.IFont.IsDefaultFont')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.Font.LineSpacing'></a>

## Font.LineSpacing Property

Gets the spacing between lines of text in pixels.

```csharp
public float LineSpacing { get; set; }
```

Implements [LineSpacing](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.LineSpacing 'Velaptor.Content.Fonts.IFont.LineSpacing')

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Content.Fonts.Font.Metrics'></a>

## Font.Metrics Property

Gets the list of metrics for all of the glyphs supported by the font.

```csharp
public System.Collections.ObjectModel.ReadOnlyCollection<Velaptor.Graphics.GlyphMetrics> Metrics { get; }
```

Implements [Metrics](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.Metrics 'Velaptor.Content.Fonts.IFont.Metrics')

#### Property Value
[System.Collections.ObjectModel.ReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')[GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')

<a name='Velaptor.Content.Fonts.Font.Name'></a>

## Font.Name Property

Gets the name of the content.

```csharp
public string Name { get; }
```

Implements [Name](./Velaptor.Content.IContent.md#Velaptor.Content.IContent.Name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Fonts.Font.Size'></a>

## Font.Size Property

Gets or sets the size of the font in points.

```csharp
public uint Size { get; set; }
```

Implements [Size](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.Size 'Velaptor.Content.Fonts.IFont.Size')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Fonts.Font.Source'></a>

## Font.Source Property

Gets the source of where the font was loaded.

```csharp
public Velaptor.Content.Fonts.FontSource Source { get; }
```

Implements [Source](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.Source 'Velaptor.Content.Fonts.IFont.Source')

#### Property Value
[FontSource](./Velaptor.Content.Fonts.FontSource.md 'Velaptor.Content.Fonts.FontSource')

<a name='Velaptor.Content.Fonts.Font.Style'></a>

## Font.Style Property

Gets or sets the style of the font.

```csharp
public Velaptor.Content.Fonts.FontStyle Style { get; set; }
```

Implements [Style](./Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.Style 'Velaptor.Content.Fonts.IFont.Style')

#### Property Value
[FontStyle](./Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')
### Methods

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2)'></a>

## Font.GetCharacterBounds(string, Vector2) Method

Returns the bounds of each character in the given [text](./Velaptor.Content.Fonts.Font.md#Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2).text 'Velaptor.Content.Fonts.Font.GetCharacterBounds(string, System.Numerics.Vector2).text') based on the  
given [textPos](./Velaptor.Content.Fonts.Font.md#Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2).textPos 'Velaptor.Content.Fonts.Font.GetCharacterBounds(string, System.Numerics.Vector2).textPos').

```csharp
public System.Collections.Generic.IEnumerable<(char character,System.Drawing.RectangleF bounds)> GetCharacterBounds(string text, System.Numerics.Vector2 textPos);
```
#### Parameters

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to get the bounds data.

<a name='Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2).textPos'></a>

`textPos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of the text as a whole.

Implements [GetCharacterBounds(string, Vector2)](./string, Vector2](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2)) 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(string, System.Numerics.Vector2)')

#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[,](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
The bounds for each character.

### Remarks
The bounds include the width, height, and position of the character relative to  
the [textPos](./Velaptor.Content.Fonts.Font.md#Velaptor.Content.Fonts.Font.GetCharacterBounds(string,System.Numerics.Vector2).textPos 'Velaptor.Content.Fonts.Font.GetCharacterBounds(string, System.Numerics.Vector2).textPos').  The position is relative to the top left corner of the character.

<a name='Velaptor.Content.Fonts.Font.GetKerning(uint,uint)'></a>

## Font.GetKerning(uint, uint) Method

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

Implements [GetKerning(uint, uint)](./uint, uint](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetKerning(uint,uint)) 'Velaptor.Content.Fonts.IFont.GetKerning(uint, uint)')

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The kerning (horizontal spacing) between the glyphs.

### Remarks
Refer to the URL below for more info.  
  
https://freetype.org/freetype2/docs/glyphs/glyphs-4.html#section-1.

<a name='Velaptor.Content.Fonts.Font.Measure(string)'></a>

## Font.Measure(string) Method

Measures the width and height bounds of the given [text](./Velaptor.Content.Fonts.Font.md#Velaptor.Content.Fonts.Font.Measure(string).text 'Velaptor.Content.Fonts.Font.Measure(string).text').

```csharp
public System.Drawing.SizeF Measure(string text);
```
#### Parameters

<a name='Velaptor.Content.Fonts.Font.Measure(string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to measure.

Implements [Measure(string)](./string](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.Measure(string)) 'Velaptor.Content.Fonts.IFont.Measure(string)')

#### Returns
[System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF')  
The width and height of the text in pixels.

<a name='Velaptor.Content.Fonts.Font.ToGlyphMetrics(string)'></a>

## Font.ToGlyphMetrics(string) Method

Returns all of the glyph metrics for the given text.

```csharp
public Velaptor.Graphics.GlyphMetrics[] ToGlyphMetrics(string text);
```
#### Parameters

<a name='Velaptor.Content.Fonts.Font.ToGlyphMetrics(string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to convert to glyph metrics.

Implements [ToGlyphMetrics(string)](./string](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string)) 'Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string)')

#### Returns
[GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The list of glyph metrics of the given [text](./Velaptor.Content.Fonts.Font.md#Velaptor.Content.Fonts.Font.ToGlyphMetrics(string).text 'Velaptor.Content.Fonts.Font.ToGlyphMetrics(string).text').