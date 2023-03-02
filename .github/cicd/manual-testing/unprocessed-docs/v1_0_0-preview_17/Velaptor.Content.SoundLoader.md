#### [Velaptor](index.md 'index')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## SoundLoader Class

Loads sound content.

```csharp
public sealed class SoundLoader :
Velaptor.Content.ILoader<Velaptor.Content.ISound>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; SoundLoader

Implements [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[ISound](Velaptor.Content.ISound.md 'Velaptor.Content.ISound')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')
### Constructors

<a name='Velaptor.Content.SoundLoader.SoundLoader()'></a>

## SoundLoader() Constructor

Initializes a new instance of the [SoundLoader](Velaptor.Content.SoundLoader.md 'Velaptor.Content.SoundLoader') class.

```csharp
public SoundLoader();
```
### Methods

<a name='Velaptor.Content.SoundLoader.Load(string)'></a>

## SoundLoader.Load(string) Method

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

<a name='Velaptor.Content.SoundLoader.Unload(string)'></a>

## SoundLoader.Unload(string) Method

Unloads the data with the given contentPathOrName.

```csharp
public void Unload(string contentNameOrPath);
```
#### Parameters

<a name='Velaptor.Content.SoundLoader.Unload(string).contentNameOrPath'></a>

`contentNameOrPath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Implements [Unload(string)](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Unload(string) 'Velaptor.Content.ILoader<T>.Unload(string)')