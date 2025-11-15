import { existsSync, walkSync } from "@std/fs";
import { Select } from "@cliffy/prompt";
import { DeleteAPIVersionService } from "../core/services/DeleteAPIVersionService.ts";
import { Utils } from "../core/Utils.ts";

/**
 * DESCRIPTION: This script is used locally by VSCode to make it easy to delete
 * API doc versions locally. It is not used in the CI/CD pipeline, though it
 * eventually will be as time goes on.
 */

const baseDirPath = (Deno.env.get("BASE_DIR_PATH") ?? "").trim();

if (baseDirPath === "") {
	const errorMsg = "%cThe 'BASE_DIR_PATH' environment variable is not set.";
	console.log(errorMsg);
	Deno.exit();
}

if (!existsSync(baseDirPath, { isDirectory: true })) {
	throw new Error(`The current working directory '${baseDirPath}' does not exist.`);
}

const dirEntries = walkSync(baseDirPath, {
	includeDirs: true,
	includeFiles: false,
	match: [/version-.+/gm],
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
	message: "Choose a version to delete:",
	options: apiDocVersions,
	hint: "Use arrow keys to navigate, and enter to select.",
	info: true,
});

console.log(`%cDeleting '${chosenVersion}' API docs. . .`, "color: cyan");

const delAPIVersionService: DeleteAPIVersionService = new DeleteAPIVersionService(baseDirPath);
delAPIVersionService.deleteDocs(chosenVersion);

console.log(`%cAPI docs for version '${chosenVersion}' fully removed.`, "color: cyan");
