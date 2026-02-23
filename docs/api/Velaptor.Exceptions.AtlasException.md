---
title: Velaptor.Exceptions.AtlasException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Exceptions](Velaptor.Exceptions.md 'Velaptor\.Exceptions')

#### AtlasException Class

Thrown when there is an issue with an atlas\.

```csharp
public sealed class AtlasException : System.Exception
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') → AtlasException
## Constructors

<a name='Velaptor.Exceptions.AtlasException.AtlasException()'></a>

### AtlasException\(\) Constructor

Initializes a new instance of the [AtlasException](Velaptor.Exceptions.AtlasException.md 'Velaptor\.Exceptions\.AtlasException') class\.

```csharp
public AtlasException();
```

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string)'></a>

### AtlasException\(string\) Constructor

Initializes a new instance of the [AtlasException](Velaptor.Exceptions.AtlasException.md 'Velaptor\.Exceptions\.AtlasException') class\.

```csharp
public AtlasException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string).message'></a>

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

The message that describes the error\.

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string,System.Exception)'></a>

### AtlasException\(string, Exception\) Constructor

Initializes a new instance of the [AtlasException](Velaptor.Exceptions.AtlasException.md 'Velaptor\.Exceptions\.AtlasException') class\.

```csharp
public AtlasException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string,System.Exception).message'></a>

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

The message that describes the error\.

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string,System.Exception).innerException'></a>

`innerException` [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception')

The [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') instance that caused the current exception\.
