---
title: Velaptor.Telemetry.UsageData
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Telemetry](Velaptor.Telemetry.md 'Velaptor\.Telemetry')

#### UsageData Class

Contains the data to send to the telemetry service\.

```csharp
public record UsageData : System.IEquatable<Velaptor.Telemetry.UsageData>
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → UsageData

Implements [System\.IEquatable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1 'System\.IEquatable\`1')[UsageData](Velaptor.Telemetry.UsageData.md 'Velaptor\.Telemetry\.UsageData')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1 'System\.IEquatable\`1')
## Constructors

<a name='Velaptor.Telemetry.UsageData.UsageData()'></a>

### UsageData\(\) Constructor

```csharp
public UsageData();
```
## Properties

<a name='Velaptor.Telemetry.UsageData.DotnetVersion'></a>

### DotnetVersion 

Gets or sets the version of the \.NET runtime\.

```csharp
public string DotnetVersion { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Telemetry.UsageData.FeatureArea'></a>

### FeatureArea 

Gets or sets the feature area\.

```csharp
public string? FeatureArea { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Telemetry.UsageData.FeatureName'></a>

### FeatureName 

Gets or sets the name of the feature\.

```csharp
public string? FeatureName { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Telemetry.UsageData.Language'></a>

### Language 

Gets or sets the language\.

```csharp
public string Language { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Telemetry.UsageData.LifeCycleEvent'></a>

### LifeCycleEvent 

Gets or sets the name of the life cycle event\.

```csharp
public string? LifeCycleEvent { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Telemetry.UsageData.OsArchitecture'></a>

### OsArchitecture 

Gets or sets the operating system architecture\.

```csharp
public string OsArchitecture { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Telemetry.UsageData.OsName'></a>

### OsName 

Gets or sets the operating system for which the runtime was built \(or on which an app is running\)\.

```csharp
public string OsName { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

<a name='Velaptor.Telemetry.UsageData.Version'></a>

### Version 

Gets or sets the version of the application\.

```csharp
public string Version { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')
