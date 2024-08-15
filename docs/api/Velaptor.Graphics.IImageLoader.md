---
title: Velaptor.Graphics.IImageLoader
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics](Velaptor.Graphics.md 'Velaptor.Graphics')

#### IImageLoader Interface

Loads images from disk.

```csharp
public interface IImageLoader
```

Derived  
&#8627; [ImageLoader](Velaptor.Graphics.ImageLoader.md 'Velaptor.Graphics.ImageLoader')
## Methods

<a name='Velaptor.Graphics.IImageLoader.LoadImage(string)'></a>

### LoadImage(string) 

Loads an image from the specified file path.

```csharp
Velaptor.Graphics.ImageData LoadImage(string filePath);
```
#### Parameters

<a name='Velaptor.Graphics.IImageLoader.LoadImage(string).filePath'></a>

`filePath` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The path to the image file.

#### Returns
[ImageData](Velaptor.Graphics.ImageData.md 'Velaptor.Graphics.ImageData')  
The image data.
