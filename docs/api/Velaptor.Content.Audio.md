---
title: Velaptor.Content.Audio
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### Audio Class

A single audio that can be played, paused etc.

```csharp
public sealed class Audio :
Velaptor.Content.IAudio,
Velaptor.Content.IContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → Audio

Implements [IAudio](Velaptor.Content.IAudio.md 'Velaptor.Content.IAudio'), [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
## Properties

<a name='Velaptor.Content.Audio.BufferType'></a>

### BufferType 

A single audio that can be played, paused etc.

```csharp
public Velaptor.Content.AudioBuffer BufferType { get; }
```

Implements [BufferType](Velaptor.Content.IAudio.md#buffertype 'Velaptor.Content.IAudio.BufferType')

#### Property Value
[AudioBuffer](Velaptor.Content.AudioBuffer.md 'Velaptor.Content.AudioBuffer')

<a name='Velaptor.Content.Audio.FilePath'></a>

### FilePath 

A single audio that can be played, paused etc.

```csharp
public string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IAudio.md#filepath 'Velaptor.Content.IAudio.FilePath'), [FilePath](Velaptor.Content.IContent.md#filepath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Audio.Id'></a>

### Id 

Gets the unique ID of the audio.

```csharp
public uint Id { get; }
```

Implements [Id](Velaptor.Content.IAudio.md#id 'Velaptor.Content.IAudio.Id')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Audio.IsLooping'></a>

### IsLooping 

A single audio that can be played, paused etc.

```csharp
public bool IsLooping { get; set; }
```

Implements [IsLooping](Velaptor.Content.IAudio.md#islooping 'Velaptor.Content.IAudio.IsLooping')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Audio.IsPaused'></a>

### IsPaused 

A single audio that can be played, paused etc.

```csharp
public bool IsPaused { get; }
```

Implements [IsPaused](Velaptor.Content.IAudio.md#ispaused 'Velaptor.Content.IAudio.IsPaused')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Audio.IsPlaying'></a>

### IsPlaying 

A single audio that can be played, paused etc.

```csharp
public bool IsPlaying { get; }
```

Implements [IsPlaying](Velaptor.Content.IAudio.md#isplaying 'Velaptor.Content.IAudio.IsPlaying')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Audio.IsStopped'></a>

### IsStopped 

A single audio that can be played, paused etc.

```csharp
public bool IsStopped { get; }
```

Implements [IsStopped](Velaptor.Content.IAudio.md#isstopped 'Velaptor.Content.IAudio.IsStopped')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Audio.Length'></a>

### Length 

A single audio that can be played, paused etc.

```csharp
public System.TimeSpan Length { get; }
```

Implements [Length](Velaptor.Content.IAudio.md#length 'Velaptor.Content.IAudio.Length')

#### Property Value
[System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')

<a name='Velaptor.Content.Audio.Name'></a>

### Name 

A single audio that can be played, paused etc.

```csharp
public string Name { get; }
```

Implements [Name](Velaptor.Content.IAudio.md#name 'Velaptor.Content.IAudio.Name'), [Name](Velaptor.Content.IContent.md#name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Audio.PlaySpeed'></a>

### PlaySpeed 

A single audio that can be played, paused etc.

```csharp
public float PlaySpeed { get; set; }
```

Implements [PlaySpeed](Velaptor.Content.IAudio.md#playspeed 'Velaptor.Content.IAudio.PlaySpeed')

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

<a name='Velaptor.Content.Audio.Position'></a>

### Position 

A single audio that can be played, paused etc.

```csharp
public System.TimeSpan Position { get; }
```

Implements [Position](Velaptor.Content.IAudio.md#position 'Velaptor.Content.IAudio.Position')

#### Property Value
[System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')

<a name='Velaptor.Content.Audio.Volume'></a>

### Volume 

A single audio that can be played, paused etc.

```csharp
public float Volume { get; set; }
```

Implements [Volume](Velaptor.Content.IAudio.md#volume 'Velaptor.Content.IAudio.Volume')

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')
## Methods

<a name='Velaptor.Content.Audio.FastForward(float)'></a>

### FastForward(float) 

A single audio that can be played, paused etc.

```csharp
public void FastForward(float seconds);
```
#### Parameters

<a name='Velaptor.Content.Audio.FastForward(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

Implements [FastForward(float)](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.FastForward(float) 'Velaptor.Content.IAudio.FastForward(float)')

<a name='Velaptor.Content.Audio.Pause()'></a>

### Pause() 

A single audio that can be played, paused etc.

```csharp
public void Pause();
```

Implements [Pause()](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.Pause() 'Velaptor.Content.IAudio.Pause()')

<a name='Velaptor.Content.Audio.Play()'></a>

### Play() 

A single audio that can be played, paused etc.

```csharp
public void Play();
```

Implements [Play()](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.Play() 'Velaptor.Content.IAudio.Play()')

<a name='Velaptor.Content.Audio.Rewind(float)'></a>

### Rewind(float) 

A single audio that can be played, paused etc.

```csharp
public void Rewind(float seconds);
```
#### Parameters

<a name='Velaptor.Content.Audio.Rewind(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

Implements [Rewind(float)](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.Rewind(float) 'Velaptor.Content.IAudio.Rewind(float)')

<a name='Velaptor.Content.Audio.SetTimePosition(float)'></a>

### SetTimePosition(float) 

A single audio that can be played, paused etc.

```csharp
public void SetTimePosition(float seconds);
```
#### Parameters

<a name='Velaptor.Content.Audio.SetTimePosition(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

Implements [SetTimePosition(float)](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.SetTimePosition(float) 'Velaptor.Content.IAudio.SetTimePosition(float)')

<a name='Velaptor.Content.Audio.Stop()'></a>

### Stop() 

A single audio that can be played, paused etc.

```csharp
public void Stop();
```

Implements [Stop()](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.Stop() 'Velaptor.Content.IAudio.Stop()')
