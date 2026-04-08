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
export default function GitHubProject(props: Params): ReactNode {
	const { owner, projName } = props;
	const noOwnerAttr = owner === "";
	const noProjNameAttr = projName === "";

	const url = `https://github.com/${owner}/${projName}`;

	if (noOwnerAttr) {
		return (
			<span style={{ color: 'red' }}>'missing-owner-attribute'</span>
		);
	} else if (noProjNameAttr) {
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
