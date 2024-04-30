import React from "react";

/**
 * The properties for the {@link Audio} component.
 */
interface Props {
	/**
	 * The URL of the sound to play.
	 */
	url: string;

	/**
	 * The name of the sound.
	 */
	name?: string;
}

/**
 * Creates a simple audio playback component to play a sound located at the given {@link url}.
 * @param params The component properties.
 * @returns The component.
 */
const Audio: React.FC<Props> = ({ url, name }: Props) => {
	const invalidUrl = url === undefined || url === null || url === '';
	const hasNoName = name === undefined || name === null || name === '';

	let errorMsg = undefined;

	if (invalidUrl) {
		errorMsg = "<Audio/> Error: The url prop cannot be null, undefined, or empty.";
	}

	const marginIfNoName = hasNoName ? "mt-2.5" : ""

	return (
		<div>
			{
				errorMsg !== undefined
					? <div className="error">{errorMsg}</div>
					: <div className="flex flex-col items-center">
						<h3>{name}</h3>
						<audio id="audioPlayer" controls title={url} src={url} className={marginIfNoName} />
					</div>
			}
		</div>
	);
}

export default Audio;
