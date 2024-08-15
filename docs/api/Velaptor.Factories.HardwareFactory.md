---
title: Velaptor.Factories.HardwareFactory
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Factories](Velaptor.Factories.md 'Velaptor.Factories')

#### HardwareFactory Class

Generates input type objects for processing input such as the keyboard and mouse.

```csharp
public static class HardwareFactory
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → HardwareFactory
## Methods

<a name='Velaptor.Factories.HardwareFactory.GetDisplays()'></a>

### GetDisplays() 

Gets all the displays in the system.

```csharp
public static System.Collections.Immutable.ImmutableArray<Velaptor.Hardware.SystemDisplay> GetDisplays();
```

#### Returns
[System.Collections.Immutable.ImmutableArray&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Immutable.ImmutableArray-1 'System.Collections.Immutable.ImmutableArray`1')[SystemDisplay](Velaptor.Hardware.SystemDisplay.md 'Velaptor.Hardware.SystemDisplay')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Immutable.ImmutableArray-1 'System.Collections.Immutable.ImmutableArray`1')  
The list of displays.

<a name='Velaptor.Factories.HardwareFactory.GetKeyboard()'></a>

### GetKeyboard() 

Gets a keyboard object.

```csharp
public static Velaptor.Input.IAppInput<Velaptor.Input.KeyboardState> GetKeyboard();
```

#### Returns
[Velaptor.Input.IAppInput&lt;](Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')[KeyboardState](Velaptor.Input.KeyboardState.md 'Velaptor.Input.KeyboardState')[&gt;](Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')  
The keyboard singleton object.

<a name='Velaptor.Factories.HardwareFactory.GetMainDisplay()'></a>

### GetMainDisplay() 

Gets the primary display in the system.

```csharp
public static Velaptor.Hardware.SystemDisplay GetMainDisplay();
```

#### Returns
[SystemDisplay](Velaptor.Hardware.SystemDisplay.md 'Velaptor.Hardware.SystemDisplay')  
The system's primary display.

<a name='Velaptor.Factories.HardwareFactory.GetMouse()'></a>

### GetMouse() 

Gets a mouse object.

```csharp
public static Velaptor.Input.IAppInput<Velaptor.Input.MouseState> GetMouse();
```

#### Returns
[Velaptor.Input.IAppInput&lt;](Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')[MouseState](Velaptor.Input.MouseState.md 'Velaptor.Input.MouseState')[&gt;](Velaptor.Input.IAppInput_TState_.md 'Velaptor.Input.IAppInput<TState>')  
The keyboard singleton object.
