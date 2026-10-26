import React, { ReactNode } from "react";

/**
 * The parameter object used for this component.
 */
interface Props {
	/**
	 * The relative path to the video, relative to the 'static/' directory.
	 * @example "video/guides/scenes/scene-manage.mp4"
	 */
	relativePath: string;

	/**
	 * The size of the videos with and height.
	 */
	size?: number;
}

/**
 * Creates a video player for a video file in the static directory.
 * @param props The parameters for the component.
 * @returns The component.
 */
export default function Video(props: Props): ReactNode {
	const { relativePath } = props;
	let { size } = props;

	size = size === undefined ? 300 : size;

	// Files in the 'static/' folder are served at the site root.
	// Ensure the path starts with '/' for proper URL resolution.
	const src = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;

	return (
		// <video className="w-full h-full" autoPlay loop muted playsInline width={50}>
		<video autoPlay loop muted playsInline width={size} >
			<source src={src} type="video/mp4" />
		</video>
	);
}
