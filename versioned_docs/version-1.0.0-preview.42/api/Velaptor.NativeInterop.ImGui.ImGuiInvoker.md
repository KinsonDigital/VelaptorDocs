---
title: Velaptor.NativeInterop.ImGui.ImGuiInvoker
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.NativeInterop.ImGui](Velaptor.NativeInterop.ImGui.md 'Velaptor.NativeInterop.ImGui')

#### ImGuiInvoker Class

Invokes [ImGuiNET.ImGui](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGui 'ImGuiNET.ImGui') functions.

```csharp
public sealed class ImGuiInvoker :
Velaptor.NativeInterop.ImGui.IImGuiInvoker
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → ImGuiInvoker

Implements [IImGuiInvoker](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md 'Velaptor.NativeInterop.ImGui.IImGuiInvoker')
## Methods

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.ArrowButton(string,ImGuiNET.ImGuiDir)'></a>

### ArrowButton(string, ImGuiDir) 

Creates an arrow button.

```csharp
public bool ArrowButton(string str_id, ImGuiNET.ImGuiDir dir);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.ArrowButton(string,ImGuiNET.ImGuiDir).str<id'></a>

`str_id` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The id of the button.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.ArrowButton(string,ImGuiNET.ImGuiDir).dir'></a>

`dir` [ImGuiNET.ImGuiDir](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiDir 'ImGuiNET.ImGuiDir')

The direction of the text relative to the button.

Implements [ArrowButton(string, ImGuiDir)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.ArrowButton(string,ImGuiNET.ImGuiDir) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.ArrowButton(string, ImGuiNET.ImGuiDir)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the button has been clicked.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Begin(string,ImGuiNET.ImGuiWindowFlags)'></a>

### Begin(string, ImGuiWindowFlags) 

Creates a new window.

```csharp
public bool Begin(string name, ImGuiNET.ImGuiWindowFlags flags);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Begin(string,ImGuiNET.ImGuiWindowFlags).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the window which becomes the title.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Begin(string,ImGuiNET.ImGuiWindowFlags).flags'></a>

`flags` [ImGuiNET.ImGuiWindowFlags](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiWindowFlags 'ImGuiNET.ImGuiWindowFlags')

Various window options.

Implements [Begin(string, ImGuiWindowFlags)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.Begin(string,ImGuiNET.ImGuiWindowFlags) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Begin(string, ImGuiNET.ImGuiWindowFlags)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the window is currently open.

#### Remarks
Make sure to invoke the [End()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.End() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.End()') method after creating a window.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags)'></a>

### BeginCombo(string, string, ImGuiComboFlags) 

Creates a combo box control.

```csharp
public bool BeginCombo(string label, string preview_value, ImGuiNET.ImGuiComboFlags flags);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The label of the combo box.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags).preview<value'></a>

`preview_value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The preview value of the selected item.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags).flags'></a>

`flags` [ImGuiNET.ImGuiComboFlags](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiComboFlags 'ImGuiNET.ImGuiComboFlags')

The combobox options.

Implements [BeginCombo(string, string, ImGuiComboFlags)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string, string, ImGuiNET.ImGuiComboFlags)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if an item was chosen.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Button(string)'></a>

### Button(string) 

Creates a button with the given [label](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#label 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.Button(string).label').

```csharp
public void Button(string label);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Button(string).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The button label.

Implements [Button(string)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.Button(string) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Button(string)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.CalcTextSize(string)'></a>

### CalcTextSize(string) 

Calculates the size of the given [text](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#text 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.CalcTextSize(string).text').

```csharp
public System.Numerics.Vector2 CalcTextSize(string text);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.CalcTextSize(string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to measure.

Implements [CalcTextSize(string)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.CalcTextSize(string) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.CalcTextSize(string)')

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The size of the text described by the X representing the width and the Y representing the height.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Checkbox(string,bool)'></a>

### Checkbox(string, bool) 

Creates a checkbox with the given [label](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#label 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.Checkbox(string, bool).label').

```csharp
public bool Checkbox(string label, ref bool v);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Checkbox(string,bool).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The checkbox label.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Checkbox(string,bool).v'></a>

`v` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

The state of the checkbox.

Implements [Checkbox(string, bool)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.Checkbox(string,bool) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Checkbox(string, bool)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the checkbox state was changed.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.End()'></a>

### End() 

Signifies the end of the creation of a window.

```csharp
public void End();
```

Implements [End()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.End() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.End()')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.EndCombo()'></a>

### EndCombo() 

Signifies the end of the creation of a combo box.

```csharp
public void EndCombo();
```

Implements [EndCombo()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.EndCombo() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.EndCombo()')

#### Remarks
This method should be called after [BeginCombo(string, string, ImGuiComboFlags)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string, string, ImGuiNET.ImGuiComboFlags)') if and only if [BeginCombo(string, string, ImGuiComboFlags)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string, string, ImGuiNET.ImGuiComboFlags)') returns true.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.GetCursorPos()'></a>

### GetCursorPos() 

Gets the current position of the cursor.

```csharp
public System.Numerics.Vector2 GetCursorPos();
```

Implements [GetCursorPos()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetCursorPos() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetCursorPos()')

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The cursor position.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.GetFrameHeightWithSpacing()'></a>

### GetFrameHeightWithSpacing() 

Gets the current frame height with spacing.

```csharp
public float GetFrameHeightWithSpacing();
```

Implements [GetFrameHeightWithSpacing()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetFrameHeightWithSpacing() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetFrameHeightWithSpacing()')

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The frame height.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.GetIO()'></a>

### GetIO() 

Gets the IO object for system and [ImGuiNET.ImGui](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGui 'ImGuiNET.ImGui') related settings and information.

```csharp
public ImGuiNET.ImGuiIOPtr GetIO();
```

Implements [GetIO()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetIO() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetIO()')

#### Returns
[ImGuiNET.ImGuiIOPtr](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiIOPtr 'ImGuiNET.ImGuiIOPtr')  
The config/settings/info object.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.GetStyle()'></a>

### GetStyle() 

Gets the style object for ImGui.

```csharp
public ImGuiNET.ImGuiStylePtr GetStyle();
```

Implements [GetStyle()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetStyle() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetStyle()')

#### Returns
[ImGuiNET.ImGuiStylePtr](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiStylePtr 'ImGuiNET.ImGuiStylePtr')  
The style object.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.GetWindowPos()'></a>

### GetWindowPos() 

Gets the position of a window.

```csharp
public System.Numerics.Vector2 GetWindowPos();
```

Implements [GetWindowPos()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetWindowPos() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetWindowPos()')

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The window position.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.GetWindowSize()'></a>

### GetWindowSize() 

Gets the size of a window.

```csharp
public System.Numerics.Vector2 GetWindowSize();
```

Implements [GetWindowSize()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetWindowSize() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetWindowSize()')

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The size.

#### Remarks
The size of the text described by the X representing the width and the Y representing the height.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsItemHovered()'></a>

### IsItemHovered() 

Returns a value indicating whether the mouse is hovering over an item.

```csharp
public bool IsItemHovered();
```

Implements [IsItemHovered()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsItemHovered() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsItemHovered()')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse is hovering over the item.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseDown(ImGuiNET.ImGuiMouseButton)'></a>

### IsMouseDown(ImGuiMouseButton) 

Returns a value indicating whether the given mouse [button](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#button 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseDown(ImGuiNET.ImGuiMouseButton).button') is in the down state.

```csharp
public bool IsMouseDown(ImGuiNET.ImGuiMouseButton button);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseDown(ImGuiNET.ImGuiMouseButton).button'></a>

`button` [ImGuiNET.ImGuiMouseButton](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiMouseButton 'ImGuiNET.ImGuiMouseButton')

The button to check.

Implements [IsMouseDown(ImGuiMouseButton)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDown(ImGuiNET.ImGuiMouseButton) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDown(ImGuiNET.ImGuiMouseButton)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse is in the down state.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseDragging(ImGuiNET.ImGuiMouseButton)'></a>

### IsMouseDragging(ImGuiMouseButton) 

Gets a value indicating whether a window is being dragged by the given mouse [button](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#button 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseDragging(ImGuiNET.ImGuiMouseButton).button').

```csharp
public bool IsMouseDragging(ImGuiNET.ImGuiMouseButton button);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseDragging(ImGuiNET.ImGuiMouseButton).button'></a>

`button` [ImGuiNET.ImGuiMouseButton](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiMouseButton 'ImGuiNET.ImGuiMouseButton')

The mouse button.

Implements [IsMouseDragging(ImGuiMouseButton)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDragging(ImGuiNET.ImGuiMouseButton) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDragging(ImGuiNET.ImGuiMouseButton)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the window is being dragged.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseReleased(ImGuiNET.ImGuiMouseButton)'></a>

### IsMouseReleased(ImGuiMouseButton) 

Returns a value indicating whether the given mouse [button](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#button 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseReleased(ImGuiNET.ImGuiMouseButton).button') is in the released state.

```csharp
public bool IsMouseReleased(ImGuiNET.ImGuiMouseButton button);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsMouseReleased(ImGuiNET.ImGuiMouseButton).button'></a>

`button` [ImGuiNET.ImGuiMouseButton](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiMouseButton 'ImGuiNET.ImGuiMouseButton')

The button to check.

Implements [IsMouseReleased(ImGuiMouseButton)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseReleased(ImGuiNET.ImGuiMouseButton) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseReleased(ImGuiNET.ImGuiMouseButton)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse is in the up state.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.IsWindowFocused()'></a>

### IsWindowFocused() 

Gets a value indicating whether a window is focused.

```csharp
public bool IsWindowFocused();
```

Implements [IsWindowFocused()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsWindowFocused() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsWindowFocused()')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the window is in focus.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PopButtonRepeat()'></a>

### PopButtonRepeat() 

Stops the button from firing repeatedly when held down.

```csharp
public void PopButtonRepeat();
```

Implements [PopButtonRepeat()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopButtonRepeat() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopButtonRepeat()')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PopID()'></a>

### PopID() 

Ends the current scoped ID.

```csharp
public void PopID();
```

Implements [PopID()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopID() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopID()')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PopStyleColor()'></a>

### PopStyleColor() 

Pops the most recent style color.

```csharp
public void PopStyleColor();
```

Implements [PopStyleColor()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleColor() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleColor()')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PopStyleColor(int)'></a>

### PopStyleColor(int) 

Pops the most recent style colors a total number of times by the given [count](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#count 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.PopStyleColor(int).count').

```csharp
public void PopStyleColor(int count);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PopStyleColor(int).count'></a>

`count` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The total number of recent style color pushes to pop.

Implements [PopStyleColor(int)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleColor(int) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleColor(int)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PopStyleVar(int)'></a>

### PopStyleVar(int) 

Restores previous updated styles back to their original values.

```csharp
public void PopStyleVar(int count);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PopStyleVar(int).count'></a>

`count` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of previous applied styles to restore.

Implements [PopStyleVar(int)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleVar(int) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleVar(int)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushButtonRepeat(bool)'></a>

### PushButtonRepeat(bool) 

Sets up a button to fire repeatedly when held down.

```csharp
public void PushButtonRepeat(bool repeat);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushButtonRepeat(bool).repeat'></a>

`repeat` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

True to set the button to repeat.

Implements [PushButtonRepeat(bool)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushButtonRepeat(bool) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushButtonRepeat(bool)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushID(string)'></a>

### PushID(string) 

Creates a new scoped ID for further control operations.

```csharp
public void PushID(string str_id);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushID(string).str<id'></a>

`str_id` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The id of the scope.

Implements [PushID(string)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushID(string) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushID(string)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol,System.Numerics.Vector4)'></a>

### PushStyleColor(ImGuiCol, Vector4) 

Pushes the color using the given [col](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#col 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol, System.Numerics.Vector4).col') to the current style described by the given [idx](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#idx 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol, System.Numerics.Vector4).idx').

```csharp
public void PushStyleColor(ImGuiNET.ImGuiCol idx, System.Numerics.Vector4 col);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol,System.Numerics.Vector4).idx'></a>

`idx` [ImGuiNET.ImGuiCol](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiCol 'ImGuiNET.ImGuiCol')

The type of area of the style to push the color.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol,System.Numerics.Vector4).col'></a>

`col` [System.Numerics.Vector4](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector4 'System.Numerics.Vector4')

The color to push.

Implements [PushStyleColor(ImGuiCol, Vector4)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol,System.Numerics.Vector4) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol, System.Numerics.Vector4)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar,float)'></a>

### PushStyleVar(ImGuiStyleVar, float) 

Temporarily modifies the style of [ImGuiNET.ImGui](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGui 'ImGuiNET.ImGui') by applying a style to a part of  
the GUI dictated by the given [idx](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#idx 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar, float).idx') with the given [val](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#val 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar, float).val').

```csharp
public void PushStyleVar(ImGuiNET.ImGuiStyleVar idx, float val);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar,float).idx'></a>

`idx` [ImGuiNET.ImGuiStyleVar](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiStyleVar 'ImGuiNET.ImGuiStyleVar')

The style to update.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar,float).val'></a>

`val` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to apply.

Implements [PushStyleVar(ImGuiStyleVar, float)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar,float) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar, float)')

#### Remarks
Remains in effect until the [PopStyleVar(int)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleVar(int) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleVar(int)') is invoked.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SameLine()'></a>

### SameLine() 

Sets the next control to be on the same line as the previous control.

```csharp
public void SameLine();
```

Implements [SameLine()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.SameLine() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.SameLine()')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SameLine(float,float)'></a>

### SameLine(float, float) 

Sets the next control to be on the same line as the previous control.

```csharp
public void SameLine(float offset_from_start_x, float spacing);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SameLine(float,float).offset<from>start<x'></a>

`offset_from_start_x` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The horizontal offset from the start of the previous control.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SameLine(float,float).spacing'></a>

`spacing` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The amount of spacing between the controls.

Implements [SameLine(float, float)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.SameLine(float,float) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.SameLine(float, float)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Selectable(string,bool)'></a>

### Selectable(string, bool) 

Returns a value indicating whether the given item [label](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#label 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.Selectable(string, bool).label') is selectable.

```csharp
public bool Selectable(string label, bool selected);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Selectable(string,bool).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to be displayed for the item in the combo box.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Selectable(string,bool).selected'></a>

`selected` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Determines whether the item is selected when the combo box is first displayed.

Implements [Selectable(string, bool)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.Selectable(string,bool) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Selectable(string, bool)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the item is selected.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetCursorPos(System.Numerics.Vector2)'></a>

### SetCursorPos(Vector2) 

Sets the position of the cursor.

```csharp
public void SetCursorPos(System.Numerics.Vector2 local_pos);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetCursorPos(System.Numerics.Vector2).local<pos'></a>

`local_pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to set the cursor.

Implements [SetCursorPos(Vector2)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetCursorPos(System.Numerics.Vector2) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetCursorPos(System.Numerics.Vector2)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetItemDefaultFocus()'></a>

### SetItemDefaultFocus() 

Sets the default keyboard focus to the item that was previously added.

```csharp
public void SetItemDefaultFocus();
```

Implements [SetItemDefaultFocus()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetItemDefaultFocus() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetItemDefaultFocus()')

#### Remarks
This method is typically used in conjunction with combo boxes or list boxes.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetNextItemWidth(float)'></a>

### SetNextItemWidth(float) 

Sets the width of the next item.

```csharp
public void SetNextItemWidth(float item_width);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetNextItemWidth(float).item<width'></a>

`item_width` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The width.

Implements [SetNextItemWidth(float)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetNextItemWidth(float) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetNextItemWidth(float)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetWindowPos(System.Numerics.Vector2)'></a>

### SetWindowPos(Vector2) 

Sets the position of the window.

```csharp
public void SetWindowPos(System.Numerics.Vector2 pos);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetWindowPos(System.Numerics.Vector2).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position.

Implements [SetWindowPos(Vector2)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetWindowPos(System.Numerics.Vector2) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetWindowPos(System.Numerics.Vector2)')

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetWindowSize(System.Numerics.Vector2)'></a>

### SetWindowSize(Vector2) 

Sets the size of the window.

```csharp
public void SetWindowSize(System.Numerics.Vector2 size);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SetWindowSize(System.Numerics.Vector2).size'></a>

`size` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The window size.

Implements [SetWindowSize(Vector2)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetWindowSize(System.Numerics.Vector2) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetWindowSize(System.Numerics.Vector2)')

#### Remarks
The size of the text described by the X representing the width and the Y representing the height.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SliderFloat(string,float,float,float)'></a>

### SliderFloat(string, float, float, float) 

Creates a slider scope with a float value.

```csharp
public bool SliderFloat(string label, ref float v, float v_min, float v_max);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SliderFloat(string,float,float,float).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The label of the control.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SliderFloat(string,float,float,float).v'></a>

`v` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value of the control.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SliderFloat(string,float,float,float).v<min'></a>

`v_min` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The minimum value.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.SliderFloat(string,float,float,float).v<max'></a>

`v_max` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The maximum value.

Implements [SliderFloat(string, float, float, float)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.SliderFloat(string,float,float,float) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.SliderFloat(string, float, float, float)')

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the button has been clicked.

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Text(string)'></a>

### Text(string) 

Creates a test control.

```csharp
public void Text(string fmt);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.ImGuiInvoker.Text(string).fmt'></a>

`fmt` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to display.

Implements [Text(string)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.Text(string) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Text(string)')

#### Remarks
The [fmt](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md#fmt 'Velaptor.NativeInterop.ImGui.ImGuiInvoker.Text(string).fmt') can take syntax for formatting values such as:  
- Numerical Formatting  
  You can control how numeric values are displayed, including the number of decimal places,  
  whether to use scientific notation, whether to include a thousand separator, and more.  
  For example, &#123;0:F2&#125; formats the number with two decimal places.  
- Date and Time Formatting  
  You can control how DateTime values are displayed, including the date format, time format, and more.  
  For example, &#123;0:yyyy-MM-dd&#125; formats the date as year-month-day.  
- String Padding  
  You can control the width of the field in which the string is printed, and whether it’s aligned to  
  the left or right. For example, &#123;0,10&#125; prints the string in a field of width 10, right-aligned,  
  while &#123;0,-10&#125; prints it left-aligned.  
- Custom Formatting  
  You can define your own format strings to control how certain types of objects are displayed.  
can escape a brace by adding another brace.  
ple: &#123;&#123; and &#125;&#125; will display as &#123; and &#125;.
