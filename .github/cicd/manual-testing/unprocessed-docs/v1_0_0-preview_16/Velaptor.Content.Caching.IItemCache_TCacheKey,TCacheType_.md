#### [Velaptor (v1.0.0-preview.16)](./namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content.Caching](./Velaptor.Content.Caching.md 'Velaptor.Content.Caching')

## IItemCache<TCacheKey,TCacheType> Interface

Caches items for retrieval at a later time.

```csharp
public interface IItemCache<TCacheKey,out TCacheType>
```
#### Type parameters

<a name='Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheKey'></a>

`TCacheKey`

The unique key assigned for a particular cached item.

<a name='Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheType'></a>

`TCacheType`

The type of item being cached.
### Properties

<a name='Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.CacheKeys'></a>

## IItemCache<TCacheKey,TCacheType>.CacheKeys Property

Gets the list of all cache keys.

```csharp
System.Collections.ObjectModel.ReadOnlyCollection<TCacheKey> CacheKeys { get; }
```

#### Property Value
[System.Collections.ObjectModel.ReadOnlyCollection&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')[TCacheKey](./Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheKey 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheKey')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.ObjectModel.ReadOnlyCollection-1 'System.Collections.ObjectModel.ReadOnlyCollection`1')

<a name='Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TotalCachedItems'></a>

## IItemCache<TCacheKey,TCacheType>.TotalCachedItems Property

Gets the total number of cached items.

```csharp
int TotalCachedItems { get; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')
### Methods

<a name='Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.GetItem(TCacheKey)'></a>

## IItemCache<TCacheKey,TCacheType>.GetItem(TCacheKey) Method

Gets a cached item that matches the given <param name="cacheKey"></param>.

```csharp
TCacheType GetItem(TCacheKey cacheKey);
```
#### Parameters

<a name='Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.GetItem(TCacheKey).cacheKey'></a>

`cacheKey` [TCacheKey](./Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheKey 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheKey')

The unique key to identify a cached item.

#### Returns
[TCacheType](./Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheType 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheType')  
The cached item.

### Remarks
  
If the item does not already exist in the cache, it gets created, then cached.  
  
If the item does already exist in the cache, then that cached item is returned.

<a name='Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.Unload(TCacheKey)'></a>

## IItemCache<TCacheKey,TCacheType>.Unload(TCacheKey) Method

Unloads a cached item that matches the given <param name="cacheKey"></param>.

```csharp
void Unload(TCacheKey cacheKey);
```
#### Parameters

<a name='Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.Unload(TCacheKey).cacheKey'></a>

`cacheKey` [TCacheKey](./Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.md#Velaptor.Content.Caching.IItemCache_TCacheKey,TCacheType_.TCacheKey 'Velaptor.Content.Caching.IItemCache<TCacheKey,TCacheType>.TCacheKey')

The unique key to identify a cached item.