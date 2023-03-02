#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.OpenGL.Exceptions](./Velaptor.OpenGL.Exceptions.md 'Velaptor.OpenGL.Exceptions')

## BufferNotInitializedException Class

Thrown when a buffer has not been initialized.

```csharp
public class BufferNotInitializedException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → BufferNotInitializedException
### Constructors

<a name='Velaptor.OpenGL.Exceptions.BufferNotInitializedException.BufferNotInitializedException()'></a>

## BufferNotInitializedException() Constructor

Initializes a new instance of the [BufferNotInitializedException](./Velaptor.OpenGL.Exceptions.BufferNotInitializedException.md 'Velaptor.OpenGL.Exceptions.BufferNotInitializedException') class.

```csharp
public BufferNotInitializedException();
```

<a name='Velaptor.OpenGL.Exceptions.BufferNotInitializedException.BufferNotInitializedException(string,string)'></a>

## BufferNotInitializedException(string, string) Constructor

Initializes a new instance of the [BufferNotInitializedException](./Velaptor.OpenGL.Exceptions.BufferNotInitializedException.md 'Velaptor.OpenGL.Exceptions.BufferNotInitializedException') class.

```csharp
public BufferNotInitializedException(string message, string bufferName="");
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.BufferNotInitializedException.BufferNotInitializedException(string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.BufferNotInitializedException.BufferNotInitializedException(string,string).bufferName'></a>

`bufferName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the buffer.

<a name='Velaptor.OpenGL.Exceptions.BufferNotInitializedException.BufferNotInitializedException(string,System.Exception)'></a>

## BufferNotInitializedException(string, Exception) Constructor

Initializes a new instance of the [BufferNotInitializedException](./Velaptor.OpenGL.Exceptions.BufferNotInitializedException.md 'Velaptor.OpenGL.Exceptions.BufferNotInitializedException') class.

```csharp
public BufferNotInitializedException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.OpenGL.Exceptions.BufferNotInitializedException.BufferNotInitializedException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.OpenGL.Exceptions.BufferNotInitializedException.BufferNotInitializedException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.