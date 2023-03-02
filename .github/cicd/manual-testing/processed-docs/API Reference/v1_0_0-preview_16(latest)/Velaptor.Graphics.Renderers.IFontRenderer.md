#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics.Renderers](./Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

## IFontRenderer Interface

Renders text to the screen using a particular font.

```csharp
public interface IFontRenderer
```
### Methods

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int)'></a>

## IFontRenderer.Render(IFont, string, int, int, float, float, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).font')  
at the position determined by the given [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).y') coordinates.

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, int x, int y, float renderSize, float angle, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).renderSize'></a>

`renderSize` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size of the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of the text in degrees.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).y') position is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
The [renderSize](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).renderSize 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).renderSize') is a value between 0 and 1.  Using the value 1 represents the text being rendered  
at the standard size of 100%.  Example: Using 1.5 would represent 150% or 50% larger than the normal size.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int)'></a>

## IFontRenderer.Render(IFont, string, int, int, float, float, Color, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).font')  
at the position determined by the given [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).y') coordinates,  
with the given [angle](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).angle 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).angle'), [renderSize](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).renderSize 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).renderSize'), and [color](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).color 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).color').

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, int x, int y, float renderSize, float angle, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).renderSize'></a>

`renderSize` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size of the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of the text in degrees.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the rendering.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).y') position is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
The [renderSize](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).renderSize 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).renderSize') is a value between 0 and 1.  Using the value 1 represents the text being rendered  
at the standard size of 100%.  Example: Using 1.5 would represent 150% or 50% larger than the normal size.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, float, System.Drawing.Color, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int)'></a>

## IFontRenderer.Render(IFont, string, int, int, float, Color, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).font')  
at the position determined by the given [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).y') coordinates,  
with the given [angle](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).angle 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).angle'), and [color](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).color 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).color').

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, int x, int y, float angle, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of the text in degrees.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color to apply to the rendering.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

### Remarks
  
The [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).y') position is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, float, System.Drawing.Color, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int)'></a>

## IFontRenderer.Render(IFont, string, int, int, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).font')  
at the position determined by the given [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).y') coordinates.

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, int x, int y, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).y') position is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int)'></a>

## IFontRenderer.Render(IFont, string, int, int, Color, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).font')  
at the position determined by the given [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).y') coordinates  
and [color](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).color 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).color').

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, int x, int y, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).x'></a>

`x` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The X coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).y'></a>

`y` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The Y coordinate location to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color of the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [x](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).x 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).x') and [y](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).y 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).y') position is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
The size is a value between 0 and 1.  Using the value 1 represents the text being rendered  
at the standard size of 100%.  Example: Using 1.5 would represent 150% or 50% larger than the normal size.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,int,int,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, int, int, System.Drawing.Color, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int)'></a>

## IFontRenderer.Render(IFont, string, Vector2, float, float, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).font')  
at the given [position](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).position 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).position'), with the given [renderSize](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).renderSize 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).renderSize'), and [angle](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).angle 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).angle').

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, System.Numerics.Vector2 position, float renderSize, float angle, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).position'></a>

`position` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).renderSize'></a>

`renderSize` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The size of the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of the text in degrees.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [position](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).position 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).position') is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
The [renderSize](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).renderSize 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).renderSize') is a value between 0 and 1.  Using the value 1 represents the text being rendered  
at the standard size of 100%.  Example: Using 1.5 would represent 150% or 50% larger than the normal size.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,float,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, float, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int)'></a>

## IFontRenderer.Render(IFont, string, Vector2, float, Color, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).font')  
at the given [position](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).position 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).position'), [angle](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).angle 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).angle'), and [color](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).color 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).color').

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, System.Numerics.Vector2 position, float angle, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).position'></a>

`position` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).angle'></a>

`angle` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The angle of the text in degrees.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color of the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [position](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).position 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).position') is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,float,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, float, System.Drawing.Color, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int)'></a>

## IFontRenderer.Render(IFont, string, Vector2, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, int).font')  
and [position](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).position 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, int).position').

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, System.Numerics.Vector2 position, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).position'></a>

`position` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [position](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).position 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, int).position') is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int)'></a>

## IFontRenderer.Render(IFont, string, Vector2, Color, int) Method

Renders the given [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).text') using the given [font](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).font 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).font')  
at the given [position](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).position 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).position') with the given [color](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).color 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).color').

```csharp
void Render(Velaptor.Content.Fonts.IFont font, string text, System.Numerics.Vector2 position, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for rendering the [text](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).text 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).text').

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to render.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).position'></a>

`position` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position to render the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color of the text.

<a name='Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the text.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
The [position](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).position 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).position') is based on the center of the text.  
The center of the text is based on the furthest most left, right, top, and bottom edges of the text.  
  
Lower [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.IFontRenderer.md#Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont,string,System.Numerics.Vector2,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.IFontRenderer.Render(Velaptor.Content.Fonts.IFont, string, System.Numerics.Vector2, System.Drawing.Color, int).layer') value, they will  
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