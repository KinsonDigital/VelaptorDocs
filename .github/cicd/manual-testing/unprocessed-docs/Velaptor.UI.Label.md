#### [Velaptor](index.md 'index')
### [Velaptor.UI](Velaptor.UI.md 'Velaptor.UI')

## Label Class

A label that renders text on the screen.

```csharp
public class Label : Velaptor.UI.ControlBase
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [ControlBase](Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase') &#129106; Label
### Constructors

<a name='Velaptor.UI.Label.Label()'></a>

## Label() Constructor

Initializes a new instance of the [Label](Velaptor.UI.Label.md 'Velaptor.UI.Label') class.

```csharp
public Label();
```
### Properties

<a name='Velaptor.UI.Label.AutoSize'></a>

## Label.AutoSize Property

Gets or sets a value indicating whether or not the size of the [Label](Velaptor.UI.Label.md 'Velaptor.UI.Label') will be  
managed automatically based on the size of the text.

```csharp
public bool AutoSize { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

### Remarks
If [AutoSize](Velaptor.UI.Label.md#Velaptor.UI.Label.AutoSize 'Velaptor.UI.Label.AutoSize') is `false`, it means that the user can set the size to what they  
want.  If the size is less than the width or height of the text, then only the text characters  
that are still within the bounds of the [Label](Velaptor.UI.Label.md 'Velaptor.UI.Label') will be rendered.

<a name='Velaptor.UI.Label.CharacterBounds'></a>

## Label.CharacterBounds Property

Gets a list of all the bounds for each character of the [Label](Velaptor.UI.Label.md 'Velaptor.UI.Label').[Text](Velaptor.UI.Label.md#Velaptor.UI.Label.Text 'Velaptor.UI.Label.Text').

```csharp
public System.Collections.ObjectModel.ReadOnlyCollection<(char character,System.Drawing.RectangleF bounds)> CharacterBounds { get; }
```

#### Property Value
[System.Collections.ObjectModel.ReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')[&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[,](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF 'System.Drawing.RectangleF')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple 'System.ValueTuple')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')

<a name='Velaptor.UI.Label.Color'></a>

## Label.Color Property

Gets or sets the color of the text.

```csharp
public System.Drawing.Color Color { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.Label.Font'></a>

## Label.Font Property

Gets the font for the label.

```csharp
public Velaptor.Content.Fonts.IFont Font { get; }
```

#### Property Value
[IFont](Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

<a name='Velaptor.UI.Label.Height'></a>

## Label.Height Property

Gets or sets the height of the [Label](Velaptor.UI.Label.md 'Velaptor.UI.Label').

```csharp
public override uint Height { get; set; }
```

Implements [Height](Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.Height 'Velaptor.UI.ISizable.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.Label.Position'></a>

## Label.Position Property

Gets or sets the position of the [IControl](Velaptor.UI.IControl.md 'Velaptor.UI.IControl') on the screen.

```csharp
public override System.Drawing.Point Position { get; set; }
```

Implements [Position](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Position 'Velaptor.UI.IControl.Position')

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.UI.Label.Style'></a>

## Label.Style Property

Gets or sets the font style of the text.

```csharp
public Velaptor.Content.Fonts.FontStyle Style { get; set; }
```

#### Property Value
[FontStyle](Velaptor.Content.Fonts.FontStyle.md 'Velaptor.Content.Fonts.FontStyle')

<a name='Velaptor.UI.Label.Text'></a>

## Label.Text Property

Gets or sets the labelText of the label.

```csharp
public string Text { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.Label.Width'></a>

## Label.Width Property

Gets or sets the width of the [Label](Velaptor.UI.Label.md 'Velaptor.UI.Label').

```csharp
public override uint Width { get; set; }
```

Implements [Width](Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.Width 'Velaptor.UI.ISizable.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
### Methods

<a name='Velaptor.UI.Label.LoadContent()'></a>

## Label.LoadContent() Method

Unloads the content for an object.

```csharp
public override void LoadContent();
```

Implements [LoadContent()](Velaptor.Content.IContentLoadable.md#Velaptor.Content.IContentLoadable.LoadContent() 'Velaptor.Content.IContentLoadable.LoadContent()')

<a name='Velaptor.UI.Label.Render()'></a>

## Label.Render() Method

Renders the [Label](Velaptor.UI.Label.md 'Velaptor.UI.Label').

```csharp
public override void Render();
```

Implements [Render()](Velaptor.IDrawable.md#Velaptor.IDrawable.Render() 'Velaptor.IDrawable.Render()')

<a name='Velaptor.UI.Label.UnloadContent()'></a>

## Label.UnloadContent() Method

Unloads the content for an object.

```csharp
public override void UnloadContent();
```

Implements [UnloadContent()](Velaptor.Content.IContentLoadable.md#Velaptor.Content.IContentLoadable.UnloadContent() 'Velaptor.Content.IContentLoadable.UnloadContent()')