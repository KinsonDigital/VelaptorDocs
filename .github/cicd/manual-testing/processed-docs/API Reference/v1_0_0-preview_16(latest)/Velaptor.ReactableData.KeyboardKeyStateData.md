#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.ReactableData](./Velaptor.ReactableData.md 'Velaptor.ReactableData')

## KeyboardKeyStateData Class

Holds the state of a keyboard key.

```csharp
public sealed class KeyboardKeyStateData :
System.IEquatable<Velaptor.ReactableData.KeyboardKeyStateData>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → KeyboardKeyStateData

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[KeyboardKeyStateData](./Velaptor.ReactableData.KeyboardKeyStateData.md 'Velaptor.ReactableData.KeyboardKeyStateData')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Constructors

<a name='Velaptor.ReactableData.KeyboardKeyStateData.KeyboardKeyStateData()'></a>

## KeyboardKeyStateData() Constructor

```csharp
public KeyboardKeyStateData();
```
### Properties

<a name='Velaptor.ReactableData.KeyboardKeyStateData.IsDown'></a>

## KeyboardKeyStateData.IsDown Property

Gets or sets a value indicating whether or not the current [Key](./Velaptor.ReactableData.KeyboardKeyStateData.md#Velaptor.ReactableData.KeyboardKeyStateData.Key 'Velaptor.ReactableData.KeyboardKeyStateData.Key') is in the down position.

```csharp
public bool IsDown { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.ReactableData.KeyboardKeyStateData.Key'></a>

## KeyboardKeyStateData.Key Property

Gets or sets the key code.

```csharp
public Velaptor.Input.KeyCode Key { get; set; }
```

#### Property Value
[KeyCode](./Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')