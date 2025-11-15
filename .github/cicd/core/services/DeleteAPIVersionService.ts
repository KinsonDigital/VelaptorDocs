import { walkSync } from "@std/fs";
import { Guard } from "../Guard.ts";
import { VersionSideBarService } from "./VersionSidebarService.ts";
import { VersionsFileService } from "./VersionsFileService.ts";
import { Utils } from "../Utils.ts";

/**
 * Deletes API docs for a specific version and updates the config files.
 */
export class DeleteAPIVersionService {
	private readonly versionFileService: VersionsFileService;
	private readonly sideBarService: VersionSideBarService;
	private readonly baseDirPath: string;

	/**
	 * Creates a new instance of the DeleteAPIVersionService class.
	 * @param {string} baseDirPath The directory path to start the deletion process.
	 */
	constructor(baseDirPath: string) {
		this.versionFileService = new VersionsFileService(baseDirPath);
		this.sideBarService = new VersionSideBarService();

		this.baseDirPath = baseDirPath;
	}

	/**
	 * Deletes a particular version of the API docs.
	 * @param {string} version The version of the API docs to delete.
	 */
	public deleteDocs(version: string): void {
		Guard.isNotUndefinedOrEmpty(version, "version");

		version = version.startsWith("v") ? version.replace("v", "") : version;

		const dirEntries = walkSync(this.baseDirPath, {
			includeDirs: true,
			includeFiles: false,
			match: [new RegExp(`version-.+`, "gm")],
		});

		const apiDocDirPath = [...dirEntries].filter((entry) => entry.name === `version-${version}`)
			.map((entry) => entry.path)[0];

		if (Utils.isNothing(apiDocDirPath)) {
			throw new Error(`Could not find the API docs directory path for version '${version}'.`);
		}

		Deno.removeSync(apiDocDirPath, { recursive: true });

		console.log(`Deleted '${version}' API docs.`);

		this.versionFileService.deleteVersion(version);
		console.log(`Updated the 'versions.json' file by removing version '${version}'.`);

		this.sideBarService.deleteSideBar(version);
		console.log(`Sidebar file for version '${version}' deleted.`);
	}

	/**
	 * Deletes the oldest version of the API docs.
	 */
	public deleteOldestDocs(): void {
		const versions: string[] = this.versionFileService.getVersions();

		if (versions.length <= 1) {
			throw new Error(
				"There is only one version of the API docs. There must be at least two versions to delete the oldest one.",
			);
		}

		const oldestVersion: string = versions[versions.length - 1];

		this.deleteDocs(oldestVersion);
	}
}
