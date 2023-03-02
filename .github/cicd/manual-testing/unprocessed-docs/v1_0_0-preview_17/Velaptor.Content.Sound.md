#### [Velaptor](index.md 'index')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## Sound Class

A single sound that can be played, paused etc.

```csharp
public sealed class Sound :
Velaptor.Content.ISound,
System.IDisposable,
Velaptor.Content.IContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [CASL.ISound](https://docs.microsoft.com/en-us/dotnet/api/CASL.ISound 'CASL.ISound') &#129106; Sound

Implements [ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable'), [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
### Constructors

<a name='Velaptor.Content.Sound.Sound(string)'></a>

## Sound(string) Constructor

Initializes a new instance of the [Sound](Velaptor.Content.Sound.md 'Velaptor.Content.Sound') class.

```csharp
public Sound(string filePath);
```
#### Parameters

<a name='Velaptor.Content.Sound.Sound(string).filePath'></a>

`filePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The path to the sound file.
### Properties

<a name='Velaptor.Content.Sound.FilePath'></a>

## Sound.FilePath Property

Gets the fully qualified path to the sound file.

```csharp
public string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.ISound.md#Velaptor.Content.ISound.FilePath 'Velaptor.Content.ISound.FilePath'), [FilePath](Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Sound.Id'></a>

## Sound.Id Property

Gets the unique ID of the sound.

```csharp
public uint Id { get; set; }
```

Implements [Id](Velaptor.Content.ISound.md#Velaptor.Content.ISound.Id 'Velaptor.Content.ISound.Id')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.Sound.IsLooping'></a>

## Sound.IsLooping Property

Gets or sets a value indicating whether or not the sound loops back to the beginning once the end has been reached.

```csharp
public bool IsLooping { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Content.Sound.Length'></a>

## Sound.Length Property

Gets the length of the sound.

```csharp
public SoundTime Length { get; }
```

#### Property Value
[CASL.SoundTime](https://docs.microsoft.com/en-us/dotnet/api/CASL.SoundTime 'CASL.SoundTime')

<a name='Velaptor.Content.Sound.Name'></a>

## Sound.Name Property

Gets the name of the sound.

```csharp
public string Name { get; }
```

Implements [Name](Velaptor.Content.ISound.md#Velaptor.Content.ISound.Name 'Velaptor.Content.ISound.Name'), [Name](Velaptor.Content.IContent.md#Velaptor.Content.IContent.Name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.Sound.PlaySpeed'></a>

## Sound.PlaySpeed Property

Gets or sets the play speed to the given value.

```csharp
public float PlaySpeed { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
The valid range of value is between 0.25 and 2.0  
with a value less than 0.25 defaulting to 0.25 and  
with a value greater than 2.0 defaulting to 2.0.

<a name='Velaptor.Content.Sound.Position'></a>

## Sound.Position Property

Gets the current time position of the sound.

```csharp
public SoundTime Position { get; }
```

#### Property Value
[CASL.SoundTime](https://docs.microsoft.com/en-us/dotnet/api/CASL.SoundTime 'CASL.SoundTime')

<a name='Velaptor.Content.Sound.State'></a>

## Sound.State Property

Gets the state of the sound.

```csharp
public SoundState State { get; }
```

#### Property Value
[CASL.SoundState](https://docs.microsoft.com/en-us/dotnet/api/CASL.SoundState 'CASL.SoundState')

<a name='Velaptor.Content.Sound.Volume'></a>

## Sound.Volume Property

Gets or sets the volume of the sound.

```csharp
public float Volume { get; set; }
```

#### Property Value
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

### Remarks
The only valid value accepted is 0-100. If a value outside of  
this range is used, it will be set within that range.
### Methods

<a name='Velaptor.Content.Sound.Dispose()'></a>

## Sound.Dispose() Method

<inheritdoc/>

```csharp
public void Dispose();
```

Implements [Dispose()](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable.Dispose 'System.IDisposable.Dispose')

<a name='Velaptor.Content.Sound.FastForward(float)'></a>

## Sound.FastForward(float) Method

Advances the sound forward by the given amount of [seconds](Velaptor.Content.Sound.md#Velaptor.Content.Sound.FastForward(float).seconds 'Velaptor.Content.Sound.FastForward(float).seconds').

```csharp
public void FastForward(float seconds);
```
#### Parameters

<a name='Velaptor.Content.Sound.FastForward(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The amount of seconds to fast forward the sound.

<a name='Velaptor.Content.Sound.Pause()'></a>

## Sound.Pause() Method

Pauses the sound.

```csharp
public void Pause();
```

<a name='Velaptor.Content.Sound.Play()'></a>

## Sound.Play() Method

Plays the sound.

```csharp
public void Play();
```

<a name='Velaptor.Content.Sound.Reset()'></a>

## Sound.Reset() Method

Resets the sound.

```csharp
public void Reset();
```

### Remarks
This will stop the sound and set the time position back to the beginning.

<a name='Velaptor.Content.Sound.Rewind(float)'></a>

## Sound.Rewind(float) Method

Rewinds the sound by the given amount of [seconds](Velaptor.Content.Sound.md#Velaptor.Content.Sound.Rewind(float).seconds 'Velaptor.Content.Sound.Rewind(float).seconds').

```csharp
public void Rewind(float seconds);
```
#### Parameters

<a name='Velaptor.Content.Sound.Rewind(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The amount of seconds to rewind the sound.

<a name='Velaptor.Content.Sound.SetTimePosition(float)'></a>

## Sound.SetTimePosition(float) Method

Sets the time position of the sound to the given value.

```csharp
public void SetTimePosition(float seconds);
```
#### Parameters

<a name='Velaptor.Content.Sound.SetTimePosition(float).seconds'></a>

`seconds` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The time position in seconds of where to set the sound.

<a name='Velaptor.Content.Sound.Stop()'></a>

## Sound.Stop() Method

Stops the sound.

```csharp
public void Stop();
```

### Remarks
This will set the time position back to the beginning.