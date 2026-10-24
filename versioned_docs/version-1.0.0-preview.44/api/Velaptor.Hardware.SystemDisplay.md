---
title: Velaptor.Hardware.SystemDisplay
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Hardware](Velaptor.Hardware.md 'Velaptor.Hardware')

#### SystemDisplay Struct

Holds information about a single display in the system.

```csharp
public readonly struct SystemDisplay :
System.IEquatable<Velaptor.Hardware.SystemDisplay>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[SystemDisplay](Velaptor.Hardware.SystemDisplay.md 'Velaptor.Hardware.SystemDisplay')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Constructors

<a name='Velaptor.Hardware.SystemDisplay.SystemDisplay()'></a>

### SystemDisplay() Constructor \{#Velaptor.Hardware.SystemDisplay.SystemDisplay()}

Initializes a new instance of the [SystemDisplay](Velaptor.Hardware.SystemDisplay.md 'Velaptor.Hardware.SystemDisplay') class.

```csharp
public SystemDisplay();
```
## Properties

<a name='Velaptor.Hardware.SystemDisplay.BlueBitDepth'></a>

### BlueBitDepth \{#Velaptor.Hardware.SystemDisplay.BlueBitDepth}

Gets the bit depth of the blue color channel in the current video mode.

```csharp
public int BlueBitDepth { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemDisplay.Center'></a>

### Center \{#Velaptor.Hardware.SystemDisplay.Center}

Gets the center location of the display.

```csharp
public System.Numerics.Vector2 Center { get; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

<a name='Velaptor.Hardware.SystemDisplay.GreenBitDepth'></a>

### GreenBitDepth \{#Velaptor.Hardware.SystemDisplay.GreenBitDepth}

Gets the bit depth of the green color channel in the current video mode.

```csharp
public int GreenBitDepth { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemDisplay.Height'></a>

### Height \{#Velaptor.Hardware.SystemDisplay.Height}

Gets the height in screen coordinates in the current video mode.

```csharp
public int Height { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemDisplay.HorizontalDPI'></a>

### HorizontalDPI \{#Velaptor.Hardware.SystemDisplay.HorizontalDPI}

Gets the approximate dpi of the display on the horizontal axis.

```csharp
public float HorizontalDPI { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Hardware.SystemDisplay.HorizontalScale'></a>

### HorizontalScale \{#Velaptor.Hardware.SystemDisplay.HorizontalScale}

Gets the scale of the display on the horizontal axis.

```csharp
public float HorizontalScale { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
If the display was set to a scale of 150%, this value of 1.5 should be used.

<a name='Velaptor.Hardware.SystemDisplay.IsMain'></a>

### IsMain \{#Velaptor.Hardware.SystemDisplay.IsMain}

Gets a value indicating whether the display is the primary display in the system.

```csharp
public bool IsMain { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Hardware.SystemDisplay.RedBitDepth'></a>

### RedBitDepth \{#Velaptor.Hardware.SystemDisplay.RedBitDepth}

Gets the bit depth of the red color channel in the current video mode.

```csharp
public int RedBitDepth { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemDisplay.RefreshRate'></a>

### RefreshRate \{#Velaptor.Hardware.SystemDisplay.RefreshRate}

Gets the refresh rate in Hz in the current video mode.

```csharp
public int RefreshRate { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemDisplay.VerticalDPI'></a>

### VerticalDPI \{#Velaptor.Hardware.SystemDisplay.VerticalDPI}

Gets the approximate dpi of the display on the vertical axis.

```csharp
public float VerticalDPI { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Hardware.SystemDisplay.VerticalScale'></a>

### VerticalScale \{#Velaptor.Hardware.SystemDisplay.VerticalScale}

Gets the scale of the display on the vertical axis.

```csharp
public float VerticalScale { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
If the display was set to a scale of 150%, this value of 1.5 should be used.

<a name='Velaptor.Hardware.SystemDisplay.Width'></a>

### Width \{#Velaptor.Hardware.SystemDisplay.Width}

Gets the width in screen coordinates in the current video mode.

```csharp
public int Width { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')
