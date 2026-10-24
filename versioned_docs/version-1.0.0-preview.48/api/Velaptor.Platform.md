---
title: Velaptor.Platform
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor](Velaptor.md 'Velaptor')

#### Platform Class

Represents the current platform\.

```csharp
public sealed class Platform : Velaptor.IPlatform
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → Platform

Implements [IPlatform](Velaptor.IPlatform.md 'Velaptor\.IPlatform')
## Properties

<a name='Velaptor.Platform.CurrentPlatform'></a>

### CurrentPlatform \{#Velaptor.Platform.CurrentPlatform}

Gets the current platform of the system\.

```csharp
public System.Runtime.InteropServices.OSPlatform CurrentPlatform { get; }
```

Implements [CurrentPlatform](Velaptor.IPlatform.md#Velaptor.IPlatform.CurrentPlatform 'Velaptor\.IPlatform\.CurrentPlatform')

#### Property Value
[System\.Runtime\.InteropServices\.OSPlatform](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.osplatform 'System\.Runtime\.InteropServices\.OSPlatform')

<a name='Velaptor.Platform.Is32BitProcess'></a>

### Is32BitProcess \{#Velaptor.Platform.Is32BitProcess}

Gets a value indicating whether the system is a 32 bit process\.

```csharp
public bool Is32BitProcess { get; }
```

Implements [Is32BitProcess](Velaptor.IPlatform.md#Velaptor.IPlatform.Is32BitProcess 'Velaptor\.IPlatform\.Is32BitProcess')

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

<a name='Velaptor.Platform.Is64BitProcess'></a>

### Is64BitProcess \{#Velaptor.Platform.Is64BitProcess}

Gets a value indicating whether the system is a 64 bit process\.

```csharp
public bool Is64BitProcess { get; }
```

Implements [Is64BitProcess](Velaptor.IPlatform.md#Velaptor.IPlatform.Is64BitProcess 'Velaptor\.IPlatform\.Is64BitProcess')

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')
