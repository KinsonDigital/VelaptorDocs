---
title: Velaptor.UI.IWindow
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](Velaptor.UI.md 'Velaptor.UI')

#### IWindow Interface

Provides the core of an application window which facilitates how the  
window behaves, its state and the ability to be used in various types  
of applications.

```csharp
public interface IWindow :
System.IDisposable
```

Derived  
&#8627; [Window](Velaptor.UI.Window.md 'Velaptor.UI.Window')

Implements [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')
## Properties

<a name='Velaptor.UI.IWindow.AutoClearBuffer'></a>

### AutoClearBuffer 

Gets or sets a value indicating whether the buffers should  
be automatically cleared before rendering any textures.

```csharp
bool AutoClearBuffer { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

#### Remarks
  
If this is set to true, it means you do not have to  
use or invoke the [Clear()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Clear() 'Velaptor.Batching.IBatcher.Clear()')() method.  
  
Set to the value of `false` if you want more control when  
the back buffers will be cleared.  
  
WARNING!! - To prevent performance issues, do not manually clear the  
buffer with the [Clear()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Clear() 'Velaptor.Batching.IBatcher.Clear()')() method  
and set this property to true.  That would be a waste of resources.

<a name='Velaptor.UI.IWindow.AutoSceneLoading'></a>

### AutoSceneLoading 

Gets or sets a value indicating whether the scenes should be automatically loaded.

```csharp
bool AutoSceneLoading { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IWindow.AutoSceneRendering'></a>

### AutoSceneRendering 

Gets or sets a value indicating whether the scenes should be automatically rendered.

```csharp
bool AutoSceneRendering { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IWindow.AutoSceneUnloading'></a>

### AutoSceneUnloading 

Gets or sets a value indicating whether the scenes should be automatically unloaded.

```csharp
bool AutoSceneUnloading { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IWindow.AutoSceneUpdating'></a>

### AutoSceneUpdating 

Gets or sets a value indicating whether the scenes should be automatically updated.

```csharp
bool AutoSceneUpdating { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IWindow.Draw'></a>

### Draw 

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked per frame for rendering.

```csharp
System.Action<Velaptor.FrameTime>? Draw { get; set; }
```

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[FrameTime](Velaptor.FrameTime.md 'Velaptor.FrameTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')

<a name='Velaptor.UI.IWindow.Fps'></a>

### Fps 

Gets the frames per second that the main loop is running at.

```csharp
float Fps { get; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.UI.IWindow.Height'></a>

### Height 

Gets or sets the height of the window.

```csharp
uint Height { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.IWindow.Initialize'></a>

### Initialize 

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate to be invoked one time to initialize the window.

```csharp
System.Action? Initialize { get; set; }
```

#### Property Value
[System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

<a name='Velaptor.UI.IWindow.Initialized'></a>

### Initialized 

Gets a value indicating whether the window has been initialized.

```csharp
bool Initialized { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IWindow.MouseCursorVisible'></a>

### MouseCursorVisible 

Gets or sets a value indicating whether the mouse cursor is visible.

```csharp
bool MouseCursorVisible { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.IWindow.Position'></a>

### Position 

Gets or sets the position of the window.

```csharp
System.Numerics.Vector2 Position { get; set; }
```

#### Property Value
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

<a name='Velaptor.UI.IWindow.SceneManager'></a>

### SceneManager 

Gets the scene manager.

```csharp
Velaptor.Scene.ISceneManager SceneManager { get; }
```

#### Property Value
[ISceneManager](Velaptor.Scene.ISceneManager.md 'Velaptor.Scene.ISceneManager')

<a name='Velaptor.UI.IWindow.Title'></a>

### Title 

Gets or sets the title of the window.

```csharp
string Title { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.IWindow.TypeOfBorder'></a>

### TypeOfBorder 

Gets or sets the type of border that the [IWindow](Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow') will have.

```csharp
Velaptor.WindowBorder TypeOfBorder { get; set; }
```

#### Property Value
[WindowBorder](Velaptor.WindowBorder.md 'Velaptor.WindowBorder')

<a name='Velaptor.UI.IWindow.Uninitialize'></a>

### Uninitialize 

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate to be invoked one time to uninitialize the window.

```csharp
System.Action? Uninitialize { get; set; }
```

#### Property Value
[System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

<a name='Velaptor.UI.IWindow.Update'></a>

### Update 

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked per frame for updating.

```csharp
System.Action<Velaptor.FrameTime>? Update { get; set; }
```

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[FrameTime](Velaptor.FrameTime.md 'Velaptor.FrameTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')

<a name='Velaptor.UI.IWindow.UpdateFrequency'></a>

### UpdateFrequency 

Gets or sets the value of how often the update and render calls are invoked in the value of hertz.

```csharp
int UpdateFrequency { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.IWindow.Width'></a>

### Width 

Gets or sets the width of the window.

```csharp
uint Width { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.IWindow.WindowState'></a>

### WindowState 

Gets or sets the state of the window.

```csharp
Velaptor.StateOfWindow WindowState { get; set; }
```

#### Property Value
[StateOfWindow](Velaptor.StateOfWindow.md 'Velaptor.StateOfWindow')

<a name='Velaptor.UI.IWindow.WinResize'></a>

### WinResize 

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked every time the window is resized.

```csharp
System.Action<Velaptor.SizeU>? WinResize { get; set; }
```

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[SizeU](Velaptor.SizeU.md 'Velaptor.SizeU')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')
## Methods

<a name='Velaptor.UI.IWindow.Close()'></a>

### Close() 

Closes the window.

```csharp
void Close();
```

<a name='Velaptor.UI.IWindow.Show()'></a>

### Show() 

Shows the window.

```csharp
void Show();
```

<a name='Velaptor.UI.IWindow.ShowAsync(System.Action,System.Action)'></a>

### ShowAsync(Action, Action) 

Shows the window asynchronously.

```csharp
System.Threading.Tasks.Task ShowAsync(System.Action? afterStart=null, System.Action? afterUnload=null);
```
#### Parameters

<a name='Velaptor.UI.IWindow.ShowAsync(System.Action,System.Action).afterStart'></a>

`afterStart` [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

Executed after the application starts asynchronously.

<a name='Velaptor.UI.IWindow.ShowAsync(System.Action,System.Action).afterUnload'></a>

`afterUnload` [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

Executed after the window has been unloaded.

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
A [System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task') representing the result of the asynchronous operation.
