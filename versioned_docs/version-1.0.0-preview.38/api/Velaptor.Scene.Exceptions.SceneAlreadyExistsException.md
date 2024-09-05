---
title: Velaptor.Scene.Exceptions.SceneAlreadyExistsException
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Scene.Exceptions](Velaptor.Scene.Exceptions.md 'Velaptor.Scene.Exceptions')

#### SceneAlreadyExistsException Class

Thrown when a scene already exists.

```csharp
public sealed class SceneAlreadyExistsException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → SceneAlreadyExistsException
## Constructors

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException()'></a>

### SceneAlreadyExistsException() Constructor

Initializes a new instance of the [SceneAlreadyExistsException](Velaptor.Scene.Exceptions.SceneAlreadyExistsException.md 'Velaptor.Scene.Exceptions.SceneAlreadyExistsException') class.

```csharp
public SceneAlreadyExistsException();
```

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Exception)'></a>

### SceneAlreadyExistsException(string, Exception) Constructor

Initializes a new instance of the [SceneAlreadyExistsException](Velaptor.Scene.Exceptions.SceneAlreadyExistsException.md 'Velaptor.Scene.Exceptions.SceneAlreadyExistsException') class.

```csharp
public SceneAlreadyExistsException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Guid)'></a>

### SceneAlreadyExistsException(string, Guid) Constructor

Initializes a new instance of the [SceneAlreadyExistsException](Velaptor.Scene.Exceptions.SceneAlreadyExistsException.md 'Velaptor.Scene.Exceptions.SceneAlreadyExistsException') class.

```csharp
public SceneAlreadyExistsException(string name, System.Guid id);
```
#### Parameters

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Guid).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the scene.

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Guid).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The scene ID.

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string)'></a>

### SceneAlreadyExistsException(string) Constructor

Initializes a new instance of the [SceneAlreadyExistsException](Velaptor.Scene.Exceptions.SceneAlreadyExistsException.md 'Velaptor.Scene.Exceptions.SceneAlreadyExistsException') class.

```csharp
public SceneAlreadyExistsException(string message);
```
#### Parameters

<a name='Velaptor.Scene.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.
