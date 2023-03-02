#### [Velaptor](index.md 'index')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

## RectShape Struct

Represents a rectangular shape with various attributes.

```csharp
public struct RectShape
```
### Constructors

<a name='Velaptor.Graphics.RectShape.RectShape()'></a>

## RectShape() Constructor

Initializes a new instance of the [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor.Graphics.RectShape') struct.

```csharp
public RectShape();
```
### Properties

<a name='Velaptor.Graphics.RectShape.BorderThickness'></a>

## RectShape.BorderThickness Property

Gets or sets the thickness of the rectangle's border.

```csharp
public float BorderThickness { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
  
Ignored if the [IsFilled](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.IsFilled 'Velaptor.Graphics.RectShape.IsFilled') property is set to `true`.  
  
The value of a corner will never be larger than the smallest half [Width](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Width 'Velaptor.Graphics.RectShape.Width') or half [Height](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Height 'Velaptor.Graphics.RectShape.Height').

<a name='Velaptor.Graphics.RectShape.Bottom'></a>

## RectShape.Bottom Property

Gets or sets the bottom location of the rectangle.

```csharp
public float Bottom { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Position 'Velaptor.Graphics.RectShape.Position') of the rectangle.

<a name='Velaptor.Graphics.RectShape.Color'></a>

## RectShape.Color Property

Gets or sets the color of the rectangle.

```csharp
public System.Drawing.Color Color { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

### Remarks
Ignored if the [GradientType](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientType 'Velaptor.Graphics.RectShape.GradientType') is set to any value other than [None](Velaptor.Graphics.ColorGradient.md#Velaptor.Graphics.ColorGradient.None 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.RectShape.CornerRadius'></a>

## RectShape.CornerRadius Property

Gets or sets the radius of each corner of the rectangle.

```csharp
public Velaptor.Graphics.CornerRadius CornerRadius { get; set; }
```

#### Property Value
[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')

### Remarks
The value of a corner will never be larger than the smallest half [Width](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Width 'Velaptor.Graphics.RectShape.Width') or half [Height](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Height 'Velaptor.Graphics.RectShape.Height').

<a name='Velaptor.Graphics.RectShape.GradientStart'></a>

## RectShape.GradientStart Property

Gets or sets the starting color of the gradient.

```csharp
public System.Drawing.Color GradientStart { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

### Remarks
This property is ignored if the [GradientType](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientType 'Velaptor.Graphics.RectShape.GradientType') is set to a value of [None](Velaptor.Graphics.ColorGradient.md#Velaptor.Graphics.ColorGradient.None 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.RectShape.GradientStop'></a>

## RectShape.GradientStop Property

Gets or sets the ending color of the gradient.

```csharp
public System.Drawing.Color GradientStop { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

### Remarks
This property is ignored if the [GradientType](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientType 'Velaptor.Graphics.RectShape.GradientType') is set to a value of [None](Velaptor.Graphics.ColorGradient.md#Velaptor.Graphics.ColorGradient.None 'Velaptor.Graphics.ColorGradient.None').

<a name='Velaptor.Graphics.RectShape.GradientType'></a>

## RectShape.GradientType Property

Gets or sets the type of color gradient that will be applied to the rectangle.

```csharp
public Velaptor.Graphics.ColorGradient GradientType { get; set; }
```

#### Property Value
[ColorGradient](Velaptor.Graphics.ColorGradient.md 'Velaptor.Graphics.ColorGradient')

### Remarks
  
A value of [None](Velaptor.Graphics.ColorGradient.md#Velaptor.Graphics.ColorGradient.None 'Velaptor.Graphics.ColorGradient.None') will use the [Color](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Color 'Velaptor.Graphics.RectShape.Color')  
property and render the rectangle with a solid color.  
  
A value of [Horizontal](Velaptor.Graphics.ColorGradient.md#Velaptor.Graphics.ColorGradient.Horizontal 'Velaptor.Graphics.ColorGradient.Horizontal') will ignore the [Color](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Color 'Velaptor.Graphics.RectShape.Color')  
property and use the [GradientStart](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStart 'Velaptor.Graphics.RectShape.GradientStart')[GradientStop](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStop 'Velaptor.Graphics.RectShape.GradientStop') properties.  
This will render the rectangle with [GradientStart](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStart 'Velaptor.Graphics.RectShape.GradientStart') color on the left side and gradually  
render it to the right side as the [GradientStop](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStop 'Velaptor.Graphics.RectShape.GradientStop') color.  
  
A value of [Vertical](Velaptor.Graphics.ColorGradient.md#Velaptor.Graphics.ColorGradient.Vertical 'Velaptor.Graphics.ColorGradient.Vertical') will ignore the [Color](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Color 'Velaptor.Graphics.RectShape.Color')  
property and use the [GradientStart](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStart 'Velaptor.Graphics.RectShape.GradientStart') and [GradientStop](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStop 'Velaptor.Graphics.RectShape.GradientStop') properties.  
This will render the rectangle with [GradientStart](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStart 'Velaptor.Graphics.RectShape.GradientStart') color on the top and gradually  
render it to the bottom as the [GradientStop](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStop 'Velaptor.Graphics.RectShape.GradientStop') color.

<a name='Velaptor.Graphics.RectShape.HalfHeight'></a>

## RectShape.HalfHeight Property

Gets the half height of the rectangle.

```csharp
public float HalfHeight { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.RectShape.HalfWidth'></a>

## RectShape.HalfWidth Property

Gets the half width of the rectangle.

```csharp
public float HalfWidth { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.RectShape.Height'></a>

## RectShape.Height Property

Gets or sets the height of the rectangle.

```csharp
public float Height { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
The height is restricted to a minimum value of one.

<a name='Velaptor.Graphics.RectShape.IsFilled'></a>

## RectShape.IsFilled Property

Gets or sets a value indicating whether or not the rectangle is filled or empty.

```csharp
public bool IsFilled { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Graphics.RectShape.Left'></a>

## RectShape.Left Property

Gets or sets the Left location of the rectangle.

```csharp
public float Left { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Position 'Velaptor.Graphics.RectShape.Position') of the rectangle.

<a name='Velaptor.Graphics.RectShape.Position'></a>

## RectShape.Position Property

Gets or sets the position of the rectangle.

```csharp
public System.Numerics.Vector2 Position { get; set; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

### Remarks
This position is the center of the rectangle.

<a name='Velaptor.Graphics.RectShape.Right'></a>

## RectShape.Right Property

Gets or sets the right location of the rectangle.

```csharp
public float Right { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Position 'Velaptor.Graphics.RectShape.Position') of the rectangle.

<a name='Velaptor.Graphics.RectShape.Top'></a>

## RectShape.Top Property

Gets or sets the top location of the rectangle.

```csharp
public float Top { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Position 'Velaptor.Graphics.RectShape.Position') of the rectangle.

<a name='Velaptor.Graphics.RectShape.Width'></a>

## RectShape.Width Property

Gets or sets the width of the rectangle.

```csharp
public float Width { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
The width is restricted to a minimum value of one.
### Methods

<a name='Velaptor.Graphics.RectShape.Empty()'></a>

## RectShape.Empty() Method

Empties the struct.

```csharp
public void Empty();
```

<a name='Velaptor.Graphics.RectShape.IsEmpty()'></a>

## RectShape.IsEmpty() Method

Returns a value indicating whether or not the [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor.Graphics.RectShape') struct is empty.

```csharp
public bool IsEmpty();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if empty.