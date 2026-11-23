import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";

/**
 * The parameter object used for this component.
 */
interface Props {
	/**
	 * The link to navigate to when the profile picture is clicked.
	 */
	href: string;

	/**
	 * The URL of the profile picture image.
	 */
	src: string;

	/**
	 * The alt text for the profile picture.
	 */
	alt?: string;

	/**
	 * The diameter of the circular profile picture in pixels.
	 */
	size?: number;

	/**
	 * The name displayed when hovering over the profile picture.
	 */
	name?: string;
}

/**
 * Creates a circular profile picture that acts as a link.
 * @param props The parameters for the component.
 * @returns The component.
 */
export default function ProfilePicture(props: Props): ReactNode {
	const { href, src, size = 80 } = props;
	const alt = props.alt === undefined || props.alt === "" ? "Profile picture" : props.alt;
	const name = props.name === undefined || props.name === "" ? undefined : props.name;

	return (
		<Link to={href} target="_blank" className="profile-picture-link" title={name}>
			<img src={src} alt={alt} width={size} height={size} className="profile-picture" />
		</Link>
	);
}
