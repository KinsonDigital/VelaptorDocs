---
title: Velaptor.Exceptions.SystemDisplayException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Exceptions](Velaptor.Exceptions.md 'Velaptor.Exceptions')

#### SystemDisplayException Class

Occurs when there is an issue with one of the system displays.

```csharp
public sealed class SystemDisplayException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → SystemDisplayException
## Constructors

<a name='Velaptor.Exceptions.SystemDisplayException.SystemDisplayException()'></a>

### SystemDisplayException() Constructor

Initializes a new instance of the [SystemDisplayException](Velaptor.Exceptions.SystemDisplayException.md 'Velaptor.Exceptions.SystemDisplayException') class.

```csharp
public SystemDisplayException();
```

<a name='Velaptor.Exceptions.SystemDisplayException.SystemDisplayException(string,System.Exception)'></a>

### SystemDisplayException(string, Exception) Constructor

Initializes a new instance of the [SystemDisplayException](Velaptor.Exceptions.SystemDisplayException.md 'Velaptor.Exceptions.SystemDisplayException') class.

```csharp
public SystemDisplayException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.SystemDisplayException.SystemDisplayException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Exceptions.SystemDisplayException.SystemDisplayException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Exceptions.SystemDisplayException.SystemDisplayException(string)'></a>

### SystemDisplayException(string) Constructor

Initializes a new instance of the [SystemDisplayException](Velaptor.Exceptions.SystemDisplayException.md 'Velaptor.Exceptions.SystemDisplayException') class.

```csharp
public SystemDisplayException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.SystemDisplayException.SystemDisplayException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.
