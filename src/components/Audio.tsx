import { translate } from "@docusaurus/Translate";
import React from "react";

/**
 * Creates a simple audio playback component to play a sound located at the given {@link soundUrl}.
 * @param params The URL to the sound.
 * @returns The component.
 */
export function Audio ({soundUrl, soundName}) {
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
