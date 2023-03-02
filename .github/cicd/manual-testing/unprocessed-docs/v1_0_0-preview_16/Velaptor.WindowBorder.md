#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor](./Velaptor.md 'Velaptor')

## WindowBorder Enum

The different kinds of borders that a [IWindow](./Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow') can have.

```csharp
public enum WindowBorder
```
### Fields

<a name='Velaptor.WindowBorder.Fixed'></a>

`Fixed` 1

The window has a fixed border. A window with a fixed border can only be resized  
programmatically.

<a name='Velaptor.WindowBorder.Hidden'></a>

`Hidden` 2

The window does not have a border. A window with a hidden border can only be  
resized programmatically.

<a name='Velaptor.WindowBorder.Resizable'></a>

`Resizable` 0

The window has a resizable border. A window with a resizable border can be resized  
by the user or programmatically.