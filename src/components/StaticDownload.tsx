import React from "react";

/**
 * The properties for the {@link StaticDownload} component.
 */
interface Props {
	/**
	 * The relative path to the static file file.
	 */
	relativePath: string,

	/**
	 * The text to display if the file is not an image.
	 */
	text?: string,

	/**
	 * The size of the image as a percentage if the file is an image.
	 */
	sizePercentage?: number
}

/**
 * Creates a new {@link StaticDownload} component.
 * @param param0 The component properties.
 * @returns The {@link StaticDownload} component.
 * @remarks This component can only download static files in the static folder.
 */
const StaticDownload: React.FC<Props> = ({ relativePath, text, sizePercentage = 100 }: Props) => {
	const imgExtensions = ["png", "jpg", "jpeg", "gif", "svg"];
	const fileName = relativePath.split("/").pop();
	const fileExtension = fileName.split(".")[1].toLowerCase();

	if (fileExtension === "" || fileExtension === undefined) {
		return <div className="error">StaticDownload Component Error: Missing file extension!</div>;
	}

	if (fileName === "" || fileName === undefined) {
		return <div className="error">StaticDownload Component Error: Missing filename!</div>;
	}

	const sizePercentageStr = `${sizePercentage}%`;

	return (
		<div>
			<a href={relativePath} download={fileName}>
				{
					imgExtensions.includes(fileExtension)
						? <img src={relativePath} style={{ width: sizePercentageStr }} alt={text} title={text}></img>
						: <div>{text}</div>
				}
			</a>
		</div>
	);
};

export default StaticDownload;
