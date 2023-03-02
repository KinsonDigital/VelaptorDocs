#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](./Velaptor.Factories.md 'Velaptor.Factories')

## UIControlFactory Class

Creates UI controls.

```csharp
public class UIControlFactory :
Velaptor.Factories.IUIControlFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → UIControlFactory

Implements [IUIControlFactory](./Velaptor.Factories.IUIControlFactory.md 'Velaptor.Factories.IUIControlFactory')
### Methods

<a name='Velaptor.Factories.UIControlFactory.CreateLabel(string,Velaptor.Content.Fonts.IFont)'></a>

## UIControlFactory.CreateLabel(string, IFont) Method

Creates a new [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label') control to display text.

```csharp
public Velaptor.UI.Label CreateLabel(string labelText, Velaptor.Content.Fonts.IFont font);
```
#### Parameters

<a name='Velaptor.Factories.UIControlFactory.CreateLabel(string,Velaptor.Content.Fonts.IFont).labelText'></a>

`labelText` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to display in the label.

<a name='Velaptor.Factories.UIControlFactory.CreateLabel(string,Velaptor.Content.Fonts.IFont).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for the label.

Implements [CreateLabel(string, IFont)](./string, IFont](Velaptor.Factories.IUIControlFactory.md#Velaptor.Factories.IUIControlFactory.CreateLabel(string,Velaptor.Content.Fonts.IFont)) 'Velaptor.Factories.IUIControlFactory.CreateLabel(string, Velaptor.Content.Fonts.IFont)')

#### Returns
[Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label')  
The label to render.

<a name='Velaptor.Factories.UIControlFactory.CreateLabel(string)'></a>

## UIControlFactory.CreateLabel(string) Method

Creates a new [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label') control to display text.

```csharp
public Velaptor.UI.Label CreateLabel(string labelText);
```
#### Parameters

<a name='Velaptor.Factories.UIControlFactory.CreateLabel(string).labelText'></a>

`labelText` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to display in the label.

Implements [CreateLabel(string)](./string](Velaptor.Factories.IUIControlFactory.md#Velaptor.Factories.IUIControlFactory.CreateLabel(string)) 'Velaptor.Factories.IUIControlFactory.CreateLabel(string)')

#### Returns
[Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label')  
The label to render.