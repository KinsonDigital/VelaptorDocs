---
title: Velaptor.NativeInterop.ImGui.IImGuiInvoker
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.NativeInterop.ImGui](Velaptor.NativeInterop.ImGui.md 'Velaptor.NativeInterop.ImGui')

#### IImGuiInvoker Interface

Invokes [ImGuiNET.ImGui](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGui 'ImGuiNET.ImGui') functions.

```csharp
public interface IImGuiInvoker
```

Derived  
&#8627; [ImGuiInvoker](Velaptor.NativeInterop.ImGui.ImGuiInvoker.md 'Velaptor.NativeInterop.ImGui.ImGuiInvoker')
## Methods

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.ArrowButton(string,ImGuiNET.ImGuiDir)'></a>

### ArrowButton(string, ImGuiDir) 

Creates an arrow button.

```csharp
bool ArrowButton(string str_id, ImGuiNET.ImGuiDir dir);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.ArrowButton(string,ImGuiNET.ImGuiDir).str<id'></a>

`str_id` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The id of the button.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.ArrowButton(string,ImGuiNET.ImGuiDir).dir'></a>

`dir` [ImGuiNET.ImGuiDir](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiDir 'ImGuiNET.ImGuiDir')

The direction of the text relative to the button.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the button has been clicked.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Begin(string,ImGuiNET.ImGuiWindowFlags)'></a>

### Begin(string, ImGuiWindowFlags) 

Creates a new window.

```csharp
bool Begin(string name, ImGuiNET.ImGuiWindowFlags flags);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Begin(string,ImGuiNET.ImGuiWindowFlags).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the window which becomes the title.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Begin(string,ImGuiNET.ImGuiWindowFlags).flags'></a>

`flags` [ImGuiNET.ImGuiWindowFlags](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiWindowFlags 'ImGuiNET.ImGuiWindowFlags')

Various window options.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the window is currently open.

#### Remarks
Make sure to invoke the [End()](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.End() 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.End()') method after creating a window.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags)'></a>

### BeginCombo(string, string, ImGuiComboFlags) 

Creates a combo box control.

```csharp
bool BeginCombo(string label, string preview_value, ImGuiNET.ImGuiComboFlags flags);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The label of the combo box.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags).preview<value'></a>

`preview_value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The preview value of the selected item.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags).flags'></a>

`flags` [ImGuiNET.ImGuiComboFlags](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiComboFlags 'ImGuiNET.ImGuiComboFlags')

The combobox options.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if an item was chosen.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Button(string)'></a>

### Button(string) 

Creates a button with the given [label](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#label 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Button(string).label').

```csharp
void Button(string label);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Button(string).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The button label.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.CalcTextSize(string)'></a>

### CalcTextSize(string) 

Calculates the size of the given [text](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#text 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.CalcTextSize(string).text').

```csharp
System.Numerics.Vector2 CalcTextSize(string text);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.CalcTextSize(string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to measure.

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The size of the text described by the X representing the width and the Y representing the height.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Checkbox(string,bool)'></a>

### Checkbox(string, bool) 

Creates a checkbox with the given [label](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#label 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Checkbox(string, bool).label').

```csharp
bool Checkbox(string label, ref bool v);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Checkbox(string,bool).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The checkbox label.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Checkbox(string,bool).v'></a>

`v` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

The state of the checkbox.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the checkbox state was changed.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.End()'></a>

### End() 

Signifies the end of the creation of a window.

```csharp
void End();
```

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.EndCombo()'></a>

### EndCombo() 

Signifies the end of the creation of a combo box.

```csharp
void EndCombo();
```

#### Remarks
This method should be called after [BeginCombo(string, string, ImGuiComboFlags)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string, string, ImGuiNET.ImGuiComboFlags)') if and only if [BeginCombo(string, string, ImGuiComboFlags)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string,string,ImGuiNET.ImGuiComboFlags) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.BeginCombo(string, string, ImGuiNET.ImGuiComboFlags)') returns true.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetCursorPos()'></a>

### GetCursorPos() 

Gets the current position of the cursor.

```csharp
System.Numerics.Vector2 GetCursorPos();
```

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The cursor position.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetFrameHeightWithSpacing()'></a>

### GetFrameHeightWithSpacing() 

Gets the current frame height with spacing.

```csharp
float GetFrameHeightWithSpacing();
```

#### Returns
[System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
The frame height.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetIO()'></a>

### GetIO() 

Gets the IO object for system and [ImGuiNET.ImGui](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGui 'ImGuiNET.ImGui') related settings and information.

```csharp
ImGuiNET.ImGuiIOPtr GetIO();
```

#### Returns
[ImGuiNET.ImGuiIOPtr](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiIOPtr 'ImGuiNET.ImGuiIOPtr')  
The config/settings/info object.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetStyle()'></a>

### GetStyle() 

Gets the style object for ImGui.

```csharp
ImGuiNET.ImGuiStylePtr GetStyle();
```

#### Returns
[ImGuiNET.ImGuiStylePtr](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiStylePtr 'ImGuiNET.ImGuiStylePtr')  
The style object.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetWindowPos()'></a>

### GetWindowPos() 

Gets the position of a window.

```csharp
System.Numerics.Vector2 GetWindowPos();
```

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The window position.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.GetWindowSize()'></a>

### GetWindowSize() 

Gets the size of a window.

```csharp
System.Numerics.Vector2 GetWindowSize();
```

#### Returns
[System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')  
The size.

#### Remarks
The size of the text described by the X representing the width and the Y representing the height.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsItemHovered()'></a>

### IsItemHovered() 

Returns a value indicating whether the mouse is hovering over an item.

```csharp
bool IsItemHovered();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse is hovering over the item.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDown(ImGuiNET.ImGuiMouseButton)'></a>

### IsMouseDown(ImGuiMouseButton) 

Returns a value indicating whether the given mouse [button](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#button 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDown(ImGuiNET.ImGuiMouseButton).button') is in the down state.

```csharp
bool IsMouseDown(ImGuiNET.ImGuiMouseButton button);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDown(ImGuiNET.ImGuiMouseButton).button'></a>

`button` [ImGuiNET.ImGuiMouseButton](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiMouseButton 'ImGuiNET.ImGuiMouseButton')

The button to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse is in the down state.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDragging(ImGuiNET.ImGuiMouseButton)'></a>

### IsMouseDragging(ImGuiMouseButton) 

Gets a value indicating whether a window is being dragged by the given mouse [button](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#button 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDragging(ImGuiNET.ImGuiMouseButton).button').

```csharp
bool IsMouseDragging(ImGuiNET.ImGuiMouseButton button);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseDragging(ImGuiNET.ImGuiMouseButton).button'></a>

`button` [ImGuiNET.ImGuiMouseButton](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiMouseButton 'ImGuiNET.ImGuiMouseButton')

The mouse button.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the window is being dragged.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseReleased(ImGuiNET.ImGuiMouseButton)'></a>

### IsMouseReleased(ImGuiMouseButton) 

Returns a value indicating whether the given mouse [button](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#button 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseReleased(ImGuiNET.ImGuiMouseButton).button') is in the released state.

```csharp
bool IsMouseReleased(ImGuiNET.ImGuiMouseButton button);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsMouseReleased(ImGuiNET.ImGuiMouseButton).button'></a>

`button` [ImGuiNET.ImGuiMouseButton](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiMouseButton 'ImGuiNET.ImGuiMouseButton')

The button to check.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the mouse is in the up state.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.IsWindowFocused()'></a>

### IsWindowFocused() 

Gets a value indicating whether a window is focused.

```csharp
bool IsWindowFocused();
```

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the window is in focus.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopButtonRepeat()'></a>

### PopButtonRepeat() 

Stops the button from firing repeatedly when held down.

```csharp
void PopButtonRepeat();
```

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopID()'></a>

### PopID() 

Ends the current scoped ID.

```csharp
void PopID();
```

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleColor()'></a>

### PopStyleColor() 

Pops the most recent style color.

```csharp
void PopStyleColor();
```

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleColor(int)'></a>

### PopStyleColor(int) 

Pops the most recent style colors a total number of times by the given [count](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#count 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleColor(int).count').

```csharp
void PopStyleColor(int count);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleColor(int).count'></a>

`count` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The total number of recent style color pushes to pop.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleVar(int)'></a>

### PopStyleVar(int) 

Restores previous updated styles back to their original values.

```csharp
void PopStyleVar(int count);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleVar(int).count'></a>

`count` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The number of previous applied styles to restore.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushButtonRepeat(bool)'></a>

### PushButtonRepeat(bool) 

Sets up a button to fire repeatedly when held down.

```csharp
void PushButtonRepeat(bool repeat);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushButtonRepeat(bool).repeat'></a>

`repeat` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

True to set the button to repeat.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushID(string)'></a>

### PushID(string) 

Creates a new scoped ID for further control operations.

```csharp
void PushID(string str_id);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushID(string).str<id'></a>

`str_id` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The id of the scope.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol,System.Numerics.Vector4)'></a>

### PushStyleColor(ImGuiCol, Vector4) 

Pushes the color using the given [col](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#col 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol, System.Numerics.Vector4).col') to the current style described by the given [idx](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#idx 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol, System.Numerics.Vector4).idx').

```csharp
void PushStyleColor(ImGuiNET.ImGuiCol idx, System.Numerics.Vector4 col);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol,System.Numerics.Vector4).idx'></a>

`idx` [ImGuiNET.ImGuiCol](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiCol 'ImGuiNET.ImGuiCol')

The type of area of the style to push the color.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleColor(ImGuiNET.ImGuiCol,System.Numerics.Vector4).col'></a>

`col` [System.Numerics.Vector4](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector4 'System.Numerics.Vector4')

The color to push.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar,float)'></a>

### PushStyleVar(ImGuiStyleVar, float) 

Temporarily modifies the style of [ImGuiNET.ImGui](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGui 'ImGuiNET.ImGui') by applying a style to a part of  
the GUI dictated by the given [idx](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#idx 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar, float).idx') with the given [val](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#val 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar, float).val').

```csharp
void PushStyleVar(ImGuiNET.ImGuiStyleVar idx, float val);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar,float).idx'></a>

`idx` [ImGuiNET.ImGuiStyleVar](https://docs.microsoft.com/en-us/dotnet/api/ImGuiNET.ImGuiStyleVar 'ImGuiNET.ImGuiStyleVar')

The style to update.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.PushStyleVar(ImGuiNET.ImGuiStyleVar,float).val'></a>

`val` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value to apply.

#### Remarks
Remains in effect until the [PopStyleVar(int)](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleVar(int) 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.PopStyleVar(int)') is invoked.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SameLine()'></a>

### SameLine() 

Sets the next control to be on the same line as the previous control.

```csharp
void SameLine();
```

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SameLine(float,float)'></a>

### SameLine(float, float) 

Sets the next control to be on the same line as the previous control.

```csharp
void SameLine(float offset_from_start_x, float spacing);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SameLine(float,float).offset<from>start<x'></a>

`offset_from_start_x` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The horizontal offset from the start of the previous control.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SameLine(float,float).spacing'></a>

`spacing` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The amount of spacing between the controls.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Selectable(string,bool)'></a>

### Selectable(string, bool) 

Returns a value indicating whether the given item [label](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#label 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Selectable(string, bool).label') is selectable.

```csharp
bool Selectable(string label, bool selected);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Selectable(string,bool).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to be displayed for the item in the combo box.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Selectable(string,bool).selected'></a>

`selected` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Determines whether the item is selected when the combo box is first displayed.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the item is selected.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetCursorPos(System.Numerics.Vector2)'></a>

### SetCursorPos(Vector2) 

Sets the position of the cursor.

```csharp
void SetCursorPos(System.Numerics.Vector2 local_pos);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetCursorPos(System.Numerics.Vector2).local<pos'></a>

`local_pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position of where to set the cursor.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetItemDefaultFocus()'></a>

### SetItemDefaultFocus() 

Sets the default keyboard focus to the item that was previously added.

```csharp
void SetItemDefaultFocus();
```

#### Remarks
This method is typically used in conjunction with combo boxes or list boxes.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetNextItemWidth(float)'></a>

### SetNextItemWidth(float) 

Sets the width of the next item.

```csharp
void SetNextItemWidth(float item_width);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetNextItemWidth(float).item<width'></a>

`item_width` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The width.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetWindowPos(System.Numerics.Vector2)'></a>

### SetWindowPos(Vector2) 

Sets the position of the window.

```csharp
void SetWindowPos(System.Numerics.Vector2 pos);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetWindowPos(System.Numerics.Vector2).pos'></a>

`pos` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The position.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetWindowSize(System.Numerics.Vector2)'></a>

### SetWindowSize(Vector2) 

Sets the size of the window.

```csharp
void SetWindowSize(System.Numerics.Vector2 size);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SetWindowSize(System.Numerics.Vector2).size'></a>

`size` [System.Numerics.Vector2](https://docs.microsoft.com/en-us/dotnet/api/System.Numerics.Vector2 'System.Numerics.Vector2')

The window size.

#### Remarks
The size of the text described by the X representing the width and the Y representing the height.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SliderFloat(string,float,float,float)'></a>

### SliderFloat(string, float, float, float) 

Creates a slider scope with a float value.

```csharp
bool SliderFloat(string label, ref float v, float v_min, float v_max);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SliderFloat(string,float,float,float).label'></a>

`label` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The label of the control.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SliderFloat(string,float,float,float).v'></a>

`v` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The value of the control.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SliderFloat(string,float,float,float).v<min'></a>

`v_min` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The minimum value.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.SliderFloat(string,float,float,float).v<max'></a>

`v_max` [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')

The maximum value.

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
True if the button has been clicked.

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Text(string)'></a>

### Text(string) 

Creates a test control.

```csharp
void Text(string fmt);
```
#### Parameters

<a name='Velaptor.NativeInterop.ImGui.IImGuiInvoker.Text(string).fmt'></a>

`fmt` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text to display.

#### Remarks
The [fmt](Velaptor.NativeInterop.ImGui.IImGuiInvoker.md#fmt 'Velaptor.NativeInterop.ImGui.IImGuiInvoker.Text(string).fmt') can take syntax for formatting values such as:  
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
