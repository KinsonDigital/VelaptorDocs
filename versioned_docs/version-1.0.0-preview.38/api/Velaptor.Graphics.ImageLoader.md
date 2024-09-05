---
title: Velaptor.Graphics.ImageLoader
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### ImageLoader Class

Loads images from disk.

```csharp
public class ImageLoader :
Velaptor.Graphics.IImageLoader
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → ImageLoader

Implements [IImageLoader](Velaptor.Graphics.IImageLoader.md 'Velaptor.Graphics.IImageLoader')
## Constructors

<a name='Velaptor.Graphics.ImageLoader.ImageLoader()'></a>

### ImageLoader() Constructor

Initializes a new instance of the [ImageLoader](Velaptor.Graphics.ImageLoader.md 'Velaptor.Graphics.ImageLoader') class.

```csharp
public ImageLoader();
```
## Methods

<a name='Velaptor.Graphics.ImageLoader.LoadImage(string)'></a>

### LoadImage(string) 

<inheritdoc/>

```csharp
public Velaptor.Graphics.ImageData LoadImage(string filePath);
```
#### Parameters

<a name='Velaptor.Graphics.ImageLoader.LoadImage(string).filePath'></a>

`filePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The relative or absolute file path to the image.

Implements [LoadImage(string)](Velaptor.Graphics.IImageLoader.md#Velaptor.Graphics.IImageLoader.LoadImage(string) 'Velaptor.Graphics.IImageLoader.LoadImage(string)')

#### Returns
[ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')  
The image data.

#### Remarks
If the [filePath](Velaptor.Graphics.ImageLoader.md#filepath 'Velaptor.Graphics.ImageLoader.LoadImage(string).filePath') is a relative path, it will be resolved  
to the content directory of the application.  
<br/>  
The default content directory is <b>Content/Graphics/</b>.
