---
title: Velaptor.Scene.SceneBase
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Scene](Velaptor.Scene.md 'Velaptor.Scene')

#### SceneBase Class

A base scene to be used for creating new custom scenes.

```csharp
public abstract class SceneBase :
Velaptor.Scene.IScene,
Velaptor.IUpdatable,
Velaptor.IDrawable,
System.IDisposable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → SceneBase

Implements [IScene](Velaptor.Scene.IScene.md 'Velaptor.Scene.IScene'), [IUpdatable](Velaptor.IUpdatable.md 'Velaptor.IUpdatable'), [IDrawable](Velaptor.IDrawable.md 'Velaptor.IDrawable'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')
## Properties

<a name='Velaptor.Scene.SceneBase.ContentLoader'></a>

### ContentLoader 

Gets the content loader.

```csharp
public Velaptor.Content.IContentLoader ContentLoader { get; }
```

Implements [ContentLoader](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.ContentLoader 'Velaptor.Scene.IScene.ContentLoader')

#### Property Value
[IContentLoader](Velaptor.Content.IContentLoader.md 'Velaptor.Content.IContentLoader')

<a name='Velaptor.Scene.SceneBase.Controls'></a>

### Controls 

Gets the list of controls that have been added to the scene.

```csharp
public System.Collections.Generic.IReadOnlyList<Velaptor.UI.IControl> Controls { get; }
```

#### Property Value
[System.Collections.Generic.IReadOnlyList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyList-1 'System.Collections.Generic.IReadOnlyList`1')[IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyList-1 'System.Collections.Generic.IReadOnlyList`1')

<a name='Velaptor.Scene.SceneBase.Id'></a>

### Id 

Gets the unique ID of the scene.

```csharp
public System.Guid Id { get; }
```

Implements [Id](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.Id 'Velaptor.Scene.IScene.Id')

#### Property Value
[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

<a name='Velaptor.Scene.SceneBase.IsLoaded'></a>

### IsLoaded 

Gets the name of the scene.

```csharp
public bool IsLoaded { get; set; }
```

Implements [IsLoaded](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.IsLoaded 'Velaptor.Scene.IScene.IsLoaded')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Scene.SceneBase.Name'></a>

### Name 

Gets the name of the scene.

```csharp
public string Name { get; set; }
```

Implements [Name](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.Name 'Velaptor.Scene.IScene.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Scene.SceneBase.WindowCenter'></a>

### WindowCenter 

Gets the center of the window.

```csharp
public System.Drawing.Point WindowCenter { get; }
```

Implements [WindowCenter](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.WindowCenter 'Velaptor.Scene.IScene.WindowCenter')

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.Scene.SceneBase.WindowSize'></a>

### WindowSize 

Gets the size of the window.

```csharp
public Velaptor.SizeU WindowSize { get; set; }
```

Implements [WindowSize](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.WindowSize 'Velaptor.Scene.IScene.WindowSize')

#### Property Value
[SizeU](Velaptor.SizeU.md 'Velaptor.SizeU')
## Methods

<a name='Velaptor.Scene.SceneBase.AddControl(Velaptor.UI.IControl)'></a>

### AddControl(IControl) 

Adds a control to the scene to be updated and rendered.

```csharp
public void AddControl(Velaptor.UI.IControl control);
```
#### Parameters

<a name='Velaptor.Scene.SceneBase.AddControl(Velaptor.UI.IControl).control'></a>

`control` [IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl')

The control to add to the scene.

Implements [AddControl(IControl)](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.AddControl(Velaptor.UI.IControl) 'Velaptor.Scene.IScene.AddControl(Velaptor.UI.IControl)')

<a name='Velaptor.Scene.SceneBase.Dispose()'></a>

### Dispose() 

```csharp
public void Dispose();
```

Implements [Dispose()](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable.Dispose 'System.IDisposable.Dispose')

<a name='Velaptor.Scene.SceneBase.LoadContent()'></a>

### LoadContent() 

Loads the scene content.

```csharp
public virtual void LoadContent();
```

Implements [LoadContent()](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.LoadContent() 'Velaptor.Scene.IScene.LoadContent()')

<a name='Velaptor.Scene.SceneBase.RemoveControl(Velaptor.UI.IControl)'></a>

### RemoveControl(IControl) 

Removes the given [control](Velaptor.Scene.SceneBase.md#Velaptor.Scene.SceneBase.RemoveControl(Velaptor.UI.IControl).control 'Velaptor.Scene.SceneBase.RemoveControl(Velaptor.UI.IControl).control') from the scene.

```csharp
public void RemoveControl(Velaptor.UI.IControl control);
```
#### Parameters

<a name='Velaptor.Scene.SceneBase.RemoveControl(Velaptor.UI.IControl).control'></a>

`control` [IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl')

The control to remove.

Implements [RemoveControl(IControl)](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.RemoveControl(Velaptor.UI.IControl) 'Velaptor.Scene.IScene.RemoveControl(Velaptor.UI.IControl)')

<a name='Velaptor.Scene.SceneBase.Render()'></a>

### Render() 

Renders the object.

```csharp
public virtual void Render();
```

Implements [Render()](Velaptor.IDrawable.md#Velaptor.IDrawable.Render() 'Velaptor.IDrawable.Render()')

<a name='Velaptor.Scene.SceneBase.UnloadContent()'></a>

### UnloadContent() 

Unloads the scene's content.

```csharp
public virtual void UnloadContent();
```

Implements [UnloadContent()](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.UnloadContent() 'Velaptor.Scene.IScene.UnloadContent()')

<a name='Velaptor.Scene.SceneBase.Update(Velaptor.FrameTime)'></a>

### Update(FrameTime) 

Updates the object.

```csharp
public virtual void Update(Velaptor.FrameTime frameTime);
```
#### Parameters

<a name='Velaptor.Scene.SceneBase.Update(Velaptor.FrameTime).frameTime'></a>

`frameTime` [FrameTime](Velaptor.FrameTime.md 'Velaptor.FrameTime')

The amount of time that has passed for the current frame.

Implements [Update(FrameTime)](Velaptor.IUpdatable.md#Velaptor.IUpdatable.Update(Velaptor.FrameTime) 'Velaptor.IUpdatable.Update(Velaptor.FrameTime)')