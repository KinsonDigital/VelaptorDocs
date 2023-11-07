import { Input, Select } from "../deps.ts";
import { DocProcessor } from "../core/DocProcessor.ts";

if (Deno.args.length < 2) {
	const errorMsg = `The required number of arguments is 2 but only '${Deno.args.length}' were given.`;
	console.error(`::error::${errorMsg}`);
}

const generateOutputDirPath: string = Deno.args[0];
let tagOrBranch = Deno.args[1].trim().toLowerCase();

const isInteractive = Deno.args.length >= 3 &&
	Deno.args.length === 3 &&
	Deno.args[2].trim().toLowerCase() === "true";

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

	const message = generateSrcType === "api version"
		? "Enter the release version"
		: "Enter the branch name";
	
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

const docProcessor = new DocProcessor();

if (generateSrcType === "branch") {
	await docProcessor.generateFromBranch(generateOutputDirPath, tagOrBranch);
} else {
	await docProcessor.generateFromTag(generateOutputDirPath, tagOrBranch);
}
