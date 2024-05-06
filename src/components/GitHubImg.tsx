import React from "react";

/**
 * The properties for the {@link GitHubImg} component.
 */
interface Props {
	/**
	 * The name of the repository owner.
	 * @remarks If not provided, then the default KinsonDigital value will be used.
	 */
	repoOwner: string,

	/**
	 * The name of the repository.
	 */
	repoName: string,

	/**
	 * The version of the Velaptor API to use.
	 * @remarks If not provided, then the main branch will be used.
	 */
	branchOrTag: string;

	/**
	 * The path to the image file relative to the root of the repository.
	 */
	relativeImgPath: string,

	/**
	* The size of the image as a percentage.
	*/
	sizePercentage: number,

	/**
	 * Used to put the control into test mode.
	 * A tag with the api version is not released yet during development.
	 * This will allow the use of the {@link testBranchOrTag} prop to be used
	 * instead to point to the development branch.
	 */
	useTestMode?: string,

	/**
	 * The branch or tag to use if in test mode.
	 */
	testBranchOrTag?: string,
}

/**
 * Creates an image that when clicked, will take the user to the GitHub repository source of the image.
 * @param param The component properties.
 * @returns The component.
 */
const GitHubImg: React.FC<Props> = ({ repoOwner, repoName, branchOrTag, relativeImgPath, sizePercentage = 100, useTestMode = "false", testBranchOrTag = "" }: Props) => {
	const invalidRepoOwner = repoOwner === undefined || repoOwner === "";
	const invalidRepoName = repoName === undefined || repoName === "";
	const invalidBranchOrTag = branchOrTag === undefined || branchOrTag === "";
	const invalidRelativeImgPath = relativeImgPath === undefined || relativeImgPath === "";

	let errorMsg = undefined;

	if (invalidRepoOwner) {
		errorMsg = "<GitHubImg/> Error: You must provide a repository name.";
	} else if (invalidRepoName) {
		errorMsg = "<GitHubImg/> Error: You must provide a repository name.";
	} else if (invalidBranchOrTag) {
		errorMsg = "<GitHubImg/> Error: You must provide a branch or tag.";
	} else if (invalidRelativeImgPath) {
		errorMsg = "<GitHubImg/> Error: You must provide a relative image path.";
	}

	branchOrTag = useTestMode === "true" ? testBranchOrTag : branchOrTag;
	const pageUrl = `https://github.com/${repoOwner}/${repoName}/blob/${branchOrTag}/${relativeImgPath}`;
	const imgUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branchOrTag}/${relativeImgPath}`;
	const sizePercentageStr = `${sizePercentage}%`;

	return (
		<div>
			{
				errorMsg !== undefined
					? <div className="error">{errorMsg}</div>
					: <a target="\_blank" href={pageUrl}>
						<img style={{ width: sizePercentageStr }} src={imgUrl} alt="unknown image" className="w-full h-auto" />
					</a>
			}
		</div>
	);
}

export default GitHubImg;
