---
title: Velaptor.Factories.InputFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](Velaptor.Factories.md 'Velaptor.Factories')

#### InputFactory Class

Generates input type objects for processing input such as the keyboard and mouse.

```csharp
public static class InputFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → InputFactory
## Methods

<a name='Velaptor.Factories.InputFactory.CreateKeyboard()'></a>

### CreateKeyboard() 

Creates a keyboard object.

```csharp
public static Velaptor.Input.IAppInput<Velaptor.Input.KeyboardState> CreateKeyboard();
```

#### Returns
[Velaptor.Input.IAppInput&lt;](Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')[KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')[&gt;](Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')  
The keyboard singleton object.

<a name='Velaptor.Factories.InputFactory.CreateMouse()'></a>

### CreateMouse() 

Creates a mouse object.

```csharp
public static Velaptor.Input.IAppInput<Velaptor.Input.MouseState> CreateMouse();
```

#### Returns
[Velaptor.Input.IAppInput&lt;](Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')[MouseState](Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')[&gt;](Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')  
The keyboard singleton object.