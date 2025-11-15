---
title: Velaptor.Graphics.RectShape
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### RectShape Struct

Represents a rectangular shape with various attributes.

```csharp
public struct RectShape :
System.IEquatable<Velaptor.Graphics.RectShape>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[RectShape](Velaptor.Graphics.RectShape.md 'Velaptor.Graphics.RectShape')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Constructors

<a name='Velaptor.Graphics.RectShape.RectShape()'></a>

### RectShape() Constructor

Initializes a new instance of the [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor.Graphics.RectShape') struct.

```csharp
public RectShape();
```
## Properties

<a name='Velaptor.Graphics.RectShape.BorderThickness'></a>

### BorderThickness 

Gets or sets the thickness of the rectangle's border.

```csharp
public float BorderThickness { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
  
Ignored if the [IsSolid](Velaptor.Graphics.RectShape.md#issolid 'Velaptor.Graphics.RectShape.IsSolid') property is set to `true`.  
  
The value of a corner will never be larger than the smallest half [Width](Velaptor.Graphics.RectShape.md#width 'Velaptor.Graphics.RectShape.Width') or half [Height](Velaptor.Graphics.RectShape.md#height 'Velaptor.Graphics.RectShape.Height').

<a name='Velaptor.Graphics.RectShape.Bottom'></a>

### Bottom 

Gets or sets the location of the bottom of the rectangle on the Y axis.

```csharp
public float Bottom { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#position 'Velaptor.Graphics.RectShape.Position') of the rectangle.

<a name='Velaptor.Graphics.RectShape.Color'></a>

### Color 

Gets or sets the color of the rectangle.

```csharp
public System.Drawing.Color Color { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

#### Remarks
Ignored if the [GradientType](Velaptor.Graphics.RectShape.md#gradienttype 'Velaptor.Graphics.RectShape.GradientType') is set to any value other than [None](Velaptor.Graphics.ColorGradient.md#none 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.RectShape.CornerRadius'></a>

### CornerRadius 

Gets or sets the radius of each corner of the rectangle.

```csharp
public Velaptor.Graphics.CornerRadius CornerRadius { get; set; }
```

#### Property Value
[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')

#### Remarks
The value of a corner will never be larger than the smallest half [Width](Velaptor.Graphics.RectShape.md#width 'Velaptor.Graphics.RectShape.Width') or half [Height](Velaptor.Graphics.RectShape.md#height 'Velaptor.Graphics.RectShape.Height').

<a name='Velaptor.Graphics.RectShape.GradientStart'></a>

### GradientStart 

Gets or sets the starting color of the gradient.

```csharp
public System.Drawing.Color GradientStart { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

#### Remarks
This property is ignored if the [GradientType](Velaptor.Graphics.RectShape.md#gradienttype 'Velaptor.Graphics.RectShape.GradientType') is set to a value of [None](Velaptor.Graphics.ColorGradient.md#none 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.RectShape.GradientStop'></a>

### GradientStop 

Gets or sets the ending color of the gradient.

```csharp
public System.Drawing.Color GradientStop { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

#### Remarks
This property is ignored if the [GradientType](Velaptor.Graphics.RectShape.md#gradienttype 'Velaptor.Graphics.RectShape.GradientType') is set to a value of [None](Velaptor.Graphics.ColorGradient.md#none 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.RectShape.GradientType'></a>

### GradientType 

Gets or sets the type of color gradient that will be applied to the rectangle.

```csharp
public Velaptor.Graphics.ColorGradient GradientType { get; set; }
```

#### Property Value
[ColorGradient](Velaptor.Graphics.ColorGradient.md 'Velaptor.Graphics.ColorGradient')

#### Remarks
  
A value of [None](Velaptor.Graphics.ColorGradient.md#none 'Velaptor.Graphics.ColorGradient.None') will use the [Color](Velaptor.Graphics.RectShape.md#color 'Velaptor.Graphics.RectShape.Color')  
property and render the rectangle with a solid color.  
  
A value of [Horizontal](Velaptor.Graphics.ColorGradient.md#horizontal 'Velaptor.Graphics.ColorGradient.Horizontal') will ignore the [Color](Velaptor.Graphics.RectShape.md#color 'Velaptor.Graphics.RectShape.Color')  
property and use the [GradientStart](Velaptor.Graphics.RectShape.md#gradientstart 'Velaptor.Graphics.RectShape.GradientStart')[GradientStop](Velaptor.Graphics.RectShape.md#gradientstop 'Velaptor.Graphics.RectShape.GradientStop') properties.  
This will render the rectangle with [GradientStart](Velaptor.Graphics.RectShape.md#gradientstart 'Velaptor.Graphics.RectShape.GradientStart') color on the left side and gradually  
render it to the right side as the [GradientStop](Velaptor.Graphics.RectShape.md#gradientstop 'Velaptor.Graphics.RectShape.GradientStop') color.  
  
A value of [Vertical](Velaptor.Graphics.ColorGradient.md#vertical 'Velaptor.Graphics.ColorGradient.Vertical') will ignore the [Color](Velaptor.Graphics.RectShape.md#color 'Velaptor.Graphics.RectShape.Color')  
property and use the [GradientStart](Velaptor.Graphics.RectShape.md#gradientstart 'Velaptor.Graphics.RectShape.GradientStart') and [GradientStop](Velaptor.Graphics.RectShape.md#gradientstop 'Velaptor.Graphics.RectShape.GradientStop') properties.  
This will render the rectangle with [GradientStart](Velaptor.Graphics.RectShape.md#gradientstart 'Velaptor.Graphics.RectShape.GradientStart') color on the top and gradually  
render it to the bottom as the [GradientStop](Velaptor.Graphics.RectShape.md#gradientstop 'Velaptor.Graphics.RectShape.GradientStop') color.

<a name='Velaptor.Graphics.RectShape.HalfHeight'></a>

### HalfHeight 

Gets the half height of the rectangle.

```csharp
public float HalfHeight { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.RectShape.HalfWidth'></a>

### HalfWidth 

Gets the half width of the rectangle.

```csharp
public float HalfWidth { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.RectShape.Height'></a>

### Height 

Gets or sets the height of the rectangle.

```csharp
public float Height { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
The height is restricted to a minimum value of one.

<a name='Velaptor.Graphics.RectShape.IsSolid'></a>

### IsSolid 

Gets or sets a value indicating whether the rectangle is solid.

```csharp
public bool IsSolid { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Graphics.RectShape.Left'></a>

### Left 

Gets or sets the location of the left side of the rectangle on the X axis.

```csharp
public float Left { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#position 'Velaptor.Graphics.RectShape.Position') of the rectangle.

<a name='Velaptor.Graphics.RectShape.Position'></a>

### Position 

Gets or sets the position of the rectangle.

```csharp
public System.Numerics.Vector2 Position { get; set; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

#### Remarks
This position is the center of the rectangle.

<a name='Velaptor.Graphics.RectShape.Right'></a>

### Right 

Gets or sets the location of the right side of the rectangle on the X axis.

```csharp
public float Right { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#position 'Velaptor.Graphics.RectShape.Position') of the rectangle.

<a name='Velaptor.Graphics.RectShape.Top'></a>

### Top 

Gets or sets the location of the top of the rectangle on the Y axis.

```csharp
public float Top { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#position 'Velaptor.Graphics.RectShape.Position') of the rectangle.

<a name='Velaptor.Graphics.RectShape.Width'></a>

### Width 

Gets or sets the width of the rectangle.

```csharp
public float Width { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
The width is restricted to a minimum value of one.
## Methods

<a name='Velaptor.Graphics.RectShape.Contains(System.Numerics.Vector2)'></a>

### Contains(Vector2) 

Returns a value indicating whether the rectangle contains the given [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2').

```csharp
public bool Contains(System.Numerics.Vector2 vector);
```
#### Parameters

<a name='Velaptor.Graphics.RectShape.Contains(System.Numerics.Vector2).vector'></a>

`vector` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The possibly contained [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2').

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the [vector](Velaptor.Graphics.RectShape.md#vector 'Velaptor.Graphics.RectShape.Contains(System.Numerics.Vector2).vector') is contained.

#### Remarks
The [Left](Velaptor.Graphics.RectShape.md#left 'Velaptor.Graphics.RectShape.Left') or [Right](Velaptor.Graphics.RectShape.md#right 'Velaptor.Graphics.RectShape.Right') or [Top](Velaptor.Graphics.RectShape.md#top 'Velaptor.Graphics.RectShape.Top') or [Bottom](Velaptor.Graphics.RectShape.md#bottom 'Velaptor.Graphics.RectShape.Bottom') are inclusive.

<a name='Velaptor.Graphics.RectShape.Empty()'></a>

### Empty() 

Empties the struct.

```csharp
public void Empty();
```

<a name='Velaptor.Graphics.RectShape.IsEmpty()'></a>

### IsEmpty() 

Returns a value indicating whether the [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor.Graphics.RectShape') struct is empty.

```csharp
public bool IsEmpty();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if empty.
