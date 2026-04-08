import React, { ReactNode } from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The parameter object used for this component.
 */
interface Params {
	owner?: string;
	projName: string;
	prNum: string;
	urlText?: string;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
export default function PR(props: Params): ReactNode {
	const { owner, projName, prNum, urlText } = props;
	const repoOwner = owner === undefined || owner === ""
		? "KinsonDigital"
		: owner;

	const url = `https://github.com/${repoOwner}/${projName}/pull/${prNum}`;

	let text;
	if (urlText === undefined || urlText === "") {
		text = `${projName}(PR #${prNum})`;
	} else {
		text = urlText;
	}

	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className="link">
			{text} <OpenNewTab style={{ display: "inline", verticalAlign: "middle", paddingLeft: "0.25%", width: "2%" }} />
		</a>
	);
};
