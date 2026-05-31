import React, { ReactNode } from "react";
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
	openInNewTab?: boolean;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
export default function Url(props: Props): ReactNode {
	let { href, text } = props;
	const { openInNewTab = false } = props;

	href = href.startsWith("https://")
		? href
		: `https://${href}`;

	text = text === undefined || text === "" ? href : text;

	const target = openInNewTab ? "_blank" : "";

	return (
		<span className="inline-flex items-center">
			<Link to={href} target={target} className={"link"}>{text}</Link>
			<span>
				{
					openInNewTab === true &&
						<OpenNewTab style={{ paddingTop: "5px", paddingLeft: "15%", marginTop: "-5px", width: "100%" }} />
				}
			</span>
		</span>
	);
}
