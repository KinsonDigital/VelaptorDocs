import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";
import Link from "@docusaurus/Link";

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
	openInNewTab?: string;
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

	text = text === undefined || text === "" ? href : text;

	const shouldUseNewTab = openInNewTab?.toLowerCase() === "true";
	const target = shouldUseNewTab ? "_blank" : "";

	return (
		<span className="inline-flex items-center">
			<Link to={href} target={target} className={"link"}>{text}</Link>
			<span>
				{
					shouldUseNewTab
						? <OpenNewTab style={{ paddingTop: '5px', paddingLeft: '15%', width: '100%' }}/>
						: <div></div>
				}
			</span>
		</span>
	);
}

export default Url;
