import React from "react";
import { useLocation } from '@docusaurus/router';
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The parameter object used for this component.
 */
interface Props {
	/**
	 * The link to navigate to or open.
	 */
	href: string;

	/**
	 * The text to display for the link.
	 */
	text?: string;

	/**
	 * If true, then the link will open in a new tab.
	 */
	openInNewTab?: boolean;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
const Url: React.FC<Props> = ({ href, text, openInNewTab }: Props) => {
	href = href.startsWith("https://")
		? href
		: `https://${href}`;

	text = text === undefined || text === null || text === ""
		? href
		: text;

	const target = openInNewTab === undefined ? "" : "_blank";

	return (
		<>
			<div className="inline-flex items-center">
				<a href={href}
					target={target}
					className="link flex flex-row"
					rel="noopener noreferrer">
					{text}
					{
						openInNewTab === undefined
							? <></>
							: <span><OpenNewTab style={{ paddingTop: '5px', paddingLeft: '15%', width: '100%'}}/></span>
					}
				</a>
			</div>
		</>
	);
}

export default Url;
