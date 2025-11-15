---
title: Velaptor.Content.AudioBuffer
---

#### [Velaptor](Namespaces.md 'Velaptor Namespaces')
### [Velaptor.Content](Velaptor.Content.md 'Velaptor.Content')

## AudioBuffer Enum

The kinds of buffering used for audio.

```csharp
public enum AudioBuffer
```
#### Fields

<a name='Velaptor.Content.AudioBuffer.Full'></a>

`Full` 0

All the audio data has been loaded into memory.

#### Remarks
<br/>  
            Good For:  
                  
- Sounds that need to be played in quick succession such as audio effects.  
- Greatly improves the performance with loading audio content.  
            Not Good For:  
                  
- Large audio files that take up much more memory.  
- Large audio files take longer when loading as content.<br/>  
            It is recommended to use [Full](Velaptor.Content.AudioBuffer.md#full 'Velaptor.Content.AudioBuffer.Full') for very short audio effects such as lasers, weapons, etc. and  
            to use [Stream](Velaptor.Content.AudioBuffer.md#stream 'Velaptor.Content.AudioBuffer.Stream') for large files such as game music.

<a name='Velaptor.Content.AudioBuffer.Stream'></a>

`Stream` 1

Audio data is streamed from a source during playback.

#### Remarks
<br/>  
            Good For:  
                  
- Large audio files that would take up too much memory if loaded all at once.  
- Greatly improves the performance with loading audio content.  
            Not Good For:  
                  
- Sounds that need to be played in quick succession such as audio effects.<br/>  
            It is recommended to use [Stream](Velaptor.Content.AudioBuffer.md#stream 'Velaptor.Content.AudioBuffer.Stream') for large files such as game music and to use [Full](Velaptor.Content.AudioBuffer.md#full 'Velaptor.Content.AudioBuffer.Full')  
            for very short audio effects such as lasers, weapons, etc.
