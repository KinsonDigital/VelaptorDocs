#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](./Velaptor.UI.md 'Velaptor.UI')

## Window Class

A system window where graphics can be rendered.

```csharp
public abstract class Window :
Velaptor.UI.IWindowProps,
System.IDisposable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → Window

Implements [IWindowProps](./Velaptor.UI.IWindowProps.md 'Velaptor.UI.IWindowProps'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')
### Properties

<a name='Velaptor.UI.Window.AutoClearBuffer'></a>

## Window.AutoClearBuffer Property

Gets or sets a value indicating whether or not the buffers should]  
be automatically cleared before rendering any textures.

```csharp
public bool AutoClearBuffer { get; set; }
```

Implements [AutoClearBuffer](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.AutoClearBuffer 'Velaptor.UI.IWindowProps.AutoClearBuffer')

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

<a name='Velaptor.UI.Window.ContentLoader'></a>

## Window.ContentLoader Property

Gets or sets the content loader for loading content.

```csharp
public Velaptor.Content.IContentLoader ContentLoader { get; set; }
```

Implements [ContentLoader](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.ContentLoader 'Velaptor.UI.IWindowProps.ContentLoader')

#### Property Value
[IContentLoader](./Velaptor.Content.IContentLoader.md 'Velaptor.Content.IContentLoader')

<a name='Velaptor.UI.Window.Height'></a>

## Window.Height Property

Gets or sets the height of the window.

```csharp
public uint Height { get; set; }
```

Implements [Height](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.Height 'Velaptor.UI.IWindowProps.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.Window.Initialized'></a>

## Window.Initialized Property

Gets a value indicating whether or not the window has been initialized.

```csharp
public bool Initialized { get; }
```

Implements [Initialized](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.Initialized 'Velaptor.UI.IWindowProps.Initialized')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.Window.MouseCursorVisible'></a>

## Window.MouseCursorVisible Property

Gets or sets a value indicating whether or not the mouse cursor is visible.

```csharp
public bool MouseCursorVisible { get; set; }
```

Implements [MouseCursorVisible](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.MouseCursorVisible 'Velaptor.UI.IWindowProps.MouseCursorVisible')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.Window.Position'></a>

## Window.Position Property

Gets or sets the position of the window.

```csharp
public System.Numerics.Vector2 Position { get; set; }
```

Implements [Position](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.Position 'Velaptor.UI.IWindowProps.Position')

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

<a name='Velaptor.UI.Window.Title'></a>

## Window.Title Property

Gets or sets the title of the window.

```csharp
public string Title { get; set; }
```

Implements [Title](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.Title 'Velaptor.UI.IWindowProps.Title')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.Window.TypeOfBorder'></a>

## Window.TypeOfBorder Property

Gets or sets the type of border that the [IWindow](./Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow') will have.

```csharp
public Velaptor.WindowBorder TypeOfBorder { get; set; }
```

Implements [TypeOfBorder](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.TypeOfBorder 'Velaptor.UI.IWindowProps.TypeOfBorder')

#### Property Value
[WindowBorder](./Velaptor.WindowBorder.md 'Velaptor.WindowBorder')

<a name='Velaptor.UI.Window.UpdateFrequency'></a>

## Window.UpdateFrequency Property

Gets or sets the value of how often the update and render calls are invoked in the value of hertz.

```csharp
public int UpdateFrequency { get; set; }
```

Implements [UpdateFrequency](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.UpdateFrequency 'Velaptor.UI.IWindowProps.UpdateFrequency')

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.Window.Width'></a>

## Window.Width Property

Gets or sets the width of the window.

```csharp
public uint Width { get; set; }
```

Implements [Width](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.Width 'Velaptor.UI.IWindowProps.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.Window.WindowState'></a>

## Window.WindowState Property

Gets or sets the state of the window.

```csharp
public Velaptor.StateOfWindow WindowState { get; set; }
```

Implements [WindowState](./Velaptor.UI.IWindowProps.md#Velaptor.UI.IWindowProps.WindowState 'Velaptor.UI.IWindowProps.WindowState')

#### Property Value
[StateOfWindow](./Velaptor.StateOfWindow.md 'Velaptor.StateOfWindow')
### Methods

<a name='Velaptor.UI.Window.Dispose()'></a>

## Window.Dispose() Method

<inheritdoc cref="M:System.IDisposable.Dispose"/>

```csharp
public void Dispose();
```

Implements [Dispose()](./](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable.Dispose 'System.IDisposable.Dispose'))

<a name='Velaptor.UI.Window.Show()'></a>

## Window.Show() Method

Shows the window.

```csharp
public void Show();
```

<a name='Velaptor.UI.Window.ShowAsync(System.Action,System.Action)'></a>

## Window.ShowAsync(Action, Action) Method

Shows the window asynchronously.

```csharp
public System.Threading.Tasks.Task ShowAsync(System.Action? afterStart=null, System.Action? afterUnload=null);
```
#### Parameters

<a name='Velaptor.UI.Window.ShowAsync(System.Action,System.Action).afterStart'></a>

`afterStart` [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

Executed after the application starts asynchronously.

<a name='Velaptor.UI.Window.ShowAsync(System.Action,System.Action).afterUnload'></a>

`afterUnload` [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

Executed after the window has been unloaded.

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
A [System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task') representing the result of the asynchronous operation.

### Remarks
This runs the window on another thread.