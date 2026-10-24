---
title: Velaptor.Batching.IBatcher
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Batching](Velaptor.Batching.md 'Velaptor\.Batching')

#### IBatcher Interface

Provides the ability to start and end the batch rendering process\.

```csharp
public interface IBatcher
```
## Properties

<a name='Velaptor.Batching.IBatcher.ClearColor'></a>

### ClearColor \{#Velaptor.Batching.IBatcher.ClearColor}

Gets or sets the color of the back buffer when cleared\.

```csharp
System.Drawing.Color ClearColor { get; set; }
```

#### Property Value
[System\.Drawing\.Color](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color 'System\.Drawing\.Color')

<a name='Velaptor.Batching.IBatcher.HasBegun'></a>

### HasBegun \{#Velaptor.Batching.IBatcher.HasBegun}

Gets a value indicating whether the batch process has begun\.

```csharp
bool HasBegun { get; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')
## Methods

<a name='Velaptor.Batching.IBatcher.Begin()'></a>

### Begin\(\) \{#Velaptor.Batching.IBatcher.Begin()}

Starts the batch rendering process\.  Must be called before invoking any render methods\.

```csharp
void Begin();
```

<a name='Velaptor.Batching.IBatcher.End()'></a>

### End\(\) \{#Velaptor.Batching.IBatcher.End()}

Ends the batch process\.  Calling this will perform the actual GPU render process\.

```csharp
void End();
```
