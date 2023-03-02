#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Graphics.Renderers](./Velaptor.Graphics.Renderers.md 'Velaptor.Graphics.Renderers')

## IRenderer Interface

Provides basic rendering functionality.

```csharp
public interface IRenderer
```
### Properties

<a name='Velaptor.Graphics.Renderers.IRenderer.ClearColor'></a>

## IRenderer.ClearColor Property

Gets or sets the color of the back buffer when cleared.

```csharp
static System.Drawing.Color ClearColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')
### Methods

<a name='Velaptor.Graphics.Renderers.IRenderer.Begin()'></a>

## IRenderer.Begin() Method

Starts the batch rendering process.  Must be called before invoking any render methods.

```csharp
static void Begin();
```

<a name='Velaptor.Graphics.Renderers.IRenderer.Clear()'></a>

## IRenderer.Clear() Method

Clears the buffers.

```csharp
static void Clear();
```

### Remarks
It is best to clear the buffer before rendering all of the textures.  
This is to make sure smearing does not occur during texture  
movement or animation.

<a name='Velaptor.Graphics.Renderers.IRenderer.End()'></a>

## IRenderer.End() Method

Ends the batch process.  Calling this will render any textures  
still in the batch.

```csharp
static void End();
```