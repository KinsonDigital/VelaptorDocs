#### [Velaptor](index.md 'index')
### [Velaptor.Scene](Velaptor.Scene.md 'Velaptor.Scene')

## ISceneManager Interface

Manages scenes by loading and unloading content, updating, and rendering scenes.

```csharp
public interface ISceneManager :
Velaptor.IUpdatable,
Velaptor.IDrawable,
System.IDisposable
```

Implements [IUpdatable](Velaptor.IUpdatable.md 'Velaptor.IUpdatable'), [IDrawable](Velaptor.IDrawable.md 'Velaptor.IDrawable'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')
### Properties

<a name='Velaptor.Scene.ISceneManager.CurrentScene'></a>

## ISceneManager.CurrentScene Property

Gets the current scene.

```csharp
Velaptor.Scene.IScene? CurrentScene { get; }
```

#### Property Value
[IScene](Velaptor.Scene.IScene.md 'Velaptor.Scene.IScene')

<a name='Velaptor.Scene.ISceneManager.InActiveScenes'></a>

## ISceneManager.InActiveScenes Property

Gets a list of all the [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')'s for the scenes that are inactive.

```csharp
System.Collections.Generic.IReadOnlyCollection<System.Guid> InActiveScenes { get; }
```

#### Property Value
[System.Collections.Generic.IReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')
### Methods

<a name='Velaptor.Scene.ISceneManager.AddScene(Velaptor.Scene.IScene,bool)'></a>

## ISceneManager.AddScene(IScene, bool) Method

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

## ISceneManager.AddScene(IScene) Method

Adds the given scene.

```csharp
void AddScene(Velaptor.Scene.IScene scene);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.AddScene(Velaptor.Scene.IScene).scene'></a>

`scene` [IScene](Velaptor.Scene.IScene.md 'Velaptor.Scene.IScene')

The scene to add.

### Remarks
The scene will not be activated when added using this method.

<a name='Velaptor.Scene.ISceneManager.LoadContent()'></a>

## ISceneManager.LoadContent() Method

Loads the content for the manager and the current scene.

```csharp
void LoadContent();
```

<a name='Velaptor.Scene.ISceneManager.NextScene()'></a>

## ISceneManager.NextScene() Method

Moves to the next scene.

```csharp
void NextScene();
```

<a name='Velaptor.Scene.ISceneManager.PreviousScene()'></a>

## ISceneManager.PreviousScene() Method

Moves to the previous scene.

```csharp
void PreviousScene();
```

<a name='Velaptor.Scene.ISceneManager.RemoveScene(System.Guid)'></a>

## ISceneManager.RemoveScene(Guid) Method

Removes the scene that matches the given [sceneId](Velaptor.Scene.ISceneManager.md#Velaptor.Scene.ISceneManager.RemoveScene(System.Guid).sceneId 'Velaptor.Scene.ISceneManager.RemoveScene(System.Guid).sceneId').

```csharp
void RemoveScene(System.Guid sceneId);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.RemoveScene(System.Guid).sceneId'></a>

`sceneId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The ID of the scene to remove.

<a name='Velaptor.Scene.ISceneManager.SceneExists(System.Guid)'></a>

## ISceneManager.SceneExists(Guid) Method

Returns a value indicating whether or not a scene exists that matches the given [id](Velaptor.Scene.ISceneManager.md#Velaptor.Scene.ISceneManager.SceneExists(System.Guid).id 'Velaptor.Scene.ISceneManager.SceneExists(System.Guid).id').

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

## ISceneManager.SetSceneAsActive(Guid) Method

Sets a scene that matches the given [id](Velaptor.Scene.ISceneManager.md#Velaptor.Scene.ISceneManager.SetSceneAsActive(System.Guid).id 'Velaptor.Scene.ISceneManager.SetSceneAsActive(System.Guid).id') to be the active scene.

```csharp
void SetSceneAsActive(System.Guid id);
```
#### Parameters

<a name='Velaptor.Scene.ISceneManager.SetSceneAsActive(System.Guid).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The ID of the scene.

### Remarks
This will set all of the other scenes to inactive.

<a name='Velaptor.Scene.ISceneManager.UnloadContent()'></a>

## ISceneManager.UnloadContent() Method

Unloads the scene manager content and added scenes.

```csharp
void UnloadContent();
```