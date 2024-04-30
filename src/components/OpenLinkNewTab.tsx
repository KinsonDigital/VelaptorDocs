import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The properties for the {@link OpenLinkNewTab} component.
 */
interface Props {
	/**
	 * The name of the link.
	 */
	linkName: string;

	/**
	 * The URL that the link should take the user to in a new tab.
	 */
	url: string;
}

/**
 * Creates a link that opens in a new tab.
 * @param param The component properties.
 * @returns The component.
 */
const OpenLinkNewTab: React.FC<Props> = ({ linkName, url }: Props) => {
	return (
		<div className="inline-flex items-center">
			<a href={url}
				target="_blank"
				className="link flex flex-row"
				rel="noopener noreferrer">
				{linkName}
				<span><OpenNewTab style={{ paddingTop: '5px', paddingLeft: '15%', width: '100%'}}/></span>
			</a>
		</div>
	);
}

export default OpenLinkNewTab;
