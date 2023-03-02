#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Input](./Velaptor.Input.md 'Velaptor.Input')

## MouseState Struct

Represents the state of the mouse.

```csharp
public struct MouseState :
System.IEquatable<Velaptor.Input.MouseState>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[MouseState](./Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Methods

<a name='Velaptor.Input.MouseState.AnyButtonsDown()'></a>

## MouseState.AnyButtonsDown() Method

Returns a value indicating whether or not any of the mouse buttons are in the down position.

```csharp
public bool AnyButtonsDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if any buttons are in the down position.

<a name='Velaptor.Input.MouseState.Equals(object)'></a>

## MouseState.Equals(object) Method

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object? obj);
```
#### Parameters

<a name='Velaptor.Input.MouseState.Equals(object).obj'></a>

`obj` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The object to compare with the current instance.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [obj](./Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.Equals(object).obj 'Velaptor.Input.MouseState.Equals(object).obj') and this instance are the same type and represent the same value; otherwise, [false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

<a name='Velaptor.Input.MouseState.Equals(Velaptor.Input.MouseState)'></a>

## MouseState.Equals(MouseState) Method

```csharp
public bool Equals(Velaptor.Input.MouseState other);
```
#### Parameters

<a name='Velaptor.Input.MouseState.Equals(Velaptor.Input.MouseState).other'></a>

`other` [MouseState](./Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton)'></a>

## MouseState.GetButtonState(MouseButton) Method

Returns a value indicating whether or not the state for the given [mouseButton](./Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton).mouseButton 'Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton).mouseButton')  
is in the down or up position.

```csharp
public bool GetButtonState(Velaptor.Input.MouseButton mouseButton);
```
#### Parameters

<a name='Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton).mouseButton'></a>

`mouseButton` [MouseButton](./Velaptor.Input.MouseButton.md 'Velaptor.Input.MouseButton')

The button state to retrieve.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is down.

<a name='Velaptor.Input.MouseState.GetHashCode()'></a>

## MouseState.GetHashCode() Method

Returns the hash code for this instance.

```csharp
public override int GetHashCode();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
A 32-bit signed integer that is the hash code for this instance.

<a name='Velaptor.Input.MouseState.GetPosition()'></a>

## MouseState.GetPosition() Method

Gets or sets the position of the mouse.

```csharp
public System.Drawing.Point GetPosition();
```

#### Returns
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')  
The position relative to the top left corner of the window.

<a name='Velaptor.Input.MouseState.GetScrollDirection()'></a>

## MouseState.GetScrollDirection() Method

Gets the direction that the mouse wheel has been turned.

```csharp
public Velaptor.Input.MouseScrollDirection GetScrollDirection();
```

#### Returns
[MouseScrollDirection](./Velaptor.Input.MouseScrollDirection.md 'Velaptor.Input.MouseScrollDirection')  
The scroll direction of the mouse wheel.

<a name='Velaptor.Input.MouseState.GetScrollWheelValue()'></a>

## MouseState.GetScrollWheelValue() Method

Gets the position value of the mouse scroll wheel.

```csharp
public int GetScrollWheelValue();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The value of the scroll wheel.

<a name='Velaptor.Input.MouseState.GetX()'></a>

## MouseState.GetX() Method

Gets or sets the X position of the mouse.

```csharp
public int GetX();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The X position relative to the top left corner of the window.

<a name='Velaptor.Input.MouseState.GetY()'></a>

## MouseState.GetY() Method

Gets or sets the Y position of the mouse.

```csharp
public int GetY();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The Y position relative to the top left corner of the window.

<a name='Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton)'></a>

## MouseState.IsButtonDown(MouseButton) Method

Returns a value indicating whether or not the given mouse [button](./Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton).button 'Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton).button')  
is in the down position.

```csharp
public bool IsButtonDown(Velaptor.Input.MouseButton button);
```
#### Parameters

<a name='Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton).button'></a>

`button` [MouseButton](./Velaptor.Input.MouseButton.md 'Velaptor.Input.MouseButton')

The mouse button to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse button is in the down position.

<a name='Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton)'></a>

## MouseState.IsButtonUp(MouseButton) Method

Returns a value indicating whether or not the given mouse [button](./Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton).button 'Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton).button')  
is in the up position.

```csharp
public bool IsButtonUp(Velaptor.Input.MouseButton button);
```
#### Parameters

<a name='Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton).button'></a>

`button` [MouseButton](./Velaptor.Input.MouseButton.md 'Velaptor.Input.MouseButton')

The mouse button to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse button is in the up position.

<a name='Velaptor.Input.MouseState.IsLeftButtonDown()'></a>

## MouseState.IsLeftButtonDown() Method

Gets or sets a value indicating whether or not the left mouse button is in the down position.

```csharp
public bool IsLeftButtonDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is down.

<a name='Velaptor.Input.MouseState.IsLeftButtonUp()'></a>

## MouseState.IsLeftButtonUp() Method

Returns a value indicating whether or not the left mouse button is in the up position.

```csharp
public bool IsLeftButtonUp();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is up.

<a name='Velaptor.Input.MouseState.IsMiddleButtonDown()'></a>

## MouseState.IsMiddleButtonDown() Method

Gets or sets a value indicating whether or not the middle mouse button is in the down position.

```csharp
public bool IsMiddleButtonDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is down.

<a name='Velaptor.Input.MouseState.IsMiddleButtonUp()'></a>

## MouseState.IsMiddleButtonUp() Method

Returns a value indicating whether or not the middle mouse button is in the up position.

```csharp
public bool IsMiddleButtonUp();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is up.

<a name='Velaptor.Input.MouseState.IsRightButtonDown()'></a>

## MouseState.IsRightButtonDown() Method

Gets or sets a value indicating whether or not the right mouse button is in the down position.

```csharp
public bool IsRightButtonDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is down.

<a name='Velaptor.Input.MouseState.IsRightButtonUp()'></a>

## MouseState.IsRightButtonUp() Method

Returns a value indicating whether or not the right mouse button is in the up position.

```csharp
public bool IsRightButtonUp();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is up.
### Operators

<a name='Velaptor.Input.MouseState.op_Equality(Velaptor.Input.MouseState,Velaptor.Input.MouseState)'></a>

## MouseState.operator ==(MouseState, MouseState) Operator

Returns a value indicating whether or not the [left](./Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.op_Equality(Velaptor.Input.MouseState,Velaptor.Input.MouseState).left 'Velaptor.Input.MouseState.op_Equality(Velaptor.Input.MouseState, Velaptor.Input.MouseState).left') operand is equal to the [right](./Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.op_Equality(Velaptor.Input.MouseState,Velaptor.Input.MouseState).right 'Velaptor.Input.MouseState.op_Equality(Velaptor.Input.MouseState, Velaptor.Input.MouseState).right') operand.

```csharp
public static bool operator ==(Velaptor.Input.MouseState left, Velaptor.Input.MouseState right);
```
#### Parameters

<a name='Velaptor.Input.MouseState.op_Equality(Velaptor.Input.MouseState,Velaptor.Input.MouseState).left'></a>

`left` [MouseState](./Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')

The left side of the operator.

<a name='Velaptor.Input.MouseState.op_Equality(Velaptor.Input.MouseState,Velaptor.Input.MouseState).right'></a>

`right` [MouseState](./Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')

The right side of the operator.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the operands are equal.

<a name='Velaptor.Input.MouseState.op_Inequality(Velaptor.Input.MouseState,Velaptor.Input.MouseState)'></a>

## MouseState.operator !=(MouseState, MouseState) Operator

Returns a value indicating whether or not the [left](./Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.op_Inequality(Velaptor.Input.MouseState,Velaptor.Input.MouseState).left 'Velaptor.Input.MouseState.op_Inequality(Velaptor.Input.MouseState, Velaptor.Input.MouseState).left') operand is not equal to the [right](./Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.op_Inequality(Velaptor.Input.MouseState,Velaptor.Input.MouseState).right 'Velaptor.Input.MouseState.op_Inequality(Velaptor.Input.MouseState, Velaptor.Input.MouseState).right') operand.

```csharp
public static bool operator !=(Velaptor.Input.MouseState left, Velaptor.Input.MouseState right);
```
#### Parameters

<a name='Velaptor.Input.MouseState.op_Inequality(Velaptor.Input.MouseState,Velaptor.Input.MouseState).left'></a>

`left` [MouseState](./Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')

The left side of the operator.

<a name='Velaptor.Input.MouseState.op_Inequality(Velaptor.Input.MouseState,Velaptor.Input.MouseState).right'></a>

`right` [MouseState](./Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')

The right side of the operator.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the operands are not equal.