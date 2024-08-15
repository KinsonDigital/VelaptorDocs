---
title: Velaptor.Batching.IBatcher
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Batching](Velaptor.Batching.md 'Velaptor.Batching')

#### IBatcher Interface

Provides the ability to start and end the batch rendering process.

```csharp
public interface IBatcher
```
## Properties

<a name='Velaptor.Batching.IBatcher.ClearColor'></a>

### ClearColor 

Gets or sets the color of the back buffer when cleared.

```csharp
System.Drawing.Color ClearColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.Batching.IBatcher.HasBegun'></a>

### HasBegun 

Gets a value indicating whether the batch process has begun.

```csharp
bool HasBegun { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')
## Methods

<a name='Velaptor.Batching.IBatcher.Begin()'></a>

### Begin() 

Starts the batch rendering process.  Must be called before invoking any render methods.

```csharp
void Begin();
```

<a name='Velaptor.Batching.IBatcher.Clear()'></a>

### Clear() 

Clears the buffers.

```csharp
void Clear();
```

#### Remarks
It is best to clear the buffer before rendering all the textures.  
This is to make sure smearing does not occur during texture movement or animation.

<a name='Velaptor.Batching.IBatcher.End()'></a>

### End() 

Ends the batch process.  Calling this will perform the actual GPU render process.

```csharp
void End();
```
