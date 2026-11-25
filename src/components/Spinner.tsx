import React, { ReactNode } from "react";

/**
 * The properties for the {@link Spinner} component.
 */
interface Props {
	/**
	 * The size/diameter of the spinner.
	 */
	size?: number,

	/**
	 * The thickness of the spinner.
	 */
	thickness?: number,

	/**
	 * The color of the spinner.
	 * @remarks Can be a named color such as 'green', or 'mediumseagreen', or a hash color value such as '#00FF00'.
	 */
	color?: string,
}

/**
 * A spinner component that can be used to represent loading or processing.
 * @param props The properties for the {@link Spinner} component.
 * @returns The component.
 */
export default function Spinner(props: Props): ReactNode {
	const {
		size = 24,
		thickness = 3,
		color = "var(--ifm-color-primary)", // auto-matches your Docusaurus theme color
	} = props;

	return (
		<div
			role="status"
			style={{
				width: size,
				height: size,
				border: `${thickness}px solid rgba(128, 128, 128, 0.25)`,
				borderTopColor: color,
				borderRadius: "50%",
				boxSizing: "border-box",
				animation: "docusaurus-spin 1s linear infinite",
			}}
		/>
	);
}