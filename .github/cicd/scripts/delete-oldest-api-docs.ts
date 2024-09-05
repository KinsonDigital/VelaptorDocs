import { Utils } from "../core/Utils.ts";
import { DeleteAPIVersionService } from "../core/services/DeleteAPIVersionService.ts";
import { VersionsFileService } from "../core/services/VersionsFileService.ts";

/**
 * DESCRIPTION: This script is used as part of the api docs release cicd process and is used
 * to delete the oldest api docs version from the repo.
 */

const versionsFileSearchDirPath = (Deno.env.get("SEARCH_DIR_PATH") ?? "").trim();

if (versionsFileSearchDirPath === "") {
	const errorMsg = "The environment variable 'SEARCH_DIR_PATH' does not exist.";
	Utils.printGitHubError(errorMsg);
	Deno.exit(1);
}

const allVersions = new VersionsFileService(versionsFileSearchDirPath).getVersions();
const oldestVersion = Utils.getOldestVersion(allVersions);

const versionsFileService: DeleteAPIVersionService = new DeleteAPIVersionService(versionsFileSearchDirPath);

console.log(`%cDeleting '${oldestVersion}' API docs. . .`, "color: cyan");

versionsFileService.deleteOldestDocs();

console.log(`%cAPI docs for version '${oldestVersion}' fully removed.`, "color: cyan");
