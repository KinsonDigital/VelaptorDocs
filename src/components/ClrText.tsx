import { ReactNode } from "react";

interface Props {
	text: string,
	foreColor: string,
	backColor?: string,
}

export default function ClrText(props: Props): ReactNode {
	const { text, foreColor, backColor } = props;

	return <span style={{ color: foreColor, backgroundColor: backColor }}>{text}</span>;
};
