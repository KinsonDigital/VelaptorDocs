import React, { ReactNode } from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The parameter object used for this component.
 */
interface Params {
	/**
	 * The name of the repository.
	 */
	repoName: string;

	/**
	 * The issue or PR number.
	 */
	issueOrPrNumber: string;

	/**
	 * Indicates whether the link is for an issue. If true, the link will point to an issue.
	 * If false, the link will point to a pull request.
	 * @remarks If not provided, it defaults to true (indicating an issue).
	 */
	isIssue?: boolean;

	/**
	 * The owner of the repository. If not provided, it defaults to "KinsonDigital".
	 */
	owner?: string;

	/**
	 * The text to display for the link. If not provided, it defaults to "{repoName}(PR #{issueOrPrNumber})".
	 */
	urlText?: string;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
export default function IssueOrPr(props: Params): ReactNode {
	const { owner, repoName: projName, issueOrPrNumber: prNum, isIssue = true, urlText } = props;
	const repoOwner = owner === undefined || owner === ""
		? "KinsonDigital"
		: owner;

	const url = isIssue
		? `https://github.com/${repoOwner}/${projName}/issues/${prNum}`
		: `https://github.com/${repoOwner}/${projName}/pull/${prNum}`;

	let text;
	if (urlText === undefined || urlText === "") {
		text = `${projName}(${props.isIssue ? "Issue" : "PR"} #${prNum})`;
	} else {
		text = urlText;
	}

	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className="link">
			{text} <OpenNewTab style={{ display: "inline", verticalAlign: "middle", paddingLeft: "0.25%", width: "2%" }} />
		</a>
	);
};
