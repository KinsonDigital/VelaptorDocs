---
title: Velaptor.OpenGL.Exceptions.ShaderCompileException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.OpenGL.Exceptions](Velaptor.OpenGL.Exceptions.md 'Velaptor.OpenGL.Exceptions')

#### ShaderCompileException Class

Thrown when there is an issue compiling a shader.

```csharp
public sealed class ShaderCompileException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → ShaderCompileException
## Constructors

<a name='Velaptor.OpenGL.Exceptions.ShaderCompileException.ShaderCompileException()'></a>

### ShaderCompileException() Constructor

Initializes a new instance of the [ShaderCompileException](Velaptor.OpenGL.Exceptions.ShaderCompileException.md 'Velaptor.OpenGL.Exceptions.ShaderCompileException') class.

```csharp
public ShaderCompileException();
```

<a name='Velaptor.OpenGL.Exceptions.ShaderCompileException.ShaderCompileException(string,string)'></a>

### ShaderCompileException(string, string) Constructor

Initializes a new instance of the [ShaderCompileException](Velaptor.OpenGL.Exceptions.ShaderCompileException.md 'Velaptor.OpenGL.Exceptions.ShaderCompileException') class.

```csharp
public ShaderCompileException(string message, string bufferName="");
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.ShaderCompileException.ShaderCompileException(string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.ShaderCompileException.ShaderCompileException(string,string).bufferName'></a>

`bufferName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the buffer.

<a name='Velaptor.OpenGL.Exceptions.ShaderCompileException.ShaderCompileException(string,System.Exception)'></a>

### ShaderCompileException(string, Exception) Constructor

Initializes a new instance of the [ShaderCompileException](Velaptor.OpenGL.Exceptions.ShaderCompileException.md 'Velaptor.OpenGL.Exceptions.ShaderCompileException') class.

```csharp
public ShaderCompileException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.ShaderCompileException.ShaderCompileException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.ShaderCompileException.ShaderCompileException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.
