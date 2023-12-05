import { Input, Select } from "../deps.ts";
import { DocProcessor } from "../core/DocProcessor.ts";

console.clear();

if (Deno.args.length < 3) {
	let errorMsg = `The required number of arguments is 3 but only '${Deno.args.length}' were given.`;
	errorMsg += "\nThe required arguments are:";
	errorMsg += "\n\t1. The path to the directory to generate the API documentation.";
	errorMsg += "\n\t2. The tag or branch name to generate the API documentation from.";
	errorMsg += "\n\t3. The GitHub token to use for accessing the GitHub API.";

	console.error(`::error::${errorMsg}`);
	Deno.exit(1);
}

const generateOutputDirPath: string = Deno.args[0];
let tagOrBranch = Deno.args[1].trim().toLowerCase();

const token = Deno.args[2].trim();

// Optional argument
const isInteractive = Deno.args.length >= 4 && Deno.args[3].trim().toLowerCase() === "true";

console.log(`Generate Output Dir Path: ${generateOutputDirPath}`);

/*NOTE:
	This script is executed by the 'api-release.yml' workflow.  The workflow
	will always execute this script as being non-interactive, and will also
	always pass in a tag/version value.
*/

// Set to a default value of 'api version' for non-interactive mode
let generateSrcType = "api version";

if (isInteractive) {
	// Ask for an API version or branch name
	generateSrcType = await Select.prompt({
		message: "Enter the type of source you want to generate from.",
		options: ["branch", "api version"],
	});

	const message = generateSrcType === "api version" ? "Enter the release version" : "Enter the branch name";

	const minLength = generateSrcType === "api version" ? 5 : 0;

	tagOrBranch = await Input.prompt({
		message: message,
		minLength: minLength,
		transform: (v) => {
			if (generateSrcType === "api version") {
				return v.startsWith("v") ? v : `v${v}`;
			}

			return v;
		},
	});
} else {
	console.log(`Version To Generate: ${tagOrBranch}`);
	tagOrBranch = tagOrBranch.startsWith("v") ? tagOrBranch : `v${tagOrBranch}`;
}

const docProcessor = new DocProcessor(token);

if (generateSrcType === "branch") {
	await docProcessor.generateFromBranch(generateOutputDirPath, tagOrBranch);
} else {
	await docProcessor.generateFromTag(generateOutputDirPath, tagOrBranch);
}
