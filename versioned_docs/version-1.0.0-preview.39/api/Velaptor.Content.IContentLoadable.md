---
title: Velaptor.Content.IContentLoadable
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### IContentLoadable Interface

Provides the ability to load content.

```csharp
public interface IContentLoadable
```
## Properties

<a name='Velaptor.Content.IContentLoadable.IsLoaded'></a>

### IsLoaded 

Gets a value indicating whether the content for an object is loaded.

```csharp
bool IsLoaded { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')
## Methods

<a name='Velaptor.Content.IContentLoadable.LoadContent()'></a>

### LoadContent() 

Loads the content for an object.

```csharp
void LoadContent();
```

<a name='Velaptor.Content.IContentLoadable.UnloadContent()'></a>

### UnloadContent() 

Unloads the content for an object.

```csharp
void UnloadContent();
```
