#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](./Velaptor.Content.md 'Velaptor.Content')

## IPathResolver Interface

Resolves file paths.

```csharp
public interface IPathResolver
```
### Properties

<a name='Velaptor.Content.IPathResolver.ContentDirectoryName'></a>

## IPathResolver.ContentDirectoryName Property

Gets the name of the content directory.

```csharp
string ContentDirectoryName { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

### Remarks
  
This directory is not a path. It is just a name and is always located  
as a child directory of the [RootDirectoryPath](./Velaptor.Content.IPathResolver.md#Velaptor.Content.IPathResolver.RootDirectoryPath 'Velaptor.Content.IPathResolver.RootDirectoryPath').  
  
If the value is a file path, the file name will be stripped and the  
deepest child directory name will be used.

<a name='Velaptor.Content.IPathResolver.RootDirectoryPath'></a>

## IPathResolver.RootDirectoryPath Property

Gets the root directory of the content.

```csharp
string RootDirectoryPath { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')
### Methods

<a name='Velaptor.Content.IPathResolver.ResolveDirPath()'></a>

## IPathResolver.ResolveDirPath() Method

Resolves the full directory path to some content.

```csharp
string ResolveDirPath();
```

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The directory only path to some content.

<a name='Velaptor.Content.IPathResolver.ResolveFilePath(string)'></a>

## IPathResolver.ResolveFilePath(string) Method

Resolves the full file path to a content item that matches the given [contentName](./Velaptor.Content.IPathResolver.md#Velaptor.Content.IPathResolver.ResolveFilePath(string).contentName 'Velaptor.Content.IPathResolver.ResolveFilePath(string).contentName').

```csharp
string ResolveFilePath(string contentName);
```
#### Parameters

<a name='Velaptor.Content.IPathResolver.ResolveFilePath(string).contentName'></a>

`contentName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the content item with or without the file extension.

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The [RootDirectoryPath](./Velaptor.Content.IPathResolver.md#Velaptor.Content.IPathResolver.RootDirectoryPath 'Velaptor.Content.IPathResolver.RootDirectoryPath'), content file name, and the [ContentDirectoryName](./Velaptor.Content.IPathResolver.md#Velaptor.Content.IPathResolver.ContentDirectoryName 'Velaptor.Content.IPathResolver.ContentDirectoryName') combined.