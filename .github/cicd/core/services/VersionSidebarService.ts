import { Guard } from "../Guard.ts";
import { existsSync } from "../../deps.ts";

/**
 * Provides management of versioned sidebars.
 */
export class VersionSideBarService {
	private readonly sidebarDirPath: string;

	/**
	 * Creates a new instance of the VersionSideBarService class.
	 */
	constructor() {
		this.sidebarDirPath = `${Deno.cwd()}/versioned_sidebars`;
	}

	/**
	 * Deletes a sidebar JSON file that matches the given version.
	 * @param version The version of the sidebar JSON file to delete.
	 */
	public deleteSideBar(version: string): void {
		Guard.isNotUndefinedOrEmpty(version, "version");

		// If the version begins with a 'v', remove it
		version = version.startsWith("v") ? version.replace("v", "") : version;

		const sidebarFilePath = `${this.sidebarDirPath}/version-${version}-sidebars.json`;

		if (!existsSync(sidebarFilePath)) {
			throw new Error(`Could not find the sidebar file for version '${version}'.`);
		}

		Deno.removeSync(sidebarFilePath);
	}
}
