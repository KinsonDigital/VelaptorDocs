import { Select, existsSync, walkSync } from "../deps.ts";
import { DeleteAPIVersionService } from "../core/services/DeleteAPIVersionService.ts";
import chalk from "../deps.ts";
import { Utils } from "../core/Utils.ts";

/**
 * DESCRIPTION: This script is used locally by VSCode to make it easy to delete
 * API doc versions locally. It is not used in the CI/CD pipeline, though it
 * eventually will be as time goes on.
 */

if (Deno.args.length <= 0) {
	throw new Error("The script must have at least one argument.");
}

const baseDirPath = Deno.args[0].trim();

if (!existsSync(baseDirPath)) {
	throw new Error(`The current working directory '${baseDirPath}' does not exist.`);
}

const dirEntries = walkSync(baseDirPath, {
	includeDirs: true, includeFiles: false,
	match: [new RegExp(`version-.+`, "gm")]
});

const apiDocVersions = [...dirEntries].filter((entry) => {
	const dirName = `v${entry.name.trim().replace("version-", "")}`;

	return Utils.isPrevOrProdVersion(dirName);
}).map((entry) => {
	const result = entry.name.replace("version-", "v");

	return result;
});

//"This will delete the API docs for the chosen version locally."
const chosenVersion: string = await Select.prompt({
	message: chalk.yellow("Choose a version to delete:"),
	options: apiDocVersions,
	hint: "Use arrow keys to navigate, and enter to select.",
	info: true,
});

console.log(chalk.cyan(`Deleting '${chosenVersion}' API docs. . .`));

const delAPIVersionService: DeleteAPIVersionService = new DeleteAPIVersionService(baseDirPath);
delAPIVersionService.deleteDocs(chosenVersion);

console.log(chalk.cyan(`API docs for version '${chosenVersion}' fully removed.`));
