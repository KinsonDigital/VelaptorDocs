---
title: Velaptor.Content.SoundLoader
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### SoundLoader Class

Loads sound content.

```csharp
public sealed class SoundLoader :
Velaptor.Content.ILoader<Velaptor.Content.ISound>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → SoundLoader

Implements [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')
## Constructors

<a name='Velaptor.Content.SoundLoader.SoundLoader()'></a>

### SoundLoader() Constructor

Initializes a new instance of the [SoundLoader](Velaptor.Content.SoundLoader.md 'Velaptor.Content.SoundLoader') class.

```csharp
public SoundLoader();
```
## Methods

<a name='Velaptor.Content.SoundLoader.Load(string)'></a>

### Load(string) 

Loads a sound with the given name.

```csharp
public Velaptor.Content.ISound Load(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.SoundLoader.Load(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The full file path or name of the sound to load.

Implements [Load(string)](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Load(string) 'Velaptor.Content.ILoader<T>.Load(string)')

#### Returns
[ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')  
The loaded sound.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Thrown if the [contentPathOrName](Velaptor.Content.SoundLoader.md#Velaptor.Content.SoundLoader.Load(string).contentPathOrName 'Velaptor.Content.SoundLoader.Load(string).contentPathOrName') is null or empty.

[LoadTextureException](Velaptor.Content.Exceptions.LoadTextureException.md 'Velaptor.Content.Exceptions.LoadTextureException')  
Thrown if the resulting texture content file path is invalid.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Thrown if the texture file does not exist.

[System.IO.IOException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.IOException 'System.IO.IOException')  
The directory specified a file or the network name is not known.

[System.UnauthorizedAccessException](https://docs.microsoft.com/en-us/dotnet/api/System.UnauthorizedAccessException 'System.UnauthorizedAccessException')  
The caller does not have the required permissions.

[System.IO.PathTooLongException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.PathTooLongException 'System.IO.PathTooLongException')  
The specified path, file name, or both exceed the system-defined maximum length.

[System.IO.DirectoryNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.DirectoryNotFoundException 'System.IO.DirectoryNotFoundException')  
The specified path is invalid (for example, it is on an unmapped drive).

[System.NotSupportedException](https://docs.microsoft.com/en-us/dotnet/api/System.NotSupportedException 'System.NotSupportedException')  
The path contains a colon character `:` that is not part of a drive label.

<a name='Velaptor.Content.SoundLoader.Unload(string)'></a>

### Unload(string) 

Unloads the data with the given [contentPathOrName](Velaptor.Content.SoundLoader.md#Velaptor.Content.SoundLoader.Unload(string).contentPathOrName 'Velaptor.Content.SoundLoader.Unload(string).contentPathOrName').

```csharp
public void Unload(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.SoundLoader.Unload(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the content item to unload.

Implements [Unload(string)](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Unload(string) 'Velaptor.Content.ILoader<T>.Unload(string)')