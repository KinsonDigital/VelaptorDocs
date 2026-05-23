---
title: Velaptor.Exceptions.AppSettingsException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Exceptions](Velaptor.Exceptions.md 'Velaptor\.Exceptions')

#### AppSettingsException Class

Thrown when there is an issue loading the application settings\.

```csharp
public sealed class AppSettingsException : System.Exception
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') → AppSettingsException
## Constructors

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException()'></a>

### AppSettingsException\(\) Constructor

Initializes a new instance of the [AppSettingsException](Velaptor.Exceptions.AppSettingsException.md 'Velaptor\.Exceptions\.AppSettingsException') class\.

```csharp
public AppSettingsException();
```

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string)'></a>

### AppSettingsException\(string\) Constructor

Initializes a new instance of the [AppSettingsException](Velaptor.Exceptions.AppSettingsException.md 'Velaptor\.Exceptions\.AppSettingsException') class\.

```csharp
public AppSettingsException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string).message'></a>

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

The message that describes the error\.

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string,System.Exception)'></a>

### AppSettingsException\(string, Exception\) Constructor

Initializes a new instance of the [AppSettingsException](Velaptor.Exceptions.AppSettingsException.md 'Velaptor\.Exceptions\.AppSettingsException') class\.

```csharp
public AppSettingsException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string,System.Exception).message'></a>

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

The message that describes the error\.

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string,System.Exception).innerException'></a>

`innerException` [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception')

The [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') instance that caused the current exception\.
