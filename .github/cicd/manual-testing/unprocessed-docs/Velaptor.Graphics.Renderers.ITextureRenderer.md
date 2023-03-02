#### [Velaptor](index.md 'index')
### [Velaptor.Graphics.Renderers](Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

## ITextureRenderer Interface

Renders textures to the screen.

```csharp
public interface ITextureRenderer
```
### Methods

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int)'></a>

## ITextureRenderer.Render(ITexture, int, int, int) Method

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).y') coordinates.

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
Thrown if the [Begin()](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin() 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).y') position are based on the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, int).layer') value, they will  
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

## ITextureRenderer.Render(ITexture, int, int, Color, int) Method

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).y') coordinates.

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
Thrown if the [Begin()](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin() 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).y') position is based on the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, int).layer') value, they will  
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

## ITextureRenderer.Render(ITexture, int, int, Color, RenderEffects, int) Method

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).y') coordinates.

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
Thrown if the [Begin()](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin() 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).y') position is based on the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') value, they will  
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

## ITextureRenderer.Render(ITexture, int, int, RenderEffects, int) Method

Renders the given texture at the given [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).y') coordinates.

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
Thrown if the [Begin()](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin() 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [x](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).x 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).x') and [y](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).y 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).y') position is based on the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,int,int,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, int, int, Velaptor.Graphics.RenderEffects, int).layer') value, they will  
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

## ITextureRenderer.Render(ITexture, Rectangle, Rectangle, float, float, Color, RenderEffects, int) Method

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

The size to render the texture. 1 is for 100%/normal size.

<a name='Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of rotation in degrees of the rendering.

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
Thrown if the [Begin()](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin() 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The position in the [destRect](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).destRect 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Drawing.Rectangle, System.Drawing.Rectangle, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).destRect') is based on the center of the texture.  
  
Lower [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Drawing.Rectangle, System.Drawing.Rectangle, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Drawing.Rectangle, System.Drawing.Rectangle, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.ITextureRenderer.md#Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture,System.Drawing.Rectangle,System.Drawing.Rectangle,float,float,System.Drawing.Color,Velaptor.Graphics.RenderEffects,int).layer 'Velaptor.Graphics.Renderers.ITextureRenderer.Render(Velaptor.Content.ITexture, System.Drawing.Rectangle, System.Drawing.Rectangle, float, float, System.Drawing.Color, Velaptor.Graphics.RenderEffects, int).layer') value, they will  
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