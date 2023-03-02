#### [Velaptor](index.md 'index')
### [Velaptor.Input](Velaptor.Input.md 'Velaptor.Input')

## IAppInput<TState> Interface

Gets the state of game-specific input such as a mouse or keyboard.

```csharp
public interface IAppInput<out TState>
    where TState : struct, System.ValueType, System.ValueType
```
#### Type parameters

<a name='Velaptor.Input.IAppInput_TState_.TState'></a>

`TState`

The state of the input.
### Methods

<a name='Velaptor.Input.IAppInput_TState_.GetState()'></a>

## IAppInput<TState>.GetState() Method

Returns the current state of the input.

```csharp
TState GetState();
```

#### Returns
[TState](Velaptor.Input.IAppInput_TState_.md#Velaptor.Input.IAppInput_TState_.TState 'Velaptor.Input.IAppInput<TState>.TState')  
The state of the input.