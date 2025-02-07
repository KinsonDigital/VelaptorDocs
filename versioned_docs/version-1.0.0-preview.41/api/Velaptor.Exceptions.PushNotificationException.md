---
title: Velaptor.Exceptions.PushNotificationException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Exceptions](Velaptor.Exceptions.md 'Velaptor.Exceptions')

#### PushNotificationException Class

Thrown when there is an issue with the push notification system.

```csharp
public sealed class PushNotificationException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → PushNotificationException
## Constructors

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException()'></a>

### PushNotificationException() Constructor

Initializes a new instance of the [PushNotificationException](Velaptor.Exceptions.PushNotificationException.md 'Velaptor.Exceptions.PushNotificationException') class.

```csharp
public PushNotificationException();
```

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException(string,System.Exception)'></a>

### PushNotificationException(string, Exception) Constructor

Initializes a new instance of the [PushNotificationException](Velaptor.Exceptions.PushNotificationException.md 'Velaptor.Exceptions.PushNotificationException') class.

```csharp
public PushNotificationException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException(string,System.Guid)'></a>

### PushNotificationException(string, Guid) Constructor

Initializes a new instance of the [PushNotificationException](Velaptor.Exceptions.PushNotificationException.md 'Velaptor.Exceptions.PushNotificationException') class.

```csharp
public PushNotificationException(string subscriberSrc, System.Guid subscriptionId);
```
#### Parameters

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException(string,System.Guid).subscriberSrc'></a>

`subscriberSrc` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The source of where the push notification came from.

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException(string,System.Guid).subscriptionId'></a>

`subscriptionId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The subscription ID.

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException(string)'></a>

### PushNotificationException(string) Constructor

Initializes a new instance of the [PushNotificationException](Velaptor.Exceptions.PushNotificationException.md 'Velaptor.Exceptions.PushNotificationException') class.

```csharp
public PushNotificationException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.PushNotificationException.PushNotificationException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.
