---
title: Velaptor.Graphics.Renderers.ITextureRenderer
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics.Renderers](Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

#### ITextureRenderer Interface

Renders textures to the screen.

```csharp
public interface ITextureRenderer
```
## Methods

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,int,int)'></a>

### Render(IAtlasData, string, Vector2, float, float, int, int) 

Renders the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') in the given [atlas](Velaptor.Graphics.Renderers.ITextureRenderer.md#atlas 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, int, int).atlas') using the given parameters.

```csharp
void Render(Velaptor.Content.IAtlasData atlas, string subTextureName, System.Numerics.Vector2 pos, float angle, float size, int frameNumber=0, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,int,int).atlas'></a>

`atlas` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The texture atlas data.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,int,int).subTextureName'></a>

`subTextureName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the sub-texture in the atlas.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,int,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to render the sub-texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,int,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,int,int).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to render the texture. 1 is for 100%, which is the normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,int,int).frameNumber'></a>

`frameNumber` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of the frame if an animation.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, int, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int)'></a>

### Render(IAtlasData, string, Vector2, float, float, Color, int, int) 

Renders the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') in the given [atlas](Velaptor.Graphics.Renderers.ITextureRenderer.md#atlas 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, System.Drawing.Color, int, int).atlas') using the given parameters.

```csharp
void Render(Velaptor.Content.IAtlasData atlas, string subTextureName, System.Numerics.Vector2 pos, float angle, float size, System.Drawing.Color color, int frameNumber=0, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int).atlas'></a>

`atlas` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The texture atlas data.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int).subTextureName'></a>

`subTextureName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the sub-texture in the atlas.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to render the sub-texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to render the texture. 1 is for 100%, which is the normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int).frameNumber'></a>

`frameNumber` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of the frame if an animation.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, System.Drawing.Color, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, System.Drawing.Color, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, System.Drawing.Color, int, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int)'></a>

### Render(IAtlasData, string, Vector2, float, float, Color, RenderEffects, int, int) 

Renders the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') in the given [atlas](Velaptor.Graphics.Renderers.ITextureRenderer.md#atlas 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int, int).atlas') using the given parameters.

```csharp
void Render(Velaptor.Content.IAtlasData atlas, string subTextureName, System.Numerics.Vector2 pos, float angle, float size, System.Drawing.Color color, Velaptor.Graphics.RenderEffects effects, int frameNumber=0, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).atlas'></a>

`atlas` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The texture atlas data.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).subTextureName'></a>

`subTextureName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the sub-texture in the atlas.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to render the sub-texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to render the texture. 1 is for 100%, which is the normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).effects'></a>

`effects` [RenderEffects](Velaptor.Graphics.RenderEffects.md 'Velaptor.Graphics.RenderEffects')

The rendering effects to apply to the texture when rendering.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).frameNumber'></a>

`frameNumber` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of the frame if an animation.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,int,int)'></a>

### Render(IAtlasData, string, Vector2, float, int, int) 

Renders the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') in the given [atlas](Velaptor.Graphics.Renderers.ITextureRenderer.md#atlas 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, int, int).atlas') using the given parameters.

```csharp
void Render(Velaptor.Content.IAtlasData atlas, string subTextureName, System.Numerics.Vector2 pos, float angle, int frameNumber=0, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,int,int).atlas'></a>

`atlas` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The texture atlas data.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,int,int).subTextureName'></a>

`subTextureName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the sub-texture in the atlas.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,int,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to render the sub-texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,int,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,int,int).frameNumber'></a>

`frameNumber` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of the frame if an animation.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, int, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,System.Drawing.Color,int,int)'></a>

### Render(IAtlasData, string, Vector2, float, Color, int, int) 

Renders the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') in the given [atlas](Velaptor.Graphics.Renderers.ITextureRenderer.md#atlas 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, System.Drawing.Color, int, int).atlas') using the given parameters.

```csharp
void Render(Velaptor.Content.IAtlasData atlas, string subTextureName, System.Numerics.Vector2 pos, float angle, System.Drawing.Color color, int frameNumber=0, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,System.Drawing.Color,int,int).atlas'></a>

`atlas` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The texture atlas data.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,System.Drawing.Color,int,int).subTextureName'></a>

`subTextureName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the sub-texture in the atlas.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,System.Drawing.Color,int,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to render the sub-texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,System.Drawing.Color,int,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,System.Drawing.Color,int,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,System.Drawing.Color,int,int).frameNumber'></a>

`frameNumber` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of the frame if an animation.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,float,System.Drawing.Color,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, System.Drawing.Color, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, System.Drawing.Color, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, float, System.Drawing.Color, int, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,int,int)'></a>

### Render(IAtlasData, string, Vector2, int, int) 

Renders the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') in the given [atlas](Velaptor.Graphics.Renderers.ITextureRenderer.md#atlas 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, int, int).atlas') using the given parameters.

```csharp
void Render(Velaptor.Content.IAtlasData atlas, string subTextureName, System.Numerics.Vector2 pos, int frameNumber=0, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,int,int).atlas'></a>

`atlas` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The texture atlas data.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,int,int).subTextureName'></a>

`subTextureName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the sub-texture in the atlas.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,int,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to render the sub-texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,int,int).frameNumber'></a>

`frameNumber` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of the frame if an animation.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, int, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,System.Drawing.Color,int,int)'></a>

### Render(IAtlasData, string, Vector2, Color, int, int) 

Renders the [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') in the given [atlas](Velaptor.Graphics.Renderers.ITextureRenderer.md#atlas 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, System.Drawing.Color, int, int).atlas') using the given parameters.

```csharp
void Render(Velaptor.Content.IAtlasData atlas, string subTextureName, System.Numerics.Vector2 pos, System.Drawing.Color color, int frameNumber=0, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,System.Drawing.Color,int,int).atlas'></a>

`atlas` [IAtlasData](Velaptor.Content.IAtlasData.md 'Velaptor.Content.IAtlasData')

The texture atlas data.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,System.Drawing.Color,int,int).subTextureName'></a>

`subTextureName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the sub-texture in the atlas.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,System.Drawing.Color,int,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to render the sub-texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,System.Drawing.Color,int,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,System.Drawing.Color,int,int).frameNumber'></a>

`frameNumber` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of the frame if an animation.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData,string,System.Numerics.Vector2,System.Drawing.Color,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, System.Drawing.Color, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, System.Drawing.Color, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.IAtlasData, string, System.Numerics.Vector2, System.Drawing.Color, int, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,int)'></a>

### Render(ITexture, int, int, float, float, int) 

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).y') coordinates, [angle](Velaptor.Graphics.Renderers.ITextureRenderer.md#angle 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).angle'),  
and [size](Velaptor.Graphics.Renderers.ITextureRenderer.md#size 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).size').

```csharp
void Render(Velaptor.Content.ITexture texture, int x, int y, float angle, float size, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,int).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to render the texture. 1 is for 100%, which is the normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).y') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,System.Drawing.Color,int)'></a>

### Render(ITexture, int, int, float, float, Color, int) 

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).y') coordinates, [angle](Velaptor.Graphics.Renderers.ITextureRenderer.md#angle 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).angle'),  
[size](Velaptor.Graphics.Renderers.ITextureRenderer.md#size 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).size'), and [color](Velaptor.Graphics.Renderers.ITextureRenderer.md#color 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).color').

```csharp
void Render(Velaptor.Content.ITexture texture, int x, int y, float angle, float size, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,System.Drawing.Color,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,System.Drawing.Color,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,System.Drawing.Color,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,System.Drawing.Color,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,System.Drawing.Color,int).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to render the texture. 1 is for 100%, which is the normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,float,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).y') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, float, System.Drawing.Color, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,int)'></a>

### Render(ITexture, int, int, float, int) 

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, int).y') coordinates, and the given [angle](Velaptor.Graphics.Renderers.ITextureRenderer.md#angle 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, int).angle').

```csharp
void Render(Velaptor.Content.ITexture texture, int x, int y, float angle, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,float,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, int).y') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, float, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int)'></a>

### Render(ITexture, int, int, int) 

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).y') coordinates.

```csharp
void Render(Velaptor.Content.ITexture texture, int x, int y, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).y') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int)'></a>

### Render(ITexture, int, int, Color, int) 

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).y') coordinates.

```csharp
void Render(Velaptor.Content.ITexture texture, int x, int y, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).y') position is based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int)'></a>

### Render(ITexture, int, int, Color, RenderEffects, int) 

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).y') coordinates.

```csharp
void Render(Velaptor.Content.ITexture texture, int x, int y, System.Drawing.Color color, Velaptor.Graphics.RenderEffects effects, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).effects'></a>

`effects` [RenderEffects](Velaptor.Graphics.RenderEffects.md 'Velaptor.Graphics.RenderEffects')

The rendering effects to apply to the texture when rendering.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).y') position is based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int)'></a>

### Render(ITexture, int, int, RenderEffects, int) 

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).y') coordinates.

```csharp
void Render(Velaptor.Content.ITexture texture, int x, int y, Velaptor.Graphics.RenderEffects effects, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).effects'></a>

`effects` [RenderEffects](Velaptor.Graphics.RenderEffects.md 'Velaptor.Graphics.RenderEffects')

The rendering effects to apply to the texture when rendering.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).y') position is based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int)'></a>

### Render(ITexture, Rectangle, Rectangle, float, float, Color, RenderEffects, int) 

Renders the given [Texture](Velaptor.Content.Texture.md 'Velaptor.Content.Texture') using the given parameters.

```csharp
void Render(Velaptor.Content.ITexture texture, System.Drawing.Rectangle srcRect, System.Drawing.Rectangle destRect, float size, float angle, System.Drawing.Color color, Velaptor.Graphics.RenderEffects effects, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).srcRect'></a>

`srcRect` [System.Drawing.Rectangle](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Rectangle 'System.Drawing.Rectangle')

The rectangle of the sub texture within the texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).destRect'></a>

`destRect` [System.Drawing.Rectangle](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Rectangle 'System.Drawing.Rectangle')

The destination rectangle of rendering.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to render the texture. 1 is for 100%, which is the normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the rendering.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).effects'></a>

`effects` [RenderEffects](Velaptor.Graphics.RenderEffects.md 'Velaptor.Graphics.RenderEffects')

The rendering effects to apply to the texture when rendering.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The position in the [destRect](Velaptor.Graphics.Renderers.ITextureRenderer.md#destrect 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Drawing.Rectangle, System.Drawing.Rectangle, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).destRect') is based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Drawing.Rectangle, System.Drawing.Rectangle, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Drawing.Rectangle, System.Drawing.Rectangle, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Drawing.Rectangle, System.Drawing.Rectangle, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,int)'></a>

### Render(ITexture, Vector2, float, float, int) 

Renders the given texture at the given [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, int).pos') coordinates, [angle](Velaptor.Graphics.Renderers.ITextureRenderer.md#angle 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, int).angle'), and  
the given [size](Velaptor.Graphics.Renderers.ITextureRenderer.md#size 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, int).size').

```csharp
void Render(Velaptor.Content.ITexture texture, System.Numerics.Vector2 pos, float angle, float size, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,int).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to render the texture. 1 is for 100%, which is the normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, int).pos') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,System.Drawing.Color,int)'></a>

### Render(ITexture, Vector2, float, float, Color, int) 

Renders the given texture at the given [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, System.Drawing.Color, int).pos') coordinates, [angle](Velaptor.Graphics.Renderers.ITextureRenderer.md#angle 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, System.Drawing.Color, int).angle'),  
[size](Velaptor.Graphics.Renderers.ITextureRenderer.md#size 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, System.Drawing.Color, int).size'), and [color](Velaptor.Graphics.Renderers.ITextureRenderer.md#color 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, System.Drawing.Color, int).color').

```csharp
void Render(Velaptor.Content.ITexture texture, System.Numerics.Vector2 pos, float angle, float size, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,System.Drawing.Color,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,System.Drawing.Color,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,System.Drawing.Color,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,System.Drawing.Color,int).size'></a>

`size` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size to render the texture. 1 is for 100%, which is the normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,float,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, System.Drawing.Color, int).pos') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, System.Drawing.Color, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, float, System.Drawing.Color, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,int)'></a>

### Render(ITexture, Vector2, float, int) 

Renders the given texture at the given [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, int).pos') coordinates and the given [angle](Velaptor.Graphics.Renderers.ITextureRenderer.md#angle 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, int).angle').

```csharp
void Render(Velaptor.Content.ITexture texture, System.Numerics.Vector2 pos, float angle, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,float,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, int).pos') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, float, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,int)'></a>

### Render(ITexture, Vector2, int) 

Renders the given texture at the given [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, int).pos') coordinates.

```csharp
void Render(Velaptor.Content.ITexture texture, System.Numerics.Vector2 pos, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, int).pos') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,int)'></a>

### Render(ITexture, Vector2, Color, int) 

Renders the given texture at the given [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, int).pos') coordinates.

```csharp
void Render(Velaptor.Content.ITexture texture, System.Numerics.Vector2 pos, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, int).pos') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int)'></a>

### Render(ITexture, Vector2, Color, RenderEffects, int) 

Renders the given texture at the given [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).pos') coordinates.

```csharp
void Render(Velaptor.Content.ITexture texture, System.Numerics.Vector2 pos, System.Drawing.Color color, Velaptor.Graphics.RenderEffects effects, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).effects'></a>

`effects` [RenderEffects](Velaptor.Graphics.RenderEffects.md 'Velaptor.Graphics.RenderEffects')

The rendering effects to apply to the texture when rendering.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).pos') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,Velaptor.Graphics.RenderEffects,int)'></a>

### Render(ITexture, Vector2, RenderEffects, int) 

Renders the given texture at the given [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, Velaptor.Graphics.RenderEffects, int).pos') coordinates.

```csharp
void Render(Velaptor.Content.ITexture texture, System.Numerics.Vector2 pos, Velaptor.Graphics.RenderEffects effects, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,Velaptor.Graphics.RenderEffects,int).texture'></a>

`texture` [ITexture](Velaptor.Content.ITexture.md 'Velaptor.Content.ITexture')

The texture to render.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,Velaptor.Graphics.RenderEffects,int).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The location of the texture.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,Velaptor.Graphics.RenderEffects,int).effects'></a>

`effects` [RenderEffects](Velaptor.Graphics.RenderEffects.md 'Velaptor.Graphics.RenderEffects')

The rendering effects to apply to the texture when rendering.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Numerics.Vector2,Velaptor.Graphics.RenderEffects,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the texture.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
The [pos](Velaptor.Graphics.Renderers.ITextureRenderer.md#pos 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, Velaptor.Graphics.RenderEffects, int).pos') position are based in the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, Velaptor.Graphics.RenderEffects, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, Velaptor.Graphics.RenderEffects, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Numerics.Vector2, Velaptor.Graphics.RenderEffects, int).layer') value, they will  
render in the order that the method was invoked.  
  
Example below:<b>Render Method Invoked Order:</b>  
1. Texture 1 (Layer -10)  
2. Texture 2 (Layer -20)  
3. Texture 3 (Layer 0)  
4. Texture 4 (Layer 0)  
5. Texture 5 (Layer 4)  
6. Texture 6 (Layer 3)<b>Texture Render Order:</b>  
- Texture 2  
- Texture 1  
- Texture 3  
- Texture 4  
- Texture 6  
- Texture 5
