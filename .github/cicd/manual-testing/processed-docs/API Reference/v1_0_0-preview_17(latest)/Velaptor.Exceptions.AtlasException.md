#### [Velaptor](index.md 'index')
### [Velaptor.Exceptions](Velaptor.Exceptions.md 'Velaptor.Exceptions')

## AtlasException Class

Thrown when there is an issue with an atlas.

```csharp
public sealed class AtlasException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; AtlasException
### Constructors

<a name='Velaptor.Exceptions.AtlasException.AtlasException()'></a>

## AtlasException() Constructor

Initializes a new instance of the [AtlasException](Velaptor.Exceptions.AtlasException.md 'Velaptor.Exceptions.AtlasException') class.

```csharp
public AtlasException();
```

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string,System.Exception)'></a>

## AtlasException(string, Exception) Constructor

Initializes a new instance of the [AtlasException](Velaptor.Exceptions.AtlasException.md 'Velaptor.Exceptions.AtlasException') class.

```csharp
public AtlasException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string)'></a>

## AtlasException(string) Constructor

Initializes a new instance of the [AtlasException](Velaptor.Exceptions.AtlasException.md 'Velaptor.Exceptions.AtlasException') class.

```csharp
public AtlasException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.AtlasException.AtlasException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.