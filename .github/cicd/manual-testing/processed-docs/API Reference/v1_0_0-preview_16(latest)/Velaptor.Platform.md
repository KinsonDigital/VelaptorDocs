#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor](./Velaptor.md 'Velaptor')

## Platform Class

Represents the current platform.

```csharp
public class Platform :
Velaptor.IPlatform
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → Platform

Implements [IPlatform](./Velaptor.IPlatform.md 'Velaptor.IPlatform')
### Properties

<a name='Velaptor.Platform.CurrentPlatform'></a>

## Platform.CurrentPlatform Property

Gets the current platform of the system.

```csharp
public System.Runtime.InteropServices.OSPlatform CurrentPlatform { get; }
```

Implements [CurrentPlatform](./Velaptor.IPlatform.md#Velaptor.IPlatform.CurrentPlatform 'Velaptor.IPlatform.CurrentPlatform')

#### Property Value
[System.Runtime.InteropServices.OSPlatform](https://docs.microsoft.com/en-us/dotnet/api/System.Runtime.InteropServices.OSPlatform 'System.Runtime.InteropServices.OSPlatform')

<a name='Velaptor.Platform.Is32BitProcess'></a>

## Platform.Is32BitProcess Property

Gets a value indicating whether or not the system is a 32 bit process.

```csharp
public bool Is32BitProcess { get; }
```

Implements [Is32BitProcess](./Velaptor.IPlatform.md#Velaptor.IPlatform.Is32BitProcess 'Velaptor.IPlatform.Is32BitProcess')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.Platform.Is64BitProcess'></a>

## Platform.Is64BitProcess Property

Gets a value indicating whether or not the system is a 64 bit process.

```csharp
public bool Is64BitProcess { get; }
```

Implements [Is64BitProcess](./Velaptor.IPlatform.md#Velaptor.IPlatform.Is64BitProcess 'Velaptor.IPlatform.Is64BitProcess')

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')