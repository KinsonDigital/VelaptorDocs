---
title: Velaptor.Content.Exceptions.FontException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Exceptions](Velaptor.Content.Exceptions.md 'Velaptor.Content.Exceptions')

#### FontException Class

Thrown when there is an issue loading fonts.

```csharp
public sealed class FontException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → FontException
## Constructors

<a name='Velaptor.Content.Exceptions.FontException.FontException()'></a>

### FontException() Constructor

Initializes a new instance of the [FontException](Velaptor.Content.Exceptions.FontException.md 'Velaptor.Content.Exceptions.FontException') class.

```csharp
public FontException();
```

<a name='Velaptor.Content.Exceptions.FontException.FontException(string,System.Exception)'></a>

### FontException(string, Exception) Constructor

Initializes a new instance of the [FontException](Velaptor.Content.Exceptions.FontException.md 'Velaptor.Content.Exceptions.FontException') class.

```csharp
public FontException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.FontException.FontException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Content.Exceptions.FontException.FontException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Content.Exceptions.FontException.FontException(string)'></a>

### FontException(string) Constructor

Initializes a new instance of the [FontException](Velaptor.Content.Exceptions.FontException.md 'Velaptor.Content.Exceptions.FontException') class.

```csharp
public FontException(string message);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.FontException.FontException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.
