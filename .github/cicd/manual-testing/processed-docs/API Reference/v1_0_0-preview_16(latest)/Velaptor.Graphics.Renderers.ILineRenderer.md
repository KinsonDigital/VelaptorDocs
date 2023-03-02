#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics.Renderers](./Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

## ILineRenderer Interface

Renders lines to the screen.

```csharp
public interface ILineRenderer
```
### Methods

<a name='Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line,int)'></a>

## ILineRenderer.Render(Line, int) Method

Renders the given [line](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line,int).line 'Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line, int).line').

```csharp
void Render(Velaptor.Graphics.Line line, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line,int).line'></a>

`line` [Line](./Velaptor.Graphics.Line.md 'Velaptor.Graphics.Line')

The line to render.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the line.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
Lower [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.Render(Velaptor.Graphics.Line, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int)'></a>

## ILineRenderer.RenderLine(Vector2, Vector2, int) Method

Renders a line using the given [start](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).start 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, int).start') and [end](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).end 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, int).end') vectors on the given [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, int).layer').

```csharp
void RenderLine(System.Numerics.Vector2 start, System.Numerics.Vector2 end, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).start'></a>

`start` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The start of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).end'></a>

`end` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The end of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the line.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
Lower [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int)'></a>

## ILineRenderer.RenderLine(Vector2, Vector2, Color, int) Method

Renders a line using the given [start](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).start 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, int).start') and [end](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).end 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, int).end') vectors on the given [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, int).layer')  
using the given [color](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).color 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, int).color').

```csharp
void RenderLine(System.Numerics.Vector2 start, System.Numerics.Vector2 end, System.Drawing.Color color, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).start'></a>

`start` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The start of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).end'></a>

`end` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The end of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the line.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
Lower [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int)'></a>

## ILineRenderer.RenderLine(Vector2, Vector2, Color, uint, int) Method

Renders a line using the given [start](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).start 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, uint, int).start') and [end](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).end 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, uint, int).end') vectors on the given [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, uint, int).layer')  
using the given [color](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).color 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, uint, int).color') and line [thickness](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).thickness 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, uint, int).thickness').

```csharp
void RenderLine(System.Numerics.Vector2 start, System.Numerics.Vector2 end, System.Drawing.Color color, uint thickness, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).start'></a>

`start` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The start of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).end'></a>

`end` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The end of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).color'></a>

`color` [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

The color of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).thickness'></a>

`thickness` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The thickness of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the line.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
Lower [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, uint, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, uint, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,System.Drawing.Color,uint,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, System.Drawing.Color, uint, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int)'></a>

## ILineRenderer.RenderLine(Vector2, Vector2, uint, int) Method

Renders a line using the given [start](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).start 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, uint, int).start') and [end](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).end 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, uint, int).end') vectors on the given [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, uint, int).layer')  
using the given line [thickness](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).thickness 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, uint, int).thickness').

```csharp
void RenderLine(System.Numerics.Vector2 start, System.Numerics.Vector2 end, uint thickness, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).start'></a>

`start` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The start of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).end'></a>

`end` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The end of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).thickness'></a>

`thickness` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The thickness of the line.

<a name='Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the line.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](./](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin()) 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
Lower [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, uint, int).layer') values will render before higher [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, uint, int).layer') values.  
If two separate textures have the same [layer](./Velaptor.Graphics.Renderers.ILineRenderer.md#Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2,System.Numerics.Vector2,uint,int).layer 'Velaptor.Graphics.Renderers.ILineRenderer.RenderLine(System.Numerics.Vector2, System.Numerics.Vector2, uint, int).layer') value, they will  
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