---
title: Velaptor.Input.IAppInput<TState>
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Input](Velaptor.Input.md 'Velaptor.Input')

#### IAppInput&lt;TState&gt; Interface

Gets the state of game-specific input such as a mouse or keyboard.

```csharp
public interface IAppInput<out TState>
    where TState : struct, System.ValueType, System.ValueType
```
#### Type parameters

<a name='Velaptor.Input.IAppInput<TState>.TState'></a>

`TState`

The state of the input.
## Methods

<a name='Velaptor.Input.IAppInput<TState>.GetState()'></a>

### GetState() 

Returns the current state of the input.

```csharp
TState GetState();
```

#### Returns
[TState](Velaptor.Input.IAppInput_TState_.md#tstate 'Velaptor.Input.IAppInput<TState>.TState')  
The state of the input.
