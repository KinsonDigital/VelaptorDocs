import React from "react";

/**
 * The properties for the {@link Audio} component.
 */
interface AudioProps {
    /**
     * The URL of the sound to play.
     */
    url: string;

    /**
     * The name of the sound.
     */
    name: string;
}

/**
 * Creates a simple audio playback component to play a sound located at the given {@link url}.
 * @param params The component properties.
 * @returns The component.
 */
const Audio: React.FC<AudioProps> = ({url, name}: AudioProps) => {
	const invalidUrl = url === undefined || url === null || url === '';

	if (invalidUrl) {
		throw new Error("The sound URL cannot be null, undefined, or empty.");
	}

	return (
		<div>
			<div style={{ marginBottom: -13, display: 'flex', justifyContent: 'center' }}>
				<h3>{name}</h3>
			</div>
			<audio style={{ width: '280px' }} id="audioPlayer" controls title={url} src={url}></audio>
		</div>
	);
}

export default Audio;
