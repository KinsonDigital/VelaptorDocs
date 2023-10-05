---
title: Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Caching](Velaptor.Content.Caching.md 'Velaptor.Content.Caching')

#### IItemCache&lt;TCacheKey,TCacheType&gt; Interface

Caches items for retrieval at a later time.

```csharp
public interface IItemCache<in TCacheKey,out TCacheType>
```
#### Type parameters

<a name='Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheKey'></a>

`TCacheKey`

The unique key assigned for a particular cached item.

<a name='Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheType'></a>

`TCacheType`

The type of item being cached.
## Properties

<a name='Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.CacheKeys'></a>

### CacheKeys 

Gets the list of all cache keys.

```csharp
System.Collections.Generic.IReadOnlyCollection<string> CacheKeys { get; }
```

#### Property Value
[System.Collections.Generic.IReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyCollection-1 'System.Collections.Generic.IReadOnlyCollection`1')

<a name='Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TotalCachedItems'></a>

### TotalCachedItems 

Gets the total number of cached items.

```csharp
int TotalCachedItems { get; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')
## Methods

<a name='Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.GetItem(TCacheKey)'></a>

### GetItem(TCacheKey) 

Gets a cached item that matches the given [cacheKey](Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.GetItem(TCacheKey).cacheKey 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.GetItem(TCacheKey).cacheKey').

```csharp
TCacheType GetItem(TCacheKey cacheKey);
```
#### Parameters

<a name='Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.GetItem(TCacheKey).cacheKey'></a>

`cacheKey` [TCacheKey](Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheKey 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheKey')

The unique key to identify a cached item.

#### Returns
[TCacheType](Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheType 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheType')  
The cached item.

#### Remarks
  
If the item does not already exist in the cache, it gets created, then cached.  
  
If the item does already exist in the cache, then that cached item is returned.

<a name='Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.Unload(TCacheKey)'></a>

### Unload(TCacheKey) 

Unloads a cached item that matches the given [cacheKey](Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.Unload(TCacheKey).cacheKey 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.Unload(TCacheKey).cacheKey').

```csharp
void Unload(TCacheKey cacheKey);
```
#### Parameters

<a name='Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.Unload(TCacheKey).cacheKey'></a>

`cacheKey` [TCacheKey](Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheKey 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheKey')

The unique key to identify a cached item.