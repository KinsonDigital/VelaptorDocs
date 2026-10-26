---
title: Velaptor.Content.TextureIdGenerator
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor\.Content](Velaptor.Content.md 'Velaptor\.Content')

#### TextureIdGenerator Class

Generates texture ID values\.

```csharp
public class TextureIdGenerator : Velaptor.Content.ITextureIdGenerator
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → TextureIdGenerator

Implements [ITextureIdGenerator](Velaptor.Content.ITextureIdGenerator.md 'Velaptor\.Content\.ITextureIdGenerator')
## Methods

<a name='Velaptor.Content.TextureIdGenerator.GenerateNextId()'></a>

### GenerateNextId\(\) \{#Velaptor.Content.TextureIdGenerator.GenerateNextId()}

Generates unique, only used once per texture, ID value\.

```csharp
public uint GenerateNextId();
```

Implements [GenerateNextId\(\)](Velaptor.Content.ITextureIdGenerator.md#Velaptor.Content.ITextureIdGenerator.GenerateNextId() 'Velaptor\.Content\.ITextureIdGenerator\.GenerateNextId\(\)')

#### Returns
[System\.UInt32](https://learn.microsoft.com/en-us/dotnet/api/system.uint32 'System\.UInt32')  
The ID\.
