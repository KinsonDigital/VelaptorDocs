---
title: Velaptor.Content.IContentPathResolver
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### IContentPathResolver Interface

Resolves file paths.

```csharp
public interface IContentPathResolver
```
## Properties

<a name='Velaptor.Content.IContentPathResolver.ContentDirectoryName'></a>

### ContentDirectoryName 

Gets the name of the content directory.

```csharp
string ContentDirectoryName { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

#### Remarks
  
This directory is not a path. It is just a name and is always located  
as a child directory of the [RootDirectoryPath](Velaptor.Content.IContentPathResolver.md#rootdirectorypath 'Velaptor.Content.IContentPathResolver.RootDirectoryPath').  
  
If the value is a file path, the file name will be stripped and the  
deepest child directory name will be used.

<a name='Velaptor.Content.IContentPathResolver.RootDirectoryPath'></a>

### RootDirectoryPath 

Gets the root directory of the content.

```csharp
string RootDirectoryPath { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')
## Methods

<a name='Velaptor.Content.IContentPathResolver.ResolveDirPath()'></a>

### ResolveDirPath() 

Resolves the full directory path to some content.

```csharp
string ResolveDirPath();
```

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The directory only path to some content.

<a name='Velaptor.Content.IContentPathResolver.ResolveFilePath(string)'></a>

### ResolveFilePath(string) 

Resolves the full file path to a content item that matches the given [contentPathOrName](Velaptor.Content.IContentPathResolver.md#contentpathorname 'Velaptor.Content.IContentPathResolver.ResolveFilePath(string).contentPathOrName').

```csharp
string ResolveFilePath(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.IContentPathResolver.ResolveFilePath(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the content item with or without the file extension.

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The [RootDirectoryPath](Velaptor.Content.IContentPathResolver.md#rootdirectorypath 'Velaptor.Content.IContentPathResolver.RootDirectoryPath'), content file name, and the [ContentDirectoryName](Velaptor.Content.IContentPathResolver.md#contentdirectoryname 'Velaptor.Content.IContentPathResolver.ContentDirectoryName') combined.
