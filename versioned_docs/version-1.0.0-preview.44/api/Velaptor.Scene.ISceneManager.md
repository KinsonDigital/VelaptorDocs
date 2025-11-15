---
title: Velaptor.Scene.ISceneManager
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Scene](Velaptor.Scene.md 'Velaptor.Scene')

#### ISceneManager Interface

Manages scenes by loading and unloading content, updating, and rendering scenes.

```csharp
public interface ISceneManager :
Velaptor.IUpdatable,
Velaptor.IDrawable,
System.IDisposable
```

Implements [IUpdatable](Velaptor.IUpdatable.md 'Velaptor.IUpdatable'), [IDrawable](Velaptor.IDrawable.md 'Velaptor.IDrawable'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')
## Properties

<a name='Velaptor.Scene.ISceneManager.CurrentScene'></a>

### CurrentScene 

Gets the current scene.

```csharp
Velaptor.Scene.IScene? CurrentScene { get; }
```

#### Property Value
[IScene](Velaptor.Scene.IScene.md 'Velaptor.Scene.IScene')

<a name='Velaptor.Scene.ISceneManager.CurrentSceneIndex'></a>

### CurrentSceneIndex 

Gets the index of the current scene.

```csharp
int CurrentSceneIndex { get; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Scene.ISceneManager.InActiveScenes'></a>

### InActiveScenes 

Gets a list of all the [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')'s for the scenes that are inactive.

```csharp
System.Collections.Generic.IReadOnlyCollection<System.Guid> InActiveScenes { get; }
```

#### Property Value
[System.Collections.Generic.IReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')

<a name='Velaptor.Scene.ISceneManager.IsLoaded'></a>

### IsLoaded 

Gets a value indicating whether the scene manager has been loaded.

```csharp
bool IsLoaded { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

#### Remarks
This does not mean that the content in the individual scenes have been loaded.

<a name='Velaptor.Scene.ISceneManager.TotalScenes'></a>

### TotalScenes 

Gets the total number of scenes.

```csharp
int TotalScenes { get; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.Scene.ISceneManager.UsesNavigationWrapping'></a>

### UsesNavigationWrapping 

Gets or sets a value indicating whether navigation wrapping is used when navigating past the first or list scenes.

```csharp
bool UsesNavigationWrapping { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')
## Methods

<a name='Velaptor.Scene.ISceneManager.AddScene(Velaptor.Scene.IScene,bool)'></a>

### AddScene(IScene, bool) 

Adds the given scene and sets it as active or inactive.

```csharp
void AddScene(Velaptor.Scene.IScene scene, bool setToActive);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.AddScene(Velaptor.Scene.IScene,bool).scene'></a>

`scene` [IScene](Velaptor.Scene.IScene.md 'Velaptor.Scene.IScene')

The scene to add.

<a name='Velaptor.Scene.ISceneManager.AddScene(Velaptor.Scene.IScene,bool).setToActive'></a>

`setToActive` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

When set to `true`, the scene being added will be set to active and  
all other scenes will bet set to inactive.

<a name='Velaptor.Scene.ISceneManager.AddScene(Velaptor.Scene.IScene)'></a>

### AddScene(IScene) 

Adds the given scene.

```csharp
void AddScene(Velaptor.Scene.IScene scene);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.AddScene(Velaptor.Scene.IScene).scene'></a>

`scene` [IScene](Velaptor.Scene.IScene.md 'Velaptor.Scene.IScene')

The scene to add.

#### Remarks
The scene will not be activated when added using this method.

<a name='Velaptor.Scene.ISceneManager.LoadContent()'></a>

### LoadContent() 

Loads the content for the manager and the current scene.

```csharp
void LoadContent();
```

<a name='Velaptor.Scene.ISceneManager.NextScene()'></a>

### NextScene() 

Moves to the next scene.

```csharp
void NextScene();
```

<a name='Velaptor.Scene.ISceneManager.PreviousScene()'></a>

### PreviousScene() 

Moves to the previous scene.

```csharp
void PreviousScene();
```

<a name='Velaptor.Scene.ISceneManager.RemoveScene(System.Guid)'></a>

### RemoveScene(Guid) 

Removes the scene that matches the given [sceneId](Velaptor.Scene.ISceneManager.md#sceneid 'Velaptor.Scene.ISceneManager.RemoveScene(System.Guid).sceneId').

```csharp
void RemoveScene(System.Guid sceneId);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.RemoveScene(System.Guid).sceneId'></a>

`sceneId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The ID of the scene to remove.

<a name='Velaptor.Scene.ISceneManager.Resize(Velaptor.SizeU)'></a>

### Resize(SizeU) 

Updates the size of the window for each scene.

```csharp
void Resize(Velaptor.SizeU size);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.Resize(Velaptor.SizeU).size'></a>

`size` [SizeU](Velaptor.SizeU.md 'Velaptor.SizeU')

The new size.

<a name='Velaptor.Scene.ISceneManager.SceneExists(System.Guid)'></a>

### SceneExists(Guid) 

Returns a value indicating whether a scene exists that matches the given [id](Velaptor.Scene.ISceneManager.md#id 'Velaptor.Scene.ISceneManager.SceneExists(System.Guid).id').

```csharp
bool SceneExists(System.Guid id);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.SceneExists(System.Guid).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The ID of the scene.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
`true` if a scene exists with the given ID.

<a name='Velaptor.Scene.ISceneManager.SetSceneAsActive(System.Guid)'></a>

### SetSceneAsActive(Guid) 

Sets a scene that matches the given [id](Velaptor.Scene.ISceneManager.md#id 'Velaptor.Scene.ISceneManager.SetSceneAsActive(System.Guid).id') to be the active scene.

```csharp
void SetSceneAsActive(System.Guid id);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.SetSceneAsActive(System.Guid).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The ID of the scene.

#### Remarks
This will set all the other scenes to inactive.

<a name='Velaptor.Scene.ISceneManager.UnloadContent()'></a>

### UnloadContent() 

Unloads the scene manager content and added scenes.

```csharp
void UnloadContent();
```
