#### [Velaptor](index.md 'index')
### [Velaptor.Input](Velaptor.Input.md 'Velaptor.Input')

## KeyboardState Struct

Represents a single keyboard state at a particular time.

```csharp
public struct KeyboardState :
System.IEquatable<Velaptor.Input.KeyboardState>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Methods

<a name='Velaptor.Input.KeyboardState.AnyAltKeysDown()'></a>

## KeyboardState.AnyAltKeysDown() Method

Returns a value indicating whether or not any of the alt keys are in the down position.

```csharp
public bool AnyAltKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the control keys are down.

<a name='Velaptor.Input.KeyboardState.AnyCtrlKeysDown()'></a>

## KeyboardState.AnyCtrlKeysDown() Method

Returns a value indicating whether or not any of the control keys are in the down position.

```csharp
public bool AnyCtrlKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the control keys are down.

<a name='Velaptor.Input.KeyboardState.AnyKeysDown()'></a>

## KeyboardState.AnyKeysDown() Method

Gets a value indicating whether or not any keys are in the down position.

```csharp
public bool AnyKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any keys on the keyboard are in the down position.

<a name='Velaptor.Input.KeyboardState.AnyKeysDown(System.Collections.Generic.IEnumerable_Velaptor.Input.KeyCode_)'></a>

## KeyboardState.AnyKeysDown(IEnumerable<KeyCode>) Method

Returns a value indicating whether or not any of the given [keys](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.AnyKeysDown(System.Collections.Generic.IEnumerable_Velaptor.Input.KeyCode_).keys 'Velaptor.Input.KeyboardState.AnyKeysDown(System.Collections.Generic.IEnumerable<Velaptor.Input.KeyCode>).keys') are in the down position.

```csharp
public bool AnyKeysDown(System.Collections.Generic.IEnumerable<Velaptor.Input.KeyCode> keys);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.AnyKeysDown(System.Collections.Generic.IEnumerable_Velaptor.Input.KeyCode_).keys'></a>

`keys` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The list of key codes to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the given [keys](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.AnyKeysDown(System.Collections.Generic.IEnumerable_Velaptor.Input.KeyCode_).keys 'Velaptor.Input.KeyboardState.AnyKeysDown(System.Collections.Generic.IEnumerable<Velaptor.Input.KeyCode>).keys') are in the down position.

<a name='Velaptor.Input.KeyboardState.AnyNumpadNumberKeysDown()'></a>

## KeyboardState.AnyNumpadNumberKeysDown() Method

Returns a value indicating whether or not any of the numpad number keys  
are in the down position.

```csharp
public bool AnyNumpadNumberKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the numpad number keys are in the down position.

<a name='Velaptor.Input.KeyboardState.AnyShiftKeysDown()'></a>

## KeyboardState.AnyShiftKeysDown() Method

Returns a value indicating whether or not any of the shift keys are in the down position.

```csharp
public bool AnyShiftKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the shift keys are down.

<a name='Velaptor.Input.KeyboardState.AnyStandardNumberKeysDown()'></a>

## KeyboardState.AnyStandardNumberKeysDown() Method

Returns a value indicating whether or not any of the standard number keys,  
above the letter keys, are in the down position.

```csharp
public bool AnyStandardNumberKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the standard number keys are in the down position.

<a name='Velaptor.Input.KeyboardState.Equals(object)'></a>

## KeyboardState.Equals(object) Method

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object? obj);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.Equals(object).obj'></a>

`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The object to compare with the current instance.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [obj](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.Equals(object).obj 'Velaptor.Input.KeyboardState.Equals(object).obj') and this instance are the same type and represent the same value; otherwise, [false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

<a name='Velaptor.Input.KeyboardState.Equals(Velaptor.Input.KeyboardState)'></a>

## KeyboardState.Equals(KeyboardState) Method

```csharp
public bool Equals(Velaptor.Input.KeyboardState other);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.Equals(Velaptor.Input.KeyboardState).other'></a>

`other` [KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Input.KeyboardState.GetDownKeys()'></a>

## KeyboardState.GetDownKeys() Method

Returns all of the keys that are in the down position.

```csharp
public Velaptor.Input.KeyCode[] GetDownKeys();
```

#### Returns
[KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
A list of the keys that are currently in the down position.

<a name='Velaptor.Input.KeyboardState.GetHashCode()'></a>

## KeyboardState.GetHashCode() Method

Returns the hash code for this instance.

```csharp
public override int GetHashCode();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
A 32-bit signed integer that is the hash code for this instance.

<a name='Velaptor.Input.KeyboardState.GetKeyStates()'></a>

## KeyboardState.GetKeyStates() Method

Returns all of the keys and their states.

```csharp
public System.Collections.Generic.Dictionary<Velaptor.Input.KeyCode,bool> GetKeyStates();
```

#### Returns
[System.Collections.Generic.Dictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')  
The keys and given state for each key.

<a name='Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode)'></a>

## KeyboardState.IsKeyDown(KeyCode) Method

Returns a value indicating whether or not the given [key](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode).key 'Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode).key') is in the down position.

```csharp
public bool IsKeyDown(Velaptor.Input.KeyCode key);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode).key'></a>

`key` [KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')

The key to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the given [key](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode).key 'Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode).key') is in the down position.

<a name='Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode)'></a>

## KeyboardState.IsKeyUp(KeyCode) Method

Returns a value indicating whether or not the given [key](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode).key 'Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode).key') is in the up position.

```csharp
public bool IsKeyUp(Velaptor.Input.KeyCode key);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode).key'></a>

`key` [KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')

The key to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the given [key](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode).key 'Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode).key') is in the up position.

<a name='Velaptor.Input.KeyboardState.IsLeftAltKeyDown()'></a>

## KeyboardState.IsLeftAltKeyDown() Method

Gets a value indicating whether or not the left alt key is in the down position.

```csharp
public bool IsLeftAltKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the left alt key is down.

<a name='Velaptor.Input.KeyboardState.IsLeftCtrlKeyDown()'></a>

## KeyboardState.IsLeftCtrlKeyDown() Method

Gets a value indicating whether or not the left control key is in the down position.

```csharp
public bool IsLeftCtrlKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the left control key is down.

<a name='Velaptor.Input.KeyboardState.IsLeftShiftKeyDown()'></a>

## KeyboardState.IsLeftShiftKeyDown() Method

Gets a value indicating whether or not the left shift key is in the down position.

```csharp
public bool IsLeftShiftKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the left shift key is down.

<a name='Velaptor.Input.KeyboardState.IsRightAltKeyDown()'></a>

## KeyboardState.IsRightAltKeyDown() Method

Gets a value indicating whether or not the right alt key is in the down position.

```csharp
public bool IsRightAltKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the right alt key is down.

<a name='Velaptor.Input.KeyboardState.IsRightCtrlKeyDown()'></a>

## KeyboardState.IsRightCtrlKeyDown() Method

Gets a value indicating whether or not the right control key is in the down position.

```csharp
public bool IsRightCtrlKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the right control key is down.

<a name='Velaptor.Input.KeyboardState.IsRightShiftKeyDown()'></a>

## KeyboardState.IsRightShiftKeyDown() Method

Gets a value indicating whether or not the right shift key is in the down position.

```csharp
public bool IsRightShiftKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the right shift key is down.

<a name='Velaptor.Input.KeyboardState.KeyToChar(Velaptor.Input.KeyCode)'></a>

## KeyboardState.KeyToChar(KeyCode) Method

Returns the character equivalent of the given key if it is  
a letter, number or symbol key.  The value of 0 will be returned  
if the key is not a letter, number or symbol.

```csharp
public char KeyToChar(Velaptor.Input.KeyCode key);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.KeyToChar(Velaptor.Input.KeyCode).key'></a>

`key` [KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')

The key to check.

#### Returns
[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')  
The character that matches the given key.

<a name='Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode,bool)'></a>

## KeyboardState.SetKeyState(KeyCode, bool) Method

Sets the state of the given [key](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode,bool).key 'Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode, bool).key') to the given [state](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode,bool).state 'Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode, bool).state') value.

```csharp
public void SetKeyState(Velaptor.Input.KeyCode key, bool state);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode,bool).key'></a>

`key` [KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')

The key to set the state to.

<a name='Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode,bool).state'></a>

`state` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

The state of the key.
### Operators

<a name='Velaptor.Input.KeyboardState.op_Equality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState)'></a>

## KeyboardState.operator ==(KeyboardState, KeyboardState) Operator

Returns a value indicating whether or not the [left](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.op_Equality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState).left 'Velaptor.Input.KeyboardState.op_Equality(Velaptor.Input.KeyboardState, Velaptor.Input.KeyboardState).left') operand is equal to the [right](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.op_Equality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState).right 'Velaptor.Input.KeyboardState.op_Equality(Velaptor.Input.KeyboardState, Velaptor.Input.KeyboardState).right') operand.

```csharp
public static bool operator ==(Velaptor.Input.KeyboardState left, Velaptor.Input.KeyboardState right);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.op_Equality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState).left'></a>

`left` [KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')

The left operand.

<a name='Velaptor.Input.KeyboardState.op_Equality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState).right'></a>

`right` [KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')

The right operand.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if operands are equal.

<a name='Velaptor.Input.KeyboardState.op_Inequality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState)'></a>

## KeyboardState.operator !=(KeyboardState, KeyboardState) Operator

Returns a value indicating whether or not the [left](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.op_Inequality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState).left 'Velaptor.Input.KeyboardState.op_Inequality(Velaptor.Input.KeyboardState, Velaptor.Input.KeyboardState).left') operand is not equal to the [right](Velaptor.Input.KeyboardState.md#Velaptor.Input.KeyboardState.op_Inequality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState).right 'Velaptor.Input.KeyboardState.op_Inequality(Velaptor.Input.KeyboardState, Velaptor.Input.KeyboardState).right') operand.

```csharp
public static bool operator !=(Velaptor.Input.KeyboardState left, Velaptor.Input.KeyboardState right);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.op_Inequality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState).left'></a>

`left` [KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')

The left operand.

<a name='Velaptor.Input.KeyboardState.op_Inequality(Velaptor.Input.KeyboardState,Velaptor.Input.KeyboardState).right'></a>

`right` [KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')

The right operand.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if operands are not equal.