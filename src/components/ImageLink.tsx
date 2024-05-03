import React from "react";

/**
 * The properties for the {@link ImageLink} component.
 */
interface Props {
	/**
	 * The URL link to goto when clicking the image.
	 */
	gotoUrl: string,

	/**
	 * The relative path to the image in the website static/img folder.
	 * If not provided, then the image shown will be the {@link gotoUrl}.
	 */
	displayUrl?: string,

	/**
	 * The size of the image as a percentage of the parent container.
	 */
	sizePercentage: number
}

/**
 * Creates an image that is clickable to open a URL in a new tab.
 * @param param The component properties.
 * @returns The component.
 */
const ImageLink: React.FC<Props> = ({ gotoUrl: url, displayUrl, sizePercentage = 50 }: Props) => {
	const sizePercentageStr = `${sizePercentage}%`;

	const imgUrl = displayUrl === undefined ? url : displayUrl;

	return (
		<a target="\_blank" href={url}>
			<img style={{ width: sizePercentageStr }} src={imgUrl} alt="Example banner" />
		</a>
	);
}

export default ImageLink;
