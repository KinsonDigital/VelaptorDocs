import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";
import Link from "@docusaurus/Link";

/**
 * The properties for the {@link GuideLink} component.
 */
interface Props {
	/**
	 * The name of the guide project.
	 * This ends up as the name of the link. This must be the correct
	 * name of the C# project.
	 */
	projectName: string;

	/**
	 * The name of the tag where the guide project exists.
	 */
	tagName: string;
}

/**
 * Creates a link that opens in a new tab to the guide project.
 * @param param The component properties.
 * @returns The component.
 */
const GuideLink: React.FC<Props> = ({ projectName, tagName }: Props) => {
	const url = `https://github.com/KinsonDigital/VelaptorDocs/tree/${tagName}/SampleProjects/Guides/${projectName}`;

	return (
		<>
			<div className="inline-flex items-center">
				<Link to={url} className="link" target="_blank">{projectName}</Link>
				<span><OpenNewTab style={{ paddingTop: '5px', paddingLeft: '15%', width: '100%' }} /></span>
			</div>
		</>
	);
}

export default GuideLink;
