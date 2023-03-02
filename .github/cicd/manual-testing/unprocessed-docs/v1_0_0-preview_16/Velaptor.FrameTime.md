#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor](./Velaptor.md 'Velaptor')

## FrameTime Struct

Holds timing information for a loop iteration.

```csharp
public struct FrameTime :
System.IEquatable<Velaptor.FrameTime>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Properties

<a name='Velaptor.FrameTime.ElapsedTime'></a>

## FrameTime.ElapsedTime Property

Gets or sets the total time that has passed for the current frame.

```csharp
public System.TimeSpan ElapsedTime { get; set; }
```

#### Property Value
[System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')

<a name='Velaptor.FrameTime.TotalTime'></a>

## FrameTime.TotalTime Property

Gets or sets the total time that the entire application has been running.

```csharp
public System.TimeSpan TotalTime { get; set; }
```

#### Property Value
[System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')
### Methods

<a name='Velaptor.FrameTime.Equals(object)'></a>

## FrameTime.Equals(object) Method

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object? obj);
```
#### Parameters

<a name='Velaptor.FrameTime.Equals(object).obj'></a>

`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The object to compare with the current instance.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [obj](./Velaptor.FrameTime.md#Velaptor.FrameTime.Equals(object).obj 'Velaptor.FrameTime.Equals(object).obj') and this instance are the same type and represent the same value; otherwise, [false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

<a name='Velaptor.FrameTime.Equals(Velaptor.FrameTime)'></a>

## FrameTime.Equals(FrameTime) Method

```csharp
public bool Equals(Velaptor.FrameTime other);
```
#### Parameters

<a name='Velaptor.FrameTime.Equals(Velaptor.FrameTime).other'></a>

`other` [FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.FrameTime.GetHashCode()'></a>

## FrameTime.GetHashCode() Method

Returns the hash code for this instance.

```csharp
public override int GetHashCode();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
A 32-bit signed integer that is the hash code for this instance.
### Operators

<a name='Velaptor.FrameTime.op_Equality(Velaptor.FrameTime,Velaptor.FrameTime)'></a>

## FrameTime.operator ==(FrameTime, FrameTime) Operator

Returns a value indicating whether or not the [left](./Velaptor.FrameTime.md#Velaptor.FrameTime.op_Equality(Velaptor.FrameTime,Velaptor.FrameTime).left 'Velaptor.FrameTime.op_Equality(Velaptor.FrameTime, Velaptor.FrameTime).left') operand is equal to the [right](./Velaptor.FrameTime.md#Velaptor.FrameTime.op_Equality(Velaptor.FrameTime,Velaptor.FrameTime).right 'Velaptor.FrameTime.op_Equality(Velaptor.FrameTime, Velaptor.FrameTime).right') operand.

```csharp
public static bool operator ==(Velaptor.FrameTime left, Velaptor.FrameTime right);
```
#### Parameters

<a name='Velaptor.FrameTime.op_Equality(Velaptor.FrameTime,Velaptor.FrameTime).left'></a>

`left` [FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')

The left operator.

<a name='Velaptor.FrameTime.op_Equality(Velaptor.FrameTime,Velaptor.FrameTime).right'></a>

`right` [FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')

The right operator.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if both operators are equal.

<a name='Velaptor.FrameTime.op_Inequality(Velaptor.FrameTime,Velaptor.FrameTime)'></a>

## FrameTime.operator !=(FrameTime, FrameTime) Operator

Returns a value indicating whether or not the [left](./Velaptor.FrameTime.md#Velaptor.FrameTime.op_Inequality(Velaptor.FrameTime,Velaptor.FrameTime).left 'Velaptor.FrameTime.op_Inequality(Velaptor.FrameTime, Velaptor.FrameTime).left') operand is not equal to the [right](./Velaptor.FrameTime.md#Velaptor.FrameTime.op_Inequality(Velaptor.FrameTime,Velaptor.FrameTime).right 'Velaptor.FrameTime.op_Inequality(Velaptor.FrameTime, Velaptor.FrameTime).right') operand.

```csharp
public static bool operator !=(Velaptor.FrameTime left, Velaptor.FrameTime right);
```
#### Parameters

<a name='Velaptor.FrameTime.op_Inequality(Velaptor.FrameTime,Velaptor.FrameTime).left'></a>

`left` [FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')

The left operator.

<a name='Velaptor.FrameTime.op_Inequality(Velaptor.FrameTime,Velaptor.FrameTime).right'></a>

`right` [FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')

The right operator.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if both operators are not equal.