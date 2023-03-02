#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor](./Velaptor.md 'Velaptor')

## SizeU Struct

Stores an ordered pair of [unsigned](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsigned 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsigned') integers, which specify a [Width](./Velaptor.SizeU.md#Velaptor.SizeU.Width 'Velaptor.SizeU.Width') and [Height](./Velaptor.SizeU.md#Velaptor.SizeU.Height 'Velaptor.SizeU.Height').

```csharp
public struct SizeU :
System.IEquatable<Velaptor.SizeU>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[SizeU](./Velaptor.SizeU.md 'Velaptor.SizeU')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Constructors

<a name='Velaptor.SizeU.SizeU(uint,uint)'></a>

## SizeU(uint, uint) Constructor

Initializes a new instance of the [SizeU](./Velaptor.SizeU.md 'Velaptor.SizeU') struct.

```csharp
public SizeU(uint width, uint height);
```
#### Parameters

<a name='Velaptor.SizeU.SizeU(uint,uint).width'></a>

`width` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The width of the size.

<a name='Velaptor.SizeU.SizeU(uint,uint).height'></a>

`height` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The height of the size.
### Properties

<a name='Velaptor.SizeU.Height'></a>

## SizeU.Height Property

Gets or sets the height of the size.

```csharp
public uint Height { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.SizeU.Width'></a>

## SizeU.Width Property

Gets or sets the width of the size.

```csharp
public uint Width { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
### Methods

<a name='Velaptor.SizeU.Equals(object)'></a>

## SizeU.Equals(object) Method

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object? obj);
```
#### Parameters

<a name='Velaptor.SizeU.Equals(object).obj'></a>

`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The object to compare with the current instance.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [obj](./Velaptor.SizeU.md#Velaptor.SizeU.Equals(object).obj 'Velaptor.SizeU.Equals(object).obj') and this instance are the same type and represent the same value; otherwise, [false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

<a name='Velaptor.SizeU.Equals(Velaptor.SizeU)'></a>

## SizeU.Equals(SizeU) Method

```csharp
public bool Equals(Velaptor.SizeU other);
```
#### Parameters

<a name='Velaptor.SizeU.Equals(Velaptor.SizeU).other'></a>

`other` [SizeU](./Velaptor.SizeU.md 'Velaptor.SizeU')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.SizeU.GetHashCode()'></a>

## SizeU.GetHashCode() Method

Returns the hash code for this instance.

```csharp
public override int GetHashCode();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
A 32-bit signed integer that is the hash code for this instance.
### Operators

<a name='Velaptor.SizeU.op_Equality(Velaptor.SizeU,Velaptor.SizeU)'></a>

## SizeU.operator ==(SizeU, SizeU) Operator

Returns a value indicating whether or not the [left](./Velaptor.SizeU.md#Velaptor.SizeU.op_Equality(Velaptor.SizeU,Velaptor.SizeU).left 'Velaptor.SizeU.op_Equality(Velaptor.SizeU, Velaptor.SizeU).left') operand is equal to the [right](./Velaptor.SizeU.md#Velaptor.SizeU.op_Equality(Velaptor.SizeU,Velaptor.SizeU).right 'Velaptor.SizeU.op_Equality(Velaptor.SizeU, Velaptor.SizeU).right') operand.

```csharp
public static bool operator ==(Velaptor.SizeU left, Velaptor.SizeU right);
```
#### Parameters

<a name='Velaptor.SizeU.op_Equality(Velaptor.SizeU,Velaptor.SizeU).left'></a>

`left` [SizeU](./Velaptor.SizeU.md 'Velaptor.SizeU')

The left operator.

<a name='Velaptor.SizeU.op_Equality(Velaptor.SizeU,Velaptor.SizeU).right'></a>

`right` [SizeU](./Velaptor.SizeU.md 'Velaptor.SizeU')

The right operator.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if both operators are equal.

<a name='Velaptor.SizeU.op_Inequality(Velaptor.SizeU,Velaptor.SizeU)'></a>

## SizeU.operator !=(SizeU, SizeU) Operator

Returns a value indicating whether or not the [left](./Velaptor.SizeU.md#Velaptor.SizeU.op_Inequality(Velaptor.SizeU,Velaptor.SizeU).left 'Velaptor.SizeU.op_Inequality(Velaptor.SizeU, Velaptor.SizeU).left') operand is not equal to the [right](./Velaptor.SizeU.md#Velaptor.SizeU.op_Inequality(Velaptor.SizeU,Velaptor.SizeU).right 'Velaptor.SizeU.op_Inequality(Velaptor.SizeU, Velaptor.SizeU).right') operand.

```csharp
public static bool operator !=(Velaptor.SizeU left, Velaptor.SizeU right);
```
#### Parameters

<a name='Velaptor.SizeU.op_Inequality(Velaptor.SizeU,Velaptor.SizeU).left'></a>

`left` [SizeU](./Velaptor.SizeU.md 'Velaptor.SizeU')

The left operator.

<a name='Velaptor.SizeU.op_Inequality(Velaptor.SizeU,Velaptor.SizeU).right'></a>

`right` [SizeU](./Velaptor.SizeU.md 'Velaptor.SizeU')

The right operator.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if both operators are not equal.