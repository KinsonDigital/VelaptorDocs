#### [Velaptor](index.md 'index')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

## Line Struct

Represents a single line segment.

```csharp
public struct Line
```
### Constructors

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,float)'></a>

## Line(Vector2, Vector2, float) Constructor

Initializes a new instance of the [Line](Velaptor.Graphics.Line.md 'Velaptor.Graphics.Line') struct.

```csharp
public Line(System.Numerics.Vector2 p1, System.Numerics.Vector2 p2, float thickness);
```
#### Parameters

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,float).p1'></a>

`p1` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The starting point of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,float).p2'></a>

`p2` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The ending point of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,float).thickness'></a>

`thickness` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The thickness of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,float)'></a>

## Line(Vector2, Vector2, Color, float) Constructor

Initializes a new instance of the [Line](Velaptor.Graphics.Line.md 'Velaptor.Graphics.Line') struct.

```csharp
public Line(System.Numerics.Vector2 p1, System.Numerics.Vector2 p2, System.Drawing.Color color, float thickness);
```
#### Parameters

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,float).p1'></a>

`p1` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The starting point of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,float).p2'></a>

`p2` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The ending point of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,float).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,float).thickness'></a>

`thickness` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The thickness of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color)'></a>

## Line(Vector2, Vector2, Color) Constructor

Initializes a new instance of the [Line](Velaptor.Graphics.Line.md 'Velaptor.Graphics.Line') struct.

```csharp
public Line(System.Numerics.Vector2 p1, System.Numerics.Vector2 p2, System.Drawing.Color color);
```
#### Parameters

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color).p1'></a>

`p1` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The starting point of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color).p2'></a>

`p2` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The ending point of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2)'></a>

## Line(Vector2, Vector2) Constructor

Initializes a new instance of the [Line](Velaptor.Graphics.Line.md 'Velaptor.Graphics.Line') struct.

```csharp
public Line(System.Numerics.Vector2 p1, System.Numerics.Vector2 p2);
```
#### Parameters

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2).p1'></a>

`p1` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The starting point of the line.

<a name='Velaptor.Graphics.Line.Line(System.Numerics.Vector2,System.Numerics.Vector2).p2'></a>

`p2` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The ending point of the line.
### Properties

<a name='Velaptor.Graphics.Line.Color'></a>

## Line.Color Property

Gets or sets the color of the line.

```csharp
public System.Drawing.Color Color { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.Graphics.Line.P1'></a>

## Line.P1 Property

Gets or sets the starting point of the line.

```csharp
public System.Numerics.Vector2 P1 { get; set; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

<a name='Velaptor.Graphics.Line.P2'></a>

## Line.P2 Property

Gets or sets the ending point of the line.

```csharp
public System.Numerics.Vector2 P2 { get; set; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

<a name='Velaptor.Graphics.Line.Thickness'></a>

## Line.Thickness Property

Gets or sets the thickness of the line.

```csharp
public float Thickness { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
Restricts the thickness to a minimum value of 1.