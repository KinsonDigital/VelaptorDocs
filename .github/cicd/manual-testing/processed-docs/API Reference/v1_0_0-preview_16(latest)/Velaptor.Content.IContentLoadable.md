#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](./Velaptor.Content.md 'Velaptor.Content')

## IContentLoadable Interface

Provides the ability to load content.

```csharp
public interface IContentLoadable
```

Derived  
&#8627; [ControlBase](./Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase')  
&#8627; [IControl](./Velaptor.UI.IControl.md 'Velaptor.UI.IControl')
### Properties

<a name='Velaptor.Content.IContentLoadable.IsLoaded'></a>

## IContentLoadable.IsLoaded Property

Gets a value indicating whether or not the content for an object is loaded.

```csharp
bool IsLoaded { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')
### Methods

<a name='Velaptor.Content.IContentLoadable.LoadContent()'></a>

## IContentLoadable.LoadContent() Method

Loads the content for an object.

```csharp
void LoadContent();
```

<a name='Velaptor.Content.IContentLoadable.UnloadContent()'></a>

## IContentLoadable.UnloadContent() Method

Unloads the content for an object.

```csharp
void UnloadContent();
```