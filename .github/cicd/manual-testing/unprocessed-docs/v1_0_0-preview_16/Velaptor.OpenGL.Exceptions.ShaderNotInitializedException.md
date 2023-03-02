#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.OpenGL.Exceptions](./Velaptor.OpenGL.Exceptions.md 'Velaptor.OpenGL.Exceptions')

## ShaderNotInitializedException Class

Thrown when a shader has not been initialized.

```csharp
public class ShaderNotInitializedException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → ShaderNotInitializedException
### Constructors

<a name='Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.ShaderNotInitializedException()'></a>

## ShaderNotInitializedException() Constructor

Initializes a new instance of the [ShaderNotInitializedException](./Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.md 'Velaptor.OpenGL.Exceptions.ShaderNotInitializedException') class.

```csharp
public ShaderNotInitializedException();
```

<a name='Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.ShaderNotInitializedException(string,string)'></a>

## ShaderNotInitializedException(string, string) Constructor

Initializes a new instance of the [ShaderNotInitializedException](./Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.md 'Velaptor.OpenGL.Exceptions.ShaderNotInitializedException') class.

```csharp
public ShaderNotInitializedException(string message, string shaderName="");
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.ShaderNotInitializedException(string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.ShaderNotInitializedException(string,string).shaderName'></a>

`shaderName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the shader.

<a name='Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.ShaderNotInitializedException(string,System.Exception)'></a>

## ShaderNotInitializedException(string, Exception) Constructor

Initializes a new instance of the [ShaderNotInitializedException](./Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.md 'Velaptor.OpenGL.Exceptions.ShaderNotInitializedException') class.

```csharp
public ShaderNotInitializedException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.ShaderNotInitializedException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.ShaderNotInitializedException.ShaderNotInitializedException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.