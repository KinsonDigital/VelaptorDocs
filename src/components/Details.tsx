import React, { ReactNode } from "react";

interface Props {
	summary: string;
	open?: string;
	children: React.ReactNode;
}

export default function Details(props: Props): ReactNode {
	const { summary, open = "false", children } = props;
	const isOpened = open === "true";

	return (
		<>
			<div>
				{
					isOpened
						?
						<details open>
							<summary>{summary}</summary>

							{children}
						</details>
						:
						<details>
							<summary>{summary}</summary>

							{children}
						</details>
				}
			</div>
		</>
	);
};
