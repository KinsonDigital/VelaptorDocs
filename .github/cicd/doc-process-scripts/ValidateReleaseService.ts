import { ChalkColor } from "./ChalkColor.ts";
import { ITag } from "./ITag.ts";
import { Utils } from "./Utils.ts";

/**
 * Validates that a Velaptor release exists.
 */
export class ValidateReleaseService {
    private readonly prevVersionRegex = /^v[0-9]+\.[0-9]+\.[0-9]+-preview\.[0-9]+$/;
    private readonly prodVersionRegex = /^v[0-9]+\.[0-9]+\.[0-9]+$/;

    /**
     * Returns a value indicating whether or not the release exists.
     * @param version The release version to check.
     * @returns True if the release exists; Otherwise, false.
     */
    public async releaseExists(version: string): Promise<boolean> {
        const versionIsValid = this.validateVersion(version);
        const releaseTagExists: boolean = await this.releaseTagExists(version);
        const nugetPackageExists: boolean = await this.nugetPackageExists(version);

        return versionIsValid && releaseTagExists && nugetPackageExists;
    }

    /**
     * Returns a value indicating whether or not the version syntax is valid.
     * @param version The version to validate.
     * @returns True if the version syntax is valid; Otherwise, false.
     */
    private validateVersion(version: string): boolean {
        if (Utils.isNullOrEmpty(version)) {
            return false;
        }

        const isValidPrev = this.prevVersionRegex.test(version);
        const isValidProd = this.prodVersionRegex.test(version);

        return isValidPrev || isValidProd;
    }

    /**
     * Returns a value indicating whether or not the release tag exists.
     * @param tagToCheck The tag to check.
     * @returns True if the tag exists; Otherwise, false.
     */
    private async releaseTagExists(tagToCheck: string): Promise<boolean> {
        const headers = new Headers();
        headers.append("Accept", `application/vnd.github.v3+json`);

        const url = "https://api.github.com/repos/KinsonDigital/Velaptor/tags";

        const response = await fetch(url, {
            headers: headers,
            method: "GET",
        });
        
        if (response.status != 200) {
            console.log(ChalkColor.error(`Error: ${response.status} - ${response.statusText}`));
            Deno.exit();
        }

        const responseText: string = await response.text();
        const releaseTags: ITag[] = JSON.parse(responseText);

        const tagExists: boolean = releaseTags.some((tag: ITag) => tag.name === tagToCheck);

        return tagExists;
    }

    /**
     * Returns a value indicating whether or not the NuGet package exists.
     * @param versionToCheck The NuGet package version to check.
     * @returns True if the NuGet package exists; Otherwise, false.
     */
    private async nugetPackageExists(versionToCheck: string): Promise<boolean> {
        const url = "https://api.nuget.org/v3-flatcontainer/kinsondigital.velaptor/index.json";

        const response = await fetch(url, { method: "GET" });

        if (response.status != 200) {
            console.log(ChalkColor.error(`Error: ${response.status} - ${response.statusText}`));
            Deno.exit();
        }

        versionToCheck = versionToCheck.startsWith("v")
            ? versionToCheck.substring(1)
            : versionToCheck;

        const responseText: string = await response.text();
        const nugetVersions: string[] = JSON.parse(responseText).versions;

        const nugetExists: boolean = nugetVersions.some((version: string) => version === versionToCheck);

        return nugetExists;
    }
}
