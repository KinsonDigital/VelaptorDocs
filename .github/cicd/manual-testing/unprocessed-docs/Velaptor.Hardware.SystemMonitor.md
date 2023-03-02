#### [Velaptor](index.md 'index')
### [Velaptor.Hardware](Velaptor.Hardware.md 'Velaptor.Hardware')

## SystemMonitor Class

Holds information about a single monitor in the system.

```csharp
public class SystemMonitor :
System.IEquatable<Velaptor.Hardware.SystemMonitor>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; SystemMonitor

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[SystemMonitor](Velaptor.Hardware.SystemMonitor.md 'Velaptor.Hardware.SystemMonitor')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Constructors

<a name='Velaptor.Hardware.SystemMonitor.SystemMonitor()'></a>

## SystemMonitor() Constructor

Initializes a new instance of the [SystemMonitor](Velaptor.Hardware.SystemMonitor.md 'Velaptor.Hardware.SystemMonitor') class.

```csharp
public SystemMonitor();
```
### Properties

<a name='Velaptor.Hardware.SystemMonitor.BlueBitDepth'></a>

## SystemMonitor.BlueBitDepth Property

Gets the bit depth of the blue color channel in the current video mode.

```csharp
public int BlueBitDepth { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemMonitor.Center'></a>

## SystemMonitor.Center Property

Gets the center location of the monitor.

```csharp
public System.Numerics.Vector2 Center { get; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

<a name='Velaptor.Hardware.SystemMonitor.GreenBitDepth'></a>

## SystemMonitor.GreenBitDepth Property

Gets the bit depth of the green color channel in the current video mode.

```csharp
public int GreenBitDepth { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemMonitor.Height'></a>

## SystemMonitor.Height Property

Gets the height in screen coordinates in the current video mode.

```csharp
public int Height { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemMonitor.HorizontalDPI'></a>

## SystemMonitor.HorizontalDPI Property

Gets the approximate dpi of the monitor on the horizontal axis.

```csharp
public float HorizontalDPI { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Hardware.SystemMonitor.HorizontalScale'></a>

## SystemMonitor.HorizontalScale Property

Gets the scale of the monitor on the horizontal axis.

```csharp
public float HorizontalScale { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
If the monitor was set to a scale of 150%, this value of 1.5 should be used.

<a name='Velaptor.Hardware.SystemMonitor.IsMain'></a>

## SystemMonitor.IsMain Property

Gets a value indicating whether or not the monitor is the primary monitor in the system.

```csharp
public bool IsMain { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Hardware.SystemMonitor.RedBitDepth'></a>

## SystemMonitor.RedBitDepth Property

Gets the bit depth of the red color channel in the current video mode.

```csharp
public int RedBitDepth { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemMonitor.RefreshRate'></a>

## SystemMonitor.RefreshRate Property

Gets the refresh rate in Hz in the current video mode.

```csharp
public int RefreshRate { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Hardware.SystemMonitor.VerticalDPI'></a>

## SystemMonitor.VerticalDPI Property

Gets the approximate dpi of the monitor on the vertical axis.

```csharp
public float VerticalDPI { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Hardware.SystemMonitor.VerticalScale'></a>

## SystemMonitor.VerticalScale Property

Gets the scale of the monitor on the vertical axis.

```csharp
public float VerticalScale { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
If the monitor was set to a scale of 150%, this value of 1.5 should be used.

<a name='Velaptor.Hardware.SystemMonitor.Width'></a>

## SystemMonitor.Width Property

Gets the width in screen coordinates in the current video mode.

```csharp
public int Width { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')
### Methods

<a name='Velaptor.Hardware.SystemMonitor.Equals(object)'></a>

## SystemMonitor.Equals(object) Method

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object? obj);
```
#### Parameters

<a name='Velaptor.Hardware.SystemMonitor.Equals(object).obj'></a>

`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The object to compare with the current object.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if the specified object  is equal to the current object; otherwise, [false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

<a name='Velaptor.Hardware.SystemMonitor.Equals(Velaptor.Hardware.SystemMonitor)'></a>

## SystemMonitor.Equals(SystemMonitor) Method

```csharp
public bool Equals(Velaptor.Hardware.SystemMonitor? other);
```
#### Parameters

<a name='Velaptor.Hardware.SystemMonitor.Equals(Velaptor.Hardware.SystemMonitor).other'></a>

`other` [SystemMonitor](Velaptor.Hardware.SystemMonitor.md 'Velaptor.Hardware.SystemMonitor')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Hardware.SystemMonitor.GetHashCode()'></a>

## SystemMonitor.GetHashCode() Method

Serves as the default hash function.

```csharp
public override int GetHashCode();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
A hash code for the current object.
### Operators

<a name='Velaptor.Hardware.SystemMonitor.op_Equality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor)'></a>

## SystemMonitor.operator ==(SystemMonitor, SystemMonitor) Operator

Returns a value indicating whether or not the [left](Velaptor.Hardware.SystemMonitor.md#Velaptor.Hardware.SystemMonitor.op_Equality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor).left 'Velaptor.Hardware.SystemMonitor.op_Equality(Velaptor.Hardware.SystemMonitor, Velaptor.Hardware.SystemMonitor).left') operand is equal to the [right](Velaptor.Hardware.SystemMonitor.md#Velaptor.Hardware.SystemMonitor.op_Equality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor).right 'Velaptor.Hardware.SystemMonitor.op_Equality(Velaptor.Hardware.SystemMonitor, Velaptor.Hardware.SystemMonitor).right') operand.

```csharp
public static bool operator ==(Velaptor.Hardware.SystemMonitor? left, Velaptor.Hardware.SystemMonitor right);
```
#### Parameters

<a name='Velaptor.Hardware.SystemMonitor.op_Equality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor).left'></a>

`left` [SystemMonitor](Velaptor.Hardware.SystemMonitor.md 'Velaptor.Hardware.SystemMonitor')

The left operand.

<a name='Velaptor.Hardware.SystemMonitor.op_Equality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor).right'></a>

`right` [SystemMonitor](Velaptor.Hardware.SystemMonitor.md 'Velaptor.Hardware.SystemMonitor')

The right operand.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if both operands are equal.

<a name='Velaptor.Hardware.SystemMonitor.op_Inequality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor)'></a>

## SystemMonitor.operator !=(SystemMonitor, SystemMonitor) Operator

Returns a value indicating whether or not the [left](Velaptor.Hardware.SystemMonitor.md#Velaptor.Hardware.SystemMonitor.op_Inequality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor).left 'Velaptor.Hardware.SystemMonitor.op_Inequality(Velaptor.Hardware.SystemMonitor, Velaptor.Hardware.SystemMonitor).left') operand is not equal to the [right](Velaptor.Hardware.SystemMonitor.md#Velaptor.Hardware.SystemMonitor.op_Inequality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor).right 'Velaptor.Hardware.SystemMonitor.op_Inequality(Velaptor.Hardware.SystemMonitor, Velaptor.Hardware.SystemMonitor).right') operand.

```csharp
public static bool operator !=(Velaptor.Hardware.SystemMonitor left, Velaptor.Hardware.SystemMonitor right);
```
#### Parameters

<a name='Velaptor.Hardware.SystemMonitor.op_Inequality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor).left'></a>

`left` [SystemMonitor](Velaptor.Hardware.SystemMonitor.md 'Velaptor.Hardware.SystemMonitor')

The left operand.

<a name='Velaptor.Hardware.SystemMonitor.op_Inequality(Velaptor.Hardware.SystemMonitor,Velaptor.Hardware.SystemMonitor).right'></a>

`right` [SystemMonitor](Velaptor.Hardware.SystemMonitor.md 'Velaptor.Hardware.SystemMonitor')

The right operand.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if both operands are not equal.