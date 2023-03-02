#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](./Velaptor.Factories.md 'Velaptor.Factories')

## App Class

Velaptor application specific functionality.

```csharp
public static class App
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → App
### Methods

<a name='Velaptor.Factories.App.CreateWindow()'></a>

## App.CreateWindow() Method

Creates an instance of a Velaptor window implementation.

```csharp
public static Velaptor.UI.IWindow CreateWindow();
```

#### Returns
[IWindow](./Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow')  
A Velaptor framework window implementation.

### Remarks
The window width and height are set by the application settings.

<a name='Velaptor.Factories.App.CreateWindow(uint,uint)'></a>

## App.CreateWindow(uint, uint) Method

Creates an instance of a Velaptor window implementation.

```csharp
public static Velaptor.UI.IWindow CreateWindow(uint width, uint height);
```
#### Parameters

<a name='Velaptor.Factories.App.CreateWindow(uint,uint).width'></a>

`width` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The width of the window.

<a name='Velaptor.Factories.App.CreateWindow(uint,uint).height'></a>

`height` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The height of the window.

#### Returns
[IWindow](./Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow')  
A Velaptor framework window implementation.