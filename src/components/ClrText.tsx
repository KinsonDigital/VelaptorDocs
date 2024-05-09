
interface Props {
	text: string,
	foreColor: string,
	backColor?: string,
}

const ClrText: React.FC<Props> = ({ text, foreColor: foreColor, backColor }) => {
	const colorValue = `color: ${foreColor}`;

	return <span style={{ color: foreColor, backgroundColor: backColor }}>{text}</span>;
};

export default ClrText;