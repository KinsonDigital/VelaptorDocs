#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Exceptions](./Velaptor.Content.Exceptions.md 'Velaptor.Content.Exceptions')

## LoadContentException Class

Thrown when there is an issue loading content.

```csharp
public class LoadContentException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → LoadContentException
### Constructors

<a name='Velaptor.Content.Exceptions.LoadContentException.LoadContentException()'></a>

## LoadContentException() Constructor

Initializes a new instance of the [LoadContentException](./Velaptor.Content.Exceptions.LoadContentException.md 'Velaptor.Content.Exceptions.LoadContentException') class.

```csharp
public LoadContentException();
```

<a name='Velaptor.Content.Exceptions.LoadContentException.LoadContentException(string,System.Exception)'></a>

## LoadContentException(string, Exception) Constructor

Initializes a new instance of the [LoadContentException](./Velaptor.Content.Exceptions.LoadContentException.md 'Velaptor.Content.Exceptions.LoadContentException') class.

```csharp
public LoadContentException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.LoadContentException.LoadContentException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Content.Exceptions.LoadContentException.LoadContentException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Content.Exceptions.LoadContentException.LoadContentException(string)'></a>

## LoadContentException(string) Constructor

Initializes a new instance of the [LoadContentException](./Velaptor.Content.Exceptions.LoadContentException.md 'Velaptor.Content.Exceptions.LoadContentException') class.

```csharp
public LoadContentException(string message);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.LoadContentException.LoadContentException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.