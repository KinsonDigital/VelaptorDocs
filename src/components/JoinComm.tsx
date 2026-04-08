import React, { ReactNode } from "react";
import JoinCommunity from "../join-comm.mdx";

/**
 * Renders the Join Our Community section and its MDX content.
 * @returns The Join Community component.
 */
export default function MarkdownComp(): ReactNode {
	return (
		<>
			<h2 className="color-section">Join Our Community</h2>
			<JoinCommunity />
		</>
	);
}
