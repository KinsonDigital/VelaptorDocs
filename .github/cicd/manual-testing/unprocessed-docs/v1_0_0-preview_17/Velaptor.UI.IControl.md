#### [Velaptor](index.md 'index')
### [Velaptor.UI](Velaptor.UI.md 'Velaptor.UI')

## IControl Interface

A user interface object that can be updated and rendered to the screen.

```csharp
public interface IControl :
Velaptor.IUpdatable,
Velaptor.IDrawable,
Velaptor.Content.IContentLoadable,
Velaptor.UI.ISizable
```

Derived  
&#8627; [ControlBase](Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase')

Implements [IUpdatable](Velaptor.IUpdatable.md 'Velaptor.IUpdatable'), [IDrawable](Velaptor.IDrawable.md 'Velaptor.IDrawable'), [IContentLoadable](Velaptor.Content.IContentLoadable.md 'Velaptor.Content.IContentLoadable'), [ISizable](Velaptor.UI.ISizable.md 'Velaptor.UI.ISizable')
### Properties

<a name='Velaptor.UI.IControl.Bottom'></a>

## IControl.Bottom Property

Gets or sets the position of the bottom of the control.

```csharp
int Bottom { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.IControl.Enabled'></a>

## IControl.Enabled Property

Gets or sets a value indicating whether or not the control is enabled.

```csharp
bool Enabled { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IControl.IsMouseOver'></a>

## IControl.IsMouseOver Property

Gets a value indicating whether or not the mouse is hovering over the button.

```csharp
bool IsMouseOver { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IControl.Left'></a>

## IControl.Left Property

Gets or sets the position of the left side of the control.

```csharp
int Left { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.IControl.Name'></a>

## IControl.Name Property

Gets or sets the name of the control.

```csharp
string Name { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.IControl.Position'></a>

## IControl.Position Property

Gets or sets the position of the [IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl') on the screen.

```csharp
System.Drawing.Point Position { get; set; }
```

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.UI.IControl.Right'></a>

## IControl.Right Property

Gets or sets the position of the right side of the control.

```csharp
int Right { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.IControl.Top'></a>

## IControl.Top Property

Gets or sets the position of the top of the control.

```csharp
int Top { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.IControl.Visible'></a>

## IControl.Visible Property

Gets or sets a value indicating whether or not the control is visible.

```csharp
bool Visible { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')
### Events

<a name='Velaptor.UI.IControl.Click'></a>

## IControl.Click Event

Occurs when the button has been clicked.

```csharp
event EventHandler<EventArgs>? Click;
```

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[System.EventArgs](https://docs.microsoft.com/en-us/dotnet/api/System.EventArgs 'System.EventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')

<a name='Velaptor.UI.IControl.MouseDown'></a>

## IControl.MouseDown Event

Occurs when the left mouse button is in the down position over the button.

```csharp
event EventHandler<EventArgs>? MouseDown;
```

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[System.EventArgs](https://docs.microsoft.com/en-us/dotnet/api/System.EventArgs 'System.EventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')

<a name='Velaptor.UI.IControl.MouseMove'></a>

## IControl.MouseMove Event

Occurs when the mouse moves over the button.

```csharp
event EventHandler<MousePositionEventArgs>? MouseMove;
```

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[MousePositionEventArgs](Velaptor.UI.MousePositionEventArgs.md 'Velaptor.UI.MousePositionEventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')

<a name='Velaptor.UI.IControl.MouseUp'></a>

## IControl.MouseUp Event

Occurs when the left mouse button is in the up position over the button  
after the mouse has been in the down position.

```csharp
event EventHandler<EventArgs>? MouseUp;
```

#### Event Type
[System.EventHandler&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')[System.EventArgs](https://docs.microsoft.com/en-us/dotnet/api/System.EventArgs 'System.EventArgs')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1 'System.EventHandler`1')