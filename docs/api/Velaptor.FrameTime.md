---
title: Velaptor.FrameTime
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor](Velaptor.md 'Velaptor')

#### FrameTime Struct

Holds timing information for a loop iteration\.

```csharp
public readonly record struct FrameTime : System.IEquatable<Velaptor.FrameTime>
```

Implements [System\.IEquatable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1 'System\.IEquatable\`1')[FrameTime](Velaptor.FrameTime.md 'Velaptor\.FrameTime')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1 'System\.IEquatable\`1')
## Properties

<a name='Velaptor.FrameTime.ElapsedTime'></a>

### ElapsedTime 

Gets the total time that has passed for the current frame\.

```csharp
public System.TimeSpan ElapsedTime { get; init; }
```

#### Property Value
[System\.TimeSpan](https://learn.microsoft.com/en-us/dotnet/api/system.timespan 'System\.TimeSpan')

<a name='Velaptor.FrameTime.TotalTime'></a>

### TotalTime 

Gets the total time that the entire application has been running\.

```csharp
public System.TimeSpan TotalTime { get; init; }
```

#### Property Value
[System\.TimeSpan](https://learn.microsoft.com/en-us/dotnet/api/system.timespan 'System\.TimeSpan')
