#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](./Velaptor.UI.md 'Velaptor.UI')

## IWindow Interface

Provides the core of an application window which facilitates how the  
window behaves, its state and the ability to be used in various types  
of applications.

```csharp
public interface IWindow :
Velaptor.UI.IWindowActions,
Velaptor.UI.IWindowProps,
System.IDisposable
```

Implements [IWindowActions](./Velaptor.UI.IWindowActions.md 'Velaptor.UI.IWindowActions'), [IWindowProps](./Velaptor.UI.IWindowProps.md 'Velaptor.UI.IWindowProps'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')
### Methods

<a name='Velaptor.UI.IWindow.Close()'></a>

## IWindow.Close() Method

Closes the window.

```csharp
void Close();
```

<a name='Velaptor.UI.IWindow.Show()'></a>

## IWindow.Show() Method

Shows the window.

```csharp
void Show();
```

<a name='Velaptor.UI.IWindow.ShowAsync(System.Action,System.Action)'></a>

## IWindow.ShowAsync(Action, Action) Method

Shows the window asynchronously.

```csharp
System.Threading.Tasks.Task ShowAsync(System.Action? afterStart=null, System.Action? afterUnload=null);
```
#### Parameters

<a name='Velaptor.UI.IWindow.ShowAsync(System.Action,System.Action).afterStart'></a>

`afterStart` [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

Executed after the application starts asynchronously.

<a name='Velaptor.UI.IWindow.ShowAsync(System.Action,System.Action).afterUnload'></a>

`afterUnload` [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

Executed after the window has been unloaded.

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
A [System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task') representing the result of the asynchronous operation.