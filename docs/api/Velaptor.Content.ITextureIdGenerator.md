---
title: Velaptor.Content.ITextureIdGenerator
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Content](Velaptor.Content.md 'Velaptor\.Content')

#### ITextureIdGenerator Interface

Generates texture ID values\.

```csharp
public interface ITextureIdGenerator
```

Derived  
&#8627; [TextureIdGenerator](Velaptor.Content.TextureIdGenerator.md 'Velaptor\.Content\.TextureIdGenerator')
## Methods

<a name='Velaptor.Content.ITextureIdGenerator.GenerateNextId()'></a>

### GenerateNextId\(\) 

Generates unique, only used once per texture, ID value\.

```csharp
uint GenerateNextId();
```

#### Returns
[System\.UInt32](https://learn.microsoft.com/en-us/dotnet/api/system.uint32 'System\.UInt32')  
The ID\.
