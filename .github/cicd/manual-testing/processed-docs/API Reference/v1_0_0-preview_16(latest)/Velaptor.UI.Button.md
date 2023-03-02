#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](./Velaptor.UI.md 'Velaptor.UI')

## Button Class

A button that can be clicked to execute functionality.

```csharp
public sealed class Button : Velaptor.UI.ControlBase
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [ControlBase](./Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase') → Button
### Constructors

<a name='Velaptor.UI.Button.Button()'></a>

## Button() Constructor

Initializes a new instance of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') class.

```csharp
public Button();
```

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint,Velaptor.UI.Label)'></a>

## Button(Point, uint, uint, Label) Constructor

Initializes a new instance of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') class.

```csharp
public Button(System.Drawing.Point position, uint width, uint height, Velaptor.UI.Label? label);
```
#### Parameters

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint,Velaptor.UI.Label).position'></a>

`position` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The position of the button.

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint,Velaptor.UI.Label).width'></a>

`width` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The width of the button.

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint,Velaptor.UI.Label).height'></a>

`height` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The height of the button.

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint,Velaptor.UI.Label).label'></a>

`label` [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label')

The label to display on the face of the button.

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint)'></a>

## Button(Point, uint, uint) Constructor

Initializes a new instance of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') class.

```csharp
public Button(System.Drawing.Point position, uint width, uint height);
```
#### Parameters

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint).position'></a>

`position` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The position of the button.

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint).width'></a>

`width` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The width of the button.

<a name='Velaptor.UI.Button.Button(System.Drawing.Point,uint,uint).height'></a>

`height` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The height of the button.

<a name='Velaptor.UI.Button.Button(System.Drawing.Point)'></a>

## Button(Point) Constructor

Initializes a new instance of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') class.

```csharp
public Button(System.Drawing.Point position);
```
#### Parameters

<a name='Velaptor.UI.Button.Button(System.Drawing.Point).position'></a>

`position` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The position of the button.

<a name='Velaptor.UI.Button.Button(uint,uint,Velaptor.UI.Label)'></a>

## Button(uint, uint, Label) Constructor

Initializes a new instance of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') class.

```csharp
public Button(uint width, uint height, Velaptor.UI.Label? label);
```
#### Parameters

<a name='Velaptor.UI.Button.Button(uint,uint,Velaptor.UI.Label).width'></a>

`width` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The width of the button.

<a name='Velaptor.UI.Button.Button(uint,uint,Velaptor.UI.Label).height'></a>

`height` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The height of the button.

<a name='Velaptor.UI.Button.Button(uint,uint,Velaptor.UI.Label).label'></a>

`label` [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label')

The label to display on the face of the button.

<a name='Velaptor.UI.Button.Button(uint,uint)'></a>

## Button(uint, uint) Constructor

Initializes a new instance of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') class.

```csharp
public Button(uint width, uint height);
```
#### Parameters

<a name='Velaptor.UI.Button.Button(uint,uint).width'></a>

`width` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The width of the button.

<a name='Velaptor.UI.Button.Button(uint,uint).height'></a>

`height` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The height of the button.

<a name='Velaptor.UI.Button.Button(Velaptor.UI.Label)'></a>

## Button(Label) Constructor

Initializes a new instance of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') class.

```csharp
public Button(Velaptor.UI.Label? label);
```
#### Parameters

<a name='Velaptor.UI.Button.Button(Velaptor.UI.Label).label'></a>

`label` [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label')

The label to display on the face of the button.
### Properties

<a name='Velaptor.UI.Button.AutoSize'></a>

## Button.AutoSize Property

Gets or sets a value indicating whether or not the size of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') will be  
managed automatically based on the size of the [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label').

```csharp
public bool AutoSize { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

### Remarks
If [AutoSize](./Velaptor.UI.Button.md#Velaptor.UI.Button.AutoSize 'Velaptor.UI.Button.AutoSize') is `false`, the user can set the size to anything they  
desire.  If the size is less than the width or height of the text, then only the text characters  
that are still within the bounds of the [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label') will be rendered.

<a name='Velaptor.UI.Button.BorderColor'></a>

## Button.BorderColor Property

Gets or sets the color of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') border.

```csharp
public System.Drawing.Color BorderColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.Button.BorderThickness'></a>

## Button.BorderThickness Property

Gets or sets the thickness of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button')'s border.

```csharp
public uint BorderThickness { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

### Remarks
This value uses pixels as unit of measure.

<a name='Velaptor.UI.Button.BorderVisible'></a>

## Button.BorderVisible Property

Gets or sets a value indicating whether or not the border of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button') is visible.

```csharp
public bool BorderVisible { get; set; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.Button.CornerRadius'></a>

## Button.CornerRadius Property

Gets or sets the radius values for each corner of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button')  
border and face.

```csharp
public Velaptor.Graphics.CornerRadius CornerRadius { get; set; }
```

#### Property Value
[CornerRadius](./Velaptor.Graphics.CornerRadius.md 'Velaptor.Graphics.CornerRadius')

<a name='Velaptor.UI.Button.Enabled'></a>

## Button.Enabled Property

Gets or sets a value indicating whether or not the button is enabled.

```csharp
public override bool Enabled { get; set; }
```

Implements [Enabled](./Velaptor.UI.IControl.md#Velaptor.UI.IControl.Enabled 'Velaptor.UI.IControl.Enabled')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.UI.Button.FaceColor'></a>

## Button.FaceColor Property

Gets or sets the color of the face of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button').

```csharp
public System.Drawing.Color FaceColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.Button.FontSize'></a>

## Button.FontSize Property

Gets or sets the font size of the text on the face of the button.

```csharp
public uint FontSize { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.Button.Height'></a>

## Button.Height Property

Gets or sets the [Height](./Velaptor.UI.Button.md#Velaptor.UI.Button.Height 'Velaptor.UI.Button.Height') of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button').

```csharp
public override uint Height { get; set; }
```

Implements [Height](./Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.Height 'Velaptor.UI.ISizable.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

### Remarks
If [AutoSize](./Velaptor.UI.Button.md#Velaptor.UI.Button.AutoSize 'Velaptor.UI.Button.AutoSize') is `true`, the [Height](./Velaptor.UI.Button.md#Velaptor.UI.Button.Height 'Velaptor.UI.Button.Height') value will be set but ignored  
and the [Height](./Velaptor.UI.Button.md#Velaptor.UI.Button.Height 'Velaptor.UI.Button.Height') will be automatic based on the [Height](./Velaptor.UI.Button.md#Velaptor.UI.Button.Height 'Velaptor.UI.Button.Height') of the [Text](./Velaptor.UI.Button.md#Velaptor.UI.Button.Text 'Velaptor.UI.Button.Text').

<a name='Velaptor.UI.Button.Label'></a>

## Button.Label Property

Gets the [Label](./Velaptor.UI.Button.md#Velaptor.UI.Button.Label 'Velaptor.UI.Button.Label') of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button').

```csharp
public Velaptor.UI.Label? Label { get; set; }
```

#### Property Value
[Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label')

<a name='Velaptor.UI.Button.Position'></a>

## Button.Position Property

A user interface object that can be updated and rendered to the screen.

```csharp
public override System.Drawing.Point Position { get; set; }
```

Implements [Position](./Velaptor.UI.IControl.md#Velaptor.UI.IControl.Position 'Velaptor.UI.IControl.Position')

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.UI.Button.Text'></a>

## Button.Text Property

Gets or sets the text of the button.

```csharp
public string Text { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.Button.Width'></a>

## Button.Width Property

Gets or sets the [Width](./Velaptor.UI.Button.md#Velaptor.UI.Button.Width 'Velaptor.UI.Button.Width') of the [Button](./Velaptor.UI.Button.md 'Velaptor.UI.Button').

```csharp
public override uint Width { get; set; }
```

Implements [Width](./Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.Width 'Velaptor.UI.ISizable.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

### Remarks
If [AutoSize](./Velaptor.UI.Button.md#Velaptor.UI.Button.AutoSize 'Velaptor.UI.Button.AutoSize') is `true`, the [Width](./Velaptor.UI.Button.md#Velaptor.UI.Button.Width 'Velaptor.UI.Button.Width') value will be set but ignored  
and the [Width](./Velaptor.UI.Button.md#Velaptor.UI.Button.Width 'Velaptor.UI.Button.Width') will be automatic based on the [Width](./Velaptor.UI.Button.md#Velaptor.UI.Button.Width 'Velaptor.UI.Button.Width') of the [Text](./Velaptor.UI.Button.md#Velaptor.UI.Button.Text 'Velaptor.UI.Button.Text').
### Methods

<a name='Velaptor.UI.Button.LoadContent()'></a>

## Button.LoadContent() Method

Unloads the content for an object.

```csharp
public override void LoadContent();
```

Implements [LoadContent()](./](Velaptor.Content.IContentLoadable.md#Velaptor.Content.IContentLoadable.LoadContent()) 'Velaptor.Content.IContentLoadable.LoadContent()')

<a name='Velaptor.UI.Button.Render()'></a>

## Button.Render() Method

Renders the object.

```csharp
public override void Render();
```

Implements [Render()](./](Velaptor.IDrawable.md#Velaptor.IDrawable.Render()) 'Velaptor.IDrawable.Render()')

<a name='Velaptor.UI.Button.UnloadContent()'></a>

## Button.UnloadContent() Method

Unloads the content for an object.

```csharp
public override void UnloadContent();
```

Implements [UnloadContent()](./](Velaptor.Content.IContentLoadable.md#Velaptor.Content.IContentLoadable.UnloadContent()) 'Velaptor.Content.IContentLoadable.UnloadContent()')