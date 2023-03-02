#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Input.Exceptions](./Velaptor.Input.Exceptions.md 'Velaptor.Input.Exceptions')

## InvalidInputException Class

Occurs when invalid input has occured.

```csharp
public class InvalidInputException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → InvalidInputException
### Constructors

<a name='Velaptor.Input.Exceptions.InvalidInputException.InvalidInputException()'></a>

## InvalidInputException() Constructor

Initializes a new instance of the [InvalidInputException](./Velaptor.Input.Exceptions.InvalidInputException.md 'Velaptor.Input.Exceptions.InvalidInputException') class.

```csharp
public InvalidInputException();
```

<a name='Velaptor.Input.Exceptions.InvalidInputException.InvalidInputException(string,System.Exception)'></a>

## InvalidInputException(string, Exception) Constructor

Initializes a new instance of the [InvalidInputException](./Velaptor.Input.Exceptions.InvalidInputException.md 'Velaptor.Input.Exceptions.InvalidInputException') class.

```csharp
public InvalidInputException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Input.Exceptions.InvalidInputException.InvalidInputException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Input.Exceptions.InvalidInputException.InvalidInputException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Input.Exceptions.InvalidInputException.InvalidInputException(string)'></a>

## InvalidInputException(string) Constructor

Initializes a new instance of the [InvalidInputException](./Velaptor.Input.Exceptions.InvalidInputException.md 'Velaptor.Input.Exceptions.InvalidInputException') class.

```csharp
public InvalidInputException(string message);
```
#### Parameters

<a name='Velaptor.Input.Exceptions.InvalidInputException.InvalidInputException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.