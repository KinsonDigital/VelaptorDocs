import React from "react";

/**
 * The properties for the {@link ImageLink} component.
 */
interface ImageLinkProps {
    /**
     * The URL link to goto when clicking the image.
     */
    url: string,

    /**
     * The relative path to the image in the website static/img folder.
     */
    relativeImagePath: string,

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
const ImageLink: React.FC<ImageLinkProps> = ({ url, relativeImagePath, sizePercentage = 50 }: ImageLinkProps) => {
    const sizePercentageStr = `${sizePercentage}%`;

    return (
        <a target="\_blank" href={url}>
            <img style={{width: sizePercentageStr}} src={relativeImagePath} alt="Example banner"/>
        </a>
    );
}

export default ImageLink;
