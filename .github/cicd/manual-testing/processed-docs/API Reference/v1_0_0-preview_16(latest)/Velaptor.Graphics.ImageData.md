#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](./Velaptor.Graphics.md 'Velaptor.Graphics')

## ImageData Struct

Holds image data such as the pixel colors for each X and Y location, the image width, and height.

```csharp
public readonly struct ImageData :
System.IEquatable<Velaptor.Graphics.ImageData>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Constructors

<a name='Velaptor.Graphics.ImageData.ImageData(System.Drawing.Color[,],uint,uint)'></a>

## ImageData(Color[,], uint, uint) Constructor

Initializes a new instance of the [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData') struct.

```csharp
public ImageData(System.Drawing.Color[,]? pixels, uint width, uint height);
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.ImageData(System.Drawing.Color[,],uint,uint).pixels'></a>

`pixels` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The pixel data of the image.

<a name='Velaptor.Graphics.ImageData.ImageData(System.Drawing.Color[,],uint,uint).width'></a>

`width` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The width of the image.

<a name='Velaptor.Graphics.ImageData.ImageData(System.Drawing.Color[,],uint,uint).height'></a>

`height` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The height of the image.
### Fields

<a name='Velaptor.Graphics.ImageData.Height'></a>

## ImageData.Height Field

Gets or sets the height of the image.

```csharp
public readonly uint Height;
```

#### Field Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Graphics.ImageData.Pixels'></a>

## ImageData.Pixels Field

Gets or sets the pixel colors of the image.

```csharp
public readonly Color[,] Pixels;
```

#### Field Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

### Remarks
The first dimension is the X location of the pixel and the second  
dimension is the Y location of the pixel.  
  
The 32-bit color component byte layout is ARGB.

<a name='Velaptor.Graphics.ImageData.Width'></a>

## ImageData.Width Field

Gets or sets the width of the image.

```csharp
public readonly uint Width;
```

#### Field Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
### Methods

<a name='Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point)'></a>

## ImageData.DrawImage(ImageData, Point) Method

Draws the given [image](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).image 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).image') onto this image,  
starting at the given [location](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).location 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).location').

```csharp
public Velaptor.Graphics.ImageData DrawImage(Velaptor.Graphics.ImageData image, System.Drawing.Point location);
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).image'></a>

`image` [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The image to draw onto this one.

<a name='Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).location'></a>

`location` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The location of where to draw the image.  
References the top left corner of the given [image](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).image 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).image').

#### Returns
[ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')  
This current image with the given [image](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).image 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).image') painted onto it.

### Remarks
If a pixel of the given [image](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData,System.Drawing.Point).image 'Velaptor.Graphics.ImageData.DrawImage(Velaptor.Graphics.ImageData, System.Drawing.Point).image') is out side of the bounds of this  
image, it will be skipped.

<a name='Velaptor.Graphics.ImageData.Equals(object)'></a>

## ImageData.Equals(object) Method

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object? obj);
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.Equals(object).obj'></a>

`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The object to compare with the current instance.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [obj](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.Equals(object).obj 'Velaptor.Graphics.ImageData.Equals(object).obj') and this instance are the same type and represent the same value; otherwise, [false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

<a name='Velaptor.Graphics.ImageData.Equals(Velaptor.Graphics.ImageData)'></a>

## ImageData.Equals(ImageData) Method

```csharp
public bool Equals(Velaptor.Graphics.ImageData other);
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.Equals(Velaptor.Graphics.ImageData).other'></a>

`other` [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Graphics.ImageData.GetHashCode()'></a>

## ImageData.GetHashCode() Method

Returns the hash code for this instance.

```csharp
public override int GetHashCode();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
A 32-bit signed integer that is the hash code for this instance.

<a name='Velaptor.Graphics.ImageData.IsEmpty()'></a>

## ImageData.IsEmpty() Method

Returns a value indicating whether or not the [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData') contents are empty.

```csharp
public bool IsEmpty();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if empty.
### Operators

<a name='Velaptor.Graphics.ImageData.op_Equality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData)'></a>

## ImageData.operator ==(ImageData, ImageData) Operator

Returns a value indicating whether or not the [left](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.op_Equality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData).left 'Velaptor.Graphics.ImageData.op_Equality(Velaptor.Graphics.ImageData, Velaptor.Graphics.ImageData).left') operand is equal to the [right](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.op_Equality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData).right 'Velaptor.Graphics.ImageData.op_Equality(Velaptor.Graphics.ImageData, Velaptor.Graphics.ImageData).right') operand.

```csharp
public static bool operator ==(Velaptor.Graphics.ImageData left, Velaptor.Graphics.ImageData right);
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.op_Equality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData).left'></a>

`left` [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The left operator.

<a name='Velaptor.Graphics.ImageData.op_Equality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData).right'></a>

`right` [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The right operator.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if both are equal.

<a name='Velaptor.Graphics.ImageData.op_Inequality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData)'></a>

## ImageData.operator !=(ImageData, ImageData) Operator

Returns a value indicating whether or not the [left](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.op_Inequality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData).left 'Velaptor.Graphics.ImageData.op_Inequality(Velaptor.Graphics.ImageData, Velaptor.Graphics.ImageData).left') operand is not equal to the [right](./Velaptor.Graphics.ImageData.md#Velaptor.Graphics.ImageData.op_Inequality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData).right 'Velaptor.Graphics.ImageData.op_Inequality(Velaptor.Graphics.ImageData, Velaptor.Graphics.ImageData).right') operand.

```csharp
public static bool operator !=(Velaptor.Graphics.ImageData left, Velaptor.Graphics.ImageData right);
```
#### Parameters

<a name='Velaptor.Graphics.ImageData.op_Inequality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData).left'></a>

`left` [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The left operator.

<a name='Velaptor.Graphics.ImageData.op_Inequality(Velaptor.Graphics.ImageData,Velaptor.Graphics.ImageData).right'></a>

`right` [ImageData](./Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')

The right operator.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if both are not equal.