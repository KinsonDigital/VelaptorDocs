#### [Velaptor](index.md 'index')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## ISound Interface

A single sound that can be played, paused etc.

```csharp
public interface ISound :
System.IDisposable,
Velaptor.Content.IContent
```

Derived  
&#8627; [Sound](Velaptor.Content.Sound.md 'Velaptor.Content.Sound')

Implements [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable'), [IContent](Velaptor.Content.IContent.md 'Velaptor.Content.IContent')
### Properties

<a name='Velaptor.Content.ISound.FilePath'></a>

## ISound.FilePath Property

Gets the fully qualified path to the content file.

```csharp
string FilePath { get; }
```

Implements [FilePath](Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor.Content.IContent.FilePath')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.Content.ISound.Id'></a>

## ISound.Id Property

Gets the unique ID of the sound.

```csharp
uint Id { get; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.Content.ISound.Name'></a>

## ISound.Name Property

Gets the name of the content.

```csharp
string Name { get; }
```

Implements [Name](Velaptor.Content.IContent.md#Velaptor.Content.IContent.Name 'Velaptor.Content.IContent.Name')

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')