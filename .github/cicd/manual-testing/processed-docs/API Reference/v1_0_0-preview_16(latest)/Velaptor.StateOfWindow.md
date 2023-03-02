#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor](./Velaptor.md 'Velaptor')

## StateOfWindow Enum

The different states that a [Window](./Velaptor.UI.Window.md 'Velaptor.UI.Window') can be in.

```csharp
public enum StateOfWindow
```
### Fields

<a name='Velaptor.StateOfWindow.FullScreen'></a>

`FullScreen` 3

The window covers the whole screen, including all task bars and/or panels.

<a name='Velaptor.StateOfWindow.Maximized'></a>

`Maximized` 2

The window covers the whole working area, which includes the desktop but not the taskbar and/or panels.

<a name='Velaptor.StateOfWindow.Minimized'></a>

`Minimized` 1

The window is minimized to the taskbar.

### Remarks
This is also known as .iconified'.

<a name='Velaptor.StateOfWindow.Normal'></a>

`Normal` 0

The window is in the normal state.