---
title: Velaptor.UI.TextBox
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](Velaptor.UI.md 'Velaptor.UI')

#### TextBox Class

Provides the ability to enter text into a box.

```csharp
public sealed class TextBox : Velaptor.UI.ControlBase
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [ControlBase](Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase') → TextBox
## Constructors

<a name='Velaptor.UI.TextBox.TextBox()'></a>

### TextBox() Constructor

Initializes a new instance of the [TextBox](Velaptor.UI.TextBox.md 'Velaptor.UI.TextBox') class.

```csharp
public TextBox();
```
## Properties

<a name='Velaptor.UI.TextBox.CursorColor'></a>

### CursorColor 

Gets or sets the color of the cursor.

```csharp
public System.Drawing.Color CursorColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.TextBox.CursorWidth'></a>

### CursorWidth 

Gets or sets the width of the cursor.

```csharp
public int CursorWidth { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

<a name='Velaptor.UI.TextBox.FontSize'></a>

### FontSize 

Gets or sets the size of the font of the text box.

```csharp
public uint FontSize { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.TextBox.Height'></a>

### Height 

Gets the height of the [TextBox](Velaptor.UI.TextBox.md 'Velaptor.UI.TextBox').

```csharp
public override uint Height { get; }
```

Implements [Height](Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.Height 'Velaptor.UI.ISizable.Height')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Velaptor.UI.TextBox.Position'></a>

### Position 

Gets or sets the position of the [TextBox](Velaptor.UI.TextBox.md 'Velaptor.UI.TextBox') on the screen.

```csharp
public override System.Drawing.Point Position { get; set; }
```

Implements [Position](Velaptor.UI.IControl.md#Velaptor.UI.IControl.Position 'Velaptor.UI.IControl.Position')

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

<a name='Velaptor.UI.TextBox.SelectedText'></a>

### SelectedText 

Gets the selected text.

```csharp
public string SelectedText { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.TextBox.SelectedTextColor'></a>

### SelectedTextColor 

Gets or sets the color of the selected text.

```csharp
public System.Drawing.Color SelectedTextColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.TextBox.SelectionColor'></a>

### SelectionColor 

Gets or sets the color of the text selection rectangle.

```csharp
public System.Drawing.Color SelectionColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.TextBox.Text'></a>

### Text 

Gets or sets the text in the [TextBox](Velaptor.UI.TextBox.md 'Velaptor.UI.TextBox').

```csharp
public string Text { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Velaptor.UI.TextBox.TextColor'></a>

### TextColor 

Gets or sets the color of the text.

```csharp
public System.Drawing.Color TextColor { get; set; }
```

#### Property Value
[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')

<a name='Velaptor.UI.TextBox.Width'></a>

### Width 

Gets or sets the width of the [TextBox](Velaptor.UI.TextBox.md 'Velaptor.UI.TextBox').

```csharp
public override uint Width { get; set; }
```

Implements [Width](Velaptor.UI.ISizable.md#Velaptor.UI.ISizable.Width 'Velaptor.UI.ISizable.Width')

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
## Methods

<a name='Velaptor.UI.TextBox.LoadContent()'></a>

### LoadContent() 

Loads the content of the [TextBox](Velaptor.UI.TextBox.md 'Velaptor.UI.TextBox').

```csharp
public override void LoadContent();
```

Implements [LoadContent()](Velaptor.Content.IContentLoadable.md#Velaptor.Content.IContentLoadable.LoadContent() 'Velaptor.Content.IContentLoadable.LoadContent()')

<a name='Velaptor.UI.TextBox.Render()'></a>

### Render() 

Renders the control to the screen.

```csharp
public override void Render();
```

Implements [Render()](Velaptor.IDrawable.md#Velaptor.IDrawable.Render() 'Velaptor.IDrawable.Render()')

<a name='Velaptor.UI.TextBox.Update(Velaptor.FrameTime)'></a>

### Update(FrameTime) 

Updates the text box.

```csharp
public override void Update(Velaptor.FrameTime frameTime);
```
#### Parameters

<a name='Velaptor.UI.TextBox.Update(Velaptor.FrameTime).frameTime'></a>

`frameTime` [FrameTime](Velaptor.FrameTime.md 'Velaptor.FrameTime')

The amount of time that has passed for the current frame.

Implements [Update(FrameTime)](Velaptor.IUpdatable.md#Velaptor.IUpdatable.Update(Velaptor.FrameTime) 'Velaptor.IUpdatable.Update(Velaptor.FrameTime)')