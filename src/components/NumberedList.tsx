import React, { ReactNode } from "react";

/**
 * The properties for the {@link NumberedList} component.
 */
interface Props {
	/**
	 * The list of items to display.
	 */
	items: string[] | ReactNode[];
}

/**
 * Shows a numbered list of string values or {@link React} components.
 * @param props 
 * @returns The numbered list.
 */
export default function NumberedList(props: Props): ReactNode {
	const { items } = props;

	return (
		<ol>
			{items.map((item, index) => (
				<li key={index} style={{ marginLeft: "25px" }}>{item}</li>
			))}
		</ol>
	);
};
