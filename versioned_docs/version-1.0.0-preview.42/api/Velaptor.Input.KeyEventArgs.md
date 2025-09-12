---
title: Velaptor.Input.KeyEventArgs
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Input](Velaptor.Input.md 'Velaptor.Input')

#### KeyEventArgs Struct

Holds information about a keyboard key event.

```csharp
public readonly struct KeyEventArgs :
System.IEquatable<Velaptor.Input.KeyEventArgs>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[KeyEventArgs](Velaptor.Input.KeyEventArgs.md 'Velaptor.Input.KeyEventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Constructors

<a name='Velaptor.Input.KeyEventArgs.KeyEventArgs(Velaptor.Input.KeyCode)'></a>

### KeyEventArgs(KeyCode) Constructor

Initializes a new instance of the [KeyEventArgs](Velaptor.Input.KeyEventArgs.md 'Velaptor.Input.KeyEventArgs') struct.

```csharp
public KeyEventArgs(Velaptor.Input.KeyCode key);
```
#### Parameters

<a name='Velaptor.Input.KeyEventArgs.KeyEventArgs(Velaptor.Input.KeyCode).key'></a>

`key` [KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')

The keyboard key related to the event.
## Properties

<a name='Velaptor.Input.KeyEventArgs.Key'></a>

### Key 

Gets the key that was pushed into the down position or lifted into the up position.

```csharp
public Velaptor.Input.KeyCode Key { get; }
```

#### Property Value
[KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')
