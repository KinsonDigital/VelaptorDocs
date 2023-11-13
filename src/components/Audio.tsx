import React from "react";

/**
 * The properties for the {@link Audio} component.
 */
interface AudioProps {
    /**
     * The URL of the sound to play.
     */
    soundUrl: string;

    /**
     * The name of the sound.
     */
    soundName: string;
}

/**
 * Creates a simple audio playback component to play a sound located at the given {@link soundUrl}.
 * @param params The component properties.
 * @returns The component.
 */
const Audio: React.FC<AudioProps> = ({soundUrl, soundName}: AudioProps) => {
	const invalidUrl = soundUrl === undefined || soundUrl === null || soundUrl === '';

	if (invalidUrl) {
		throw new Error("The sound URL cannot be null, undefined, or empty.");
	}

	return (
		<div>
			<div style={{ marginBottom: -13, display: 'flex', justifyContent: 'center' }}>
				<h3>{soundName}</h3>
			</div>
			<audio style={{ width: '280px' }} id="audioPlayer" controls title={soundUrl} src={soundUrl}></audio>
		</div>
	);
}

export default Audio;
