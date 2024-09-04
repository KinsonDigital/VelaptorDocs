---
title: Velaptor.Graphics.CornerRadius
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### CornerRadius Struct

Holds all the radius values for each corner of a rectangle.

```csharp
public readonly struct CornerRadius :
System.IEquatable<Velaptor.Graphics.CornerRadius>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Constructors

<a name='Velaptor.Graphics.CornerRadius.CornerRadius(float,float,float,float)'></a>

### CornerRadius(float, float, float, float) Constructor

Initializes a new instance of the [CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius') struct.

```csharp
public CornerRadius(float topLeft, float topRight, float bottomRight, float bottomLeft);
```
#### Parameters

<a name='Velaptor.Graphics.CornerRadius.CornerRadius(float,float,float,float).topLeft'></a>

`topLeft` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The top left corner radius.

<a name='Velaptor.Graphics.CornerRadius.CornerRadius(float,float,float,float).topRight'></a>

`topRight` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The top right corner radius.

<a name='Velaptor.Graphics.CornerRadius.CornerRadius(float,float,float,float).bottomRight'></a>

`bottomRight` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The bottom right corner radius.

<a name='Velaptor.Graphics.CornerRadius.CornerRadius(float,float,float,float).bottomLeft'></a>

`bottomLeft` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The bottom left corner radius.

<a name='Velaptor.Graphics.CornerRadius.CornerRadius(float)'></a>

### CornerRadius(float) Constructor

Initializes a new instance of the [CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius') struct.

```csharp
public CornerRadius(float value);
```
#### Parameters

<a name='Velaptor.Graphics.CornerRadius.CornerRadius(float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to set all corner radius values.
## Properties

<a name='Velaptor.Graphics.CornerRadius.BottomLeft'></a>

### BottomLeft 

Gets the bottom left corner radius.

```csharp
public float BottomLeft { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.CornerRadius.BottomRight'></a>

### BottomRight 

Gets the bottom right corner radius.

```csharp
public float BottomRight { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.CornerRadius.TopLeft'></a>

### TopLeft 

Gets the top left corner radius.

```csharp
public float TopLeft { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Graphics.CornerRadius.TopRight'></a>

### TopRight 

Gets the top right corner radius.

```csharp
public float TopRight { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')
## Methods

<a name='Velaptor.Graphics.CornerRadius.Empty()'></a>

### Empty() 

Returns an empty [CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius') instance.

```csharp
public static Velaptor.Graphics.CornerRadius Empty();
```

#### Returns
[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')  
The empty instance.

<a name='Velaptor.Graphics.CornerRadius.IsEmpty()'></a>

### IsEmpty() 

Returns a value indicating if the [CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius') is empty.

```csharp
public bool IsEmpty();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if empty.

<a name='Velaptor.Graphics.CornerRadius.SetBottomLeft(Velaptor.Graphics.CornerRadius,float)'></a>

### SetBottomLeft(CornerRadius, float) 

Sets the bottom left corner value of the given [cornerRadius](Velaptor.Graphics.CornerRadius.md#cornerradius 'Velaptor.Graphics.CornerRadius.SetBottomLeft(Velaptor.Graphics.CornerRadius, float).cornerRadius') to the given [value](Velaptor.Graphics.CornerRadius.md#value 'Velaptor.Graphics.CornerRadius.SetBottomLeft(Velaptor.Graphics.CornerRadius, float).value').

```csharp
public static Velaptor.Graphics.CornerRadius SetBottomLeft(Velaptor.Graphics.CornerRadius cornerRadius, float value);
```
#### Parameters

<a name='Velaptor.Graphics.CornerRadius.SetBottomLeft(Velaptor.Graphics.CornerRadius,float).cornerRadius'></a>

`cornerRadius` [CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')

The corner radius to change.

<a name='Velaptor.Graphics.CornerRadius.SetBottomLeft(Velaptor.Graphics.CornerRadius,float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to set.

#### Returns
[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')  
The corner radius with the updated value.

<a name='Velaptor.Graphics.CornerRadius.SetBottomRight(Velaptor.Graphics.CornerRadius,float)'></a>

### SetBottomRight(CornerRadius, float) 

Sets the bottom right corner value of the given [cornerRadius](Velaptor.Graphics.CornerRadius.md#cornerradius 'Velaptor.Graphics.CornerRadius.SetBottomRight(Velaptor.Graphics.CornerRadius, float).cornerRadius') to the given [value](Velaptor.Graphics.CornerRadius.md#value 'Velaptor.Graphics.CornerRadius.SetBottomRight(Velaptor.Graphics.CornerRadius, float).value').

```csharp
public static Velaptor.Graphics.CornerRadius SetBottomRight(Velaptor.Graphics.CornerRadius cornerRadius, float value);
```
#### Parameters

<a name='Velaptor.Graphics.CornerRadius.SetBottomRight(Velaptor.Graphics.CornerRadius,float).cornerRadius'></a>

`cornerRadius` [CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')

The corner radius to change.

<a name='Velaptor.Graphics.CornerRadius.SetBottomRight(Velaptor.Graphics.CornerRadius,float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to set.

#### Returns
[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')  
The corner radius with the updated value.

<a name='Velaptor.Graphics.CornerRadius.SetTopLeft(Velaptor.Graphics.CornerRadius,float)'></a>

### SetTopLeft(CornerRadius, float) 

Sets the top left corner value of the given [cornerRadius](Velaptor.Graphics.CornerRadius.md#cornerradius 'Velaptor.Graphics.CornerRadius.SetTopLeft(Velaptor.Graphics.CornerRadius, float).cornerRadius') to the given [value](Velaptor.Graphics.CornerRadius.md#value 'Velaptor.Graphics.CornerRadius.SetTopLeft(Velaptor.Graphics.CornerRadius, float).value').

```csharp
public static Velaptor.Graphics.CornerRadius SetTopLeft(Velaptor.Graphics.CornerRadius cornerRadius, float value);
```
#### Parameters

<a name='Velaptor.Graphics.CornerRadius.SetTopLeft(Velaptor.Graphics.CornerRadius,float).cornerRadius'></a>

`cornerRadius` [CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')

The corner radius to change.

<a name='Velaptor.Graphics.CornerRadius.SetTopLeft(Velaptor.Graphics.CornerRadius,float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to set.

#### Returns
[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')  
The corner radius with the updated value.

<a name='Velaptor.Graphics.CornerRadius.SetTopRight(Velaptor.Graphics.CornerRadius,float)'></a>

### SetTopRight(CornerRadius, float) 

Sets the top right corner value of the given [cornerRadius](Velaptor.Graphics.CornerRadius.md#cornerradius 'Velaptor.Graphics.CornerRadius.SetTopRight(Velaptor.Graphics.CornerRadius, float).cornerRadius') to the given [value](Velaptor.Graphics.CornerRadius.md#value 'Velaptor.Graphics.CornerRadius.SetTopRight(Velaptor.Graphics.CornerRadius, float).value').

```csharp
public static Velaptor.Graphics.CornerRadius SetTopRight(Velaptor.Graphics.CornerRadius cornerRadius, float value);
```
#### Parameters

<a name='Velaptor.Graphics.CornerRadius.SetTopRight(Velaptor.Graphics.CornerRadius,float).cornerRadius'></a>

`cornerRadius` [CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')

The corner radius to change.

<a name='Velaptor.Graphics.CornerRadius.SetTopRight(Velaptor.Graphics.CornerRadius,float).value'></a>

`value` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to set.

#### Returns
[CornerRadius](Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')  
The corner radius with the updated value.
