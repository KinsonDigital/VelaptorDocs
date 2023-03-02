#### [Velaptor](index.md 'index')
### [Velaptor.Graphics.Renderers](Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

## IRectangleRenderer Interface

Renders rectangles to the screen.

```csharp
public interface IRectangleRenderer
```
### Methods

<a name='Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape,int)'></a>

## IRectangleRenderer.Render(RectShape, int) Method

Renders the given [rectangle](Velaptor.Graphics.Renderers.IRectangleRenderer.md#Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape,int).rectangle 'Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape, int).rectangle').

```csharp
void Render(Velaptor.Graphics.RectShape rectangle, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape,int).rectangle'></a>

`rectangle` [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor.Graphics.RectShape')

The rectangle to render.

<a name='Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the rectangle.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Graphics.Renderers.IRenderer.md#Velaptor.Graphics.Renderers.IRenderer.Begin() 'Velaptor.Graphics.Renderers.IRenderer.Begin()') method has not been called.

### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.IRectangleRenderer.md#Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape,int).layer 'Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.IRectangleRenderer.md#Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape,int).layer 'Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.IRectangleRenderer.md#Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape,int).layer 'Velaptor.Graphics.Renderers.IRectangleRenderer.Render(Velaptor.Graphics.RectShape, int).layer') value, they will  
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