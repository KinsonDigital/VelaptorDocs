#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Fonts](./Velaptor.Content.Fonts.md 'Velaptor.Content.Fonts')

## FontLoader Class

Loads font content for rendering text.

```csharp
public sealed class FontLoader :
Velaptor.Content.ILoader<Velaptor.Content.Fonts.IFont>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → FontLoader

Implements [Velaptor.Content.ILoader&lt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')[IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')[&gt;](./Velaptor.Content.ILoader_T_.md 'Velaptor.Content.ILoader<T>')
### Constructors

<a name='Velaptor.Content.Fonts.FontLoader.FontLoader()'></a>

## FontLoader() Constructor

Initializes a new instance of the [FontLoader](./Velaptor.Content.Fonts.FontLoader.md 'Velaptor.Content.Fonts.FontLoader') class.

```csharp
public FontLoader();
```
### Methods

<a name='Velaptor.Content.Fonts.FontLoader.Load(string)'></a>

## FontLoader.Load(string) Method

Loads font content from the application's content directory or directly using a full file path.

```csharp
public Velaptor.Content.Fonts.IFont Load(string contentWithMetaData);
```
#### Parameters

<a name='Velaptor.Content.Fonts.FontLoader.Load(string).contentWithMetaData'></a>

`contentWithMetaData` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name or full file path to the font with metadata.

Implements [Load(string)](./string](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Load(string)) 'Velaptor.Content.ILoader<T>.Load(string)')

#### Returns
[IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')  
The loaded font.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Occurs when the [contentWithMetaData](./Velaptor.Content.Fonts.FontLoader.md#Velaptor.Content.Fonts.FontLoader.Load(string).contentWithMetaData 'Velaptor.Content.Fonts.FontLoader.Load(string).contentWithMetaData') argument is null or empty.

[CachingMetaDataException](./Velaptor.Content.Exceptions.CachingMetaDataException.md 'Velaptor.Content.Exceptions.CachingMetaDataException')  
Occurs if the metadata is missing or invalid.

[System.IO.FileNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.IO.FileNotFoundException 'System.IO.FileNotFoundException')  
Occurs if the font file does not exist.

### Example
  
```csharp  
// Valid Value  
ContentLoader.Load("my-font|size:12");  
  
// Valid Value  
ContentLoader.Load(@"C:\fonts\my-font.ttf|size:12");  
  
// Invalid Value  
ContentLoader.Load("my-font|size:12");  
  
ContentLoader.Load("my-font|size:12");  
```

### Remarks
If a path is used, it must be a fully qualified file path.  
  
Directory paths are not valid.

<a name='Velaptor.Content.Fonts.FontLoader.Unload(string)'></a>

## FontLoader.Unload(string) Method

Unloads the data with the given contentPathOrName.

```csharp
public void Unload(string contentWithMetaData);
```
#### Parameters

<a name='Velaptor.Content.Fonts.FontLoader.Unload(string).contentWithMetaData'></a>

`contentWithMetaData` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Implements [Unload(string)](./string](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Unload(string)) 'Velaptor.Content.ILoader<T>.Unload(string)')