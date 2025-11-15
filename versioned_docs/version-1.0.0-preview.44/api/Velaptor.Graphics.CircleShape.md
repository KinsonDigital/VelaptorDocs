---
title: Velaptor.Graphics.CircleShape
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### CircleShape Struct

Represents a circle shape with various attributes.

```csharp
public struct CircleShape :
System.IEquatable<Velaptor.Graphics.CircleShape>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[CircleShape](Velaptor.Graphics.CircleShape.md 'Velaptor.Graphics.CircleShape')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Constructors

<a name='Velaptor.Graphics.CircleShape.CircleShape()'></a>

### CircleShape() Constructor

Initializes a new instance of the [CircleShape](Velaptor.Graphics.CircleShape.md 'Velaptor.Graphics.CircleShape') struct.

```csharp
public CircleShape();
```
## Properties

<a name='Velaptor.Graphics.CircleShape.BorderThickness'></a>

### BorderThickness 

Gets or sets the thickness of the circle's border.

```csharp
public float BorderThickness { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
  
Only visible if the [IsSolid](Velaptor.Graphics.CircleShape.md#issolid 'Velaptor.Graphics.CircleShape.IsSolid') property is set to `false`.  
<br/>  
The border thickness is automatically restricted to a value no greater than the [Radius](Velaptor.Graphics.CircleShape.md#radius 'Velaptor.Graphics.CircleShape.Radius').

<a name='Velaptor.Graphics.CircleShape.Bottom'></a>

### Bottom 

Gets or sets the bottom location of the bottom of the circle on the Y axis.

```csharp
public float Bottom { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.CircleShape.md#position 'Velaptor.Graphics.CircleShape.Position') of the circle.

<a name='Velaptor.Graphics.CircleShape.Color'></a>

### Color 

Gets or sets the color of the circle.

```csharp
public System.Drawing.Color Color { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

#### Remarks
Ignored if the [GradientType](Velaptor.Graphics.CircleShape.md#gradienttype 'Velaptor.Graphics.CircleShape.GradientType') is set to any value other than [None](Velaptor.Graphics.ColorGradient.md#none 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.CircleShape.Diameter'></a>

### Diameter 

Gets or sets the diameter of the circle.

```csharp
public float Diameter { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
The diameter is restricted to a minimum value of one.

<a name='Velaptor.Graphics.CircleShape.GradientStart'></a>

### GradientStart 

Gets or sets the starting color of the gradient.

```csharp
public System.Drawing.Color GradientStart { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

#### Remarks
This property is ignored if the [GradientType](Velaptor.Graphics.CircleShape.md#gradienttype 'Velaptor.Graphics.CircleShape.GradientType') is set to a value of [None](Velaptor.Graphics.ColorGradient.md#none 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.CircleShape.GradientStop'></a>

### GradientStop 

Gets or sets the ending color of the gradient.

```csharp
public System.Drawing.Color GradientStop { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

#### Remarks
This property is ignored if the [GradientType](Velaptor.Graphics.CircleShape.md#gradienttype 'Velaptor.Graphics.CircleShape.GradientType') is set to a value of [None](Velaptor.Graphics.ColorGradient.md#none 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.CircleShape.GradientType'></a>

### GradientType 

Gets or sets the type of color gradient that will be applied to the circle.

```csharp
public Velaptor.Graphics.ColorGradient GradientType { get; set; }
```

#### Property Value
[ColorGradient](Velaptor.Graphics.ColorGradient.md 'Velaptor.Graphics.ColorGradient')

#### Remarks
  
A value of [None](Velaptor.Graphics.ColorGradient.md#none 'Velaptor.Graphics.ColorGradient.None') will use the [Color](Velaptor.Graphics.CircleShape.md#color 'Velaptor.Graphics.CircleShape.Color')  
property and render the circle with a solid color.  
  
A value of [Horizontal](Velaptor.Graphics.ColorGradient.md#horizontal 'Velaptor.Graphics.ColorGradient.Horizontal') will ignore the [Color](Velaptor.Graphics.CircleShape.md#color 'Velaptor.Graphics.CircleShape.Color')  
property and use the [GradientStart](Velaptor.Graphics.CircleShape.md#gradientstart 'Velaptor.Graphics.CircleShape.GradientStart')[GradientStop](Velaptor.Graphics.CircleShape.md#gradientstop 'Velaptor.Graphics.CircleShape.GradientStop') properties.  
This will render the circle with [GradientStart](Velaptor.Graphics.CircleShape.md#gradientstart 'Velaptor.Graphics.CircleShape.GradientStart') color on the left side and gradually  
render it to the right side as the [GradientStop](Velaptor.Graphics.CircleShape.md#gradientstop 'Velaptor.Graphics.CircleShape.GradientStop') color.  
  
A value of [Vertical](Velaptor.Graphics.ColorGradient.md#vertical 'Velaptor.Graphics.ColorGradient.Vertical') will ignore the [Color](Velaptor.Graphics.CircleShape.md#color 'Velaptor.Graphics.CircleShape.Color')  
property and use the [GradientStart](Velaptor.Graphics.CircleShape.md#gradientstart 'Velaptor.Graphics.CircleShape.GradientStart') and [GradientStop](Velaptor.Graphics.CircleShape.md#gradientstop 'Velaptor.Graphics.CircleShape.GradientStop') properties.  
This will render the circle with [GradientStart](Velaptor.Graphics.CircleShape.md#gradientstart 'Velaptor.Graphics.CircleShape.GradientStart') color on the top and gradually  
render it to the bottom as the [GradientStop](Velaptor.Graphics.CircleShape.md#gradientstop 'Velaptor.Graphics.CircleShape.GradientStop') color.

<a name='Velaptor.Graphics.CircleShape.IsSolid'></a>

### IsSolid 

Gets or sets a value indicating whether the circle is solid.

```csharp
public bool IsSolid { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Graphics.CircleShape.Left'></a>

### Left 

Gets or sets the location of the left side of the circle on the X axis.

```csharp
public float Left { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.CircleShape.md#position 'Velaptor.Graphics.CircleShape.Position') of the circle.

<a name='Velaptor.Graphics.CircleShape.Position'></a>

### Position 

Gets or sets the position of the circle.

```csharp
public System.Numerics.Vector2 Position { get; set; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

#### Remarks
This position is relative to the center of the circle.

<a name='Velaptor.Graphics.CircleShape.Radius'></a>

### Radius 

Gets or sets the radius of the circle.

```csharp
public float Radius { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
This is half of the [Diameter](Velaptor.Graphics.CircleShape.md#diameter 'Velaptor.Graphics.CircleShape.Diameter').  
<br/>  
Changing the radius will automatically update the [Diameter](Velaptor.Graphics.CircleShape.md#diameter 'Velaptor.Graphics.CircleShape.Diameter').

<a name='Velaptor.Graphics.CircleShape.Right'></a>

### Right 

Gets or sets the location of the right side of the circle on the X axis.

```csharp
public float Right { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.CircleShape.md#position 'Velaptor.Graphics.CircleShape.Position') of the circle.

<a name='Velaptor.Graphics.CircleShape.Top'></a>

### Top 

Gets or sets the top location of the top of the circle on the Y axis.

```csharp
public float Top { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.CircleShape.md#position 'Velaptor.Graphics.CircleShape.Position') of the circle.
## Methods

<a name='Velaptor.Graphics.CircleShape.Contains(System.Numerics.Vector2)'></a>

### Contains(Vector2) 

Returns a value indicating whether the circle contains the given [vector](Velaptor.Graphics.CircleShape.md#vector 'Velaptor.Graphics.CircleShape.Contains(System.Numerics.Vector2).vector').

```csharp
public bool Contains(System.Numerics.Vector2 vector);
```
#### Parameters

<a name='Velaptor.Graphics.CircleShape.Contains(System.Numerics.Vector2).vector'></a>

`vector` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The possibly contained [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2').

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the [vector](Velaptor.Graphics.CircleShape.md#vector 'Velaptor.Graphics.CircleShape.Contains(System.Numerics.Vector2).vector') is contained.

<a name='Velaptor.Graphics.CircleShape.Empty()'></a>

### Empty() 

Empties the struct.

```csharp
public void Empty();
```

<a name='Velaptor.Graphics.CircleShape.IsEmpty()'></a>

### IsEmpty() 

Returns a value indicating whether the [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor.Graphics.RectShape') struct is empty.

```csharp
public bool IsEmpty();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if empty.
