---
title: Velaptor.Camera2D
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor](Velaptor.md 'Velaptor')

#### Camera2D Class

A simple 2\-D camera that applies pan, zoom, and rotation transforms on the CPU for
world\-to\-screen coordinate conversion\.

```csharp
public sealed class Camera2D : Velaptor.ICamera2D
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → Camera2D

Implements [ICamera2D](Velaptor.ICamera2D.md 'Velaptor\.ICamera2D')

#### Remarks

Works in screen pixel coordinates: top-left origin, Y increases downward.
[Position](Velaptor.ICamera2D.md#position 'Velaptor\.ICamera2D\.Position') is a pan offset — positive X shifts the view right, which
makes scene content appear to move left (standard game-camera convention).

Unlike GPU-uniform cameras, transforms are applied entirely on the CPU
before vertex data is submitted. Call [TransformPosition\(Vector2\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformPosition(System.Numerics.Vector2) 'Velaptor\.ICamera2D\.TransformPosition\(System\.Numerics\.Vector2\)') and
[TransformSize\(float\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformSize(float) 'Velaptor\.ICamera2D\.TransformSize\(float\)') when building render data each frame.

<b>Zoom:</b> 1.0 = one world pixel maps to exactly one screen pixel. Values above
            1.0 magnify the scene; values below 1.0 shrink it. Zoom is applied relative to the
            screen center so the center of the window stays fixed while zooming.
## Constructors

<a name='Velaptor.Camera2D.Camera2D()'></a>

### Camera2D\(\) Constructor

Initializes a new instance of the [Camera2D](Velaptor.Camera2D.md 'Velaptor\.Camera2D') class\.

```csharp
public Camera2D();
```
## Properties

<a name='Velaptor.Camera2D.Position'></a>

### Position 

Gets or sets the camera pan offset in screen pixel units\.
Moving the camera right \(positive X\) shifts all scene content leftward\.
Default is [System\.Numerics\.Vector2\.Zero](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2.zero 'System\.Numerics\.Vector2\.Zero') \(no pan\)\.

```csharp
public System.Numerics.Vector2 Position { get; set; }
```

Implements [Position](Velaptor.ICamera2D.md#position 'Velaptor\.ICamera2D\.Position')

#### Property Value
[System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

<a name='Velaptor.Camera2D.Rotation'></a>

### Rotation 

Gets or sets the camera rotation in degrees\. Positive values rotate the view
clockwise\. Default is `0` \(no rotation\)\. Rotation is applied around the
screen center after zoom\.

```csharp
public float Rotation { get; set; }
```

Implements [Rotation](Velaptor.ICamera2D.md#rotation 'Velaptor\.ICamera2D\.Rotation')

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.Camera2D.WindowSize'></a>

### WindowSize 

Gets the current window size in pixels\. Used to locate the screen center for
zoom calculations\. Updated automatically on window resize\.

```csharp
public Velaptor.SizeU WindowSize { get; }
```

Implements [WindowSize](Velaptor.ICamera2D.md#windowsize 'Velaptor\.ICamera2D\.WindowSize')

#### Property Value
[SizeU](Velaptor.SizeU.md 'Velaptor\.SizeU')

<a name='Velaptor.Camera2D.WorldBounds'></a>

### WorldBounds 

Gets the axis\-aligned bounds of the visible world area in world pixel coordinates\.
When the camera is rotated, this is the bounding box of the rotated view frustum\.

```csharp
public System.Drawing.RectangleF WorldBounds { get; }
```

Implements [WorldBounds](Velaptor.ICamera2D.md#worldbounds 'Velaptor\.ICamera2D\.WorldBounds')

#### Property Value
[System\.Drawing\.RectangleF](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.rectanglef 'System\.Drawing\.RectangleF')

<a name='Velaptor.Camera2D.Zoom'></a>

### Zoom 

Gets or sets the zoom factor\. `1.0` = native pixel size\.
Values above `1.0` magnify; values below shrink\. Default is `1.0`\.

```csharp
public float Zoom { get; set; }
```

Implements [Zoom](Velaptor.ICamera2D.md#zoom 'Velaptor\.ICamera2D\.Zoom')

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.Camera2D.ZoomMax'></a>

### ZoomMax 

Gets or sets the maximum zoom level\. Default is `4.0`\.

```csharp
public float ZoomMax { get; set; }
```

Implements [ZoomMax](Velaptor.ICamera2D.md#zoommax 'Velaptor\.ICamera2D\.ZoomMax')

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.Camera2D.ZoomMin'></a>

### ZoomMin 

Gets or sets the minimum zoom level\. Default is `0.1`\.

```csharp
public float ZoomMin { get; set; }
```

Implements [ZoomMin](Velaptor.ICamera2D.md#zoommin 'Velaptor\.ICamera2D\.ZoomMin')

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')
## Methods

<a name='Velaptor.Camera2D.IsVisible(System.Numerics.Vector2)'></a>

### IsVisible\(Vector2\) 

Determines whether a world\-space point is visible on the screen\.

```csharp
public bool IsVisible(System.Numerics.Vector2 worldPos);
```
#### Parameters

<a name='Velaptor.Camera2D.IsVisible(System.Numerics.Vector2).worldPos'></a>

`worldPos` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The position in world pixel coordinates\.

Implements [IsVisible\(Vector2\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2) 'Velaptor\.ICamera2D\.IsVisible\(System\.Numerics\.Vector2\)')

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')  
`true` if the point is within the visible screen area; otherwise, `false`\.

<a name='Velaptor.Camera2D.IsVisible(System.Numerics.Vector2,System.Numerics.Vector2)'></a>

### IsVisible\(Vector2, Vector2\) 

Determines whether a world\-space rectangle intersects the visible screen area\.
Use this for culling objects with size \(sprites, tiles, etc\.\)\.

```csharp
public bool IsVisible(System.Numerics.Vector2 worldPos, System.Numerics.Vector2 worldSize);
```
#### Parameters

<a name='Velaptor.Camera2D.IsVisible(System.Numerics.Vector2,System.Numerics.Vector2).worldPos'></a>

`worldPos` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The top\-left position of the object in world pixel coordinates\.

<a name='Velaptor.Camera2D.IsVisible(System.Numerics.Vector2,System.Numerics.Vector2).worldSize'></a>

`worldSize` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The size of the object in world pixels\.

Implements [IsVisible\(Vector2, Vector2\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2,System.Numerics.Vector2) 'Velaptor\.ICamera2D\.IsVisible\(System\.Numerics\.Vector2, System\.Numerics\.Vector2\)')

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')  
`true` if any part of the rectangle is visible; otherwise, `false`\.

<a name='Velaptor.Camera2D.TransformPosition(System.Numerics.Vector2)'></a>

### TransformPosition\(Vector2\) 

Transforms a world\-space pixel position into a screen render position,
accounting for camera pan and zoom\.

```csharp
public System.Numerics.Vector2 TransformPosition(System.Numerics.Vector2 worldPos);
```
#### Parameters

<a name='Velaptor.Camera2D.TransformPosition(System.Numerics.Vector2).worldPos'></a>

`worldPos` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The position in world pixel coordinates\.

Implements [TransformPosition\(Vector2\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformPosition(System.Numerics.Vector2) 'Velaptor\.ICamera2D\.TransformPosition\(System\.Numerics\.Vector2\)')

#### Returns
[System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')  
The position in screen pixel coordinates\.

<a name='Velaptor.Camera2D.TransformRotation(float)'></a>

### TransformRotation\(float\) 

Transforms a world\-space rotation angle \(in degrees\) into a screen\-space
rotation angle, accounting for camera rotation\. Rotation is additive:
positive camera rotation \(clockwise\) adds to the object's rotation\.

```csharp
public float TransformRotation(float worldRotation);
```
#### Parameters

<a name='Velaptor.Camera2D.TransformRotation(float).worldRotation'></a>

`worldRotation` [System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

The rotation angle in world space, in degrees\.

Implements [TransformRotation\(float\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformRotation(float) 'Velaptor\.ICamera2D\.TransformRotation\(float\)')

#### Returns
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')  
The rotation angle in screen space, in degrees\.

<a name='Velaptor.Camera2D.TransformSize(float)'></a>

### TransformSize\(float\) 

Scales a size value by the current zoom level\.
Use this for width, height, radius, and other size\-related values\.

```csharp
public float TransformSize(float size);
```
#### Parameters

<a name='Velaptor.Camera2D.TransformSize(float).size'></a>

`size` [System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

The size in world pixels\.

Implements [TransformSize\(float\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformSize(float) 'Velaptor\.ICamera2D\.TransformSize\(float\)')

#### Returns
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')  
The scaled size in screen pixels\.
