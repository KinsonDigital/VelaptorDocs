#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Exceptions](./Velaptor.Content.Exceptions.md 'Velaptor.Content.Exceptions')

## LoadAtlasException Class

Thrown when there is an issue loading atlas data content.

```csharp
public class LoadAtlasException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → LoadAtlasException
### Constructors

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException()'></a>

## LoadAtlasException() Constructor

Initializes a new instance of the [LoadAtlasException](./Velaptor.Content.Exceptions.LoadAtlasException.md 'Velaptor.Content.Exceptions.LoadAtlasException') class.

```csharp
public LoadAtlasException();
```

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string,System.Exception)'></a>

## LoadAtlasException(string, Exception) Constructor

Initializes a new instance of the [LoadAtlasException](./Velaptor.Content.Exceptions.LoadAtlasException.md 'Velaptor.Content.Exceptions.LoadAtlasException') class.

```csharp
public LoadAtlasException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string)'></a>

## LoadAtlasException(string) Constructor

Initializes a new instance of the [LoadAtlasException](./Velaptor.Content.Exceptions.LoadAtlasException.md 'Velaptor.Content.Exceptions.LoadAtlasException') class.

```csharp
public LoadAtlasException(string message);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.LoadAtlasException.LoadAtlasException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.