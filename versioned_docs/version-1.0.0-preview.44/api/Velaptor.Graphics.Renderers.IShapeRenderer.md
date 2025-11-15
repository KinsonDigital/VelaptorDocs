---
title: Velaptor.Graphics.Renderers.IShapeRenderer
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics.Renderers](Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

#### IShapeRenderer Interface

Renders rectangles to the screen.

```csharp
public interface IShapeRenderer
```
## Methods

<a name='Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.CircleShape,int)'></a>

### Render(CircleShape, int) 

Renders the given [circle](Velaptor.Graphics.Renderers.IShapeRenderer.md#circle 'Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.CircleShape, int).circle').

```csharp
void Render(Velaptor.Graphics.CircleShape circle, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.CircleShape,int).circle'></a>

`circle` [CircleShape](Velaptor.Graphics.CircleShape.md 'Velaptor.Graphics.CircleShape')

The circle to render.

<a name='Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.CircleShape,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the circle.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.IShapeRenderer.md#layer 'Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.CircleShape, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.IShapeRenderer.md#layer 'Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.CircleShape, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.IShapeRenderer.md#layer 'Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.CircleShape, int).layer') value, they will  
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

<a name='Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.RectShape,int)'></a>

### Render(RectShape, int) 

Renders the given [rect](Velaptor.Graphics.Renderers.IShapeRenderer.md#rect 'Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.RectShape, int).rect').

```csharp
void Render(Velaptor.Graphics.RectShape rect, int layer=0);
```
#### Parameters

<a name='Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.RectShape,int).rect'></a>

`rect` [RectShape](Velaptor.Graphics.RectShape.md 'Velaptor.Graphics.RectShape')

The rectangle to render.

<a name='Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.RectShape,int).layer'></a>

`layer` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The layer to render the rectangle.

#### Exceptions

[System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')  
Thrown if the [Begin()](Velaptor.Batching.IBatcher.md#Velaptor.Batching.IBatcher.Begin() 'Velaptor.Batching.IBatcher.Begin()') method has not been called.

#### Remarks
  
Lower [layer](Velaptor.Graphics.Renderers.IShapeRenderer.md#layer 'Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.RectShape, int).layer') values will render before higher [layer](Velaptor.Graphics.Renderers.IShapeRenderer.md#layer 'Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.RectShape, int).layer') values.  
If two separate textures have the same [layer](Velaptor.Graphics.Renderers.IShapeRenderer.md#layer 'Velaptor.Graphics.Renderers.IShapeRenderer.Render(Velaptor.Graphics.RectShape, int).layer') value, they will  
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
