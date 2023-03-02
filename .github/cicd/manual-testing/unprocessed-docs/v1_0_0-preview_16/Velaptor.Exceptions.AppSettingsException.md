#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Exceptions](./Velaptor.Exceptions.md 'Velaptor.Exceptions')

## AppSettingsException Class

Thrown when there is an issue loading the application settings.

```csharp
public sealed class AppSettingsException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → AppSettingsException
### Constructors

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException()'></a>

## AppSettingsException() Constructor

Initializes a new instance of the [AppSettingsException](./Velaptor.Exceptions.AppSettingsException.md 'Velaptor.Exceptions.AppSettingsException') class.

```csharp
public AppSettingsException();
```

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string,System.Exception)'></a>

## AppSettingsException(string, Exception) Constructor

Initializes a new instance of the [AppSettingsException](./Velaptor.Exceptions.AppSettingsException.md 'Velaptor.Exceptions.AppSettingsException') class.

```csharp
public AppSettingsException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string)'></a>

## AppSettingsException(string) Constructor

Initializes a new instance of the [AppSettingsException](./Velaptor.Exceptions.AppSettingsException.md 'Velaptor.Exceptions.AppSettingsException') class.

```csharp
public AppSettingsException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.AppSettingsException.AppSettingsException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.