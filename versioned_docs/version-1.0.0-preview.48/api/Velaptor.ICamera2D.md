---
title: Velaptor.ICamera2D
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor](Velaptor.md 'Velaptor')

#### ICamera2D Interface

A simple 2\-D camera that applies pan, zoom, and rotation transforms on the CPU for
world\-to\-screen coordinate conversion\.

```csharp
public interface ICamera2D
```

Derived  
&#8627; [Camera2D](Velaptor.Camera2D.md 'Velaptor\.Camera2D')

#### Remarks

Works in screen pixel coordinates: top-left origin, Y increases downward.
[Position](Velaptor.ICamera2D.md#Velaptor.ICamera2D.Position 'Velaptor\.ICamera2D\.Position') is a pan offset — positive X shifts the view right, which
makes scene content appear to move left (standard game-camera convention).

Unlike GPU-uniform cameras, transforms are applied entirely on the CPU
before vertex data is submitted. Call [TransformPosition\(Vector2\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformPosition(System.Numerics.Vector2) 'Velaptor\.ICamera2D\.TransformPosition\(System\.Numerics\.Vector2\)') and
[TransformSize\(float\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformSize(float) 'Velaptor\.ICamera2D\.TransformSize\(float\)') when building render data each frame.

<b>Zoom:</b> 1.0 = one world pixel maps to exactly one screen pixel. Values above
            1.0 magnify the scene; values below 1.0 shrink it. Zoom is applied relative to the
            screen center so the center of the window stays fixed while zooming.
## Properties

<a name='Velaptor.ICamera2D.Position'></a>

### Position \{#Velaptor.ICamera2D.Position}

Gets or sets the camera pan offset in screen pixel units\.
Moving the camera right \(positive X\) shifts all scene content leftward\.
Default is [System\.Numerics\.Vector2\.Zero](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2.zero 'System\.Numerics\.Vector2\.Zero') \(no pan\)\.

```csharp
System.Numerics.Vector2 Position { get; set; }
```

#### Property Value
[System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

<a name='Velaptor.ICamera2D.Rotation'></a>

### Rotation \{#Velaptor.ICamera2D.Rotation}

Gets or sets the camera rotation in degrees\. Positive values rotate the view
clockwise\. Default is `0` \(no rotation\)\. Rotation is applied around the
screen center after zoom\.

```csharp
float Rotation { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.ICamera2D.WindowSize'></a>

### WindowSize \{#Velaptor.ICamera2D.WindowSize}

Gets the current window size in pixels\. Used to locate the screen center for
zoom calculations\. Updated automatically on window resize\.

```csharp
Velaptor.SizeU WindowSize { get; }
```

#### Property Value
[SizeU](Velaptor.SizeU.md 'Velaptor\.SizeU')

<a name='Velaptor.ICamera2D.WorldBounds'></a>

### WorldBounds \{#Velaptor.ICamera2D.WorldBounds}

Gets the axis\-aligned bounds of the visible world area in world pixel coordinates\.
When the camera is rotated, this is the bounding box of the rotated view frustum\.

```csharp
System.Drawing.RectangleF WorldBounds { get; }
```

#### Property Value
[System\.Drawing\.RectangleF](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.rectanglef 'System\.Drawing\.RectangleF')

<a name='Velaptor.ICamera2D.Zoom'></a>

### Zoom \{#Velaptor.ICamera2D.Zoom}

Gets or sets the zoom factor\. `1.0` = native pixel size\.
Values above `1.0` magnify; values below shrink\. Default is `1.0`\.

```csharp
float Zoom { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.ICamera2D.ZoomMax'></a>

### ZoomMax \{#Velaptor.ICamera2D.ZoomMax}

Gets or sets the maximum zoom level\. Default is `4.0`\.

```csharp
float ZoomMax { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.ICamera2D.ZoomMin'></a>

### ZoomMin \{#Velaptor.ICamera2D.ZoomMin}

Gets or sets the minimum zoom level\. Default is `0.1`\.

```csharp
float ZoomMin { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')
## Methods

<a name='Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2)'></a>

### IsVisible\(Vector2\) \{#Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2)}

Determines whether a world\-space point is visible on the screen\.

```csharp
bool IsVisible(System.Numerics.Vector2 worldPos);
```
#### Parameters

<a name='Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2).worldPos'></a>

`worldPos` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The position in world pixel coordinates\.

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')  
`true` if the point is within the visible screen area; otherwise, `false`\.

<a name='Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2,System.Numerics.Vector2)'></a>

### IsVisible\(Vector2, Vector2\) \{#Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2,System.Numerics.Vector2)}

Determines whether a world\-space rectangle intersects the visible screen area\.
Use this for culling objects with size \(sprites, tiles, etc\.\)\.

```csharp
bool IsVisible(System.Numerics.Vector2 worldPos, System.Numerics.Vector2 worldSize);
```
#### Parameters

<a name='Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2,System.Numerics.Vector2).worldPos'></a>

`worldPos` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The top\-left position of the object in world pixel coordinates\.

<a name='Velaptor.ICamera2D.IsVisible(System.Numerics.Vector2,System.Numerics.Vector2).worldSize'></a>

`worldSize` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The size of the object in world pixels\.

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')  
`true` if any part of the rectangle is visible; otherwise, `false`\.

<a name='Velaptor.ICamera2D.TransformPosition(System.Numerics.Vector2)'></a>

### TransformPosition\(Vector2\) \{#Velaptor.ICamera2D.TransformPosition(System.Numerics.Vector2)}

Transforms a world\-space pixel position into a screen render position,
accounting for camera pan and zoom\.

```csharp
System.Numerics.Vector2 TransformPosition(System.Numerics.Vector2 worldPos);
```
#### Parameters

<a name='Velaptor.ICamera2D.TransformPosition(System.Numerics.Vector2).worldPos'></a>

`worldPos` [System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

The position in world pixel coordinates\.

#### Returns
[System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')  
The position in screen pixel coordinates\.

<a name='Velaptor.ICamera2D.TransformRotation(float)'></a>

### TransformRotation\(float\) \{#Velaptor.ICamera2D.TransformRotation(float)}

Transforms a world\-space rotation angle \(in degrees\) into a screen\-space
rotation angle, accounting for camera rotation\. Rotation is additive:
positive camera rotation \(clockwise\) adds to the object's rotation\.

```csharp
float TransformRotation(float worldRotation);
```
#### Parameters

<a name='Velaptor.ICamera2D.TransformRotation(float).worldRotation'></a>

`worldRotation` [System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

The rotation angle in world space, in degrees\.

#### Returns
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')  
The rotation angle in screen space, in degrees\.

<a name='Velaptor.ICamera2D.TransformSize(float)'></a>

### TransformSize\(float\) \{#Velaptor.ICamera2D.TransformSize(float)}

Scales a size value by the current zoom level\.
Use this for width, height, radius, and other size\-related values\.

```csharp
float TransformSize(float size);
```
#### Parameters

<a name='Velaptor.ICamera2D.TransformSize(float).size'></a>

`size` [System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

The size in world pixels\.

#### Returns
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')  
The scaled size in screen pixels\.
