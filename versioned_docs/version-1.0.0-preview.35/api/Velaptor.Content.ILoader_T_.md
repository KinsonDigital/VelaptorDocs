---
title: Velaptor.Content.ILoader<T>
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

#### ILoader&lt;T&gt; Interface

Loads data of type [T](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.T 'Velaptor.Content.ILoader<T>.T').

```csharp
public interface ILoader<out T>
    where T : Velaptor.Content.IContent
```
#### Type parameters

<a name='Velaptor.Content.ILoader<T>.T'></a>

`T`

The type of data to load.
## Methods

<a name='Velaptor.Content.ILoader<T>.Unload(string)'></a>

### Unload(string) 

Unloads the data with the given [contentPathOrName](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Unload(string).contentPathOrName 'Velaptor.Content.ILoader<T>.Unload(string).contentPathOrName').

```csharp
void Unload(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.ILoader<T>.Unload(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the content item to unload.