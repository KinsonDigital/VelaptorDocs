---
title: Velaptor.Content.ISound
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### ISound Interface

A single sound that can be played, paused etc.

```csharp
public interface ISound :
CASL.ISound,
System.IDisposable,
Velaptor.Content.IContent
```

Derived  
&#8627; [Sound](Velaptor.Content.Sound.md 'Velaptor.Content.Sound')

Implements [CASL.ISound](https://docs.microsoft.com/en-us/dotnet/api/CASL.ISound 'CASL.ISound'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable'), [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
## Properties

<a name='Velaptor.Content.ISound.FilePath'></a>

### FilePath 

Gets the fully qualified path to the content file.

```csharp
string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor.Content.IContent.FilePath'), [FilePath](https://docs.microsoft.com/en-us/dotnet/api/CASL.ISound.FilePath 'CASL.ISound.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.ISound.Id'></a>

### Id 

Gets the unique ID of the sound.

```csharp
uint Id { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.ISound.Name'></a>

### Name 

Gets the name of the content.

```csharp
string Name { get; }
```

Implements [Name](Velaptor.Content.IContent.md#Velaptor.Content.IContent.Name 'Velaptor.Content.IContent.Name'), [Name](https://docs.microsoft.com/en-us/dotnet/api/CASL.ISound.Name 'CASL.ISound.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')