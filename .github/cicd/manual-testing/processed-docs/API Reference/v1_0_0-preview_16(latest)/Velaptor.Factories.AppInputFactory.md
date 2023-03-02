#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](./Velaptor.Factories.md 'Velaptor.Factories')

## AppInputFactory Class

Generates input type objects for processing input such as the keyboard and mouse.

```csharp
public static class AppInputFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → AppInputFactory
### Methods

<a name='Velaptor.Factories.AppInputFactory.CreateKeyboard()'></a>

## AppInputFactory.CreateKeyboard() Method

Creates a keyboard object.

```csharp
public static Velaptor.Input.IAppInput<Velaptor.Input.KeyboardState> CreateKeyboard();
```

#### Returns
[Velaptor.Input.IAppInput&lt;](./Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')[KeyboardState](./Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')[&gt;](./Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')  
The keyboard singleton object.

<a name='Velaptor.Factories.AppInputFactory.CreateMouse()'></a>

## AppInputFactory.CreateMouse() Method

Creates a mouse object.

```csharp
public static Velaptor.Input.IAppInput<Velaptor.Input.MouseState> CreateMouse();
```

#### Returns
[Velaptor.Input.IAppInput&lt;](./Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')[MouseState](./Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')[&gt;](./Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')  
The keyboard singleton object.