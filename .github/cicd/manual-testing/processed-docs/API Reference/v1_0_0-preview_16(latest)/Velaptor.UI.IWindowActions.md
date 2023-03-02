#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.UI](./Velaptor.UI.md 'Velaptor.UI')

## IWindowActions Interface

Provides the various actions of a window.

```csharp
public interface IWindowActions
```

Derived  
&#8627; [IWindow](./Velaptor.UI.IWindow.md 'Velaptor.UI.IWindow')
### Properties

<a name='Velaptor.UI.IWindowActions.Draw'></a>

## IWindowActions.Draw Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked per frame for rendering.

```csharp
System.Action<Velaptor.FrameTime>? Draw { get; set; }
```

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')

<a name='Velaptor.UI.IWindowActions.Initialize'></a>

## IWindowActions.Initialize Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate to be invoked one time to initialize the window.

```csharp
System.Action? Initialize { get; set; }
```

#### Property Value
[System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

<a name='Velaptor.UI.IWindowActions.Uninitialize'></a>

## IWindowActions.Uninitialize Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate to be invoked one time to uninitialize the window.

```csharp
System.Action? Uninitialize { get; set; }
```

#### Property Value
[System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')

<a name='Velaptor.UI.IWindowActions.Update'></a>

## IWindowActions.Update Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked per frame for updating.

```csharp
System.Action<Velaptor.FrameTime>? Update { get; set; }
```

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')

<a name='Velaptor.UI.IWindowActions.WinResize'></a>

## IWindowActions.WinResize Property

Gets or sets the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action') delegate that is invoked every time the window is resized.

```csharp
System.Action<Velaptor.SizeU>? WinResize { get; set; }
```

#### Property Value
[System.Action&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')[SizeU](./Velaptor.SizeU.md 'Velaptor.SizeU')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Action-1 'System.Action`1')