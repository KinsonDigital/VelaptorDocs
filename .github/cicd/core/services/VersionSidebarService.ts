import { existsSync, walkSync } from "@std/fs";
import { Guard } from "../Guard.ts";
import { Utils } from "../Utils.ts";

/**
 * Provides management of versioned sidebars.
 */
export class VersionSideBarService {
	/**
	 * Creates a new instance of the VersionSideBarService class.
	 */
	constructor() {
	}

	/**
	 * Deletes a sidebar JSON file that matches the given version.
	 * @param version The version of the sidebar JSON file to delete.
	 */
	public deleteSideBar(version: string): void {
		Guard.isNotUndefinedOrEmpty(version, "version");

		const foundDirEntries = walkSync(Deno.cwd(), {
			includeDirs: true,
			includeFiles: false,
			match: [new RegExp(`.*versioned_sidebars.*`, "gm")],
		});

		const foundDirs = [...foundDirEntries].map((entry) => entry.path);

		if (foundDirs.length <= 0) {
			const errorMsg = "Could not find the versioned sidebar directory 'versioned_sidebars'.";
			Utils.printGitHubError(errorMsg);
			Deno.exit(1);
		}

		// If the version begins with a 'v', remove it
		version = version.startsWith("v") ? version.replace("v", "") : version;

		const sidebarDirPath = foundDirs[0];
		const sidebarFilePath = `${sidebarDirPath}/version-${version}-sidebars.json`;

		if (existsSync(sidebarFilePath, { isFile: true })) {
			Deno.removeSync(sidebarFilePath);
		}
	}
}
