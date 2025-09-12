---
title: Velaptor.OpenGL.Exceptions.GLException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.OpenGL.Exceptions](Velaptor.OpenGL.Exceptions.md 'Velaptor.OpenGL.Exceptions')

#### GLException Class

Thrown when an error has been thrown by OpenGL.

```csharp
public sealed class GLException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → GLException
## Constructors

<a name='Velaptor.OpenGL.Exceptions.GLException.GLException()'></a>

### GLException() Constructor

Initializes a new instance of the [GLException](Velaptor.OpenGL.Exceptions.GLException.md 'Velaptor.OpenGL.Exceptions.GLException') class.

```csharp
public GLException();
```

<a name='Velaptor.OpenGL.Exceptions.GLException.GLException(string,string)'></a>

### GLException(string, string) Constructor

Initializes a new instance of the [GLException](Velaptor.OpenGL.Exceptions.GLException.md 'Velaptor.OpenGL.Exceptions.GLException') class.

```csharp
public GLException(string message, string bufferName="");
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.GLException.GLException(string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.GLException.GLException(string,string).bufferName'></a>

`bufferName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the buffer.

<a name='Velaptor.OpenGL.Exceptions.GLException.GLException(string,System.Exception)'></a>

### GLException(string, Exception) Constructor

Initializes a new instance of the [GLException](Velaptor.OpenGL.Exceptions.GLException.md 'Velaptor.OpenGL.Exceptions.GLException') class.

```csharp
public GLException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.GLException.GLException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.GLException.GLException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.
