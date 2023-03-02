#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Exceptions](./Velaptor.Exceptions.md 'Velaptor.Exceptions')

## EnumOutOfRangeException<T> Class

Thrown when an invalid [RenderEffects](./Velaptor.Graphics.RenderEffects.md 'Velaptor.Graphics.RenderEffects') value is used.

```csharp
public class EnumOutOfRangeException<T> : System.Exception
    where T : System.Enum
```
#### Type parameters

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.T'></a>

`T`

The type of enumeration.

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') → [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') → EnumOutOfRangeException<T>
### Constructors

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException()'></a>

## EnumOutOfRangeException() Constructor

Initializes a new instance of the [EnumOutOfRangeException&lt;T&gt;](./Velaptor.Exceptions.EnumOutOfRangeException_T_.md 'Velaptor.Exceptions.EnumOutOfRangeException<T>') class.

```csharp
public EnumOutOfRangeException();
```

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException(string,string)'></a>

## EnumOutOfRangeException(string, string) Constructor

Initializes a new instance of the [EnumOutOfRangeException&lt;T&gt;](./Velaptor.Exceptions.EnumOutOfRangeException_T_.md 'Velaptor.Exceptions.EnumOutOfRangeException<T>') class.

```csharp
public EnumOutOfRangeException(string className, string methodName);
```
#### Parameters

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException(string,string).className'></a>

`className` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the class where the exception occurred.

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException(string,string).methodName'></a>

`methodName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the method where the exception occured.

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException(string,System.Exception)'></a>

## EnumOutOfRangeException(string, Exception) Constructor

Initializes a new instance of the [EnumOutOfRangeException&lt;T&gt;](./Velaptor.Exceptions.EnumOutOfRangeException_T_.md 'Velaptor.Exceptions.EnumOutOfRangeException<T>') class.

```csharp
public EnumOutOfRangeException(string message, System.Exception innerException);
```
#### Parameters

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException(string,System.Exception).innerException'></a>

`innerException` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') instance that caused the current exception.

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException(string)'></a>

## EnumOutOfRangeException(string) Constructor

Initializes a new instance of the [EnumOutOfRangeException&lt;T&gt;](./Velaptor.Exceptions.EnumOutOfRangeException_T_.md 'Velaptor.Exceptions.EnumOutOfRangeException<T>') class.

```csharp
public EnumOutOfRangeException(string message);
```
#### Parameters

<a name='Velaptor.Exceptions.EnumOutOfRangeException_T_.EnumOutOfRangeException(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that describes the error.