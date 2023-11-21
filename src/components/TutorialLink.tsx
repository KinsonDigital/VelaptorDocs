import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The properties for the {@link TutorialLink} component.
 */
interface TutorialLinkProps {
    /**
     * The name of the tutorial project.
     * This ends up as the name of the link. This must be the correct
     * name of the C# project.
     */
    projectName: string;

    /**
     * The version of the tutorial project.
     */
    version: string;
}

/**
 * Creates a link that opens in a new tab to the tutorial project.
 * @param param The component properties.
 * @returns The component.
 */
const TutorialLink: React.FC<TutorialLinkProps> = ({ projectName, version }: TutorialLinkProps) => {
    const url = `https://github.com/KinsonDigital/VelaptorDocs/tree/${version}/TutorialProjects/${projectName}`;

    return (
        <a href={url}
            target="_blank"
            className="link"
            rel="noopener noreferrer">
            {projectName}<OpenNewTab style={{paddingTop: '10', paddingLeft: '0.25%', width: '2%'}}/>
        </a>
    );
}

export default TutorialLink;
