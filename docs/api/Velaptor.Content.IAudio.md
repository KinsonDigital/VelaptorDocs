---
title: Velaptor.Content.IAudio
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### IAudio Interface

A single audio that can be played, paused etc.

```csharp
public interface IAudio :
Velaptor.Content.IContent
```

Derived  
&#8627; [Audio](Velaptor.Content.Audio.md 'Velaptor.Content.Audio')

Implements [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
## Properties

<a name='Velaptor.Content.IAudio.BufferType'></a>

### BufferType 

Gets the type of buffer.

```csharp
Velaptor.Content.AudioBuffer BufferType { get; }
```

#### Property Value
[AudioBuffer](Velaptor.Content.AudioBuffer.md 'Velaptor.Content.AudioBuffer')

<a name='Velaptor.Content.IAudio.FilePath'></a>

### FilePath 

Gets the fully qualified path to the content file.

```csharp
string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IContent.md#filepath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.IAudio.Id'></a>

### Id 

Gets the unique ID of the audio.

```csharp
uint Id { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.IAudio.IsLooping'></a>

### IsLooping 

Gets or sets a value indicating whether the audio loops back to the beginning once the end has been reached.

```csharp
bool IsLooping { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.IAudio.IsPaused'></a>

### IsPaused 

Gets a value indicating whether the audio is paused.

```csharp
bool IsPaused { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.IAudio.IsPlaying'></a>

### IsPlaying 

Gets a value indicating whether the audio is playing.

```csharp
bool IsPlaying { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.IAudio.IsStopped'></a>

### IsStopped 

Gets a value indicating whether the audio is stopped.

```csharp
bool IsStopped { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.IAudio.Length'></a>

### Length 

Gets the length of the song.

```csharp
System.TimeSpan Length { get; }
```

#### Property Value
[System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')

<a name='Velaptor.Content.IAudio.Name'></a>

### Name 

Gets the name of the content.

```csharp
string Name { get; }
```

Implements [Name](Velaptor.Content.IContent.md#name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.IAudio.PlaySpeed'></a>

### PlaySpeed 

Gets or sets the play speed to the given value.

```csharp
float PlaySpeed { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
The valid range of value is between 0.25 and 2.0  
with a value less then 0.25 defaulting to 0.25 and  
with a value greater then 2.0 defaulting to 2.0.

<a name='Velaptor.Content.IAudio.Position'></a>

### Position 

Gets the current time position of the audio.

```csharp
System.TimeSpan Position { get; }
```

#### Property Value
[System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')

<a name='Velaptor.Content.IAudio.Volume'></a>

### Volume 

Gets or sets the volume of the audio.

```csharp
float Volume { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

#### Remarks
The only valid value accepted is 0-100. If a value outside of  
this range is used, it will be set within that range.
## Methods

<a name='Velaptor.Content.IAudio.FastForward(float)'></a>

### FastForward(float) 

Fast forwards the audio by the given amount of [seconds](Velaptor.Content.IAudio.md#seconds 'Velaptor.Content.IAudio.FastForward(float).seconds').

```csharp
void FastForward(float seconds);
```
#### Parameters

<a name='Velaptor.Content.IAudio.FastForward(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The amount of seconds to fast-forward the song.

<a name='Velaptor.Content.IAudio.Pause()'></a>

### Pause() 

Pauses the audio.

```csharp
void Pause();
```

<a name='Velaptor.Content.IAudio.Play()'></a>

### Play() 

Plays the audio.

```csharp
void Play();
```

<a name='Velaptor.Content.IAudio.Rewind(float)'></a>

### Rewind(float) 

Rewinds the audio by the given amount of [seconds](Velaptor.Content.IAudio.md#seconds 'Velaptor.Content.IAudio.Rewind(float).seconds').

```csharp
void Rewind(float seconds);
```
#### Parameters

<a name='Velaptor.Content.IAudio.Rewind(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The amount of seconds to rewind the song.

<a name='Velaptor.Content.IAudio.SetTimePosition(float)'></a>

### SetTimePosition(float) 

Sets the time position of the audio to the given value.

```csharp
void SetTimePosition(float seconds);
```
#### Parameters

<a name='Velaptor.Content.IAudio.SetTimePosition(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The time position in seconds of where to set the audio.

<a name='Velaptor.Content.IAudio.Stop()'></a>

### Stop() 

Stops the audio playback and resets back to the beginning.

```csharp
void Stop();
```
