import React, { ReactNode } from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The parameters for the GitHubProject component.
 */
interface Params {
	/**
	 * The owner of the GitHub repository.
	 */
	owner: string;

	/**
	 * The name of the GitHub project/repository.
	 */
	projName: string;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
export default function GitHubProject({ owner, projName }: Params): ReactNode {
	const forgotOwnerAttr = owner === undefined || owner === "";
	const forgotProjNameAttr = projName === undefined || projName === "";

	const url = `https://github.com/${owner}/${projName}`;

	if (forgotOwnerAttr) {
		return (
			<span style={{ color: 'red' }}>'missing-owner-attribute'</span>
		);
	} else if (forgotProjNameAttr) {
		return (
			<span style={{ color: 'red' }}>'missing-projName-attribute'</span>
		);
	} else {
		return (
			<a href={url} target="_blank" rel="noopener noreferrer" className="link">
				{projName}
				<OpenNewTab
					style={{
						display: "inline-block",
						marginBottom: "4px",
						verticalAlign: "middle",
						paddingLeft: "0.25%",
						width: "2%"
					}} />
			</a>
		);
	}
};
