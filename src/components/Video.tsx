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
}

/**
 * Creates a video player for a video file in the static directory.
 * @param props The parameters for the component.
 * @returns The component.
 */
export default function Video(props: Props): ReactNode {
	const { relativePath } = props;

	// Files in the 'static/' folder are served at the site root.
	// Ensure the path starts with '/' for proper URL resolution.
	const src = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;

	return (
		<video className="w-full h-full" autoPlay loop muted playsInline>
			<source src={src} type="video/mp4" />
		</video>
	);
}
