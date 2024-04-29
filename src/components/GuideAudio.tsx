import React from "react";
import Audio from "@site/src/components/Audio";

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
    audioFileName: string,

    /**
     * The name to give the audio player.
     */
    name?: string,

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
 * Creates a simple audio playback component to play a sound located at the given {@link url}.
 * @param params The component properties.
 * @returns The component.
 */
const GuideAudio: React.FC<Props> = ({ apiVersion, guideName, audioFileName, name, useTestMode = "false", testBranchOrTag = "" }: Props) => {
    const versionRegex = /^\s*v([1-9]\d*|0)\.([1-9]\d*|0)\.([1-9]\d*|0)(-preview\.([1-9]\d*))?\s*$/gm;
    const invalidGuideProjName = guideName === undefined || guideName === "";
    const undefinedOrEmptyFileName = audioFileName === undefined || audioFileName === "";
    
    let errorMsg = undefined;
    
    if (!versionRegex.test(apiVersion)) {
        errorMsg = "<GuideAudio/> Error: The api version is not a valid prod or prev version.";
    } else if (invalidGuideProjName) {
        errorMsg = "<GuideAudio/> Error: You must provide a valid C# guide project name.";
    } else if (undefinedOrEmptyFileName) {
        errorMsg = "<GuideAudio/> Error: You must provide a valid audio file name.";
    }

    const fileSections = undefinedOrEmptyFileName ? "" : audioFileName.toLowerCase().split(".");

    const fileExtension = fileSections.length >= 2 ? fileSections[fileSections.length - 1] : "";
    const invalidFileName = fileExtension != "" && fileExtension != "mp3" && fileExtension != "ogg";

    if (invalidFileName) {
        errorMsg = "The audio file must be an '.mp3' or '.ogg' file.";
    }

    const branchOrTag = useTestMode === "true" ? testBranchOrTag : `api-${apiVersion}`;
    const relativeImgPath = `SampleProjects/Guides/${guideName}/Content/Audio/${audioFileName}`;
    const url = `https://raw.githubusercontent.com/KinsonDigital/VelaptorDocs/${branchOrTag}/${relativeImgPath}`;

	return (
		<div>
            {
                errorMsg !== undefined
                    ? <div className="error">{errorMsg}</div>
                    : <Audio url={url} name={name}/>
            }
		</div>
	);
}

export default GuideAudio;
