import React, { ReactNode } from "react";
import JoinCommunity from "../join-comm.mdx";

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
export default function MarkdownComp(): ReactNode {
	return (
		<>
			<h2 className="color-section">Join Our Community</h2>
			<JoinCommunity />
		</>
	);
}
