---
title: Velaptor.Graphics.RectShape
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Graphics](Velaptor.Graphics.md 'Velaptor\.Graphics')

#### RectShape Struct

Represents a rectangular shape with various attributes\.

```csharp
public record struct RectShape : System.IEquatable<Velaptor.Graphics.RectShape>
```

Implements [System\.IEquatable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1 'System\.IEquatable\`1')[RectShape](Velaptor.Graphics.RectShape.md 'Velaptor\.Graphics\.RectShape')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1 'System\.IEquatable\`1')
## Constructors

<a name='Velaptor.Graphics.RectShape.RectShape()'></a>

### RectShape\(\) Constructor \{#Velaptor.Graphics.RectShape.RectShape()}

Initializes a new instance of the [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor\.Graphics\.RectShape') struct\.

```csharp
public RectShape();
```
## Properties

<a name='Velaptor.Graphics.RectShape.BorderThickness'></a>

### BorderThickness \{#Velaptor.Graphics.RectShape.BorderThickness}

Gets or sets the thickness of the rectangle's border\.

```csharp
public float BorderThickness { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks

Ignored if the [IsSolid](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.IsSolid 'Velaptor\.Graphics\.RectShape\.IsSolid') property is set to `true`.

The value of a corner will never be larger than the smallest half [Width](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Width 'Velaptor\.Graphics\.RectShape\.Width') or half [Height](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Height 'Velaptor\.Graphics\.RectShape\.Height').

<a name='Velaptor.Graphics.RectShape.Bottom'></a>

### Bottom \{#Velaptor.Graphics.RectShape.Bottom}

Gets or sets the location of the bottom of the rectangle on the Y axis\.

```csharp
public float Bottom { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Position 'Velaptor\.Graphics\.RectShape\.Position') of the rectangle\.

<a name='Velaptor.Graphics.RectShape.Color'></a>

### Color \{#Velaptor.Graphics.RectShape.Color}

Gets or sets the color of the rectangle\.

```csharp
public System.Drawing.Color Color { get; set; }
```

#### Property Value
[System\.Drawing\.Color](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color 'System\.Drawing\.Color')

#### Remarks
Ignored if the [GradientType](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientType 'Velaptor\.Graphics\.RectShape\.GradientType') is set to any value other than [None](Velaptor.Graphics.ColorGradient.md 'Velaptor\.Graphics\.ColorGradient\.None')\.

<a name='Velaptor.Graphics.RectShape.CornerRadius'></a>

### CornerRadius \{#Velaptor.Graphics.RectShape.CornerRadius}

Gets or sets the radius of each corner of the rectangle\.

```csharp
public Velaptor.Graphics.CornerRadius CornerRadius { get; set; }
```

#### Property Value
[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor\.Graphics\.CornerRadius')

#### Remarks
The value of a corner will never be larger than the smallest half [Width](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Width 'Velaptor\.Graphics\.RectShape\.Width') or half [Height](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Height 'Velaptor\.Graphics\.RectShape\.Height')\.

<a name='Velaptor.Graphics.RectShape.GradientStart'></a>

### GradientStart \{#Velaptor.Graphics.RectShape.GradientStart}

Gets or sets the starting color of the gradient\.

```csharp
public System.Drawing.Color GradientStart { get; set; }
```

#### Property Value
[System\.Drawing\.Color](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color 'System\.Drawing\.Color')

#### Remarks
This property is ignored if the [GradientType](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientType 'Velaptor\.Graphics\.RectShape\.GradientType') is set to a value of [None](Velaptor.Graphics.ColorGradient.md 'Velaptor\.Graphics\.ColorGradient\.None')\.

<a name='Velaptor.Graphics.RectShape.GradientStop'></a>

### GradientStop \{#Velaptor.Graphics.RectShape.GradientStop}

Gets or sets the ending color of the gradient\.

```csharp
public System.Drawing.Color GradientStop { get; set; }
```

#### Property Value
[System\.Drawing\.Color](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color 'System\.Drawing\.Color')

#### Remarks
This property is ignored if the [GradientType](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientType 'Velaptor\.Graphics\.RectShape\.GradientType') is set to a value of [None](Velaptor.Graphics.ColorGradient.md 'Velaptor\.Graphics\.ColorGradient\.None')\.

<a name='Velaptor.Graphics.RectShape.GradientType'></a>

### GradientType \{#Velaptor.Graphics.RectShape.GradientType}

Gets or sets the type of color gradient that will be applied to the rectangle\.

```csharp
public Velaptor.Graphics.ColorGradient GradientType { get; set; }
```

#### Property Value
[ColorGradient](Velaptor.Graphics.ColorGradient.md 'Velaptor\.Graphics\.ColorGradient')

#### Remarks

A value of [None](Velaptor.Graphics.ColorGradient.md 'Velaptor\.Graphics\.ColorGradient\.None') will use the [Color](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Color 'Velaptor\.Graphics\.RectShape\.Color')
property and render the rectangle with a solid color.

A value of [Horizontal](Velaptor.Graphics.ColorGradient.md 'Velaptor\.Graphics\.ColorGradient\.Horizontal') will ignore the [Color](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Color 'Velaptor\.Graphics\.RectShape\.Color')
property and use the [GradientStart](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStart 'Velaptor\.Graphics\.RectShape\.GradientStart')[GradientStop](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStop 'Velaptor\.Graphics\.RectShape\.GradientStop') properties.
This will render the rectangle with [GradientStart](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStart 'Velaptor\.Graphics\.RectShape\.GradientStart') color on the left side and gradually
render it to the right side as the [GradientStop](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStop 'Velaptor\.Graphics\.RectShape\.GradientStop') color.

A value of [Vertical](Velaptor.Graphics.ColorGradient.md 'Velaptor\.Graphics\.ColorGradient\.Vertical') will ignore the [Color](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Color 'Velaptor\.Graphics\.RectShape\.Color')
property and use the [GradientStart](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStart 'Velaptor\.Graphics\.RectShape\.GradientStart') and [GradientStop](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStop 'Velaptor\.Graphics\.RectShape\.GradientStop') properties.
This will render the rectangle with [GradientStart](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStart 'Velaptor\.Graphics\.RectShape\.GradientStart') color on the top and gradually
render it to the bottom as the [GradientStop](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.GradientStop 'Velaptor\.Graphics\.RectShape\.GradientStop') color.

<a name='Velaptor.Graphics.RectShape.HalfHeight'></a>

### HalfHeight \{#Velaptor.Graphics.RectShape.HalfHeight}

Gets the half height of the rectangle\.

```csharp
public float HalfHeight { get; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.Graphics.RectShape.HalfWidth'></a>

### HalfWidth \{#Velaptor.Graphics.RectShape.HalfWidth}

Gets the half width of the rectangle\.

```csharp
public float HalfWidth { get; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.Graphics.RectShape.Height'></a>

### Height \{#Velaptor.Graphics.RectShape.Height}

Gets or sets the height of the rectangle\.

```csharp
public float Height { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks
The height is restricted to a minimum value of one\.

<a name='Velaptor.Graphics.RectShape.IsSolid'></a>

### IsSolid \{#Velaptor.Graphics.RectShape.IsSolid}

Gets or sets a value indicating whether the rectangle is solid\.

```csharp
public bool IsSolid { get; set; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.Graphics.RectShape.Left'></a>

### Left \{#Velaptor.Graphics.RectShape.Left}

Gets or sets the location of the left side of the rectangle on the X axis\.

```csharp
public float Left { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Position 'Velaptor\.Graphics\.RectShape\.Position') of the rectangle\.

<a name='Velaptor.Graphics.RectShape.Position'></a>

### Position \{#Velaptor.Graphics.RectShape.Position}

Gets or sets the position of the rectangle\.

```csharp
public System.Numerics.Vector2 Position { get; set; }
```

#### Property Value
[System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

#### Remarks
This position is the center of the rectangle\.

<a name='Velaptor.Graphics.RectShape.Right'></a>

### Right \{#Velaptor.Graphics.RectShape.Right}

Gets or sets the location of the right side of the rectangle on the X axis\.

```csharp
public float Right { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Position 'Velaptor\.Graphics\.RectShape\.Position') of the rectangle\.

<a name='Velaptor.Graphics.RectShape.Top'></a>

### Top \{#Velaptor.Graphics.RectShape.Top}

Gets or sets the location of the top of the rectangle on the Y axis\.

```csharp
public float Top { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks
Will automatically update the [Position](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Position 'Velaptor\.Graphics\.RectShape\.Position') of the rectangle\.

<a name='Velaptor.Graphics.RectShape.Width'></a>

### Width \{#Velaptor.Graphics.RectShape.Width}

Gets or sets the width of the rectangle\.

```csharp
public float Width { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks
The width is restricted to a minimum value of one\.
## Methods

<a name='Velaptor.Graphics.RectShape.Contains(System.Numerics.Vector2)'></a>

### Contains\(Vector2\) \{#Velaptor.Graphics.RectShape.Contains(System.Numerics.Vector2)}

Returns a value indicating whether the rectangle contains the given [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')\.

```csharp
public bool Contains(System.Numerics.Vector2 vector);
```
#### Parameters

<a name='Velaptor.Graphics.RectShape.Contains(System.Numerics.Vector2).vector'></a>

`vector` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The possibly contained [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')\.

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')  
`true` if the [vector](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Contains(System.Numerics.Vector2) 'Velaptor\.Graphics\.RectShape\.Contains\(System\.Numerics\.Vector2\)\.vector') is contained\.

#### Remarks
The [Left](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Left 'Velaptor\.Graphics\.RectShape\.Left') or [Right](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Right 'Velaptor\.Graphics\.RectShape\.Right') or [Top](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Top 'Velaptor\.Graphics\.RectShape\.Top') or [Bottom](Velaptor.Graphics.RectShape.md#Velaptor.Graphics.RectShape.Bottom 'Velaptor\.Graphics\.RectShape\.Bottom') are inclusive\.

<a name='Velaptor.Graphics.RectShape.Empty()'></a>

### Empty\(\) \{#Velaptor.Graphics.RectShape.Empty()}

Empties the struct\.

```csharp
public void Empty();
```

<a name='Velaptor.Graphics.RectShape.IsEmpty()'></a>

### IsEmpty\(\) \{#Velaptor.Graphics.RectShape.IsEmpty()}

Returns a value indicating whether the [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor\.Graphics\.RectShape') struct is empty\.

```csharp
public bool IsEmpty();
```

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')  
True if empty\.
