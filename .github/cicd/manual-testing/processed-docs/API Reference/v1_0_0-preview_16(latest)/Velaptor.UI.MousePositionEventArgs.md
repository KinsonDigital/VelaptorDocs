#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](./Velaptor.UI.md 'Velaptor.UI')

## MousePositionEventArgs Class

Holds information about the mouse position over a control.

```csharp
public class MousePositionEventArgs : System.EventArgs
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.EventArgs](https://docs.microsoft.com/en-us/dotnet/api/System.EventArgs 'System.EventArgs') → MousePositionEventArgs
### Constructors

<a name='Velaptor.UI.MousePositionEventArgs.MousePositionEventArgs(System.Drawing.Point)'></a>

## MousePositionEventArgs(Point) Constructor

Initializes a new instance of the [MousePositionEventArgs](./Velaptor.UI.MousePositionEventArgs.md 'Velaptor.UI.MousePositionEventArgs') class.

```csharp
public MousePositionEventArgs(System.Drawing.Point mousePosition);
```
#### Parameters

<a name='Velaptor.UI.MousePositionEventArgs.MousePositionEventArgs(System.Drawing.Point).mousePosition'></a>

`mousePosition` [System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')

The position of the mouse.
### Properties

<a name='Velaptor.UI.MousePositionEventArgs.MousePosition'></a>

## MousePositionEventArgs.MousePosition Property

Gets the position of the mouse relative to the top right corner of the control.

```csharp
public System.Drawing.Point MousePosition { get; }
```

#### Property Value
[System.Drawing.Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point 'System.Drawing.Point')