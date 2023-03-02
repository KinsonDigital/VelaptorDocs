#### [Velaptor](index.md 'index')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## AtlasLoader Class

Loads atlas data.

```csharp
public sealed class AtlasLoader :
Velaptor.Content.ILoader<Velaptor.Content.IAtlasData>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; AtlasLoader

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

Loads texture atlas data using the given [contentNameOrPath](Velaptor.Content.AtlasLoader.md#Velaptor.Content.AtlasLoader.Load(string).contentNameOrPath 'Velaptor.Content.AtlasLoader.Load(string).contentNameOrPath').

```csharp
public Velaptor.Content.IAtlasData Load(string contentNameOrPath);
```
#### Parameters

<a name='Velaptor.Content.AtlasLoader.Load(string).contentNameOrPath'></a>

`contentNameOrPath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content name or file path to the atlas data.

Implements [Load(string)](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Load(string) 'Velaptor.Content.ILoader<T>.Load(string)')

#### Returns
[IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')  
The loaded atlas data.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Occurs if [contentNameOrPath](Velaptor.Content.AtlasLoader.md#Velaptor.Content.AtlasLoader.Load(string).contentNameOrPath 'Velaptor.Content.AtlasLoader.Load(string).contentNameOrPath') is null or empty.

[LoadAtlasException](Velaptor.Content.Exceptions.LoadAtlasException.md 'Velaptor.Content.Exceptions.LoadAtlasException')  
If the given full file path is not a `Texture(.png)` or `Atlas Data(.json)` file.

[LoadContentException](Velaptor.Content.Exceptions.LoadContentException.md 'Velaptor.Content.Exceptions.LoadContentException')  
Occurs if directory path is used.  A non path content name or fully qualified file path is required.

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