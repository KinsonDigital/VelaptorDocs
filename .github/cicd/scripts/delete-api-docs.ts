import { Directory } from "io/Directory.ts";
import { Path } from "io/Path.ts";
import { Select } from "../deps.ts";
import { DeleteAPIVersionService } from "services/DeleteAPIVersionService.ts";
import chalk from "../deps.ts";

/**
 * DESCRIPTION: This script is used locally by VSCode to make it easy to delete
 * API doc versions locally. It is not used in the CI/CD pipeline, though it
 * eventually will be as time goes on.
 */

const versionDirPaths: string[] = Directory.getDirs("./versioned_docs");
const apiDocVersions: string[] = Path.getLastDirNames(versionDirPaths)
	.map((d) => `v${d.replace("version-", "")}`);

//"This will delete the API docs for the chosen version locally."

const chosenVersion: string = await Select.prompt({
	message: chalk.yellow("Choose a version to delete:"),
	options: apiDocVersions,
	hint: "Use arrow keys to navigate, and enter to select.",
	info: true,
});

console.log(chalk.cyan(`Deleting '${chosenVersion}' API docs. . .`));

const delAPIVersionService: DeleteAPIVersionService = new DeleteAPIVersionService();
delAPIVersionService.deleteDocs(chosenVersion);

console.log(chalk.cyan(`API docs for version '${chosenVersion}' fully removed.`));
