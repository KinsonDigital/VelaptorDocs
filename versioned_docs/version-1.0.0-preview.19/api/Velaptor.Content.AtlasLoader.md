---
title: Velaptor.Content.AtlasLoader
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## AtlasLoader Class

Loads atlas data.

```csharp
public sealed class AtlasLoader :
Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → AtlasLoader

Implements [Velaptor.Content.ILoader&lt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')[&gt;](Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')
### Constructors

<a name='Velaptor.Content.AtlasLoader.AtlasLoader()'></a>

## AtlasLoader() Constructor

Initializes a new instance of the [AtlasLoader](Velaptor.Content.AtlasLoader.md 'Velaptor.Content.AtlasLoader') class.

```csharp
public AtlasLoader();
```
### Methods

<a name='Velaptor.Content.AtlasLoader.Load(string)'></a>

## AtlasLoader.Load(string) Method

Loads texture atlas data using the given [contentPathOrName](Velaptor.Content.AtlasLoader.md#Velaptor.Content.AtlasLoader.Load(string).contentPathOrName 'Velaptor.Content.AtlasLoader.Load(string).contentPathOrName').

```csharp
public Velaptor.Content.IAtlasData Load(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.AtlasLoader.Load(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content name or file path to the atlas data.

Implements [Load(string)](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Load(string) 'Velaptor.Content.ILoader<T>.Load(string)')

#### Returns
[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')  
The loaded atlas data.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Thrown if the [contentPathOrName](Velaptor.Content.AtlasLoader.md#Velaptor.Content.AtlasLoader.Load(string).contentPathOrName 'Velaptor.Content.AtlasLoader.Load(string).contentPathOrName') is null or empty.

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

### Remarks
Valid Values:  
- MyAtlas  
- C:/Atlas/MyAtlas.png  
- C:/Atlas/MyAtlas.json  
  
Invalid Values:  
- C:/Atlas/MyAtlas  
- C:/Atlas/MyAtlas.txt

<a name='Velaptor.Content.AtlasLoader.Unload(string)'></a>

## AtlasLoader.Unload(string) Method

Unloads the data with the given [contentPathOrName](Velaptor.Content.AtlasLoader.md#Velaptor.Content.AtlasLoader.Unload(string).contentPathOrName 'Velaptor.Content.AtlasLoader.Unload(string).contentPathOrName').

```csharp
public void Unload(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.AtlasLoader.Unload(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the content item to unload.

Implements [Unload(string)](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Unload(string) 'Velaptor.Content.ILoader<T>.Unload(string)')