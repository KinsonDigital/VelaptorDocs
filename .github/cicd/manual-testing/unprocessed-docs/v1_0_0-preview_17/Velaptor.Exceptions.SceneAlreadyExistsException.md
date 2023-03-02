#### [Velaptor](index.md 'index')
### [Velaptor.Exceptions](Velaptor.Exceptions.md 'Velaptor.Exceptions')

## SceneAlreadyExistsException Class

Thrown when a scene already exists.

```csharp
public sealed class SceneAlreadyExistsException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; SceneAlreadyExistsException
### Constructors

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException()'></a>

## SceneAlreadyExistsException() Constructor

Initializes a new instance of the [SceneAlreadyExistsException](Velaptor.Exceptions.SceneAlreadyExistsException.md 'Velaptor.Exceptions.SceneAlreadyExistsException') class.

```csharp
public SceneAlreadyExistsException();
```

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Exception)'></a>

## SceneAlreadyExistsException(string, Exception) Constructor

Initializes a new instance of the [SceneAlreadyExistsException](Velaptor.Exceptions.SceneAlreadyExistsException.md 'Velaptor.Exceptions.SceneAlreadyExistsException') class.

```csharp
public SceneAlreadyExistsException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Guid)'></a>

## SceneAlreadyExistsException(string, Guid) Constructor

Initializes a new instance of the [SceneAlreadyExistsException](Velaptor.Exceptions.SceneAlreadyExistsException.md 'Velaptor.Exceptions.SceneAlreadyExistsException') class.

```csharp
public SceneAlreadyExistsException(string name, System.Guid id);
```
#### Parameters

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Guid).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the scene.

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string,System.Guid).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The scene ID.

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string)'></a>

## SceneAlreadyExistsException(string) Constructor

Initializes a new instance of the [SceneAlreadyExistsException](Velaptor.Exceptions.SceneAlreadyExistsException.md 'Velaptor.Exceptions.SceneAlreadyExistsException') class.

```csharp
public SceneAlreadyExistsException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.SceneAlreadyExistsException.SceneAlreadyExistsException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.