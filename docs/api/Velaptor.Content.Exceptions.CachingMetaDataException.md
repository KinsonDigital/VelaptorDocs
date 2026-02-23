---
title: Velaptor.Content.Exceptions.CachingMetaDataException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Content\.Exceptions](Velaptor.Content.Exceptions.md 'Velaptor\.Content\.Exceptions')

#### CachingMetaDataException Class

Thrown when there is an issue with processing metadata, when loading fonts during the caching process\.

```csharp
public sealed class CachingMetaDataException : System.Exception
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') → CachingMetaDataException
## Constructors

<a name='Velaptor.Content.Exceptions.CachingMetaDataException.CachingMetaDataException()'></a>

### CachingMetaDataException\(\) Constructor

Initializes a new instance of the [CachingMetaDataException](Velaptor.Content.Exceptions.CachingMetaDataException.md 'Velaptor\.Content\.Exceptions\.CachingMetaDataException') class\.

```csharp
public CachingMetaDataException();
```

<a name='Velaptor.Content.Exceptions.CachingMetaDataException.CachingMetaDataException(string)'></a>

### CachingMetaDataException\(string\) Constructor

Initializes a new instance of the [CachingMetaDataException](Velaptor.Content.Exceptions.CachingMetaDataException.md 'Velaptor\.Content\.Exceptions\.CachingMetaDataException') class\.

```csharp
public CachingMetaDataException(string message);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.CachingMetaDataException.CachingMetaDataException(string).message'></a>

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

The message that describes the error\.

<a name='Velaptor.Content.Exceptions.CachingMetaDataException.CachingMetaDataException(string,System.Exception)'></a>

### CachingMetaDataException\(string, Exception\) Constructor

Initializes a new instance of the [CachingMetaDataException](Velaptor.Content.Exceptions.CachingMetaDataException.md 'Velaptor\.Content\.Exceptions\.CachingMetaDataException') class\.

```csharp
public CachingMetaDataException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.CachingMetaDataException.CachingMetaDataException(string,System.Exception).message'></a>

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

The message that describes the error\.

<a name='Velaptor.Content.Exceptions.CachingMetaDataException.CachingMetaDataException(string,System.Exception).innerException'></a>

`innerException` [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception')

The [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') instance that caused the current exception\.
