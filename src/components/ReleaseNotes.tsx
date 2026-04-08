import React, { ReactNode } from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The parameter object used for this component.
 */
interface Params {
	projName: string;
	version: string;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
export default function ReleaseNotes(props: Params): ReactNode {
	const { projName, version } = props;

	const url = `https://github.com/KinsonDigital/${projName}/releases/tag/${version}`;

	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className="link">
			{projName} Release Notes
			<OpenNewTab
				style={{
					display: "inline-block",
					marginBottom: "4px",
					verticalAlign: "middle",
					paddingLeft: "0.25%",
					width: "2%"
				}}
			/>
		</a>
	);
};
