#### [Velaptor](index.md 'index')
### [Velaptor.Content.Fonts](Velaptor.Content.Fonts.md 'Velaptor.Content.Fonts')

## FontSource Enum

Represents the source of where a font was loaded.

```csharp
public enum FontSource
```
### Fields

<a name='Velaptor.Content.Fonts.FontSource.AppContent'></a>

`AppContent` 1

Loaded from the application's content directory.

<a name='Velaptor.Content.Fonts.FontSource.System'></a>

`System` 2

Loaded from the system.

<a name='Velaptor.Content.Fonts.FontSource.Unknown'></a>

`Unknown` 0

Loaded from another location other then the system or application's font content directory.

### Remarks
When loading fonts, the font that is attempting to be loaded will be  
checked for its existence in the application's content directory first.  
If the font does not exist there, then the font will be checked for  
its existence in the system.  If the font does not exist in the application's  
content directory or the system, then an exception will be thrown.