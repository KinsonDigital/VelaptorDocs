#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor](./Velaptor.md 'Velaptor')

## IUpdatable Interface

Provides the ability for an object to be updated.

```csharp
public interface IUpdatable
```

Derived  
&#8627; [ControlBase](./Velaptor.UI.ControlBase.md 'Velaptor.UI.ControlBase')  
&#8627; [IControl](./Velaptor.UI.IControl.md 'Velaptor.UI.IControl')
### Methods

<a name='Velaptor.IUpdatable.Update(Velaptor.FrameTime)'></a>

## IUpdatable.Update(FrameTime) Method

Updates the object.

```csharp
void Update(Velaptor.FrameTime frameTime);
```
#### Parameters

<a name='Velaptor.IUpdatable.Update(Velaptor.FrameTime).frameTime'></a>

`frameTime` [FrameTime](./Velaptor.FrameTime.md 'Velaptor.FrameTime')

The amount of time that has passed for the current frame.