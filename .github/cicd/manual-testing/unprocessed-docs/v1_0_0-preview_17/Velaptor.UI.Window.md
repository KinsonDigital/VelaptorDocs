#### [Velaptor](index.md 'index')
### [Velaptor.UI](Velaptor.UI.md 'Velaptor.UI')

## Window Class

A system window where graphics can be rendered.

```csharp
public abstract class Window :
Velaptor.UI.IWindow,
System.IDisposable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; Window

Implements [IWindow](Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')
### Properties

<a name='Velaptor.UI.Window.AutoClearBuffer'></a>

## Window.AutoClearBuffer Property

Gets or sets a value indicating whether or not the buffers should  
be automatically cleared before rendering any textures.

```csharp
public bool AutoClearBuffer { get; set; }
```

Implements [AutoClearBuffer](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.AutoClearBuffer 'Velaptor.UI.IWindow.AutoClearBuffer')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

### Remarks
  
If this is set to true, this means you do not have to  
use or invoke the [Clear()](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Clear() 'Velaptor.Graphics.Renderers.IRenderer.Clear()')() method.  
  
Set to the value of `false` if you want more control over when  
the back buffers will be cleared.  
  
WARNING!! - To prevent performance issues, do not have the clear  
the buffers with the [Clear()](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Clear() 'Velaptor.Graphics.Renderers.IRenderer.Clear()')() method  
and set this property to true.  That would be a waste of resources.

<a name='Velaptor.UI.Window.ContentLoader'></a>

## Window.ContentLoader Property

Gets or sets the content loader for loading content.

```csharp
public Velaptor.Content.IContentLoader ContentLoader { get; set; }
```

Implements [ContentLoader](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.ContentLoader 'Velaptor.UI.IWindow.ContentLoader')

#### Property Value
[IContentLoader](Velaptor.Content.IContentLoader.md 'Velaptor.Content.IContentLoader')

<a name='Velaptor.UI.Window.Draw'></a>

## Window.Draw Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked per frame for rendering.

```csharp
public System.Action<Velaptor.FrameTime>? Draw { get; set; }
```

Implements [Draw](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Draw 'Velaptor.UI.IWindow.Draw')

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[FrameTime](Velaptor.FrameTime.md 'Velaptor.FrameTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')

<a name='Velaptor.UI.Window.Height'></a>

## Window.Height Property

Gets or sets the height of the window.

```csharp
public uint Height { get; set; }
```

Implements [Height](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Height 'Velaptor.UI.IWindow.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.Window.Initialize'></a>

## Window.Initialize Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate to be invoked one time to initialize the window.

```csharp
public System.Action? Initialize { get; set; }
```

Implements [Initialize](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Initialize 'Velaptor.UI.IWindow.Initialize')

#### Property Value
[System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

<a name='Velaptor.UI.Window.Initialized'></a>

## Window.Initialized Property

Gets a value indicating whether or not the window has been initialized.

```csharp
public bool Initialized { get; }
```

Implements [Initialized](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Initialized 'Velaptor.UI.IWindow.Initialized')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.Window.MouseCursorVisible'></a>

## Window.MouseCursorVisible Property

Gets or sets a value indicating whether or not the mouse cursor is visible.

```csharp
public bool MouseCursorVisible { get; set; }
```

Implements [MouseCursorVisible](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.MouseCursorVisible 'Velaptor.UI.IWindow.MouseCursorVisible')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.Window.Position'></a>

## Window.Position Property

Gets or sets the position of the window.

```csharp
public System.Numerics.Vector2 Position { get; set; }
```

Implements [Position](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Position 'Velaptor.UI.IWindow.Position')

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

<a name='Velaptor.UI.Window.SceneManager'></a>

## Window.SceneManager Property

Gets the scene manager.

```csharp
public Velaptor.Scene.ISceneManager SceneManager { get; }
```

Implements [SceneManager](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.SceneManager 'Velaptor.UI.IWindow.SceneManager')

#### Property Value
[ISceneManager](Velaptor.Scene.ISceneManager.md 'Velaptor.Scene.ISceneManager')

<a name='Velaptor.UI.Window.Title'></a>

## Window.Title Property

Gets or sets the title of the window.

```csharp
public string Title { get; set; }
```

Implements [Title](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Title 'Velaptor.UI.IWindow.Title')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.Window.TypeOfBorder'></a>

## Window.TypeOfBorder Property

Gets or sets the type of border that the [IWindow](Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow') will have.

```csharp
public Velaptor.WindowBorder TypeOfBorder { get; set; }
```

Implements [TypeOfBorder](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.TypeOfBorder 'Velaptor.UI.IWindow.TypeOfBorder')

#### Property Value
[WindowBorder](Velaptor.WindowBorder.md 'Velaptor.WindowBorder')

<a name='Velaptor.UI.Window.Uninitialize'></a>

## Window.Uninitialize Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate to be invoked one time to uninitialize the window.

```csharp
public System.Action? Uninitialize { get; set; }
```

Implements [Uninitialize](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Uninitialize 'Velaptor.UI.IWindow.Uninitialize')

#### Property Value
[System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

<a name='Velaptor.UI.Window.Update'></a>

## Window.Update Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked per frame for updating.

```csharp
public System.Action<Velaptor.FrameTime>? Update { get; set; }
```

Implements [Update](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Update 'Velaptor.UI.IWindow.Update')

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[FrameTime](Velaptor.FrameTime.md 'Velaptor.FrameTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')

<a name='Velaptor.UI.Window.UpdateFrequency'></a>

## Window.UpdateFrequency Property

Gets or sets the value of how often the update and render calls are invoked in the value of hertz.

```csharp
public int UpdateFrequency { get; set; }
```

Implements [UpdateFrequency](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.UpdateFrequency 'Velaptor.UI.IWindow.UpdateFrequency')

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.Window.Width'></a>

## Window.Width Property

Gets or sets the width of the window.

```csharp
public uint Width { get; set; }
```

Implements [Width](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Width 'Velaptor.UI.IWindow.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.Window.WindowState'></a>

## Window.WindowState Property

Gets or sets the state of the window.

```csharp
public Velaptor.StateOfWindow WindowState { get; set; }
```

Implements [WindowState](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.WindowState 'Velaptor.UI.IWindow.WindowState')

#### Property Value
[StateOfWindow](Velaptor.StateOfWindow.md 'Velaptor.StateOfWindow')

<a name='Velaptor.UI.Window.WinResize'></a>

## Window.WinResize Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked every time the window is resized.

```csharp
public System.Action<Velaptor.SizeU>? WinResize { get; set; }
```

Implements [WinResize](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.WinResize 'Velaptor.UI.IWindow.WinResize')

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[SizeU](Velaptor.SizeU.md 'Velaptor.SizeU')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')
### Methods

<a name='Velaptor.UI.Window.Close()'></a>

## Window.Close() Method

Closes the window.

```csharp
public void Close();
```

Implements [Close()](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Close() 'Velaptor.UI.IWindow.Close()')

<a name='Velaptor.UI.Window.Dispose()'></a>

## Window.Dispose() Method

<inheritdoc cref="M:System.IDisposable.Dispose"/>

```csharp
public void Dispose();
```

Implements [Dispose()](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable.Dispose 'System.IDisposable.Dispose')

<a name='Velaptor.UI.Window.Show()'></a>

## Window.Show() Method

Shows the window.

```csharp
public void Show();
```

Implements [Show()](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Show() 'Velaptor.UI.IWindow.Show()')

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

Implements [ShowAsync(Action, Action)](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.ShowAsync(System.Action,System.Action) 'Velaptor.UI.IWindow.ShowAsync(System.Action, System.Action)')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
A [System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task') representing the result of the asynchronous operation.

### Remarks
This runs the window on another thread.