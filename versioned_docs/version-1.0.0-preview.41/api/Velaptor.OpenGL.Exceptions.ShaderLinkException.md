---
title: Velaptor.OpenGL.Exceptions.ShaderLinkException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.OpenGL.Exceptions](Velaptor.OpenGL.Exceptions.md 'Velaptor.OpenGL.Exceptions')

#### ShaderLinkException Class

Thrown when there is an issue linking a shader.

```csharp
public sealed class ShaderLinkException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → ShaderLinkException
## Constructors

<a name='Velaptor.OpenGL.Exceptions.ShaderLinkException.ShaderLinkException()'></a>

### ShaderLinkException() Constructor

Initializes a new instance of the [ShaderLinkException](Velaptor.OpenGL.Exceptions.ShaderLinkException.md 'Velaptor.OpenGL.Exceptions.ShaderLinkException') class.

```csharp
public ShaderLinkException();
```

<a name='Velaptor.OpenGL.Exceptions.ShaderLinkException.ShaderLinkException(string,string)'></a>

### ShaderLinkException(string, string) Constructor

Initializes a new instance of the [ShaderLinkException](Velaptor.OpenGL.Exceptions.ShaderLinkException.md 'Velaptor.OpenGL.Exceptions.ShaderLinkException') class.

```csharp
public ShaderLinkException(string message, string bufferName="");
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.ShaderLinkException.ShaderLinkException(string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.ShaderLinkException.ShaderLinkException(string,string).bufferName'></a>

`bufferName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the buffer.

<a name='Velaptor.OpenGL.Exceptions.ShaderLinkException.ShaderLinkException(string,System.Exception)'></a>

### ShaderLinkException(string, Exception) Constructor

Initializes a new instance of the [ShaderLinkException](Velaptor.OpenGL.Exceptions.ShaderLinkException.md 'Velaptor.OpenGL.Exceptions.ShaderLinkException') class.

```csharp
public ShaderLinkException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.ShaderLinkException.ShaderLinkException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.ShaderLinkException.ShaderLinkException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.
