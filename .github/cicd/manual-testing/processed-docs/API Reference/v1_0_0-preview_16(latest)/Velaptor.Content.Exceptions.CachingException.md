#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Exceptions](./Velaptor.Content.Exceptions.md 'Velaptor.Content.Exceptions')

## CachingException Class

Thrown when there is an issue caching items.

```csharp
public class CachingException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → CachingException
### Constructors

<a name='Velaptor.Content.Exceptions.CachingException.CachingException()'></a>

## CachingException() Constructor

Initializes a new instance of the [CachingException](./Velaptor.Content.Exceptions.CachingException.md 'Velaptor.Content.Exceptions.CachingException') class.

```csharp
public CachingException();
```

<a name='Velaptor.Content.Exceptions.CachingException.CachingException(string,System.Exception)'></a>

## CachingException(string, Exception) Constructor

Initializes a new instance of the [CachingException](./Velaptor.Content.Exceptions.CachingException.md 'Velaptor.Content.Exceptions.CachingException') class.

```csharp
public CachingException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.CachingException.CachingException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Content.Exceptions.CachingException.CachingException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Content.Exceptions.CachingException.CachingException(string)'></a>

## CachingException(string) Constructor

Initializes a new instance of the [CachingException](./Velaptor.Content.Exceptions.CachingException.md 'Velaptor.Content.Exceptions.CachingException') class.

```csharp
public CachingException(string message);
```
#### Parameters

<a name='Velaptor.Content.Exceptions.CachingException.CachingException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.