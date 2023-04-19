import React from "react";
import OpenNewTab from '@site/static/img/new-tab.svg';

/**
 * Creates a link to a KinsonDigital tutorial project.
 * @param params The name of the KinsonDigital project.
 * @returns The component.
 */
export function TutorialLink ({projectName}) {
	const url = `https://github.com/KinsonDigital/VelaptorTutorials/tree/master/${projectName}`;

	return (
		<a href={url}
			target="_blank"
			className="link"
			rel="noopener noreferrer">
			{projectName}<OpenNewTab style={{paddingTop: '10', paddingLeft: '0.25%', width: '2%'}}/>
		</a>
	);
}
