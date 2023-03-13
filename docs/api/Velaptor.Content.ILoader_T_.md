---
title: Velaptor.Content.ILoader<T>
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## ILoader&lt;T&gt; Interface

Loads data of type [T](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.T 'Velaptor.Content.ILoader<T>.T').

```csharp
public interface ILoader<out T>
    where T : Velaptor.Content.IContent
```
#### Type parameters

<a name='Velaptor.Content.ILoader<T>.T'></a>

`T`

The type of data to load.

Derived  
&#8627; [AtlasLoader](Velaptor.Content.AtlasLoader.md 'Velaptor.Content.AtlasLoader')  
&#8627; [FontLoader](Velaptor.Content.Fonts.FontLoader.md 'Velaptor.Content.Fonts.FontLoader')  
&#8627; [SoundLoader](Velaptor.Content.SoundLoader.md 'Velaptor.Content.SoundLoader')  
&#8627; [TextureLoader](Velaptor.Content.TextureLoader.md 'Velaptor.Content.TextureLoader')
### Methods

<a name='Velaptor.Content.ILoader<T>.Load(string)'></a>

## ILoader&lt;T&gt;.Load(string) Method

Loads data with the given [contentPathOrName](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Load(string).contentPathOrName 'Velaptor.Content.ILoader<T>.Load(string).contentPathOrName').

```csharp
T Load(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.ILoader<T>.Load(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the content of the data to load.

#### Returns
[T](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.T 'Velaptor.Content.ILoader<T>.T')  
The data loaded from disk.

<a name='Velaptor.Content.ILoader<T>.Unload(string)'></a>

## ILoader&lt;T&gt;.Unload(string) Method

Unloads the data with the given [contentPathOrName](Velaptor.Content.ILoader_T_.md#Velaptor.Content.ILoader_T_.Unload(string).contentPathOrName 'Velaptor.Content.ILoader<T>.Unload(string).contentPathOrName').

```csharp
void Unload(string contentPathOrName);
```
#### Parameters

<a name='Velaptor.Content.ILoader<T>.Unload(string).contentPathOrName'></a>

`contentPathOrName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the content item to unload.