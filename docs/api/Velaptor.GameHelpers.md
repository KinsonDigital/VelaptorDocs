---
title: Velaptor.GameHelpers
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor](Velaptor.md 'Velaptor')

#### GameHelpers Class

Provides extension helper methods for common game related operations.

```csharp
public static class GameHelpers
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → GameHelpers
## Methods

<a name='Velaptor.GameHelpers.ApplySize(thisfloat,float)'></a>

### ApplySize(this float, float) 

Returns the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.ApplySize(this float, float).value') with the given [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this float, float).size') applied.

```csharp
public static float ApplySize(this float value, float size);
```
#### Parameters

<a name='Velaptor.GameHelpers.ApplySize(thisfloat,float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to apply the size to.

<a name='Velaptor.GameHelpers.ApplySize(thisfloat,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The value after the size has been applied.

### Example
If the value was 3 and the size was 2, then the result would be 6.

#### Remarks
A [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this float, float).size') value of 1 represents 100% or the unchanged normal size of the value.  
If the value of [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this float, float).size') is 2, then the result would be the given  
[value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.ApplySize(this float, float).value') that is doubled.

<a name='Velaptor.GameHelpers.ApplySize(thisSystem.Drawing.RectangleF,float)'></a>

### ApplySize(this RectangleF, float) 

Returns the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.ApplySize(this System.Drawing.RectangleF, float).value') with the given [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this System.Drawing.RectangleF, float).size') applied.

```csharp
public static System.Drawing.RectangleF ApplySize(this System.Drawing.RectangleF value, float size);
```
#### Parameters

<a name='Velaptor.GameHelpers.ApplySize(thisSystem.Drawing.RectangleF,float).value'></a>

`value` [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')

The [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF') to apply the size to.

<a name='Velaptor.GameHelpers.ApplySize(thisSystem.Drawing.RectangleF,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')  
The result after the size has been applied.

#### Remarks
The size will be applied to the following:  
- [System.Drawing.RectangleF.X](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF.X 'System.Drawing.RectangleF.X')  
- [System.Drawing.RectangleF.Y](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF.Y 'System.Drawing.RectangleF.Y')  
- [System.Drawing.RectangleF.Width](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF.Width 'System.Drawing.RectangleF.Width')  
- [System.Drawing.RectangleF.Height](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF.Height 'System.Drawing.RectangleF.Height')

<a name='Velaptor.GameHelpers.ApplySize(thisSystem.Drawing.SizeF,float)'></a>

### ApplySize(this SizeF, float) 

Returns the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.ApplySize(this System.Drawing.SizeF, float).value') with the given [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this System.Drawing.SizeF, float).size') applied.

```csharp
public static System.Drawing.SizeF ApplySize(this System.Drawing.SizeF value, float size);
```
#### Parameters

<a name='Velaptor.GameHelpers.ApplySize(thisSystem.Drawing.SizeF,float).value'></a>

`value` [System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF')

The [System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF') to apply the size to.

<a name='Velaptor.GameHelpers.ApplySize(thisSystem.Drawing.SizeF,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF')  
The result after the size has been applied.

#### Remarks
The size will be applied to the following:  
- [System.Drawing.SizeF.Width](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF.Width 'System.Drawing.SizeF.Width')  
- [System.Drawing.SizeF.Height](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF.Height 'System.Drawing.SizeF.Height')

<a name='Velaptor.GameHelpers.ApplySize(thisuint,float)'></a>

### ApplySize(this uint, float) 

Returns the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.ApplySize(this uint, float).value') with the given [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this uint, float).size') applied.

```csharp
public static float ApplySize(this uint value, float size);
```
#### Parameters

<a name='Velaptor.GameHelpers.ApplySize(thisuint,float).value'></a>

`value` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The value to apply the size to.

<a name='Velaptor.GameHelpers.ApplySize(thisuint,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The value after the size has been applied.

### Example
If the value was 3 and the size was 2, then the result would be 6.

#### Remarks
A [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this uint, float).size') value of 1 represents 100% or the unchanged normal size of the value.  
If the value of [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this uint, float).size') is 2, then the result would be the given  
[value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.ApplySize(this uint, float).value') that is doubled.

<a name='Velaptor.GameHelpers.ApplySize(thisVelaptor.Graphics.GlyphMetrics,float)'></a>

### ApplySize(this GlyphMetrics, float) 

Returns the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.ApplySize(this Velaptor.Graphics.GlyphMetrics, float).value') with the given [size](Velaptor.GameHelpers.md#size 'Velaptor.GameHelpers.ApplySize(this Velaptor.Graphics.GlyphMetrics, float).size') applied.

```csharp
public static Velaptor.Graphics.GlyphMetrics ApplySize(this Velaptor.Graphics.GlyphMetrics value, float size);
```
#### Parameters

<a name='Velaptor.GameHelpers.ApplySize(thisVelaptor.Graphics.GlyphMetrics,float).value'></a>

`value` [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')

The [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics') to apply the size to.

<a name='Velaptor.GameHelpers.ApplySize(thisVelaptor.Graphics.GlyphMetrics,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')  
The result after the size has been applied.

#### Remarks
The size will be applied to the following:  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[GlyphBounds](Velaptor.Graphics.GlyphMetrics.md#glyphbounds 'Velaptor.Graphics.GlyphMetrics.GlyphBounds')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[Ascender](Velaptor.Graphics.GlyphMetrics.md#ascender 'Velaptor.Graphics.GlyphMetrics.Ascender')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[Descender](Velaptor.Graphics.GlyphMetrics.md#descender 'Velaptor.Graphics.GlyphMetrics.Descender')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[HorizontalAdvance](Velaptor.Graphics.GlyphMetrics.md#horizontaladvance 'Velaptor.Graphics.GlyphMetrics.HorizontalAdvance')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[HoriBearingX](Velaptor.Graphics.GlyphMetrics.md#horibearingx 'Velaptor.Graphics.GlyphMetrics.HoriBearingX')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[HoriBearingY](Velaptor.Graphics.GlyphMetrics.md#horibearingy 'Velaptor.Graphics.GlyphMetrics.HoriBearingY')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[GlyphWidth](Velaptor.Graphics.GlyphMetrics.md#glyphwidth 'Velaptor.Graphics.GlyphMetrics.GlyphWidth')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[GlyphHeight](Velaptor.Graphics.GlyphMetrics.md#glyphheight 'Velaptor.Graphics.GlyphMetrics.GlyphHeight')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[XMin](Velaptor.Graphics.GlyphMetrics.md#xmin 'Velaptor.Graphics.GlyphMetrics.XMin')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[XMax](Velaptor.Graphics.GlyphMetrics.md#xmax 'Velaptor.Graphics.GlyphMetrics.XMax')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[YMin](Velaptor.Graphics.GlyphMetrics.md#ymin 'Velaptor.Graphics.GlyphMetrics.YMin')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[YMax](Velaptor.Graphics.GlyphMetrics.md#ymax 'Velaptor.Graphics.GlyphMetrics.YMax')  
  
The size will NOT be applied to the following:  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[Glyph](Velaptor.Graphics.GlyphMetrics.md#glyph 'Velaptor.Graphics.GlyphMetrics.Glyph')  
- [GlyphMetrics](Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[CharIndex](Velaptor.Graphics.GlyphMetrics.md#charindex 'Velaptor.Graphics.GlyphMetrics.CharIndex')

<a name='Velaptor.GameHelpers.DecreaseBrightness(thisSystem.Drawing.Color,float)'></a>

### DecreaseBrightness(this Color, float) 

Decreases the brightness of the color using the given [brightness](Velaptor.GameHelpers.md#brightness 'Velaptor.GameHelpers.DecreaseBrightness(this System.Drawing.Color, float).brightness') value.

```csharp
public static System.Drawing.Color DecreaseBrightness(this System.Drawing.Color clr, float brightness);
```
#### Parameters

<a name='Velaptor.GameHelpers.DecreaseBrightness(thisSystem.Drawing.Color,float).clr'></a>

`clr` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to change.

<a name='Velaptor.GameHelpers.DecreaseBrightness(thisSystem.Drawing.Color,float).brightness'></a>

`brightness` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The amount of brightness to apply.

#### Returns
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')  
The new color with the brightness applied.

### Example
  
```csharp  
var clr = Color.FromArgb(255, 10, 20, 30);  
  
  
// Increase the brightness by 20%  
clr = clr.IncreaseBrightness(0.2f);  
```  
  
In the example above, the values would equal the results below:  
- Alpha value would be unchanged with a value of 255.  
- Red component with brightness applied would result in a value of 8.  
- Green component with brightness applied would result in a value of 16.  
- Blue component with brightness applied would result in a value of 24.

#### Remarks
  
The [brightness](Velaptor.GameHelpers.md#brightness 'Velaptor.GameHelpers.DecreaseBrightness(this System.Drawing.Color, float).brightness') value must be a value between 0.0 and 1.0.  
  
If a value lower than 0.0 or greater than 1.0, the brightness will automatically  
be adjusted within the range of 0.0 to 1.0.  
  
Think of the [brightness](Velaptor.GameHelpers.md#brightness 'Velaptor.GameHelpers.DecreaseBrightness(this System.Drawing.Color, float).brightness') value as a percentage between 0% and 100%.  
  
The [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').[System.Drawing.Color.A](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color.A 'System.Drawing.Color.A') color component is not effected.

<a name='Velaptor.GameHelpers.DoesNotContain(thisstring,char)'></a>

### DoesNotContain(this string, char) 

Returns a value indicating whether a specified character occurs within this string.

```csharp
public static bool DoesNotContain(this string stringToSearchIn, char value);
```
#### Parameters

<a name='Velaptor.GameHelpers.DoesNotContain(thisstring,char).stringToSearchIn'></a>

`stringToSearchIn` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to search that may or may not contain the [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.DoesNotContain(this string, char).value').

<a name='Velaptor.GameHelpers.DoesNotContain(thisstring,char).value'></a>

`value` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')

The character to seek.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the value parameter does not occur within this string.

<a name='Velaptor.GameHelpers.DoesNotContain(thisstring,string)'></a>

### DoesNotContain(this string, string) 

Returns a value indicating whether a specified substring occurs within this string.

```csharp
public static bool DoesNotContain(this string stringToSearchIn, string value);
```
#### Parameters

<a name='Velaptor.GameHelpers.DoesNotContain(thisstring,string).stringToSearchIn'></a>

`stringToSearchIn` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to search that may or may not contain the [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.DoesNotContain(this string, string).value').

<a name='Velaptor.GameHelpers.DoesNotContain(thisstring,string).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to seek.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the value parameter does not occur within this string.

<a name='Velaptor.GameHelpers.DoesNotOnlyContainsLetters(thisstring)'></a>

### DoesNotOnlyContainsLetters(this string) 

Returns a value indicating whether this string does not only contain letters.

```csharp
public static bool DoesNotOnlyContainsLetters(this string value);
```
#### Parameters

<a name='Velaptor.GameHelpers.DoesNotOnlyContainsLetters(thisstring).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the string contains other characters besides letters.

<a name='Velaptor.GameHelpers.ForceNegative(thisfloat)'></a>

### ForceNegative(this float) 

Sets the value to negative if it's positive.

```csharp
public static float ForceNegative(this float value);
```
#### Parameters

<a name='Velaptor.GameHelpers.ForceNegative(thisfloat).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to force.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The value as a negative number.

<a name='Velaptor.GameHelpers.ForcePositive(thisfloat)'></a>

### ForcePositive(this float) 

Sets the value to positive if it's negative.

```csharp
public static float ForcePositive(this float value);
```
#### Parameters

<a name='Velaptor.GameHelpers.ForcePositive(thisfloat).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to force.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The value as a positive number.

<a name='Velaptor.GameHelpers.GetPosition(thisSystem.Drawing.RectangleF)'></a>

### GetPosition(this RectangleF) 

Returns the position in the given [rect](Velaptor.GameHelpers.md#rect 'Velaptor.GameHelpers.GetPosition(this System.Drawing.RectangleF).rect') as a [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2').

```csharp
public static System.Numerics.Vector2 GetPosition(this System.Drawing.RectangleF rect);
```
#### Parameters

<a name='Velaptor.GameHelpers.GetPosition(thisSystem.Drawing.RectangleF).rect'></a>

`rect` [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')

The rect that contains the position.

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF') position as a [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2').

<a name='Velaptor.GameHelpers.IncreaseBrightness(thisSystem.Drawing.Color,float)'></a>

### IncreaseBrightness(this Color, float) 

Increases the brightness of the color using the given [brightness](Velaptor.GameHelpers.md#brightness 'Velaptor.GameHelpers.IncreaseBrightness(this System.Drawing.Color, float).brightness') value.

```csharp
public static System.Drawing.Color IncreaseBrightness(this System.Drawing.Color clr, float brightness);
```
#### Parameters

<a name='Velaptor.GameHelpers.IncreaseBrightness(thisSystem.Drawing.Color,float).clr'></a>

`clr` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to change.

<a name='Velaptor.GameHelpers.IncreaseBrightness(thisSystem.Drawing.Color,float).brightness'></a>

`brightness` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The amount of brightness to apply.

#### Returns
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')  
The new color with the brightness applied.

### Example
  
```csharp  
var clr = Color.FromArgb(255, 10, 20, 30);  
  
  
// Increase the brightness by 20%  
clr = clr.IncreaseBrightness(0.2f);  
```  
  
In the example above, the values would equal the results below:  
- Alpha component would be unchanged with a value of 255.  
- Red component with brightness applied would result in a value of 12.  
- Green component with brightness applied would result in a value of 24.  
- Blue component with brightness applied would result in a value of 36.

#### Remarks
  
The [brightness](Velaptor.GameHelpers.md#brightness 'Velaptor.GameHelpers.IncreaseBrightness(this System.Drawing.Color, float).brightness') value must be a value between 0.0 and 1.0.  
  
If a value lower than 0.0 or greater than 1.0, the brightness will automatically  
be adjusted within the range of 0.0 to 1.0.  
  
Think of the [brightness](Velaptor.GameHelpers.md#brightness 'Velaptor.GameHelpers.IncreaseBrightness(this System.Drawing.Color, float).brightness') value as a percentage between 0% and 100%.  
  
The [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').[System.Drawing.Color.A](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color.A 'System.Drawing.Color.A') color component is not effected.

<a name='Velaptor.GameHelpers.IsLetter(thischar)'></a>

### IsLetter(this char) 

Returns a value indicating whether the character is a letter.

```csharp
public static bool IsLetter(this char character);
```
#### Parameters

<a name='Velaptor.GameHelpers.IsLetter(thischar).character'></a>

`character` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')

The character to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the character is an upper or lower case letter.

<a name='Velaptor.GameHelpers.IsNotLetter(thischar)'></a>

### IsNotLetter(this char) 

Returns a value indicating whether the character is not a letter.

```csharp
public static bool IsNotLetter(this char character);
```
#### Parameters

<a name='Velaptor.GameHelpers.IsNotLetter(thischar).character'></a>

`character` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')

The character to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the character is not an upper or lower case letter.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,byte,byte,byte,byte)'></a>

### MapValue(this byte, byte, byte, byte, byte) 

Maps the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.MapValue(this byte, byte, byte, byte, byte).value') from one range to another.

```csharp
public static byte MapValue(this byte value, byte fromStart, byte fromStop, byte toStart, byte toStop);
```
#### Parameters

<a name='Velaptor.GameHelpers.MapValue(thisbyte,byte,byte,byte,byte).value'></a>

`value` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The value to map.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,byte,byte,byte,byte).fromStart'></a>

`fromStart` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The starting value of the start range.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,byte,byte,byte,byte).fromStop'></a>

`fromStop` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The ending value of the start range.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,byte,byte,byte,byte).toStart'></a>

`toStart` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The starting value of the end range.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,byte,byte,byte,byte).toStop'></a>

`toStop` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The ending value of the end range.

#### Returns
[System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')  
A value that has been mapped to a range between [toStart](Velaptor.GameHelpers.md#tostart 'Velaptor.GameHelpers.MapValue(this byte, byte, byte, byte, byte).toStart') and [toStop](Velaptor.GameHelpers.md#tostop 'Velaptor.GameHelpers.MapValue(this byte, byte, byte, byte, byte).toStop').

#### Remarks
Be careful when restricting the 'to' values to a value between 0 and 1.  This will always return a value  
of 0.  This is because the return type is a byte and any value between the values of 0 and 1 is  
a floating point value and floating point values cannot be represented with a byte data type.  
  
This results in a value of 0 with a loss of information.  If you need to return a value that  
is between the values of 0 and 1, use the method overload [MapValue(this int, float, float, float, float)](Velaptor.GameHelpers.md#Velaptor.GameHelpers.MapValue(thisint,float,float,float,float) 'Velaptor.GameHelpers.MapValue(this int, float, float, float, float)').

<a name='Velaptor.GameHelpers.MapValue(thisbyte,float,float,float,float)'></a>

### MapValue(this byte, float, float, float, float) 

Maps the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.MapValue(this byte, float, float, float, float).value') from one range to another.

```csharp
public static float MapValue(this byte value, float fromStart, float fromStop, float toStart, float toStop);
```
#### Parameters

<a name='Velaptor.GameHelpers.MapValue(thisbyte,float,float,float,float).value'></a>

`value` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The value to map.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,float,float,float,float).fromStart'></a>

`fromStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The starting value of the start range.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,float,float,float,float).fromStop'></a>

`fromStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The ending value of the start range.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,float,float,float,float).toStart'></a>

`toStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The starting value of the end range.

<a name='Velaptor.GameHelpers.MapValue(thisbyte,float,float,float,float).toStop'></a>

`toStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The ending value of the end range.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
A value that has been mapped to a range between [toStart](Velaptor.GameHelpers.md#tostart 'Velaptor.GameHelpers.MapValue(this byte, float, float, float, float).toStart') and [toStop](Velaptor.GameHelpers.md#tostop 'Velaptor.GameHelpers.MapValue(this byte, float, float, float, float).toStop').

<a name='Velaptor.GameHelpers.MapValue(thisfloat,float,float,float,float)'></a>

### MapValue(this float, float, float, float, float) 

Maps the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.MapValue(this float, float, float, float, float).value') from one range to another.

```csharp
public static float MapValue(this float value, float fromStart, float fromStop, float toStart, float toStop);
```
#### Parameters

<a name='Velaptor.GameHelpers.MapValue(thisfloat,float,float,float,float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to map.

<a name='Velaptor.GameHelpers.MapValue(thisfloat,float,float,float,float).fromStart'></a>

`fromStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The starting value of the start range.

<a name='Velaptor.GameHelpers.MapValue(thisfloat,float,float,float,float).fromStop'></a>

`fromStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The ending value of the start range.

<a name='Velaptor.GameHelpers.MapValue(thisfloat,float,float,float,float).toStart'></a>

`toStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The starting value of the end range.

<a name='Velaptor.GameHelpers.MapValue(thisfloat,float,float,float,float).toStop'></a>

`toStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The ending value of the end range.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
A value that has been mapped to a range between [toStart](Velaptor.GameHelpers.md#tostart 'Velaptor.GameHelpers.MapValue(this float, float, float, float, float).toStart') and [toStop](Velaptor.GameHelpers.md#tostop 'Velaptor.GameHelpers.MapValue(this float, float, float, float, float).toStop').

<a name='Velaptor.GameHelpers.MapValue(thisint,float,float,float,float)'></a>

### MapValue(this int, float, float, float, float) 

Maps the given [value](Velaptor.GameHelpers.md#value 'Velaptor.GameHelpers.MapValue(this int, float, float, float, float).value') from one range to another.

```csharp
public static float MapValue(this int value, float fromStart, float fromStop, float toStart, float toStop);
```
#### Parameters

<a name='Velaptor.GameHelpers.MapValue(thisint,float,float,float,float).value'></a>

`value` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The value to map.

<a name='Velaptor.GameHelpers.MapValue(thisint,float,float,float,float).fromStart'></a>

`fromStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The starting value of the start range.

<a name='Velaptor.GameHelpers.MapValue(thisint,float,float,float,float).fromStop'></a>

`fromStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The ending value of the start range.

<a name='Velaptor.GameHelpers.MapValue(thisint,float,float,float,float).toStart'></a>

`toStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The starting value of the end range.

<a name='Velaptor.GameHelpers.MapValue(thisint,float,float,float,float).toStop'></a>

`toStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The ending value of the end range.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
A value that has been mapped to a range between [toStart](Velaptor.GameHelpers.md#tostart 'Velaptor.GameHelpers.MapValue(this int, float, float, float, float).toStart') and [toStop](Velaptor.GameHelpers.md#tostop 'Velaptor.GameHelpers.MapValue(this int, float, float, float, float).toStop').

<a name='Velaptor.GameHelpers.OnlyContainsLetters(thisstring)'></a>

### OnlyContainsLetters(this string) 

Returns a value indicating whether this string only contains letters.

```csharp
public static bool OnlyContainsLetters(this string value);
```
#### Parameters

<a name='Velaptor.GameHelpers.OnlyContainsLetters(thisstring).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the string only contains letters.

<a name='Velaptor.GameHelpers.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool)'></a>

### RotateAround(this Vector2, Vector2, float, bool) 

Rotates the [vector](Velaptor.GameHelpers.md#vector 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector') around the [origin](Velaptor.GameHelpers.md#origin 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).origin') at the given [angle](Velaptor.GameHelpers.md#angle 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).angle').

```csharp
public static System.Numerics.Vector2 RotateAround(this System.Numerics.Vector2 vector, System.Numerics.Vector2 origin, float angle, bool clockWise=true);
```
#### Parameters

<a name='Velaptor.GameHelpers.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).vector'></a>

`vector` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The vector to rotate.

<a name='Velaptor.GameHelpers.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).origin'></a>

`origin` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The origin to rotate the [vector](Velaptor.GameHelpers.md#vector 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector') around.

<a name='Velaptor.GameHelpers.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle in degrees to rotate [vector](Velaptor.GameHelpers.md#vector 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector').  Value must be positive.

<a name='Velaptor.GameHelpers.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).clockWise'></a>

`clockWise` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Determines the direction the given [vector](Velaptor.GameHelpers.md#vector 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector') should rotate around the [origin](Velaptor.GameHelpers.md#origin 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).origin').

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The [vector](Velaptor.GameHelpers.md#vector 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector') rotated around the [origin](Velaptor.GameHelpers.md#origin 'Velaptor.GameHelpers.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).origin').

<a name='Velaptor.GameHelpers.ToDegrees(thisfloat)'></a>

### ToDegrees(this float) 

Converts the given [radians](Velaptor.GameHelpers.md#radians 'Velaptor.GameHelpers.ToDegrees(this float).radians') value into degrees.

```csharp
public static float ToDegrees(this float radians);
```
#### Parameters

<a name='Velaptor.GameHelpers.ToDegrees(thisfloat).radians'></a>

`radians` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to convert.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The radians converted into degrees.

<a name='Velaptor.GameHelpers.ToRadians(thisfloat)'></a>

### ToRadians(this float) 

Converts the given [degrees](Velaptor.GameHelpers.md#degrees 'Velaptor.GameHelpers.ToRadians(this float).degrees') value into radians.

```csharp
public static float ToRadians(this float degrees);
```
#### Parameters

<a name='Velaptor.GameHelpers.ToRadians(thisfloat).degrees'></a>

`degrees` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to convert.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The degrees converted into radians.

<a name='Velaptor.GameHelpers.ToVector4(thisSystem.Drawing.Color)'></a>

### ToVector4(this Color) 

Converts the given [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') to a [System.Numerics.Vector4](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector4 'System.Numerics.Vector4')  
with each component holding the color component values.

```csharp
public static System.Numerics.Vector4 ToVector4(this System.Drawing.Color clr);
```
#### Parameters

<a name='Velaptor.GameHelpers.ToVector4(thisSystem.Drawing.Color).clr'></a>

`clr` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to convert.

#### Returns
[System.Numerics.Vector4](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector4 'System.Numerics.Vector4')  
A 4 component vector of color values.  
X = red.  
Y = green.  
Z = blue.  
W = alpha.
