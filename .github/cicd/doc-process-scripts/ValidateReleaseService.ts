import { TagClient } from "clients/TagClient.ts";
import { NuGetClient } from "clients/NuGetClient.ts";
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
		if (Utils.isNullOrEmpty(tagToCheck)) {
			throw Error("The tag to check is required.");
		}

		const tagClient: TagClient = new TagClient();

		return await tagClient.tagExists("Velaptor", tagToCheck);
	}

	/**
	 * Returns a value indicating whether or not the NuGet package exists.
	 * @param versionToCheck The NuGet package version to check.
	 * @returns True if the NuGet package exists; Otherwise, false.
	 */
	private async nugetPackageExists(versionToCheck: string): Promise<boolean> {
		if (Utils.isNullOrEmpty(versionToCheck)) {
			throw Error("The version to check is required.");
		}

		versionToCheck = versionToCheck.startsWith("v") ? versionToCheck.substring(1) : versionToCheck;

		const nugetClient: NuGetClient = new NuGetClient();

		const velaptorPackageName = "kinsondigital.velaptor";
		const packageExists = await nugetClient.packageExists(velaptorPackageName);

		if (!packageExists) {
			return false;
		}

		const packageVersions = await nugetClient.getPackageVersions(velaptorPackageName);

		return packageVersions.some((version: string) => version === versionToCheck);
	}
}
