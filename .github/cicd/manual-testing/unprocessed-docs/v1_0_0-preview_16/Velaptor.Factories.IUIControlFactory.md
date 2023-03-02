#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](./Velaptor.Factories.md 'Velaptor.Factories')

## IUIControlFactory Interface

Creates UI controls.

```csharp
public interface IUIControlFactory
```

Derived  
&#8627; [UIControlFactory](./Velaptor.Factories.UIControlFactory.md 'Velaptor.Factories.UIControlFactory')
### Methods

<a name='Velaptor.Factories.IUIControlFactory.CreateLabel(string,Velaptor.Content.Fonts.IFont)'></a>

## IUIControlFactory.CreateLabel(string, IFont) Method

Creates a new [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label') control to display text.

```csharp
Velaptor.UI.Label CreateLabel(string labelText, Velaptor.Content.Fonts.IFont font);
```
#### Parameters

<a name='Velaptor.Factories.IUIControlFactory.CreateLabel(string,Velaptor.Content.Fonts.IFont).labelText'></a>

`labelText` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to display in the label.

<a name='Velaptor.Factories.IUIControlFactory.CreateLabel(string,Velaptor.Content.Fonts.IFont).font'></a>

`font` [IFont](./Velaptor.Content.Fonts.IFont.md 'Velaptor.Content.Fonts.IFont')

The font to use for the label.

#### Returns
[Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label')  
The label to render.

<a name='Velaptor.Factories.IUIControlFactory.CreateLabel(string)'></a>

## IUIControlFactory.CreateLabel(string) Method

Creates a new [Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label') control to display text.

```csharp
Velaptor.UI.Label CreateLabel(string labelText);
```
#### Parameters

<a name='Velaptor.Factories.IUIControlFactory.CreateLabel(string).labelText'></a>

`labelText` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to display in the label.

#### Returns
[Label](./Velaptor.UI.Label.md 'Velaptor.UI.Label')  
The label to render.