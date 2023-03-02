#### [Velaptor](index.md 'index')
### [Velaptor.Exceptions](Velaptor.Exceptions.md 'Velaptor.Exceptions')

## SystemMonitorException Class

Occurs when there is an issue with one of the system monitors.

```csharp
public sealed class SystemMonitorException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; SystemMonitorException
### Constructors

<a name='Velaptor.Exceptions.SystemMonitorException.SystemMonitorException()'></a>

## SystemMonitorException() Constructor

Initializes a new instance of the [SystemMonitorException](Velaptor.Exceptions.SystemMonitorException.md 'Velaptor.Exceptions.SystemMonitorException') class.

```csharp
public SystemMonitorException();
```

<a name='Velaptor.Exceptions.SystemMonitorException.SystemMonitorException(string,System.Exception)'></a>

## SystemMonitorException(string, Exception) Constructor

Initializes a new instance of the [SystemMonitorException](Velaptor.Exceptions.SystemMonitorException.md 'Velaptor.Exceptions.SystemMonitorException') class.

```csharp
public SystemMonitorException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.SystemMonitorException.SystemMonitorException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Exceptions.SystemMonitorException.SystemMonitorException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Exceptions.SystemMonitorException.SystemMonitorException(string)'></a>

## SystemMonitorException(string) Constructor

Initializes a new instance of the [SystemMonitorException](Velaptor.Exceptions.SystemMonitorException.md 'Velaptor.Exceptions.SystemMonitorException') class.

```csharp
public SystemMonitorException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.SystemMonitorException.SystemMonitorException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.