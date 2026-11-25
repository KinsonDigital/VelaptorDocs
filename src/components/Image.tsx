import React, { ReactNode } from "react";

/**
 * The parameter object used for this component.
 */
interface Params {
	/**
	 * The URL to the image.
	 */
	url: string;

	/**
	 * True if the image is to be centered.
	 */
	isCentered?: string;
}

/**
 * An image.
 * @param props The component props.
 * @returns The component.
 */
export default function Image(props: Params): ReactNode {
	const { url, isCentered } = props;

	const classValue = isCentered === undefined || isCentered === "true"
		? "center-horiz"
		: "";

	return (
		<div className={classValue}>
			{
				<img src={url} alt="an image" width="80%"></img>
			}
		</div>
	);
};
