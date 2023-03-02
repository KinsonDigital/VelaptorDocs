#### [Velaptor](index.md 'index')
### [Velaptor](Velaptor.md 'Velaptor')

## FrameTime Struct

Holds timing information for a loop iteration.

```csharp
public readonly struct FrameTime :
System.IEquatable<Velaptor.FrameTime>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[FrameTime](Velaptor.FrameTime.md 'Velaptor.FrameTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')
### Properties

<a name='Velaptor.FrameTime.ElapsedTime'></a>

## FrameTime.ElapsedTime Property

Gets the total time that has passed for the current frame.

```csharp
public System.TimeSpan ElapsedTime { get; set; }
```

#### Property Value
[System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')

<a name='Velaptor.FrameTime.TotalTime'></a>

## FrameTime.TotalTime Property

Gets the total time that the entire application has been running.

```csharp
public System.TimeSpan TotalTime { get; set; }
```

#### Property Value
[System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')