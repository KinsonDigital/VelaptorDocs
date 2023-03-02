#### [Velaptor](index.md 'index')
### [Velaptor](Velaptor.md 'Velaptor')

## IPlatform Interface

Represents the current platform.

```csharp
public interface IPlatform
```

Derived  
&#8627; [Platform](Velaptor.Platform.md 'Velaptor.Platform')
### Properties

<a name='Velaptor.IPlatform.CurrentPlatform'></a>

## IPlatform.CurrentPlatform Property

Gets the current platform of the system.

```csharp
System.Runtime.InteropServices.OSPlatform CurrentPlatform { get; }
```

#### Property Value
[System.Runtime.InteropServices.OSPlatform](https://docs.microsoft.com/en-us/dotnet/api/System.Runtime.InteropServices.OSPlatform 'System.Runtime.InteropServices.OSPlatform')

<a name='Velaptor.IPlatform.Is32BitProcess'></a>

## IPlatform.Is32BitProcess Property

Gets a value indicating whether or not the system is a 32 bit process.

```csharp
bool Is32BitProcess { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Velaptor.IPlatform.Is64BitProcess'></a>

## IPlatform.Is64BitProcess Property

Gets a value indicating whether or not the system is a 64 bit process.

```csharp
bool Is64BitProcess { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')