import chalk from "../deps.ts";
import { Utils } from "../core/Utils.ts";
import { DeleteAPIVersionService } from "services/DeleteAPIVersionService.ts";
import { VersionsFileService } from "services/VersionsFileService.ts";

/**
 * DESCRIPTION: This script is used as part of the api docs release cicd process and is used
 * to delete the oldest api docs version from the repo.
 */

const allVersions = new VersionsFileService().getVersions();
const oldestVersion = Utils.getOldestVersion(allVersions);

const versionsFileService: DeleteAPIVersionService = new DeleteAPIVersionService();

console.log(chalk.cyan(`Deleting '${oldestVersion}' API docs. . .`));

versionsFileService.deleteOldestDocs();

console.log(chalk.cyan(`API docs for version '${oldestVersion}' fully removed.`));
