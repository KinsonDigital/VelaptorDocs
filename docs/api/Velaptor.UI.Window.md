---
title: Velaptor.UI.Window
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.UI](Velaptor.UI.md 'Velaptor\.UI')

#### Window Class

A system window where graphics can be rendered\.

```csharp
public abstract class Window : Velaptor.UI.IWindow
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → Window

Implements [IWindow](Velaptor.UI.IWindow.md 'Velaptor\.UI\.IWindow')
## Properties

<a name='Velaptor.UI.Window.AutoSceneLoading'></a>

### AutoSceneLoading 

Gets or sets a value indicating whether the scenes should be automatically loaded\.

```csharp
public bool AutoSceneLoading { get; set; }
```

Implements [AutoSceneLoading](Velaptor.UI.IWindow.md#autosceneloading 'Velaptor\.UI\.IWindow\.AutoSceneLoading')

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.UI.Window.AutoSceneRendering'></a>

### AutoSceneRendering 

Gets or sets a value indicating whether the scenes should be automatically rendered\.

```csharp
public bool AutoSceneRendering { get; set; }
```

Implements [AutoSceneRendering](Velaptor.UI.IWindow.md#autoscenerendering 'Velaptor\.UI\.IWindow\.AutoSceneRendering')

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.UI.Window.AutoSceneUnloading'></a>

### AutoSceneUnloading 

Gets or sets a value indicating whether the scenes should be automatically unloaded\.

```csharp
public bool AutoSceneUnloading { get; set; }
```

Implements [AutoSceneUnloading](Velaptor.UI.IWindow.md#autosceneunloading 'Velaptor\.UI\.IWindow\.AutoSceneUnloading')

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.UI.Window.AutoSceneUpdating'></a>

### AutoSceneUpdating 

Gets or sets a value indicating whether the scenes should be automatically updated\.

```csharp
public bool AutoSceneUpdating { get; set; }
```

Implements [AutoSceneUpdating](Velaptor.UI.IWindow.md#autosceneupdating 'Velaptor\.UI\.IWindow\.AutoSceneUpdating')

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.UI.Window.Draw'></a>

### Draw 

Gets or sets the [System\.Action](https://learn.microsoft.com/en-us/dotnet/api/system.action 'System\.Action') delegate that is invoked per frame for rendering\.

```csharp
public System.Action<Velaptor.FrameTime>? Draw { get; set; }
```

Implements [Draw](Velaptor.UI.IWindow.md#draw 'Velaptor\.UI\.IWindow\.Draw')

#### Property Value
[System\.Action&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')[FrameTime](Velaptor.FrameTime.md 'Velaptor\.FrameTime')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')

<a name='Velaptor.UI.Window.Fps'></a>

### Fps 

Gets the frames per second that the main loop is running at\.

```csharp
public float Fps { get; }
```

Implements [Fps](Velaptor.UI.IWindow.md#fps 'Velaptor\.UI\.IWindow\.Fps')

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

<a name='Velaptor.UI.Window.FpsDisplayColor'></a>

### FpsDisplayColor 

Gets or sets the color of the FPS display\.

```csharp
public System.Drawing.Color FpsDisplayColor { get; set; }
```

#### Property Value
[System\.Drawing\.Color](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color 'System\.Drawing\.Color')

<a name='Velaptor.UI.Window.Height'></a>

### Height 

Gets or sets the height of the window\.

```csharp
public uint Height { get; set; }
```

Implements [Height](Velaptor.UI.IWindow.md#height 'Velaptor\.UI\.IWindow\.Height')

#### Property Value
[System\.UInt32](https://learn.microsoft.com/en-us/dotnet/api/system.uint32 'System\.UInt32')

<a name='Velaptor.UI.Window.Initialize'></a>

### Initialize 

Gets or sets the [System\.Action](https://learn.microsoft.com/en-us/dotnet/api/system.action 'System\.Action') delegate to be invoked one time to initialize the window\.

```csharp
public System.Action? Initialize { get; set; }
```

Implements [Initialize](Velaptor.UI.IWindow.md#initialize 'Velaptor\.UI\.IWindow\.Initialize')

#### Property Value
[System\.Action](https://learn.microsoft.com/en-us/dotnet/api/system.action 'System\.Action')

<a name='Velaptor.UI.Window.Initialized'></a>

### Initialized 

Gets a value indicating whether the window has been initialized\.

```csharp
public bool Initialized { get; }
```

Implements [Initialized](Velaptor.UI.IWindow.md#initialized 'Velaptor\.UI\.IWindow\.Initialized')

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.UI.Window.MouseCursorVisible'></a>

### MouseCursorVisible 

Gets or sets a value indicating whether the mouse cursor is visible\.

```csharp
public bool MouseCursorVisible { get; set; }
```

Implements [MouseCursorVisible](Velaptor.UI.IWindow.md#mousecursorvisible 'Velaptor\.UI\.IWindow\.MouseCursorVisible')

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.UI.Window.Position'></a>

### Position 

Gets or sets the position of the window\.

```csharp
public System.Numerics.Vector2 Position { get; set; }
```

Implements [Position](Velaptor.UI.IWindow.md#position 'Velaptor\.UI\.IWindow\.Position')

#### Property Value
[System\.Numerics\.Vector2](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector2 'System\.Numerics\.Vector2')

<a name='Velaptor.UI.Window.SceneManager'></a>

### SceneManager 

Gets the scene manager\.

```csharp
public Velaptor.Scene.ISceneManager SceneManager { get; }
```

Implements [SceneManager](Velaptor.UI.IWindow.md#scenemanager 'Velaptor\.UI\.IWindow\.SceneManager')

#### Property Value
[ISceneManager](Velaptor.Scene.ISceneManager.md 'Velaptor\.Scene\.ISceneManager')

<a name='Velaptor.UI.Window.Title'></a>

### Title 

Gets or sets the title of the window\.

```csharp
public string Title { get; set; }
```

Implements [Title](Velaptor.UI.IWindow.md#title 'Velaptor\.UI\.IWindow\.Title')

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.UI.Window.TypeOfBorder'></a>

### TypeOfBorder 

Gets or sets the type of border that the [IWindow](Velaptor.UI.IWindow.md 'Velaptor\.UI\.IWindow') will have\.

```csharp
public Velaptor.WindowBorder TypeOfBorder { get; set; }
```

Implements [TypeOfBorder](Velaptor.UI.IWindow.md#typeofborder 'Velaptor\.UI\.IWindow\.TypeOfBorder')

#### Property Value
[WindowBorder](Velaptor.WindowBorder.md 'Velaptor\.WindowBorder')

<a name='Velaptor.UI.Window.Uninitialize'></a>

### Uninitialize 

Gets or sets the [System\.Action](https://learn.microsoft.com/en-us/dotnet/api/system.action 'System\.Action') delegate to be invoked one time to uninitialize the window\.

```csharp
public System.Action? Uninitialize { get; set; }
```

Implements [Uninitialize](Velaptor.UI.IWindow.md#uninitialize 'Velaptor\.UI\.IWindow\.Uninitialize')

#### Property Value
[System\.Action](https://learn.microsoft.com/en-us/dotnet/api/system.action 'System\.Action')

<a name='Velaptor.UI.Window.Update'></a>

### Update 

Gets or sets the [System\.Action](https://learn.microsoft.com/en-us/dotnet/api/system.action 'System\.Action') delegate that is invoked per frame for updating\.

```csharp
public System.Action<Velaptor.FrameTime>? Update { get; set; }
```

Implements [Update](Velaptor.UI.IWindow.md#update 'Velaptor\.UI\.IWindow\.Update')

#### Property Value
[System\.Action&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')[FrameTime](Velaptor.FrameTime.md 'Velaptor\.FrameTime')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')

<a name='Velaptor.UI.Window.UpdateFrequency'></a>

### UpdateFrequency 

Gets or sets the value of how often the update and render calls are invoked in the value of hertz\.

```csharp
public int UpdateFrequency { get; set; }
```

Implements [UpdateFrequency](Velaptor.UI.IWindow.md#updatefrequency 'Velaptor\.UI\.IWindow\.UpdateFrequency')

#### Property Value
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

<a name='Velaptor.UI.Window.Width'></a>

### Width 

Gets or sets the width of the window\.

```csharp
public uint Width { get; set; }
```

Implements [Width](Velaptor.UI.IWindow.md#width 'Velaptor\.UI\.IWindow\.Width')

#### Property Value
[System\.UInt32](https://learn.microsoft.com/en-us/dotnet/api/system.uint32 'System\.UInt32')

<a name='Velaptor.UI.Window.WindowState'></a>

### WindowState 

Gets or sets the state of the window\.

```csharp
public Velaptor.StateOfWindow WindowState { get; set; }
```

Implements [WindowState](Velaptor.UI.IWindow.md#windowstate 'Velaptor\.UI\.IWindow\.WindowState')

#### Property Value
[StateOfWindow](Velaptor.StateOfWindow.md 'Velaptor\.StateOfWindow')

<a name='Velaptor.UI.Window.WinResize'></a>

### WinResize 

Gets or sets the [System\.Action](https://learn.microsoft.com/en-us/dotnet/api/system.action 'System\.Action') delegate that is invoked every time the window is resized\.

```csharp
public System.Action<Velaptor.SizeU>? WinResize { get; set; }
```

Implements [WinResize](Velaptor.UI.IWindow.md#winresize 'Velaptor\.UI\.IWindow\.WinResize')

#### Property Value
[System\.Action&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')[SizeU](Velaptor.SizeU.md 'Velaptor\.SizeU')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')
## Methods

<a name='Velaptor.UI.Window.Close()'></a>

### Close\(\) 

Closes the window\.

```csharp
public void Close();
```

Implements [Close\(\)](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Close() 'Velaptor\.UI\.IWindow\.Close\(\)')

<a name='Velaptor.UI.Window.Show()'></a>

### Show\(\) 

Shows the window\.

```csharp
public void Show();
```

Implements [Show\(\)](Velaptor.UI.IWindow.md#Velaptor.UI.IWindow.Show() 'Velaptor\.UI\.IWindow\.Show\(\)')
