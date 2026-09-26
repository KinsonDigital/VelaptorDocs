import { Select } from "@cliffy/prompt";
import { TagClient, GitClient } from "@kd-clients/github";
import { DocProcessor } from "../core/DocProcessor.ts";
import { Utils } from "../core/Utils.ts";

console.clear();

type GenerateSrcType = "api version" | "branch";

const generateOutputDirPath: string = (Deno.env.get("OUTPUT_DIR_PATH") ??
	`${Deno.cwd()}/docs/api`).trim();

let tagOrBranch = (Deno.env.get("TAG_OR_BRANCH") ?? "no-value").trim().toLowerCase();

const token = (Deno.env.get("GITHUB_TOKEN") ?? Deno.env.get("CICD_TOKEN")).trim();

if (token === "") {
	Utils.printGitHubError("The environment variable 'GITHUB_TOKEN' does not exist.");
	Deno.exit(1);
}

// Optional env variable
const isInteractive = (Deno.env.get("IS_INTERACTIVE") ?? "true").trim().toLowerCase() === "true";

Utils.printGitHubNotice(`Generate Output Dir Path: ${generateOutputDirPath}`);

/*NOTE:
	This script is executed by the 'api-release.yml' workflow.  The workflow
	will always execute this script as being non-interactive, and will also
	always pass in a tag/version value.
*/

// Set to a default value of 'api version' for non-interactive mode
let generateSrcType: GenerateSrcType = "api version";
const branchType: GenerateSrcType = "branch";
const apiVersionType: GenerateSrcType = "api version";

if (isInteractive) {
	// Ask for an API version or branch name
	generateSrcType = <GenerateSrcType> (await Select.prompt({
		message: "Enter the type of source you want to generate from.",
		options: [branchType, apiVersionType],
	}));

	if (generateSrcType === "branch") {
		const gitClient = new GitClient("KinsonDigital", "Velaptor", token);
		const allBranches = (await gitClient.getAllBranches()).map(b => b.name);
		
		tagOrBranch = await Select.prompt({
			message: "Choose a branch.",
			options: allBranches,
			search: true
		});
	} else if (generateSrcType === "api version") {
		const token = Deno.env.get("CICD_TOKEN");

		if (Utils.isNothing(token)) {
			const errorMsg = "The environment variable 'CICD_TOKEN' does not exist, is empty, or null.";
			Utils.printGitHubError(errorMsg);
			Deno.exit(1);
		}

		const tagClient = new TagClient("KinsonDigital", "Velaptor", token);

		const tags = (await tagClient.getAllTags()).map((tag) => tag.name)
			.filter((tag) => Utils.isPrevVersion(tag) || Utils.isProdVersion(tag));

		tagOrBranch = await Select.prompt({
			message: "Select a release version",
			options: tags,
		});
	} else {
		console.error("Unknown source type selected.");
		Deno.exit();
	}
} else {
	Utils.printGitHubNotice(`Version To Generate: ${tagOrBranch}`);
	tagOrBranch = tagOrBranch.startsWith("v") ? tagOrBranch : `v${tagOrBranch}`;
}

const docProcessor = new DocProcessor(token);

if (generateSrcType === "branch") {
	await docProcessor.generateFromBranch(generateOutputDirPath, tagOrBranch);
} else {
	await docProcessor.generateFromTag(generateOutputDirPath, tagOrBranch);
}
