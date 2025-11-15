import { NuGetClient } from "@kd-clients/packaging";
import { TagClient } from "@kd-clients/github";
import { Utils } from "../Utils.ts";

/**
 * Validates that a Velaptor release exists.
 */
export class ValidateReleaseService {
	private readonly ownerName = "KinsonDigital";
	private readonly repoName = "Velaptor";

	/**
	 * Returns a value indicating whether or not the release exists.
	 * @param version The release version to check.
	 * @returns True if the release exists; Otherwise, false.
	 */
	public async releaseExists(version: string): Promise<boolean> {
		if (!Utils.isPrevOrProdVersion(version)) {
			return false;
		}

		const releaseTagExists: boolean = await this.releaseTagExists(version);
		const nugetPackageExists: boolean = await this.nugetPackageExists(version);

		return releaseTagExists && nugetPackageExists;
	}

	/**
	 * Returns a value indicating whether or not the release tag exists.
	 * @param tagToCheck The tag to check.
	 * @returns True if the tag exists; Otherwise, false.
	 */
	private async releaseTagExists(tagToCheck: string): Promise<boolean> {
		if (Utils.isNothing(tagToCheck)) {
			throw Error("The tag to check is required.");
		}

		const tagClient: TagClient = new TagClient(this.ownerName, this.repoName);

		return await tagClient.exists(tagToCheck);
	}

	/**
	 * Returns a value indicating whether or not the NuGet package exists.
	 * @param versionToCheck The NuGet package version to check.
	 * @returns True if the NuGet package exists; Otherwise, false.
	 */
	private async nugetPackageExists(versionToCheck: string): Promise<boolean> {
		if (Utils.isNothing(versionToCheck)) {
			throw Error("The version to check is required.");
		}

		versionToCheck = versionToCheck.startsWith("v") ? versionToCheck.substring(1) : versionToCheck;

		const nugetClient: NuGetClient = new NuGetClient();

		const velaptorPackageName = "kinsondigital.velaptor";
		const packageExists = await nugetClient.exists(velaptorPackageName);

		if (!packageExists) {
			return false;
		}

		const packageVersions = await nugetClient.getPackageVersions(velaptorPackageName);

		return packageVersions.some((version: string) => version === versionToCheck);
	}
}
