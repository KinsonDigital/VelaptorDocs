import { Directory } from "./Directory.ts";
import { Guard } from "./Guard.ts";
import { VersionSideBarService } from "./VersionSidebarService.ts";
import { VersionsFileService } from "./VersionsFileService.ts";

/**
 * Deletes API docs for a specific version and updates the config files.
 */
export class DeleteAPIVersionService {
	private readonly versionFileService: VersionsFileService;
	private readonly sideBarService: VersionSideBarService;

	/**
	 * Creates a new instance of the DeleteAPIVersionService class.
	 */
	constructor() {
		this.versionFileService = new VersionsFileService();
		this.sideBarService = new VersionSideBarService();
	}

	/**
	 * Deletes a particular version of the API docs.
	 * @param {string} version The version of the API docs to delete.
	 */
	public deleteDocs(version: string): void {
		Guard.isNotUndefinedOrEmpty(version, "version");

		version = version.startsWith("v") ? version.replace("v", "") : version;

		const versionDirPaths: string[] = Directory.getDirs("./versioned_docs");

		const apiDocDirPath: string | undefined = versionDirPaths.find((p) => p.indexOf(version) !== -1);

		if (apiDocDirPath === undefined) {
			throw new Error(`Could not find the API docs directory path for version '${version}'.`);
		}

		Directory.delete(apiDocDirPath);
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
			throw new Error("There is only one version of the API docs. There must be at least two versions to delete the oldest one.");
		}

		const oldestVersion: string = versions[versions.length - 1];

		this.deleteDocs(oldestVersion);
	}
}
