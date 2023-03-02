#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor](./Velaptor.md 'Velaptor')

## PublicExtensionMethods Class

Provides extension helper methods for common game related operations.

```csharp
public static class PublicExtensionMethods
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → PublicExtensionMethods
### Methods

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisfloat,float)'></a>

## PublicExtensionMethods.ApplySize(this float, float) Method

Returns the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisfloat,float).value 'Velaptor.PublicExtensionMethods.ApplySize(this float, float).value') with the given [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisfloat,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this float, float).size') applied.

```csharp
public static float ApplySize(this float value, float size);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisfloat,float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to apply the size to.

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisfloat,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The value after the size has been applied.

### Example
If the value was 3 and the size was 2, then the result would be 6.

### Remarks
A [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisfloat,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this float, float).size') value of 1 represents 100% or the unchanged normal size of the value.  
If the value of [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisfloat,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this float, float).size') is 2, then the result would be the given  
[value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisfloat,float).value 'Velaptor.PublicExtensionMethods.ApplySize(this float, float).value') that is doubled.

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.RectangleF,float)'></a>

## PublicExtensionMethods.ApplySize(this RectangleF, float) Method

Returns the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.RectangleF,float).value 'Velaptor.PublicExtensionMethods.ApplySize(this System.Drawing.RectangleF, float).value') with the given [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.RectangleF,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this System.Drawing.RectangleF, float).size') applied.

```csharp
public static System.Drawing.RectangleF ApplySize(this System.Drawing.RectangleF value, float size);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.RectangleF,float).value'></a>

`value` [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')

The [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF') to apply the size to.

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.RectangleF,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')  
The result after the size has been applied.

### Remarks
The size will be applied to the following:  
- [System.Drawing.RectangleF.X](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF.X 'System.Drawing.RectangleF.X')  
- [System.Drawing.RectangleF.Y](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF.Y 'System.Drawing.RectangleF.Y')  
- [System.Drawing.RectangleF.Width](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF.Width 'System.Drawing.RectangleF.Width')  
- [System.Drawing.RectangleF.Height](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF.Height 'System.Drawing.RectangleF.Height')

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.SizeF,float)'></a>

## PublicExtensionMethods.ApplySize(this SizeF, float) Method

Returns the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.SizeF,float).value 'Velaptor.PublicExtensionMethods.ApplySize(this System.Drawing.SizeF, float).value') with the given [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.SizeF,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this System.Drawing.SizeF, float).size') applied.

```csharp
public static System.Drawing.SizeF ApplySize(this System.Drawing.SizeF value, float size);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.SizeF,float).value'></a>

`value` [System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF')

The [System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF') to apply the size to.

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisSystem.Drawing.SizeF,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[System.Drawing.SizeF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF 'System.Drawing.SizeF')  
The result after the size has been applied.

### Remarks
The size will be applied to the following:  
- [System.Drawing.SizeF.Width](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF.Width 'System.Drawing.SizeF.Width')  
- [System.Drawing.SizeF.Height](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.SizeF.Height 'System.Drawing.SizeF.Height')

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisuint,float)'></a>

## PublicExtensionMethods.ApplySize(this uint, float) Method

Returns the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisuint,float).value 'Velaptor.PublicExtensionMethods.ApplySize(this uint, float).value') with the given [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisuint,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this uint, float).size') applied.

```csharp
public static float ApplySize(this uint value, float size);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisuint,float).value'></a>

`value` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The value to apply the size to.

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisuint,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The value after the size has been applied.

### Example
If the value was 3 and the size was 2, then the result would be 6.

### Remarks
A [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisuint,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this uint, float).size') value of 1 represents 100% or the unchanged normal size of the value.  
If the value of [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisuint,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this uint, float).size') is 2, then the result would be the given  
[value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisuint,float).value 'Velaptor.PublicExtensionMethods.ApplySize(this uint, float).value') that is doubled.

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisVelaptor.Graphics.GlyphMetrics,float)'></a>

## PublicExtensionMethods.ApplySize(this GlyphMetrics, float) Method

Returns the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisVelaptor.Graphics.GlyphMetrics,float).value 'Velaptor.PublicExtensionMethods.ApplySize(this Velaptor.Graphics.GlyphMetrics, float).value') with the given [size](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ApplySize(thisVelaptor.Graphics.GlyphMetrics,float).size 'Velaptor.PublicExtensionMethods.ApplySize(this Velaptor.Graphics.GlyphMetrics, float).size') applied.

```csharp
public static Velaptor.Graphics.GlyphMetrics ApplySize(this Velaptor.Graphics.GlyphMetrics value, float size);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisVelaptor.Graphics.GlyphMetrics,float).value'></a>

`value` [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')

The [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics') to apply the size to.

<a name='Velaptor.PublicExtensionMethods.ApplySize(thisVelaptor.Graphics.GlyphMetrics,float).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to apply.

#### Returns
[GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics')  
The result after the size has been applied.

### Remarks
The size will be applied to the following:  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[GlyphBounds](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.GlyphBounds 'Velaptor.Graphics.GlyphMetrics.GlyphBounds')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[Ascender](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.Ascender 'Velaptor.Graphics.GlyphMetrics.Ascender')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[Descender](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.Descender 'Velaptor.Graphics.GlyphMetrics.Descender')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[HorizontalAdvance](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.HorizontalAdvance 'Velaptor.Graphics.GlyphMetrics.HorizontalAdvance')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[HoriBearingX](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.HoriBearingX 'Velaptor.Graphics.GlyphMetrics.HoriBearingX')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[HoriBearingY](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.HoriBearingY 'Velaptor.Graphics.GlyphMetrics.HoriBearingY')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[GlyphWidth](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.GlyphWidth 'Velaptor.Graphics.GlyphMetrics.GlyphWidth')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[GlyphHeight](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.GlyphHeight 'Velaptor.Graphics.GlyphMetrics.GlyphHeight')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[XMin](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.XMin 'Velaptor.Graphics.GlyphMetrics.XMin')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[XMax](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.XMax 'Velaptor.Graphics.GlyphMetrics.XMax')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[YMin](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.YMin 'Velaptor.Graphics.GlyphMetrics.YMin')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[YMax](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.YMax 'Velaptor.Graphics.GlyphMetrics.YMax')  
  
The size will NOT be applied to the following:  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[Glyph](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.Glyph 'Velaptor.Graphics.GlyphMetrics.Glyph')  
- [GlyphMetrics](./Velaptor.Graphics.GlyphMetrics.md 'Velaptor.Graphics.GlyphMetrics').[CharIndex](./Velaptor.Graphics.GlyphMetrics.md#Velaptor.Graphics.GlyphMetrics.CharIndex 'Velaptor.Graphics.GlyphMetrics.CharIndex')

<a name='Velaptor.PublicExtensionMethods.DecreaseBrightness(thisSystem.Drawing.Color,float)'></a>

## PublicExtensionMethods.DecreaseBrightness(this Color, float) Method

Decreases the brightness of the color using the given [brightness](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.DecreaseBrightness(thisSystem.Drawing.Color,float).brightness 'Velaptor.PublicExtensionMethods.DecreaseBrightness(this System.Drawing.Color, float).brightness') value.

```csharp
public static System.Drawing.Color DecreaseBrightness(this System.Drawing.Color clr, float brightness);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.DecreaseBrightness(thisSystem.Drawing.Color,float).clr'></a>

`clr` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to change.

<a name='Velaptor.PublicExtensionMethods.DecreaseBrightness(thisSystem.Drawing.Color,float).brightness'></a>

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

### Remarks
  
The [brightness](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.DecreaseBrightness(thisSystem.Drawing.Color,float).brightness 'Velaptor.PublicExtensionMethods.DecreaseBrightness(this System.Drawing.Color, float).brightness') value must be a value between 0.0 and 1.0.  
  
If a value lower than 0.0 or greater than 1.0, the brightness will automatically  
be adjusted within the range of 0.0 to 1.0.  
  
Think of the [brightness](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.DecreaseBrightness(thisSystem.Drawing.Color,float).brightness 'Velaptor.PublicExtensionMethods.DecreaseBrightness(this System.Drawing.Color, float).brightness') value as a percentage between 0% and 100%.  
  
The [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').[System.Drawing.Color.A](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color.A 'System.Drawing.Color.A') color component is not effected.

<a name='Velaptor.PublicExtensionMethods.DoesNotContain(thisstring,char)'></a>

## PublicExtensionMethods.DoesNotContain(this string, char) Method

Returns a value indicating whether or not a specified character occurs within this string.

```csharp
public static bool DoesNotContain(this string stringToSearchIn, char value);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.DoesNotContain(thisstring,char).stringToSearchIn'></a>

`stringToSearchIn` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to search that may or may not contain the [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.DoesNotContain(thisstring,char).value 'Velaptor.PublicExtensionMethods.DoesNotContain(this string, char).value').

<a name='Velaptor.PublicExtensionMethods.DoesNotContain(thisstring,char).value'></a>

`value` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')

The character to seek.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the value parameter does not occur within this string.

<a name='Velaptor.PublicExtensionMethods.DoesNotContain(thisstring,string)'></a>

## PublicExtensionMethods.DoesNotContain(this string, string) Method

Returns a value indicating whether or not a specified substring occurs within this string.

```csharp
public static bool DoesNotContain(this string stringToSearchIn, string value);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.DoesNotContain(thisstring,string).stringToSearchIn'></a>

`stringToSearchIn` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to search that may or may not contain the [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.DoesNotContain(thisstring,string).value 'Velaptor.PublicExtensionMethods.DoesNotContain(this string, string).value').

<a name='Velaptor.PublicExtensionMethods.DoesNotContain(thisstring,string).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to seek.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the value parameter does not occur within this string.

<a name='Velaptor.PublicExtensionMethods.DoesNotOnlyContainsLetters(thisstring)'></a>

## PublicExtensionMethods.DoesNotOnlyContainsLetters(this string) Method

Returns a value indicating whether or not this string does not only contain letters.

```csharp
public static bool DoesNotOnlyContainsLetters(this string value);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.DoesNotOnlyContainsLetters(thisstring).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the string contains other characters besides letters.

<a name='Velaptor.PublicExtensionMethods.ForceNegative(thisfloat)'></a>

## PublicExtensionMethods.ForceNegative(this float) Method

Sets the value to negative if it's positive.

```csharp
public static float ForceNegative(this float value);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ForceNegative(thisfloat).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to force.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The value as a negative number.

<a name='Velaptor.PublicExtensionMethods.ForcePositive(thisfloat)'></a>

## PublicExtensionMethods.ForcePositive(this float) Method

Sets the value to positive if it's negative.

```csharp
public static float ForcePositive(this float value);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ForcePositive(thisfloat).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to force.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The value as a positive number.

<a name='Velaptor.PublicExtensionMethods.GetPosition(thisSystem.Drawing.RectangleF)'></a>

## PublicExtensionMethods.GetPosition(this RectangleF) Method

Returns the position in the given [rect](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.GetPosition(thisSystem.Drawing.RectangleF).rect 'Velaptor.PublicExtensionMethods.GetPosition(this System.Drawing.RectangleF).rect') as a [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2').

```csharp
public static System.Numerics.Vector2 GetPosition(this System.Drawing.RectangleF rect);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.GetPosition(thisSystem.Drawing.RectangleF).rect'></a>

`rect` [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')

The rect that contains the position.

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF') position as a [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2').

<a name='Velaptor.PublicExtensionMethods.IncreaseBrightness(thisSystem.Drawing.Color,float)'></a>

## PublicExtensionMethods.IncreaseBrightness(this Color, float) Method

Increases the brightness of the color using the given [brightness](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.IncreaseBrightness(thisSystem.Drawing.Color,float).brightness 'Velaptor.PublicExtensionMethods.IncreaseBrightness(this System.Drawing.Color, float).brightness') value.

```csharp
public static System.Drawing.Color IncreaseBrightness(this System.Drawing.Color clr, float brightness);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.IncreaseBrightness(thisSystem.Drawing.Color,float).clr'></a>

`clr` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to change.

<a name='Velaptor.PublicExtensionMethods.IncreaseBrightness(thisSystem.Drawing.Color,float).brightness'></a>

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

### Remarks
  
The [brightness](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.IncreaseBrightness(thisSystem.Drawing.Color,float).brightness 'Velaptor.PublicExtensionMethods.IncreaseBrightness(this System.Drawing.Color, float).brightness') value must be a value between 0.0 and 1.0.  
  
If a value lower than 0.0 or greater than 1.0, the brightness will automatically  
be adjusted within the range of 0.0 to 1.0.  
  
Think of the [brightness](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.IncreaseBrightness(thisSystem.Drawing.Color,float).brightness 'Velaptor.PublicExtensionMethods.IncreaseBrightness(this System.Drawing.Color, float).brightness') value as a percentage between 0% and 100%.  
  
The [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').[System.Drawing.Color.A](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color.A 'System.Drawing.Color.A') color component is not effected.

<a name='Velaptor.PublicExtensionMethods.IsLetter(thischar)'></a>

## PublicExtensionMethods.IsLetter(this char) Method

Returns a value indicating whether or not the character is a letter.

```csharp
public static bool IsLetter(this char character);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.IsLetter(thischar).character'></a>

`character` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')

The character to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the character is an upper or lower case letter.

<a name='Velaptor.PublicExtensionMethods.IsNotLetter(thischar)'></a>

## PublicExtensionMethods.IsNotLetter(this char) Method

Returns a value indicating whether or not the character is not a letter.

```csharp
public static bool IsNotLetter(this char character);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.IsNotLetter(thischar).character'></a>

`character` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')

The character to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the character is not an upper or lower case letter.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte)'></a>

## PublicExtensionMethods.MapValue(this byte, byte, byte, byte, byte) Method

Maps the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte).value 'Velaptor.PublicExtensionMethods.MapValue(this byte, byte, byte, byte, byte).value') from one range to another.

```csharp
public static byte MapValue(this byte value, byte fromStart, byte fromStop, byte toStart, byte toStop);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte).value'></a>

`value` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The value to map.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte).fromStart'></a>

`fromStart` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The from starting range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte).fromStop'></a>

`fromStop` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The from ending range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte).toStart'></a>

`toStart` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The to starting range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte).toStop'></a>

`toStop` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The to ending range value.

#### Returns
[System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')  
A value that has been mapped to a range between [toStart](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte).toStart 'Velaptor.PublicExtensionMethods.MapValue(this byte, byte, byte, byte, byte).toStart') and [toStop](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisbyte,byte,byte,byte,byte).toStop 'Velaptor.PublicExtensionMethods.MapValue(this byte, byte, byte, byte, byte).toStop').

### Remarks
Be careful when restricting the 'to' values to a value between 0 and 1.  This will always return a value  
of 0.  This is because the return type is a byte and any value between the values of 0 and 1 is  
a floating point value and floating point values cannot be represented with a byte data type.  
  
This results in a value of 0 with a loss of information.  If you need to return a value that  
is between the values of 0 and 1, use the method overload [MapValue(this int, float, float, float, float)](./this int, float, float, float, float](Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float)) 'Velaptor.PublicExtensionMethods.MapValue(this int, float, float, float, float)').

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float)'></a>

## PublicExtensionMethods.MapValue(this byte, float, float, float, float) Method

Maps the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float).value 'Velaptor.PublicExtensionMethods.MapValue(this byte, float, float, float, float).value') from one range to another.

```csharp
public static float MapValue(this byte value, float fromStart, float fromStop, float toStart, float toStop);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float).value'></a>

`value` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')

The value to map.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float).fromStart'></a>

`fromStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The from starting range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float).fromStop'></a>

`fromStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The from ending range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float).toStart'></a>

`toStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The to starting range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float).toStop'></a>

`toStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The to ending range value.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
A value that has been mapped to a range between [toStart](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float).toStart 'Velaptor.PublicExtensionMethods.MapValue(this byte, float, float, float, float).toStart') and [toStop](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisbyte,float,float,float,float).toStop 'Velaptor.PublicExtensionMethods.MapValue(this byte, float, float, float, float).toStop').

<a name='Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float)'></a>

## PublicExtensionMethods.MapValue(this float, float, float, float, float) Method

Maps the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float).value 'Velaptor.PublicExtensionMethods.MapValue(this float, float, float, float, float).value') from one range to another.

```csharp
public static float MapValue(this float value, float fromStart, float fromStop, float toStart, float toStop);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to map.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float).fromStart'></a>

`fromStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The from starting range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float).fromStop'></a>

`fromStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The from ending range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float).toStart'></a>

`toStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The to starting range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float).toStop'></a>

`toStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The to ending range value.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
A value that has been mapped to a range between [toStart](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float).toStart 'Velaptor.PublicExtensionMethods.MapValue(this float, float, float, float, float).toStart') and [toStop](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisfloat,float,float,float,float).toStop 'Velaptor.PublicExtensionMethods.MapValue(this float, float, float, float, float).toStop').

<a name='Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float)'></a>

## PublicExtensionMethods.MapValue(this int, float, float, float, float) Method

Maps the given [value](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float).value 'Velaptor.PublicExtensionMethods.MapValue(this int, float, float, float, float).value') from one range to another.

```csharp
public static float MapValue(this int value, float fromStart, float fromStop, float toStart, float toStop);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float).value'></a>

`value` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The value to map.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float).fromStart'></a>

`fromStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The from starting range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float).fromStop'></a>

`fromStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The from ending range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float).toStart'></a>

`toStart` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The to starting range value.

<a name='Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float).toStop'></a>

`toStop` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The to ending range value.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
A value that has been mapped to a range between [toStart](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float).toStart 'Velaptor.PublicExtensionMethods.MapValue(this int, float, float, float, float).toStart') and [toStop](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.MapValue(thisint,float,float,float,float).toStop 'Velaptor.PublicExtensionMethods.MapValue(this int, float, float, float, float).toStop').

<a name='Velaptor.PublicExtensionMethods.OnlyContainsLetters(thisstring)'></a>

## PublicExtensionMethods.OnlyContainsLetters(this string) Method

Returns a value indicating whether or not this string only contains letters.

```csharp
public static bool OnlyContainsLetters(this string value);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.OnlyContainsLetters(thisstring).value'></a>

`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The string to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the string only contains letters.

<a name='Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool)'></a>

## PublicExtensionMethods.RotateAround(this Vector2, Vector2, float, bool) Method

Rotates the [vector](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).vector 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector') around the [origin](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).origin 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).origin') at the given [angle](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).angle 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).angle').

```csharp
public static System.Numerics.Vector2 RotateAround(this System.Numerics.Vector2 vector, System.Numerics.Vector2 origin, float angle, bool clockWise=true);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).vector'></a>

`vector` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The vector to rotate.

<a name='Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).origin'></a>

`origin` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The origin to rotate the [vector](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).vector 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector') around.

<a name='Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle in degrees to rotate [vector](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).vector 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector').  Value must be positive.

<a name='Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).clockWise'></a>

`clockWise` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Determines the direction the given [vector](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).vector 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector') should rotate around the [origin](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).origin 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).origin').

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The [vector](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).vector 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).vector') rotated around the [origin](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.RotateAround(thisSystem.Numerics.Vector2,System.Numerics.Vector2,float,bool).origin 'Velaptor.PublicExtensionMethods.RotateAround(this System.Numerics.Vector2, System.Numerics.Vector2, float, bool).origin').

<a name='Velaptor.PublicExtensionMethods.ToDegrees(thisfloat)'></a>

## PublicExtensionMethods.ToDegrees(this float) Method

Converts the given [radians](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ToDegrees(thisfloat).radians 'Velaptor.PublicExtensionMethods.ToDegrees(this float).radians') value into degrees.

```csharp
public static float ToDegrees(this float radians);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ToDegrees(thisfloat).radians'></a>

`radians` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to convert.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The radians converted into degrees.

<a name='Velaptor.PublicExtensionMethods.ToRadians(thisfloat)'></a>

## PublicExtensionMethods.ToRadians(this float) Method

Converts the given [degrees](./Velaptor.PublicExtensionMethods.md#Velaptor.PublicExtensionMethods.ToRadians(thisfloat).degrees 'Velaptor.PublicExtensionMethods.ToRadians(this float).degrees') value into radians.

```csharp
public static float ToRadians(this float degrees);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ToRadians(thisfloat).degrees'></a>

`degrees` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to convert.

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The degrees converted into radians.

<a name='Velaptor.PublicExtensionMethods.ToVector4(thisSystem.Drawing.Color)'></a>

## PublicExtensionMethods.ToVector4(this Color) Method

Converts the given [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') to a [System.Numerics.Vector4](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector4 'System.Numerics.Vector4')  
with each component holding the color component values.

```csharp
public static System.Numerics.Vector4 ToVector4(this System.Drawing.Color clr);
```
#### Parameters

<a name='Velaptor.PublicExtensionMethods.ToVector4(thisSystem.Drawing.Color).clr'></a>

`clr` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to convert.

#### Returns
[System.Numerics.Vector4](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector4 'System.Numerics.Vector4')  
A 4 component vector of color values.  
X = red.  
Y = green.  
Z = blue.  
W = alpha.