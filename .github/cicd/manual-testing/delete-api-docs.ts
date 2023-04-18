import { Directory } from "../doc-process-scripts/Directory.ts";
import { Path } from "../doc-process-scripts/Path.ts";
import { Select } from "https://deno.land/x/cliffy@v0.25.7/prompt/select.ts";
import { ChalkColor } from "../helpers/ChalkColor.ts";
import { DeleteAPIVersionService } from "../doc-process-scripts/DeleteAPIVersionService.ts";

/**
 * DESCRIPTION: This script is used locally by VSCode to make it easy to delete
 * API doc versions locally. It is not used in the CI/CD pipeline, though it
 * eventually will be as time goes on.
 */

const versionDirPaths: string[] = Directory.getDirs("./versioned_docs");
const apiDocVersions: string[] = Path.getLastDirNames(versionDirPaths)
	.map(d => `v${d.replace("version-", "")}`);

//"This will delete the API docs for the chosen version locally."

const chosenVersion: string = await Select.prompt({
	message: ChalkColor.prompt("Choose a version to delete:"),
	options: apiDocVersions,
	hint: "Use arrow keys to navigate, and enter to select.",
	info: true,
});

console.log(ChalkColor.header(`Deleting '${chosenVersion}' API docs. . .`));

const delAPIVersionService: DeleteAPIVersionService = new DeleteAPIVersionService();
delAPIVersionService.deleteDocs(chosenVersion);

console.log(ChalkColor.header(`API docs for version '${chosenVersion}' fully removed.`));
