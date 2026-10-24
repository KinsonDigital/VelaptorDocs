---
title: Velaptor.Content.IAudio
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Content](Velaptor.Content.md 'Velaptor\.Content')

#### IAudio Interface

A single audio that can be played, paused etc\.

```csharp
public interface IAudio : Velaptor.Content.IContent
```

Derived  
&#8627; [Audio](Velaptor.Content.Audio.md 'Velaptor\.Content\.Audio')

Implements [IContent](Velaptor.Content.IContent.md 'Velaptor\.Content\.IContent')
## Properties

<a name='Velaptor.Content.IAudio.BufferType'></a>

### BufferType \{#Velaptor.Content.IAudio.BufferType}

Gets the type of buffer\.

```csharp
Velaptor.Content.AudioBuffer BufferType { get; }
```

#### Property Value
[AudioBuffer](Velaptor.Content.AudioBuffer.md 'Velaptor\.Content\.AudioBuffer')

<a name='Velaptor.Content.IAudio.FilePath'></a>

### FilePath \{#Velaptor.Content.IAudio.FilePath}

Gets the fully qualified path to the content file\.

```csharp
string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor\.Content\.IContent\.FilePath')

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Content.IAudio.Id'></a>

### Id \{#Velaptor.Content.IAudio.Id}

Gets the unique ID of the audio\.

```csharp
uint Id { get; }
```

#### Property Value
[System\.UInt32](https://learn.microsoft.com/en-us/dotnet/api/system.uint32 'System\.UInt32')

<a name='Velaptor.Content.IAudio.IsLooping'></a>

### IsLooping \{#Velaptor.Content.IAudio.IsLooping}

Gets or sets a value indicating whether the audio loops back to the beginning once the end has been reached\.

```csharp
bool IsLooping { get; set; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.Content.IAudio.IsPaused'></a>

### IsPaused \{#Velaptor.Content.IAudio.IsPaused}

Gets a value indicating whether the audio is paused\.

```csharp
bool IsPaused { get; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.Content.IAudio.IsPlaying'></a>

### IsPlaying \{#Velaptor.Content.IAudio.IsPlaying}

Gets a value indicating whether the audio is playing\.

```csharp
bool IsPlaying { get; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.Content.IAudio.IsStopped'></a>

### IsStopped \{#Velaptor.Content.IAudio.IsStopped}

Gets a value indicating whether the audio is stopped\.

```csharp
bool IsStopped { get; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.Content.IAudio.Length'></a>

### Length \{#Velaptor.Content.IAudio.Length}

Gets the length of the song\.

```csharp
System.TimeSpan Length { get; }
```

#### Property Value
[System\.TimeSpan](https://learn.microsoft.com/en-us/dotnet/api/system.timespan 'System\.TimeSpan')

<a name='Velaptor.Content.IAudio.Name'></a>

### Name \{#Velaptor.Content.IAudio.Name}

Gets the name of the content\.

```csharp
string Name { get; }
```

Implements [Name](Velaptor.Content.IContent.md#Velaptor.Content.IContent.Name 'Velaptor\.Content\.IContent\.Name')

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Content.IAudio.PlaySpeed'></a>

### PlaySpeed \{#Velaptor.Content.IAudio.PlaySpeed}

Gets or sets the play speed to the given value\.

```csharp
float PlaySpeed { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks
The valid range of value is between 0\.25 and 2\.0
with a value less then 0\.25 defaulting to 0\.25 and
with a value greater then 2\.0 defaulting to 2\.0\.

<a name='Velaptor.Content.IAudio.Position'></a>

### Position \{#Velaptor.Content.IAudio.Position}

Gets the current time position of the audio\.

```csharp
System.TimeSpan Position { get; }
```

#### Property Value
[System\.TimeSpan](https://learn.microsoft.com/en-us/dotnet/api/system.timespan 'System\.TimeSpan')

<a name='Velaptor.Content.IAudio.Volume'></a>

### Volume \{#Velaptor.Content.IAudio.Volume}

Gets or sets the volume of the audio\.

```csharp
float Volume { get; set; }
```

#### Property Value
[System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

#### Remarks
The only valid value accepted is 0\-100\. If a value outside of
this range is used, it will be set within that range\.
## Methods

<a name='Velaptor.Content.IAudio.FastForward(float)'></a>

### FastForward\(float\) \{#Velaptor.Content.IAudio.FastForward(float)}

Fast forwards the audio by the given amount of [seconds](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.FastForward(float) 'Velaptor\.Content\.IAudio\.FastForward\(float\)\.seconds')\.

```csharp
void FastForward(float seconds);
```
#### Parameters

<a name='Velaptor.Content.IAudio.FastForward(float).seconds'></a>

`seconds` [System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

The amount of seconds to fast\-forward the song\.

<a name='Velaptor.Content.IAudio.Pause()'></a>

### Pause\(\) \{#Velaptor.Content.IAudio.Pause()}

Pauses the audio\.

```csharp
void Pause();
```

<a name='Velaptor.Content.IAudio.Play()'></a>

### Play\(\) \{#Velaptor.Content.IAudio.Play()}

Plays the audio\.

```csharp
void Play();
```

<a name='Velaptor.Content.IAudio.Rewind(float)'></a>

### Rewind\(float\) \{#Velaptor.Content.IAudio.Rewind(float)}

Rewinds the audio by the given amount of [seconds](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.Rewind(float) 'Velaptor\.Content\.IAudio\.Rewind\(float\)\.seconds')\.

```csharp
void Rewind(float seconds);
```
#### Parameters

<a name='Velaptor.Content.IAudio.Rewind(float).seconds'></a>

`seconds` [System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

The amount of seconds to rewind the song\.

<a name='Velaptor.Content.IAudio.SetTimePosition(float)'></a>

### SetTimePosition\(float\) \{#Velaptor.Content.IAudio.SetTimePosition(float)}

Sets the time position of the audio to the given value\.

```csharp
void SetTimePosition(float seconds);
```
#### Parameters

<a name='Velaptor.Content.IAudio.SetTimePosition(float).seconds'></a>

`seconds` [System\.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single 'System\.Single')

The time position in seconds of where to set the audio\.

<a name='Velaptor.Content.IAudio.Stop()'></a>

### Stop\(\) \{#Velaptor.Content.IAudio.Stop()}

Stops the audio playback and resets back to the beginning\.

```csharp
void Stop();
```
