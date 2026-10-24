---
title: Velaptor.Input.MouseState
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Input](Velaptor.Input.md 'Velaptor.Input')

#### MouseState Struct

Represents the state of the mouse.

```csharp
public readonly struct MouseState
```
## Constructors

<a name='Velaptor.Input.MouseState.MouseState(System.Drawing.Point,bool,bool,bool,Velaptor.Input.MouseScrollDirection,int)'></a>

### MouseState(Point, bool, bool, bool, MouseScrollDirection, int) Constructor \{#Velaptor.Input.MouseState.MouseState(System.Drawing.Point,bool,bool,bool,Velaptor.Input.MouseScrollDirection,int)}

Initializes a new instance of the [MouseState](Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState') struct.

```csharp
public MouseState(System.Drawing.Point pos, bool isLeftButtonDown, bool isRightButtonDown, bool isMiddleButtonDown, Velaptor.Input.MouseScrollDirection scrollDirection, int scrollWheelValue);
```
#### Parameters

<a name='Velaptor.Input.MouseState.MouseState(System.Drawing.Point,bool,bool,bool,Velaptor.Input.MouseScrollDirection,int).pos'></a>

`pos` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The position of the mouse.

<a name='Velaptor.Input.MouseState.MouseState(System.Drawing.Point,bool,bool,bool,Velaptor.Input.MouseScrollDirection,int).isLeftButtonDown'></a>

`isLeftButtonDown` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

True if the left button is down.

<a name='Velaptor.Input.MouseState.MouseState(System.Drawing.Point,bool,bool,bool,Velaptor.Input.MouseScrollDirection,int).isRightButtonDown'></a>

`isRightButtonDown` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

True if the right button is down.

<a name='Velaptor.Input.MouseState.MouseState(System.Drawing.Point,bool,bool,bool,Velaptor.Input.MouseScrollDirection,int).isMiddleButtonDown'></a>

`isMiddleButtonDown` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

True if the middle button is down.

<a name='Velaptor.Input.MouseState.MouseState(System.Drawing.Point,bool,bool,bool,Velaptor.Input.MouseScrollDirection,int).scrollDirection'></a>

`scrollDirection` [MouseScrollDirection](Velaptor.Input.MouseScrollDirection.md 'Velaptor.Input.MouseScrollDirection')

The travel direction of the mouse wheel.

<a name='Velaptor.Input.MouseState.MouseState(System.Drawing.Point,bool,bool,bool,Velaptor.Input.MouseScrollDirection,int).scrollWheelValue'></a>

`scrollWheelValue` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The value of the mouse wheel.
## Methods

<a name='Velaptor.Input.MouseState.AnyButtonsDown()'></a>

### AnyButtonsDown() \{#Velaptor.Input.MouseState.AnyButtonsDown()}

Returns a value indicating whether any of the mouse buttons are in the down position.

```csharp
public bool AnyButtonsDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if any buttons are in the down position.

<a name='Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton)'></a>

### GetButtonState(MouseButton) \{#Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton)}

Returns a value indicating whether the state for the given [mouseButton](Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton) 'Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton).mouseButton')  
is in the down or up position.

```csharp
public bool GetButtonState(Velaptor.Input.MouseButton mouseButton);
```
#### Parameters

<a name='Velaptor.Input.MouseState.GetButtonState(Velaptor.Input.MouseButton).mouseButton'></a>

`mouseButton` [MouseButton](Velaptor.Input.MouseButton.md 'Velaptor.Input.MouseButton')

The button state to retrieve.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is down.

<a name='Velaptor.Input.MouseState.GetPosition()'></a>

### GetPosition() \{#Velaptor.Input.MouseState.GetPosition()}

Gets or sets the position of the mouse.

```csharp
public System.Drawing.Point GetPosition();
```

#### Returns
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')  
The position relative to the top left corner of the window.

<a name='Velaptor.Input.MouseState.GetScrollDirection()'></a>

### GetScrollDirection() \{#Velaptor.Input.MouseState.GetScrollDirection()}

Gets the direction that the mouse wheel has been turned.

```csharp
public Velaptor.Input.MouseScrollDirection GetScrollDirection();
```

#### Returns
[MouseScrollDirection](Velaptor.Input.MouseScrollDirection.md 'Velaptor.Input.MouseScrollDirection')  
The scroll direction of the mouse wheel.

<a name='Velaptor.Input.MouseState.GetScrollWheelValue()'></a>

### GetScrollWheelValue() \{#Velaptor.Input.MouseState.GetScrollWheelValue()}

Gets the position value of the mouse scroll wheel.

```csharp
public int GetScrollWheelValue();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The value of the scroll wheel.

<a name='Velaptor.Input.MouseState.GetX()'></a>

### GetX() \{#Velaptor.Input.MouseState.GetX()}

Gets or sets the X position of the mouse.

```csharp
public int GetX();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The X position relative to the top left corner of the window.

<a name='Velaptor.Input.MouseState.GetY()'></a>

### GetY() \{#Velaptor.Input.MouseState.GetY()}

Gets or sets the Y position of the mouse.

```csharp
public int GetY();
```

#### Returns
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The Y position relative to the top left corner of the window.

<a name='Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton)'></a>

### IsButtonDown(MouseButton) \{#Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton)}

Returns a value indicating whether the given mouse [button](Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton) 'Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton).button')  
is in the down position.

```csharp
public bool IsButtonDown(Velaptor.Input.MouseButton button);
```
#### Parameters

<a name='Velaptor.Input.MouseState.IsButtonDown(Velaptor.Input.MouseButton).button'></a>

`button` [MouseButton](Velaptor.Input.MouseButton.md 'Velaptor.Input.MouseButton')

The mouse button to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse button is in the down position.

<a name='Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton)'></a>

### IsButtonUp(MouseButton) \{#Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton)}

Returns a value indicating whether the given mouse [button](Velaptor.Input.MouseState.md#Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton) 'Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton).button')  
is in the up position.

```csharp
public bool IsButtonUp(Velaptor.Input.MouseButton button);
```
#### Parameters

<a name='Velaptor.Input.MouseState.IsButtonUp(Velaptor.Input.MouseButton).button'></a>

`button` [MouseButton](Velaptor.Input.MouseButton.md 'Velaptor.Input.MouseButton')

The mouse button to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse button is in the up position.

#### Exceptions

[System.ComponentModel.InvalidEnumArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ComponentModel.InvalidEnumArgumentException 'System.ComponentModel.InvalidEnumArgumentException')  
Occurs if the [MouseButton](Velaptor.Input.MouseButton.md 'Velaptor.Input.MouseButton') is an invalid value.

<a name='Velaptor.Input.MouseState.IsLeftButtonDown()'></a>

### IsLeftButtonDown() \{#Velaptor.Input.MouseState.IsLeftButtonDown()}

Gets or sets a value indicating whether the left mouse button is in the down position.

```csharp
public bool IsLeftButtonDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is down.

<a name='Velaptor.Input.MouseState.IsLeftButtonUp()'></a>

### IsLeftButtonUp() \{#Velaptor.Input.MouseState.IsLeftButtonUp()}

Returns a value indicating whether the left mouse button is in the up position.

```csharp
public bool IsLeftButtonUp();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is up.

<a name='Velaptor.Input.MouseState.IsMiddleButtonDown()'></a>

### IsMiddleButtonDown() \{#Velaptor.Input.MouseState.IsMiddleButtonDown()}

Gets or sets a value indicating whether the middle mouse button is in the down position.

```csharp
public bool IsMiddleButtonDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is down.

<a name='Velaptor.Input.MouseState.IsMiddleButtonUp()'></a>

### IsMiddleButtonUp() \{#Velaptor.Input.MouseState.IsMiddleButtonUp()}

Returns a value indicating whether the middle mouse button is in the up position.

```csharp
public bool IsMiddleButtonUp();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is up.

<a name='Velaptor.Input.MouseState.IsRightButtonDown()'></a>

### IsRightButtonDown() \{#Velaptor.Input.MouseState.IsRightButtonDown()}

Gets or sets a value indicating whether the right mouse button is in the down position.

```csharp
public bool IsRightButtonDown();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is down.

<a name='Velaptor.Input.MouseState.IsRightButtonUp()'></a>

### IsRightButtonUp() \{#Velaptor.Input.MouseState.IsRightButtonUp()}

Returns a value indicating whether the right mouse button is in the up position.

```csharp
public bool IsRightButtonUp();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if the button is up.
