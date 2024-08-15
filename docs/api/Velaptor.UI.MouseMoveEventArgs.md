---
title: Velaptor.UI.MouseMoveEventArgs
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](Velaptor.UI.md 'Velaptor.UI')

#### MouseMoveEventArgs Struct

Holds information about the mouse position over a control.

```csharp
public readonly struct MouseMoveEventArgs :
System.IEquatable<Velaptor.UI.MouseMoveEventArgs>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[MouseMoveEventArgs](Velaptor.UI.MouseMoveEventArgs.md 'Velaptor.UI.MouseMoveEventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Constructors

<a name='Velaptor.UI.MouseMoveEventArgs.MouseMoveEventArgs(System.Drawing.Point,System.Drawing.Point)'></a>

### MouseMoveEventArgs(Point, Point) Constructor

Initializes a new instance of the [MouseMoveEventArgs](Velaptor.UI.MouseMoveEventArgs.md 'Velaptor.UI.MouseMoveEventArgs') struct.

```csharp
public MouseMoveEventArgs(System.Drawing.Point globalPos, System.Drawing.Point localPos);
```
#### Parameters

<a name='Velaptor.UI.MouseMoveEventArgs.MouseMoveEventArgs(System.Drawing.Point,System.Drawing.Point).globalPos'></a>

`globalPos` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The global position of the mouse.

<a name='Velaptor.UI.MouseMoveEventArgs.MouseMoveEventArgs(System.Drawing.Point,System.Drawing.Point).localPos'></a>

`localPos` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The local position of the mouse.
## Properties

<a name='Velaptor.UI.MouseMoveEventArgs.GlobalPos'></a>

### GlobalPos 

Gets the position of the mouse relative to the top left corner of the window.

```csharp
public System.Drawing.Point GlobalPos { get; }
```

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.UI.MouseMoveEventArgs.LocalPos'></a>

### LocalPos 

Gets the position of the mouse relative to the top left corner of the control.

```csharp
public System.Drawing.Point LocalPos { get; }
```

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')
