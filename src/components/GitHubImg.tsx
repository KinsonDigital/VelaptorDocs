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
}

/**
 * Creates an image that when clicked, will take the user to the GitHub repository source of the image.
 * @param param The component properties.
 * @returns The component.
 */
const GitHubImg: React.FC<Props> = ({ repoOwner, repoName, branchOrTag, relativeImgPath, sizePercentage = 100 }: Props) => {
    const invalidRepoOwner = repoOwner === undefined || repoOwner === "";
    const invalidRepoName = repoName === undefined || repoName === "";
    const invalidBranchOrTag = branchOrTag === undefined || branchOrTag === "";
    const invalidRelativeImgPath = relativeImgPath === undefined || relativeImgPath === "";

    let errorMsg = undefined;

    if (invalidRepoOwner) {
        errorMsg = "You must provide a repository name.";
    } else if (invalidRepoName) {
        errorMsg = "You must provide a repository name.";
    } else if (invalidBranchOrTag) {
        errorMsg = "You must provide a branch or tag.";
    } else if (invalidRelativeImgPath) {
        errorMsg = "You must provide a relative image path.";
    }

    const pageUrl = `https://github.com/${repoOwner}/${repoName}/blob/${branchOrTag}/${relativeImgPath}`;
    const imgUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branchOrTag}/${relativeImgPath}`;
    const sizePercentageStr = `${sizePercentage}%`;

    console.log(`Page Url: ${pageUrl}`);
    console.log(`Image Url: ${imgUrl}`);

    return (
        <div>
            {
                errorMsg !== undefined
                    ? <div className="error">{errorMsg}</div>
                    : <a target="\_blank" href={pageUrl}>
                        <img style={{width: sizePercentageStr}} src={imgUrl} alt="unknown image"/>
                      </a>
            }
        </div>
    );
}

export default GitHubImg;
