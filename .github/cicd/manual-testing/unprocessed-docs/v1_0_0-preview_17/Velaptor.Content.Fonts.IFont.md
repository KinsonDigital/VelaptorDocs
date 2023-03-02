#### [Velaptor](index.md 'index')
### [Velaptor.Content.Fonts](Velaptor.Content.Fonts.md 'Velaptor.Content.Fonts')

## IFont Interface

The font to use when rendering text to the screen.

```csharp
public interface IFont :
Velaptor.Content.IContent
```

Derived  
&#8627; [Font](Velaptor.Content.Fonts.Font.md 'Velaptor.Content.Fonts.Font')

Implements [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
### Properties

<a name='Velaptor.Content.Fonts.IFont.Atlas'></a>

## IFont.Atlas Property

Gets the font atlas texture that contains all of the bitmap data for all available glyphs for the font.

```csharp
Velaptor.Content.ITexture Atlas { get; }
```

#### Property Value
[ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

<a name='Velaptor.Content.Fonts.IFont.AvailableStylesForFamily'></a>

## IFont.AvailableStylesForFamily Property

Gets a list of all the available font styles for the current font [FamilyName](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.FamilyName 'Velaptor.Content.Fonts.IFont.FamilyName').

```csharp
System.Collections.Generic.IEnumerable<Velaptor.Content.Fonts.FontStyle> AvailableStylesForFamily { get; }
```

#### Property Value
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[FontStyle](Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

<a name='Velaptor.Content.Fonts.IFont.FamilyName'></a>

## IFont.FamilyName Property

Gets the name of the font family.

```csharp
string FamilyName { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Fonts.IFont.HasKerning'></a>

## IFont.HasKerning Property

Gets a value indicating whether or not the font has kerning for text rendering layout.

```csharp
bool HasKerning { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.IFont.IsDefaultFont'></a>

## IFont.IsDefaultFont Property

Gets a value indicating whether or not the font is a default font.

```csharp
bool IsDefaultFont { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Fonts.IFont.LineSpacing'></a>

## IFont.LineSpacing Property

Gets the spacing between lines of text in pixels.

```csharp
float LineSpacing { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Content.Fonts.IFont.Metrics'></a>

## IFont.Metrics Property

Gets the list of metrics for all of the glyphs supported by the font.

```csharp
System.Collections.ObjectModel.ReadOnlyCollection<Velaptor.Graphics.GlyphMetrics> Metrics { get; }
```

#### Property Value
[System.Collections.ObjectModel.ReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')[GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')

<a name='Velaptor.Content.Fonts.IFont.Size'></a>

## IFont.Size Property

Gets or sets the size of the font in points.

```csharp
uint Size { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Fonts.IFont.Source'></a>

## IFont.Source Property

Gets the source of where the font was loaded.

```csharp
Velaptor.Content.Fonts.FontSource Source { get; }
```

#### Property Value
[FontSource](Velaptor.Content.Fonts.FontSource.md 'Velaptor.Content.Fonts.FontSource')

<a name='Velaptor.Content.Fonts.IFont.Style'></a>

## IFont.Style Property

Gets or sets the style of the font.

```csharp
Velaptor.Content.Fonts.FontStyle Style { get; set; }
```

#### Property Value
[FontStyle](Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')
### Methods

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2)'></a>

## IFont.GetCharacterBounds(string, Vector2) Method

Returns the bounds of each character in the given [text](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2).text 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(string, System.Numerics.Vector2).text') based on the  
given [textPos](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2).textPos 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(string, System.Numerics.Vector2).textPos').

```csharp
System.Collections.Generic.IEnumerable<(char character,System.Drawing.RectangleF bounds)> GetCharacterBounds(string text, System.Numerics.Vector2 textPos);
```
#### Parameters

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to get the bounds data.

<a name='Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2).textPos'></a>

`textPos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of the text as a whole.

#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[,](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
The bounds for each character.

### Remarks
The bounds include the width, height, and position of the character relative to  
the [textPos](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetCharacterBounds(string,System.Numerics.Vector2).textPos 'Velaptor.Content.Fonts.IFont.GetCharacterBounds(string, System.Numerics.Vector2).textPos').  The position is relative to the top left corner of the character.

<a name='Velaptor.Content.Fonts.IFont.GetKerning(uint,uint)'></a>

## IFont.GetKerning(uint, uint) Method

Gets the kerning between two glyphs using the given [leftGlyphIndex](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetKerning(uint,uint).leftGlyphIndex 'Velaptor.Content.Fonts.IFont.GetKerning(uint, uint).leftGlyphIndex') and [rightGlyphIndex](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.GetKerning(uint,uint).rightGlyphIndex 'Velaptor.Content.Fonts.IFont.GetKerning(uint, uint).rightGlyphIndex').

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

### Remarks
Refer to https://freetype.org/freetype2/docs/glyphs/glyphs-4.html for more info.

<a name='Velaptor.Content.Fonts.IFont.Measure(string)'></a>

## IFont.Measure(string) Method

Measures the width and height bounds of the given [text](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.Measure(string).text 'Velaptor.Content.Fonts.IFont.Measure(string).text').

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

## IFont.ToGlyphMetrics(string) Method

Gets the glyph metrics using the given [text](Velaptor.Content.Fonts.IFont.md#Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string).text 'Velaptor.Content.Fonts.IFont.ToGlyphMetrics(string).text').

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