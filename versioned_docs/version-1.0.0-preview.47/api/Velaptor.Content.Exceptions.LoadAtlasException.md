---
title: Velaptor.Content.Exceptions.LoadAtlasException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Content\.Exceptions](Velaptor.Content.Exceptions.md 'Velaptor\.Content\.Exceptions')

#### LoadAtlasException Class

Thrown when there is an issue loading atlas data content\.

```csharp
public sealed class LoadAtlasException : System.Exception
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') → LoadAtlasException
## Constructors

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException()'></a>

### LoadAtlasException\(\) Constructor

Initializes a new instance of the [LoadAtlasException](Velaptor.Content.Exceptions.LoadAtlasException.md 'Velaptor\.Content\.Exceptions\.LoadAtlasException') class\.

```csharp
public LoadAtlasException();
```

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string)'></a>

### LoadAtlasException\(string\) Constructor

Initializes a new instance of the [LoadAtlasException](Velaptor.Content.Exceptions.LoadAtlasException.md 'Velaptor\.Content\.Exceptions\.LoadAtlasException') class\.

```csharp
public LoadAtlasException(string message);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string).message'></a>

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

The message that describes the error\.

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string,System.Exception)'></a>

### LoadAtlasException\(string, Exception\) Constructor

Initializes a new instance of the [LoadAtlasException](Velaptor.Content.Exceptions.LoadAtlasException.md 'Velaptor\.Content\.Exceptions\.LoadAtlasException') class\.

```csharp
public LoadAtlasException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string,System.Exception).message'></a>

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

The message that describes the error\.

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string,System.Exception).innerException'></a>

`innerException` [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception')

The [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') instance that caused the current exception\.
