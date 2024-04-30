import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The properties for the {@link TutorialLink} component.
 */
interface TutorialLinkProps {
	/**
	 * The name of the guide project.
	 * This ends up as the name of the link. This must be the correct
	 * name of the C# project.
	 */
	projectName: string;

	/**
	 * The version of the guide project.
	 */
	version: string;
}

/**
 * Creates a link that opens in a new tab to the guide project.
 * @param param The component properties.
 * @returns The component.
 */
const TutorialLink: React.FC<TutorialLinkProps> = ({ projectName, version }: TutorialLinkProps) => {
	const url = `https://github.com/KinsonDigital/VelaptorDocs/tree/api-${version}/SampleProjects/Guides/${projectName}`;

	return (
		<div className="inline-flex items-center">
			<a href={url}
				target="_blank"
				className="link"
				rel="noopener noreferrer">
				{projectName}
			</a>
			<span><OpenNewTab style={{ paddingTop: '5px', paddingLeft: '15%', width: '100%' }} /></span>
		</div>
	);
}

export default TutorialLink;
