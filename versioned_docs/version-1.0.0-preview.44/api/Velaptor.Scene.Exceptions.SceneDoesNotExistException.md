---
title: Velaptor.Scene.Exceptions.SceneDoesNotExistException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Scene.Exceptions](Velaptor.Scene.Exceptions.md 'Velaptor.Scene.Exceptions')

#### SceneDoesNotExistException Class

Thrown when a scene does not exist.

```csharp
public sealed class SceneDoesNotExistException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → SceneDoesNotExistException
## Constructors

<a name='Velaptor.Scene.Exceptions.SceneDoesNotExistException.SceneDoesNotExistException()'></a>

### SceneDoesNotExistException() Constructor

Initializes a new instance of the [SceneDoesNotExistException](Velaptor.Scene.Exceptions.SceneDoesNotExistException.md 'Velaptor.Scene.Exceptions.SceneDoesNotExistException') class.

```csharp
public SceneDoesNotExistException();
```

<a name='Velaptor.Scene.Exceptions.SceneDoesNotExistException.SceneDoesNotExistException(string,System.Exception)'></a>

### SceneDoesNotExistException(string, Exception) Constructor

Initializes a new instance of the [SceneDoesNotExistException](Velaptor.Scene.Exceptions.SceneDoesNotExistException.md 'Velaptor.Scene.Exceptions.SceneDoesNotExistException') class.

```csharp
public SceneDoesNotExistException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Scene.Exceptions.SceneDoesNotExistException.SceneDoesNotExistException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Scene.Exceptions.SceneDoesNotExistException.SceneDoesNotExistException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Scene.Exceptions.SceneDoesNotExistException.SceneDoesNotExistException(string)'></a>

### SceneDoesNotExistException(string) Constructor

Initializes a new instance of the [SceneDoesNotExistException](Velaptor.Scene.Exceptions.SceneDoesNotExistException.md 'Velaptor.Scene.Exceptions.SceneDoesNotExistException') class.

```csharp
public SceneDoesNotExistException(string message);
```
#### Parameters

<a name='Velaptor.Scene.Exceptions.SceneDoesNotExistException.SceneDoesNotExistException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Scene.Exceptions.SceneDoesNotExistException.SceneDoesNotExistException(System.Guid)'></a>

### SceneDoesNotExistException(Guid) Constructor

Initializes a new instance of the [SceneDoesNotExistException](Velaptor.Scene.Exceptions.SceneDoesNotExistException.md 'Velaptor.Scene.Exceptions.SceneDoesNotExistException') class.

```csharp
public SceneDoesNotExistException(System.Guid id);
```
#### Parameters

<a name='Velaptor.Scene.Exceptions.SceneDoesNotExistException.SceneDoesNotExistException(System.Guid).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The scene ID.
