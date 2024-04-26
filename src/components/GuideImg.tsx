import React from "react";
import GitHubImg from "@site/src/components/GitHubImg";

/**
 * The properties for the {@link GuidImg} component.
 */
interface Props {
    /**
     * The version of the Velaptor API to use.
     * @remarks If not provided, then the main branch will be used.
     */
    apiVersion: string;

    /**
     * The name of the guide project.
     */
    guideName: string,

    /**
     * The name of the image file.
     */
    imgFileName: string,

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
const GuidImg: React.FC<Props> = ({ apiVersion, guideName, imgFileName, sizePercentage = 100 }: Props) => {
    const versionRegex = /^\s*v([1-9]\d*|0)\.([1-9]\d*|0)\.([1-9]\d*|0)(-preview\.([1-9]\d*))?\s*$/gm;
    const invalidGuideProjName = guideName === undefined || guideName === "";
    const invalidFileName = imgFileName === undefined || imgFileName === "";

    let errorMsg = undefined;
    
    if (!versionRegex.test(apiVersion)) {
        errorMsg = "The api version is not a valid prod or prev version.";
    } else if (invalidGuideProjName) {
        errorMsg = "You must provide a valid C# guide project name.";
    } else if (invalidFileName) {
        errorMsg = "You must provide a valid image file name.";
    }
    
    const relativeImgPath = `SampleProjects/Guides/${guideName}/Content/Graphics/${imgFileName}`;

    return (
        <div>
            {
                errorMsg !== undefined
                    ? <div className="error">{errorMsg}</div>
                    : <GitHubImg
                        repoOwner="KinsonDigital"
                        repoName="VelaptorDocs"
                        branchOrTag={'api-' + apiVersion}
                        relativeImgPath={relativeImgPath}
                        sizePercentage={sizePercentage}/>

            }
        </div>
    );
}

export default GuidImg;
