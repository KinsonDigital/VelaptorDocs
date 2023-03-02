#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](./Velaptor.Content.md 'Velaptor.Content')

## IContentUnloadable Interface

Provides the ability to unload content.

```csharp
public interface IContentUnloadable
```
### Methods

<a name='Velaptor.Content.IContentUnloadable.UnloadContent(Velaptor.Content.IContentLoader)'></a>

## IContentUnloadable.UnloadContent(IContentLoader) Method

Unloads the content using the given [contentLoader](./Velaptor.Content.IContentUnloadable.md#Velaptor.Content.IContentUnloadable.UnloadContent(Velaptor.Content.IContentLoader).contentLoader 'Velaptor.Content.IContentUnloadable.UnloadContent(Velaptor.Content.IContentLoader).contentLoader').

```csharp
void UnloadContent(Velaptor.Content.IContentLoader contentLoader);
```
#### Parameters

<a name='Velaptor.Content.IContentUnloadable.UnloadContent(Velaptor.Content.IContentLoader).contentLoader'></a>

`contentLoader` [IContentLoader](./Velaptor.Content.IContentLoader.md 'Velaptor.Content.IContentLoader')

Used to unload content.