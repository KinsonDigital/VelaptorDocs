---
title: Velaptor.Graphics.ImageData
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### ImageData Struct

Holds image data such as the pixel colors for each X and Y location, the image width, and height.

```csharp
public readonly struct ImageData :
System.IEquatable<Velaptor.Graphics.ImageData>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Constructors

<a name='Velaptor.Graphics.ImageData.ImageData(System.Drawing.Color[,],string)'></a>

### ImageData(Color[,], string) Constructor

Initializes a new instance of the [ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData') struct.

```csharp
public ImageData(System.Drawing.Color[,] pixels, string filePath="");
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.ImageData(System.Drawing.Color[,],string).pixels'></a>

`pixels` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The pixel data of the image.

<a name='Velaptor.Graphics.ImageData.ImageData(System.Drawing.Color[,],string).filePath'></a>

`filePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The file path of where the image exists.

#### Remarks
The [filePath](Velaptor.Graphics.ImageData.md#filepath 'Velaptor.Graphics.ImageData.ImageData(System.Drawing.Color[,], string).filePath') is used for reference only.
## Properties

<a name='Velaptor.Graphics.ImageData.FilePath'></a>

### FilePath 

Gets the file path of the image.

```csharp
public string FilePath { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

#### Remarks
This is only for reference.

<a name='Velaptor.Graphics.ImageData.Height'></a>

### Height 

Gets the height of the image.

```csharp
public uint Height { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Graphics.ImageData.IsFlippedHorizontally'></a>

### IsFlippedHorizontally 

Gets a value indicating whether the image is flipped horizontally.

```csharp
public bool IsFlippedHorizontally { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Graphics.ImageData.IsFlippedVertically'></a>

### IsFlippedVertically 

Gets a value indicating whether the image is flipped vertically.

```csharp
public bool IsFlippedVertically { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Graphics.ImageData.Pixels'></a>

### Pixels 

Gets the pixel colors of the image.

```csharp
public System.Drawing.Color[,] Pixels { get; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

#### Remarks
The first dimension is the X location of the pixel and the second  
dimension is the Y location of the pixel.  
  
The 32-bit color component byte layout is ARGB.

<a name='Velaptor.Graphics.ImageData.Width'></a>

### Width 

Gets the width of the image.

```csharp
public uint Width { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
## Methods

<a name='Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point)'></a>

### DrawImage(ImageData, Point) 

Draws the given [image](Velaptor.Graphics.ImageData.md#image 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).image') onto this image,  
starting at the given [location](Velaptor.Graphics.ImageData.md#location 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).location').

```csharp
public Velaptor.Graphics.ImageData DrawImage(Velaptor.Graphics.ImageData image, System.Drawing.Point location);
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).image'></a>

`image` [ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The image to draw onto this one.

<a name='Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).location'></a>

`location` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The location of where to draw the image.  
References the top left corner of the given [image](Velaptor.Graphics.ImageData.md#image 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).image').

#### Returns
[ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')  
This current image with the given [image](Velaptor.Graphics.ImageData.md#image 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).image') painted onto it.

#### Remarks
If a pixel of the given [image](Velaptor.Graphics.ImageData.md#image 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).image') is outside of the bounds of this  
image, it will be skipped.

<a name='Velaptor.Graphics.ImageData.Equals(Velaptor.Graphics.ImageData)'></a>

### Equals(ImageData) 

Returns a value indicating whether this instance is equal to the given [ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData').

```csharp
public bool Equals(Velaptor.Graphics.ImageData other);
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.Equals(Velaptor.Graphics.ImageData).other'></a>

`other` [ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The other data to compare.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if equal.

<a name='Velaptor.Graphics.ImageData.FlipHorizontally()'></a>

### FlipHorizontally() 

Flips the image horizontally.

```csharp
public void FlipHorizontally();
```

<a name='Velaptor.Graphics.ImageData.FlipVertically()'></a>

### FlipVertically() 

Flips the image vertically.

```csharp
public void FlipVertically();
```

<a name='Velaptor.Graphics.ImageData.GetHashCode()'></a>

### GetHashCode() 

Returns the hash code for this instance.

```csharp
public override int GetHashCode();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
A 32-bit signed integer that is the hash code for this instance.

<a name='Velaptor.Graphics.ImageData.IsEmpty()'></a>

### IsEmpty() 

Returns a value indicating whether the [ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData') contents are empty.

```csharp
public bool IsEmpty();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if empty.

<a name='Velaptor.Graphics.ImageData.ToString()'></a>

### ToString() 

Returns the fully qualified type name of this instance.

```csharp
public override string ToString();
```

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The fully qualified type name.
