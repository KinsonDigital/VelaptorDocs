---
title: Velaptor.Graphics.GlyphMetrics
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### GlyphMetrics Struct

Holds all the various metrics of a glyph for rendering purposes.

```csharp
public readonly struct GlyphMetrics :
System.IEquatable<Velaptor.Graphics.GlyphMetrics>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Properties

<a name='Velaptor.Graphics.GlyphMetrics.Ascender'></a>

### Ascender 

Gets the vertical distance from the horizontal baseline to the highest 'character'  
coordinate in a font face.

```csharp
public float Ascender { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Unfortunately, font formats don't define the ascender in a  
uniform way. For some formats, it represents the ascent of all capital Latin characters  
(without accents). For others, it is the ascent of the highest accented character. Finally,  
other formats define it as being equal to Y max value of the global bounding box.

<a name='Velaptor.Graphics.GlyphMetrics.CharIndex'></a>

### CharIndex 

Gets the glyph index.

```csharp
public uint CharIndex { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

#### Remarks
The value of 0 means ‘undefined character code’.

<a name='Velaptor.Graphics.GlyphMetrics.Descender'></a>

### Descender 

Gets the vertical distance from the horizontal baseline to the lowest ‘character’ coordinate in a font face.

```csharp
public float Descender { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Unfortunately, font formats don't define the descender in a uniform way. For some formats,  
it represents the descent of all capital Latin characters (without accents). For others, it is  
the ascent of the lowest accented character. Finally, other formats define it as being equal  
to the Y min value of the global bounding box. This field is negative for values below the baseline.

<a name='Velaptor.Graphics.GlyphMetrics.Glyph'></a>

### Glyph 

Gets the glyph character.

```csharp
public char Glyph { get; set; }
```

#### Property Value
[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')

<a name='Velaptor.Graphics.GlyphMetrics.GlyphBounds'></a>

### GlyphBounds 

Gets the rectangular bounds of where in a font texture  
atlas the given [Glyph](Velaptor.Graphics.GlyphMetrics.md#glyph 'Velaptor.Graphics.GlyphMetrics.Glyph') resides.

```csharp
public System.Drawing.RectangleF GlyphBounds { get; set; }
```

#### Property Value
[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')

<a name='Velaptor.Graphics.GlyphMetrics.GlyphHeight'></a>

### GlyphHeight 

Gets the glyph's height.

```csharp
public float GlyphHeight { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.GlyphWidth'></a>

### GlyphWidth 

Gets the glyph's width.

```csharp
public float GlyphWidth { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.HoriBearingX'></a>

### HoriBearingX 

Gets the horizontal distance from the current cursor position to  
the leftmost border of the glyph image's bounding box.

```csharp
public float HoriBearingX { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.HoriBearingY'></a>

### HoriBearingY 

Gets the vertical distance from the current cursor position  
(on the baseline) to the top most border of the glyph image's bounding box.

```csharp
public float HoriBearingY { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.HorizontalAdvance'></a>

### HorizontalAdvance 

Gets the horizontal distance to increment the pen position when the glyph  
is drawn as part of a string of text.

```csharp
public float HorizontalAdvance { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.XMax'></a>

### XMax 

Gets the horizontal maximum (right-most).

```csharp
public float XMax { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.XMin'></a>

### XMin 

Gets the horizontal minimum (left-most).

```csharp
public float XMin { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.YMax'></a>

### YMax 

Gets the vertical maximum (top-most).

```csharp
public float YMax { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.YMin'></a>

### YMin 

Gets the vertical minimum (bottom-most).

```csharp
public float YMin { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')
