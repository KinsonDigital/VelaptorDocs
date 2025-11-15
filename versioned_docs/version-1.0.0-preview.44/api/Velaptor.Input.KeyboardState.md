---
title: Velaptor.Input.KeyboardState
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Input](Velaptor.Input.md 'Velaptor.Input')

#### KeyboardState Struct

Represents a single keyboard state at a particular time.

```csharp
public struct KeyboardState :
System.IEquatable<Velaptor.Input.KeyboardState>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
## Constructors

<a name='Velaptor.Input.KeyboardState.KeyboardState()'></a>

### KeyboardState() Constructor

Initializes a new instance of the [KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState') struct.

```csharp
public KeyboardState();
```
## Methods

<a name='Velaptor.Input.KeyboardState.AnyAltKeysDown()'></a>

### AnyAltKeysDown() 

Returns a value indicating whether any of the alt keys are in the down position.

```csharp
public bool AnyAltKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the control keys are down.

<a name='Velaptor.Input.KeyboardState.AnyCtrlKeysDown()'></a>

### AnyCtrlKeysDown() 

Returns a value indicating whether any of the control keys are in the down position.

```csharp
public bool AnyCtrlKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the control keys are down.

<a name='Velaptor.Input.KeyboardState.AnyNumpadNumberKeysDown()'></a>

### AnyNumpadNumberKeysDown() 

Returns a value indicating whether any of the numpad number keys  
are in the down position.

```csharp
public bool AnyNumpadNumberKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the numpad number keys are in the down position.

<a name='Velaptor.Input.KeyboardState.AnyShiftKeysDown()'></a>

### AnyShiftKeysDown() 

Returns a value indicating whether any of the shift keys are in the down position.

```csharp
public bool AnyShiftKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the shift keys are down.

<a name='Velaptor.Input.KeyboardState.AnyStandardNumberKeysDown()'></a>

### AnyStandardNumberKeysDown() 

Returns a value indicating whether any of the standard number keys,  
above the letter keys, are in the down position.

```csharp
public bool AnyStandardNumberKeysDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if any of the standard number keys are in the down position.

<a name='Velaptor.Input.KeyboardState.GetDownKeys()'></a>

### GetDownKeys() 

Returns all the keys that are in the down position.

```csharp
public System.Span<Velaptor.Input.KeyCode> GetDownKeys();
```

#### Returns
[System.Span&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Span-1 'System.Span`1')[KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Span-1 'System.Span`1')  
A list of the keys that are currently in the down position.

<a name='Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode)'></a>

### IsKeyDown(KeyCode) 

Returns a value indicating whether the given [key](Velaptor.Input.KeyboardState.md#key 'Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode).key') is in the down position.

```csharp
public bool IsKeyDown(Velaptor.Input.KeyCode key);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode).key'></a>

`key` [KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')

The key to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the given [key](Velaptor.Input.KeyboardState.md#key 'Velaptor.Input.KeyboardState.IsKeyDown(Velaptor.Input.KeyCode).key') is in the down position.

<a name='Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode)'></a>

### IsKeyUp(KeyCode) 

Returns a value indicating whether the given [key](Velaptor.Input.KeyboardState.md#key 'Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode).key') is in the up position.

```csharp
public bool IsKeyUp(Velaptor.Input.KeyCode key);
```
#### Parameters

<a name='Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode).key'></a>

`key` [KeyCode](Velaptor.Input.KeyCode.md 'Velaptor.Input.KeyCode')

The key to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the given [key](Velaptor.Input.KeyboardState.md#key 'Velaptor.Input.KeyboardState.IsKeyUp(Velaptor.Input.KeyCode).key') is in the up position.

<a name='Velaptor.Input.KeyboardState.IsLeftAltKeyDown()'></a>

### IsLeftAltKeyDown() 

Gets a value indicating whether the left alt key is in the down position.

```csharp
public bool IsLeftAltKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the left alt key is down.

<a name='Velaptor.Input.KeyboardState.IsLeftCtrlKeyDown()'></a>

### IsLeftCtrlKeyDown() 

Gets a value indicating whether the left control key is in the down position.

```csharp
public bool IsLeftCtrlKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the left control key is down.

<a name='Velaptor.Input.KeyboardState.IsLeftShiftKeyDown()'></a>

### IsLeftShiftKeyDown() 

Gets a value indicating whether the left shift key is in the down position.

```csharp
public bool IsLeftShiftKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the left shift key is down.

<a name='Velaptor.Input.KeyboardState.IsRightAltKeyDown()'></a>

### IsRightAltKeyDown() 

Gets a value indicating whether the right alt key is in the down position.

```csharp
public bool IsRightAltKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the right alt key is down.

<a name='Velaptor.Input.KeyboardState.IsRightCtrlKeyDown()'></a>

### IsRightCtrlKeyDown() 

Gets a value indicating whether the right control key is in the down position.

```csharp
public bool IsRightCtrlKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the right control key is down.

<a name='Velaptor.Input.KeyboardState.IsRightShiftKeyDown()'></a>

### IsRightShiftKeyDown() 

Gets a value indicating whether the right shift key is in the down position.

```csharp
public bool IsRightShiftKeyDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the right shift key is down.

<a name='Velaptor.Input.KeyboardState.KeyToChar(Velaptor.Input.KeyCode)'></a>

### KeyToChar(KeyCode) 

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

### SetKeyState(KeyCode, bool) 

Sets the state of the given [key](Velaptor.Input.KeyboardState.md#key 'Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode, bool).key') to the given [state](Velaptor.Input.KeyboardState.md#state 'Velaptor.Input.KeyboardState.SetKeyState(Velaptor.Input.KeyCode, bool).state') value.

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
