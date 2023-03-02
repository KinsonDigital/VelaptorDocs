#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](./Velaptor.Graphics.md 'Velaptor.Graphics')

## GlyphMetrics Struct

Holds all of the various metrics of a glyph for rendering purposes.

```csharp
public struct GlyphMetrics :
System.IEquatable<Velaptor.Graphics.GlyphMetrics>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Properties

<a name='Velaptor.Graphics.GlyphMetrics.Ascender'></a>

## GlyphMetrics.Ascender Property

Gets or sets the vertical distance from the horizontal baseline to the highest 'character'  
coordinate in a font face.

```csharp
public float Ascender { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
Unfortunately, font formats don't define the ascender in a  
uniform way. For some formats, it represents the ascent of all capital Latin characters  
(without accents). For others it is the ascent of the highest accented character. Finally,  
other formats define it as being equal to Y max value of the global bounding box.

<a name='Velaptor.Graphics.GlyphMetrics.CharIndex'></a>

## GlyphMetrics.CharIndex Property

Gets or sets the glyph index.

```csharp
public uint CharIndex { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

### Remarks
The value of 0 means ‘undefined character code’.

<a name='Velaptor.Graphics.GlyphMetrics.Descender'></a>

## GlyphMetrics.Descender Property

Gets or sets the vertical distance from the horizontal baseline to the lowest ‘character’ coordinate in a font face.

```csharp
public float Descender { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
Unfortunately, font formats don't define the descender in a uniform way. For some formats,  
it represents the descent of all capital Latin characters (without accents). For others it is  
the ascent of the lowest accented character. Finally, other formats define it as being equal  
to the Y min value of the global bounding box. This field is negative for values below the baseline.

<a name='Velaptor.Graphics.GlyphMetrics.Glyph'></a>

## GlyphMetrics.Glyph Property

Gets or sets the glyph character.

```csharp
public char Glyph { get; set; }
```

#### Property Value
[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')

<a name='Velaptor.Graphics.GlyphMetrics.GlyphBounds'></a>

## GlyphMetrics.GlyphBounds Property

Gets or sets the rectangular bounds of where in a font texture  
atlas the given [Glyph](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.Glyph 'Velaptor.Graphics.GlyphMetrics.Glyph') resides.

```csharp
public System.Drawing.RectangleF GlyphBounds { get; set; }
```

#### Property Value
[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')

<a name='Velaptor.Graphics.GlyphMetrics.GlyphHeight'></a>

## GlyphMetrics.GlyphHeight Property

Gets or sets the glyph's height.

```csharp
public float GlyphHeight { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.GlyphWidth'></a>

## GlyphMetrics.GlyphWidth Property

Gets or sets the glyph's width.

```csharp
public float GlyphWidth { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.HoriBearingX'></a>

## GlyphMetrics.HoriBearingX Property

Gets or sets the horizontal distance from the current cursor position to  
the leftmost border of the glyph image's bounding box.

```csharp
public float HoriBearingX { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.HoriBearingY'></a>

## GlyphMetrics.HoriBearingY Property

Gets or sets the vertical distance from the current cursor position  
(on the baseline) to the topmost border of the glyph image's bounding box.

```csharp
public float HoriBearingY { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.HorizontalAdvance'></a>

## GlyphMetrics.HorizontalAdvance Property

Gets or sets the horizontal distance to increment the pen position when the glyph  
is drawn as part of a string of text.

```csharp
public float HorizontalAdvance { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.XMax'></a>

## GlyphMetrics.XMax Property

Gets or sets the horizontal maximum (right-most).

```csharp
public float XMax { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.XMin'></a>

## GlyphMetrics.XMin Property

Gets or sets the horizontal minimum (left-most).

```csharp
public float XMin { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.YMax'></a>

## GlyphMetrics.YMax Property

Gets or sets the vertical maximum (top-most).

```csharp
public float YMax { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.GlyphMetrics.YMin'></a>

## GlyphMetrics.YMin Property

Gets or sets the vertical minimum (bottom-most).

```csharp
public float YMin { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')
### Methods

<a name='Velaptor.Graphics.GlyphMetrics.Equals(object)'></a>

## GlyphMetrics.Equals(object) Method

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object? obj);
```
#### Parameters

<a name='Velaptor.Graphics.GlyphMetrics.Equals(object).obj'></a>

`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The object to compare with the current object.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if the specified object  is equal to the current object; otherwise, [false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

<a name='Velaptor.Graphics.GlyphMetrics.Equals(Velaptor.Graphics.GlyphMetrics)'></a>

## GlyphMetrics.Equals(GlyphMetrics) Method

```csharp
public bool Equals(Velaptor.Graphics.GlyphMetrics other);
```
#### Parameters

<a name='Velaptor.Graphics.GlyphMetrics.Equals(Velaptor.Graphics.GlyphMetrics).other'></a>

`other` [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Graphics.GlyphMetrics.GetHashCode()'></a>

## GlyphMetrics.GetHashCode() Method

Returns the hash code for this instance.

```csharp
public override int GetHashCode();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
A 32-bit signed integer that is the hash code for this instance.

<a name='Velaptor.Graphics.GlyphMetrics.ToString()'></a>

## GlyphMetrics.ToString() Method

Returns the fully qualified type name of this instance.

```csharp
public override string ToString();
```

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The fully qualified type name.
### Operators

<a name='Velaptor.Graphics.GlyphMetrics.op_Equality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics)'></a>

## GlyphMetrics.operator ==(GlyphMetrics, GlyphMetrics) Operator

Returns a value indicating whether or not the [left](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.op_Equality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics).left 'Velaptor.Graphics.GlyphMetrics.op_Equality(Velaptor.Graphics.GlyphMetrics, Velaptor.Graphics.GlyphMetrics).left') operand is equal to the [right](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.op_Equality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics).right 'Velaptor.Graphics.GlyphMetrics.op_Equality(Velaptor.Graphics.GlyphMetrics, Velaptor.Graphics.GlyphMetrics).right') operand.

```csharp
public static bool operator ==(Velaptor.Graphics.GlyphMetrics left, Velaptor.Graphics.GlyphMetrics right);
```
#### Parameters

<a name='Velaptor.Graphics.GlyphMetrics.op_Equality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics).left'></a>

`left` [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')

The left operand compared with the right operand.

<a name='Velaptor.Graphics.GlyphMetrics.op_Equality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics).right'></a>

`right` [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')

The right operand compared with the left operand.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if both operands are equal.

<a name='Velaptor.Graphics.GlyphMetrics.op_Inequality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics)'></a>

## GlyphMetrics.operator !=(GlyphMetrics, GlyphMetrics) Operator

Returns a value indicating whether or not the [left](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.op_Inequality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics).left 'Velaptor.Graphics.GlyphMetrics.op_Inequality(Velaptor.Graphics.GlyphMetrics, Velaptor.Graphics.GlyphMetrics).left') operand is not equal to the [right](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.op_Inequality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics).right 'Velaptor.Graphics.GlyphMetrics.op_Inequality(Velaptor.Graphics.GlyphMetrics, Velaptor.Graphics.GlyphMetrics).right') operand.

```csharp
public static bool operator !=(Velaptor.Graphics.GlyphMetrics left, Velaptor.Graphics.GlyphMetrics right);
```
#### Parameters

<a name='Velaptor.Graphics.GlyphMetrics.op_Inequality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics).left'></a>

`left` [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')

The left operand compared with the right operand.

<a name='Velaptor.Graphics.GlyphMetrics.op_Inequality(Velaptor.Graphics.GlyphMetrics,Velaptor.Graphics.GlyphMetrics).right'></a>

`right` [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')

The right operand compared with the left operand.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if both operands are not equal.