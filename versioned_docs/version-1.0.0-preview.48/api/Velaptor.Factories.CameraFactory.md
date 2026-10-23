---
title: Velaptor.Factories.CameraFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Factories](Velaptor.Factories.md 'Velaptor\.Factories')

#### CameraFactory Class

Creates camera instances for applying pan and zoom transforms to rendered objects\.

```csharp
public static class CameraFactory
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → CameraFactory
## Methods

<a name='Velaptor.Factories.CameraFactory.CreateCamera()'></a>

### CreateCamera\(\) \{#Velaptor.Factories.CameraFactory.CreateCamera()}

Creates a 2\-D camera instance that applies pan and zoom transforms on the CPU\.

```csharp
public static Velaptor.ICamera2D CreateCamera();
```

#### Returns
[ICamera2D](Velaptor.ICamera2D.md 'Velaptor\.ICamera2D')  
The camera instance\.

#### Remarks

The camera transforms world pixel coordinates to screen pixel coordinates.
Call [TransformPosition\(Vector2\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformPosition(System.Numerics.Vector2) 'Velaptor\.ICamera2D\.TransformPosition\(System\.Numerics\.Vector2\)') and [TransformSize\(float\)](Velaptor.ICamera2D.md#Velaptor.ICamera2D.TransformSize(float) 'Velaptor\.ICamera2D\.TransformSize\(float\)')
each frame when building render data.

The returned instance is a singleton — repeated calls return the same camera.
