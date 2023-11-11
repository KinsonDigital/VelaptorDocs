import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The properties for the {@link OpenLinkNewTab} component.
 */
interface OpenLinkNewTabProps {
    /**
     * The name of the link.
     */
    linkName: string;

    /**
     * The URL that the link should take the user to in a new tab.
     */
    url: string;
}

/**
 * Creates a link that opens in a new tab.
 * @param param The component properties.
 * @returns The component.
 */
const OpenLinkNewTab: React.FC<OpenLinkNewTabProps> = ({ linkName, url }: OpenLinkNewTabProps) => {
    return (
        <a href={url}
            target="_blank"
            className="link"
            rel="noopener noreferrer">
            {linkName}
            <OpenNewTab style={{paddingTop: '10', paddingLeft: '0.25%', width: '2%'}}/>
        </a>
    );
}

export default OpenLinkNewTab;
