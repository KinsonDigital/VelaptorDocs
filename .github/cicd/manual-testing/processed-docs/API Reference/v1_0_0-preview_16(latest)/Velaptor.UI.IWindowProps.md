#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](./Velaptor.UI.md 'Velaptor.UI')

## IWindowProps Interface

Provides properties to hold the state of a window.

```csharp
public interface IWindowProps
```

Derived  
&#8627; [IWindow](./Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow')  
&#8627; [Window](./Velaptor.UI.Window.md 'Velaptor.UI.Window')
### Properties

<a name='Velaptor.UI.IWindowProps.AutoClearBuffer'></a>

## IWindowProps.AutoClearBuffer Property

Gets or sets a value indicating whether or not the buffers should]  
be automatically cleared before rendering any textures.

```csharp
bool AutoClearBuffer { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

### Remarks
  
If this is set to true, this means you do not have to  
use or invoke the [Clear()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Clear()) 'Velaptor.Graphics.Renderers.IRenderer.Clear()')() method.  
  
Set to the value of `false` if you want more control over when  
the back buffers will be cleared.  
  
WARNING!! - To prevent performance issues, do not have the clear  
the buffers with the [Clear()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Clear()) 'Velaptor.Graphics.Renderers.IRenderer.Clear()')() method  
and set this property to true.  That would be a waste of resources.

<a name='Velaptor.UI.IWindowProps.ContentLoader'></a>

## IWindowProps.ContentLoader Property

Gets or sets the content loader for loading content.

```csharp
Velaptor.Content.IContentLoader ContentLoader { get; set; }
```

#### Property Value
[IContentLoader](./Velaptor.Content.IContentLoader.md 'Velaptor.Content.IContentLoader')

<a name='Velaptor.UI.IWindowProps.Height'></a>

## IWindowProps.Height Property

Gets or sets the height of the window.

```csharp
uint Height { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.IWindowProps.Initialized'></a>

## IWindowProps.Initialized Property

Gets a value indicating whether or not the window has been initialized.

```csharp
bool Initialized { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IWindowProps.MouseCursorVisible'></a>

## IWindowProps.MouseCursorVisible Property

Gets or sets a value indicating whether or not the mouse cursor is visible.

```csharp
bool MouseCursorVisible { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IWindowProps.Position'></a>

## IWindowProps.Position Property

Gets or sets the position of the window.

```csharp
System.Numerics.Vector2 Position { get; set; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

<a name='Velaptor.UI.IWindowProps.Title'></a>

## IWindowProps.Title Property

Gets or sets the title of the window.

```csharp
string Title { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.IWindowProps.TypeOfBorder'></a>

## IWindowProps.TypeOfBorder Property

Gets or sets the type of border that the [IWindow](./Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow') will have.

```csharp
Velaptor.WindowBorder TypeOfBorder { get; set; }
```

#### Property Value
[WindowBorder](./Velaptor.WindowBorder.md 'Velaptor.WindowBorder')

<a name='Velaptor.UI.IWindowProps.UpdateFrequency'></a>

## IWindowProps.UpdateFrequency Property

Gets or sets the value of how often the update and render calls are invoked in the value of hertz.

```csharp
int UpdateFrequency { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.IWindowProps.Width'></a>

## IWindowProps.Width Property

Gets or sets the width of the window.

```csharp
uint Width { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.IWindowProps.WindowState'></a>

## IWindowProps.WindowState Property

Gets or sets the state of the window.

```csharp
Velaptor.StateOfWindow WindowState { get; set; }
```

#### Property Value
[StateOfWindow](./Velaptor.StateOfWindow.md 'Velaptor.StateOfWindow')