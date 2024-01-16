---
title: Velaptor.UI.ControlBase
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](Velaptor.UI.md 'Velaptor.UI')

#### ControlBase Class

Represents a basic control with behavior that is shared among all controls.

```csharp
public abstract class ControlBase :
Velaptor.UI.IControl,
Velaptor.IUpdatable,
Velaptor.IDrawable,
Velaptor.Content.IContentLoadable,
Velaptor.UI.ISizable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → ControlBase

Derived  
&#8627; [Button](Velaptor.UI.Button.md 'Velaptor.UI.Button')  
&#8627; [Label](Velaptor.UI.Label.md 'Velaptor.UI.Label')  
&#8627; [TextBox](Velaptor.UI.TextBox.md 'Velaptor.UI.TextBox')

Implements [IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl'), [IUpdatable](Velaptor.IUpdatable.md 'Velaptor.IUpdatable'), [IDrawable](Velaptor.IDrawable.md 'Velaptor.IDrawable'), [IContentLoadable](Velaptor.Content.IContentLoadable.md 'Velaptor.Content.IContentLoadable'), [ISizable](Velaptor.UI.ISizable.md 'Velaptor.UI.ISizable')
## Properties

<a name='Velaptor.UI.ControlBase.Bottom'></a>

### Bottom 

Gets or sets the position of the bottom of the control.

```csharp
public virtual int Bottom { get; set; }
```

Implements [Bottom](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Bottom 'Velaptor.UI.IControl.Bottom')

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.ControlBase.Enabled'></a>

### Enabled 

Gets or sets a value indicating whether or not the control is enabled.

```csharp
public virtual bool Enabled { get; set; }
```

Implements [Enabled](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Enabled 'Velaptor.UI.IControl.Enabled')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.ControlBase.HalfHeight'></a>

### HalfHeight 

Gets the half height of the [ControlBase](Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase').

```csharp
public virtual uint HalfHeight { get; }
```

Implements [HalfHeight](Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.HalfHeight 'Velaptor.UI.ISizable.HalfHeight')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.ControlBase.HalfWidth'></a>

### HalfWidth 

Gets the half width of the [ControlBase](Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase').

```csharp
public virtual uint HalfWidth { get; }
```

Implements [HalfWidth](Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.HalfWidth 'Velaptor.UI.ISizable.HalfWidth')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.ControlBase.Height'></a>

### Height 

Gets or sets the height of the [ControlBase](Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase').

```csharp
public virtual uint Height { get; set; }
```

Implements [Height](Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.Height 'Velaptor.UI.ISizable.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.ControlBase.IsLoaded'></a>

### IsLoaded 

Gets a value indicating whether or not the content for an object is loaded.

```csharp
public bool IsLoaded { get; set; }
```

Implements [IsLoaded](Velaptor.Content.IContentLoadable.md#Velaptor.Content.IContentLoadable.IsLoaded 'Velaptor.Content.IContentLoadable.IsLoaded')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.ControlBase.IsMouseOver'></a>

### IsMouseOver 

Gets a value indicating whether or not the mouse is hovering over the button.

```csharp
public bool IsMouseOver { get; set; }
```

Implements [IsMouseOver](Velaptor.UI.IControl.md#Velaptor.UI.IControl.IsMouseOver 'Velaptor.UI.IControl.IsMouseOver')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.ControlBase.Left'></a>

### Left 

Gets or sets the position of the left side of the control.

```csharp
public virtual int Left { get; set; }
```

Implements [Left](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Left 'Velaptor.UI.IControl.Left')

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.ControlBase.MouseDownColor'></a>

### MouseDownColor 

Gets or sets the color to apply to the control when the  
mouse button is in the down position over the control.

```csharp
public System.Drawing.Color MouseDownColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.ControlBase.MouseHoverColor'></a>

### MouseHoverColor 

Gets or sets the color to apply to the control when the mouse button is hovering over the control.

```csharp
public System.Drawing.Color MouseHoverColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.ControlBase.Name'></a>

### Name 

Gets or sets the name of the control.

```csharp
public string Name { get; set; }
```

Implements [Name](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Name 'Velaptor.UI.IControl.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.ControlBase.Position'></a>

### Position 

Gets or sets the position of the [IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl') on the screen.

```csharp
public virtual System.Drawing.Point Position { get; set; }
```

Implements [Position](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Position 'Velaptor.UI.IControl.Position')

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.UI.ControlBase.Right'></a>

### Right 

Gets or sets the position of the right side of the control.

```csharp
public virtual int Right { get; set; }
```

Implements [Right](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Right 'Velaptor.UI.IControl.Right')

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.ControlBase.Top'></a>

### Top 

Gets or sets the position of the top of the control.

```csharp
public virtual int Top { get; set; }
```

Implements [Top](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Top 'Velaptor.UI.IControl.Top')

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.ControlBase.Visible'></a>

### Visible 

Gets or sets a value indicating whether or not the control is visible.

```csharp
public virtual bool Visible { get; set; }
```

Implements [Visible](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Visible 'Velaptor.UI.IControl.Visible')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.ControlBase.Width'></a>

### Width 

Gets or sets the width of the [ControlBase](Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase').

```csharp
public virtual uint Width { get; set; }
```

Implements [Width](Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.Width 'Velaptor.UI.ISizable.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
## Methods

<a name='Velaptor.UI.ControlBase.LoadContent()'></a>

### LoadContent() 

Unloads the content for an object.

```csharp
public virtual void LoadContent();
```

Implements [LoadContent()](Velaptor.Content.IContentLoadable.md#Velaptor.Content.IContentLoadable.LoadContent() 'Velaptor.Content.IContentLoadable.LoadContent()')

<a name='Velaptor.UI.ControlBase.Render()'></a>

### Render() 

Renders the control to the screen.

```csharp
public virtual void Render();
```

Implements [Render()](Velaptor.IDrawable.md#Velaptor.IDrawable.Render() 'Velaptor.IDrawable.Render()')

<a name='Velaptor.UI.ControlBase.UnloadContent()'></a>

### UnloadContent() 

Unloads the content for an object.

```csharp
public virtual void UnloadContent();
```

Implements [UnloadContent()](Velaptor.Content.IContentLoadable.md#Velaptor.Content.IContentLoadable.UnloadContent() 'Velaptor.Content.IContentLoadable.UnloadContent()')

<a name='Velaptor.UI.ControlBase.Update(Velaptor.FrameTime)'></a>

### Update(FrameTime) 

A user interface object that can be updated and rendered to the screen.

```csharp
public virtual void Update(Velaptor.FrameTime frameTime);
```
#### Parameters

<a name='Velaptor.UI.ControlBase.Update(Velaptor.FrameTime).frameTime'></a>

`frameTime` [FrameTime](Velaptor.FrameTime.md 'Velaptor.FrameTime')

Implements [Update(FrameTime)](Velaptor.IUpdatable.md#Velaptor.IUpdatable.Update(Velaptor.FrameTime) 'Velaptor.IUpdatable.Update(Velaptor.FrameTime)')
### Events

<a name='Velaptor.UI.ControlBase.Click'></a>

## ControlBase.Click Event

Occurs when the button has been clicked.

```csharp
public event EventHandler<EventArgs>? Click;
```

Implements [Click](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Click 'Velaptor.UI.IControl.Click')

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[System.EventArgs](https://docs.microsoft.com/en-us/dotnet/api/System.EventArgs 'System.EventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')

<a name='Velaptor.UI.ControlBase.KeyDown'></a>

## ControlBase.KeyDown Event

Occurs when a keyboard key is pressed into the down position.

```csharp
public event EventHandler<KeyEventArgs>? KeyDown;
```

Implements [KeyDown](Velaptor.UI.IControl.md#Velaptor.UI.IControl.KeyDown 'Velaptor.UI.IControl.KeyDown')

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[KeyEventArgs](Velaptor.Input.KeyEventArgs.md 'Velaptor.Input.KeyEventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')

<a name='Velaptor.UI.ControlBase.KeyUp'></a>

## ControlBase.KeyUp Event

Occurs when a keyboard key is released into the up position.

```csharp
public event EventHandler<KeyEventArgs>? KeyUp;
```

Implements [KeyUp](Velaptor.UI.IControl.md#Velaptor.UI.IControl.KeyUp 'Velaptor.UI.IControl.KeyUp')

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[KeyEventArgs](Velaptor.Input.KeyEventArgs.md 'Velaptor.Input.KeyEventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')

<a name='Velaptor.UI.ControlBase.MouseDown'></a>

## ControlBase.MouseDown Event

Occurs when the left mouse button is in the down position over the button.

```csharp
public event EventHandler<EventArgs>? MouseDown;
```

Implements [MouseDown](Velaptor.UI.IControl.md#Velaptor.UI.IControl.MouseDown 'Velaptor.UI.IControl.MouseDown')

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[System.EventArgs](https://docs.microsoft.com/en-us/dotnet/api/System.EventArgs 'System.EventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')

<a name='Velaptor.UI.ControlBase.MouseMove'></a>

## ControlBase.MouseMove Event

Occurs when the mouse moves over the button.

```csharp
public event EventHandler<MouseMoveEventArgs>? MouseMove;
```

Implements [MouseMove](Velaptor.UI.IControl.md#Velaptor.UI.IControl.MouseMove 'Velaptor.UI.IControl.MouseMove')

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[MouseMoveEventArgs](Velaptor.UI.MouseMoveEventArgs.md 'Velaptor.UI.MouseMoveEventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')

<a name='Velaptor.UI.ControlBase.MouseUp'></a>

## ControlBase.MouseUp Event

Occurs when the left mouse button is in the up position over the button  
after the mouse has been in the down position.

```csharp
public event EventHandler<EventArgs>? MouseUp;
```

Implements [MouseUp](Velaptor.UI.IControl.md#Velaptor.UI.IControl.MouseUp 'Velaptor.UI.IControl.MouseUp')

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[System.EventArgs](https://docs.microsoft.com/en-us/dotnet/api/System.EventArgs 'System.EventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')