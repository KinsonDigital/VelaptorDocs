---
title: Velaptor.Scene.IScene
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Scene](Velaptor.Scene.md 'Velaptor.Scene')

#### IScene Interface

Represents a single scene that can be rendered to the screen.

```csharp
public interface IScene :
Velaptor.IUpdatable,
Velaptor.IDrawable,
System.IDisposable
```

Derived  
&#8627; [SceneBase](Velaptor.Scene.SceneBase.md 'Velaptor.Scene.SceneBase')

Implements [IUpdatable](Velaptor.IUpdatable.md 'Velaptor.IUpdatable'), [IDrawable](Velaptor.IDrawable.md 'Velaptor.IDrawable'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')
## Properties

<a name='Velaptor.Scene.IScene.Id'></a>

### Id 

Gets the unique ID of the scene.

```csharp
System.Guid Id { get; }
```

#### Property Value
[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

<a name='Velaptor.Scene.IScene.IsLoaded'></a>

### IsLoaded 

Gets a value indicating whether the scene has been loaded.

```csharp
bool IsLoaded { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Scene.IScene.Name'></a>

### Name 

Gets the name of the scene.

```csharp
string Name { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Scene.IScene.WindowCenter'></a>

### WindowCenter 

Gets the center of the window.

```csharp
System.Drawing.Point WindowCenter { get; }
```

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.Scene.IScene.WindowSize'></a>

### WindowSize 

Gets the size of the window.

```csharp
Velaptor.SizeU WindowSize { get; }
```

#### Property Value
[SizeU](Velaptor.SizeU.md 'Velaptor.SizeU')
## Methods

<a name='Velaptor.Scene.IScene.LoadContent()'></a>

### LoadContent() 

Loads the scene content.

```csharp
void LoadContent();
```

<a name='Velaptor.Scene.IScene.Resize(Velaptor.SizeU)'></a>

### Resize(SizeU) 

Updates the [WindowSize](Velaptor.Scene.IScene.md#windowsize 'Velaptor.Scene.IScene.WindowSize').

```csharp
void Resize(Velaptor.SizeU size);
```
#### Parameters

<a name='Velaptor.Scene.IScene.Resize(Velaptor.SizeU).size'></a>

`size` [SizeU](Velaptor.SizeU.md 'Velaptor.SizeU')

The new size.

<a name='Velaptor.Scene.IScene.UnloadContent()'></a>

### UnloadContent() 

Unloads the scene's content.

```csharp
void UnloadContent();
```
