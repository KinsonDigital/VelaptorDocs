#### [Velaptor](index.md 'index')
### [Velaptor.Scene](Velaptor.Scene.md 'Velaptor.Scene')

## IScene Interface

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
### Properties

<a name='Velaptor.Scene.IScene.ContentLoader'></a>

## IScene.ContentLoader Property

Gets the content loader.

```csharp
Velaptor.Content.IContentLoader ContentLoader { get; }
```

#### Property Value
[IContentLoader](Velaptor.Content.IContentLoader.md 'Velaptor.Content.IContentLoader')

<a name='Velaptor.Scene.IScene.Id'></a>

## IScene.Id Property

Gets the unique ID of the scene.

```csharp
System.Guid Id { get; }
```

#### Property Value
[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

<a name='Velaptor.Scene.IScene.IsLoaded'></a>

## IScene.IsLoaded Property

Gets a value indicating whether or not the scene has been loaded.

```csharp
bool IsLoaded { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Scene.IScene.Name'></a>

## IScene.Name Property

Gets the name of the scene.

```csharp
string Name { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Scene.IScene.WindowCenter'></a>

## IScene.WindowCenter Property

Gets the center of the window.

```csharp
System.Drawing.Point WindowCenter { get; }
```

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.Scene.IScene.WindowSize'></a>

## IScene.WindowSize Property

Gets the size of the window.

```csharp
Velaptor.SizeU WindowSize { get; }
```

#### Property Value
[SizeU](Velaptor.SizeU.md 'Velaptor.SizeU')
### Methods

<a name='Velaptor.Scene.IScene.AddControl(Velaptor.UI.IControl)'></a>

## IScene.AddControl(IControl) Method

Adds a control to the scene to be updated and rendered.

```csharp
void AddControl(Velaptor.UI.IControl control);
```
#### Parameters

<a name='Velaptor.Scene.IScene.AddControl(Velaptor.UI.IControl).control'></a>

`control` [IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl')

The control to add to the scene.

<a name='Velaptor.Scene.IScene.LoadContent()'></a>

## IScene.LoadContent() Method

Loads the scene content.

```csharp
void LoadContent();
```

<a name='Velaptor.Scene.IScene.RemoveControl(Velaptor.UI.IControl)'></a>

## IScene.RemoveControl(IControl) Method

Removes the given [control](Velaptor.Scene.IScene.md#Velaptor.Scene.IScene.RemoveControl(Velaptor.UI.IControl).control 'Velaptor.Scene.IScene.RemoveControl(Velaptor.UI.IControl).control') from the scene.

```csharp
void RemoveControl(Velaptor.UI.IControl control);
```
#### Parameters

<a name='Velaptor.Scene.IScene.RemoveControl(Velaptor.UI.IControl).control'></a>

`control` [IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl')

The control to remove.

<a name='Velaptor.Scene.IScene.UnloadContent()'></a>

## IScene.UnloadContent() Method

Unloads the scene's content.

```csharp
void UnloadContent();
```