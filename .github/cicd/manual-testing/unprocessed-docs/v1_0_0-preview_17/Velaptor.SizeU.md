#### [Velaptor](index.md 'index')
### [Velaptor](Velaptor.md 'Velaptor')

## SizeU Struct

Stores an ordered pair of [unsigned](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsigned 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsigned') integers, which specify a [Width](Velaptor.SizeU.md#Velaptor.SizeU.Width 'Velaptor.SizeU.Width') and [Height](Velaptor.SizeU.md#Velaptor.SizeU.Height 'Velaptor.SizeU.Height').

```csharp
public readonly struct SizeU :
System.IEquatable<Velaptor.SizeU>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[SizeU](Velaptor.SizeU.md 'Velaptor.SizeU')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Constructors

<a name='Velaptor.SizeU.SizeU(uint,uint)'></a>

## SizeU(uint, uint) Constructor

Initializes a new instance of the [SizeU](Velaptor.SizeU.md 'Velaptor.SizeU') struct.

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

Gets the height of the size.

```csharp
public uint Height { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.SizeU.Width'></a>

## SizeU.Width Property

Gets the width of the size.

```csharp
public uint Width { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')