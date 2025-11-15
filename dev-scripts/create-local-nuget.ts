import { existsSync, walkSync } from "@std/fs";
import { resolve } from "@std/path";
import { Select } from "@cliffy/prompt";
import { GitClient, TagClient } from "@kd-clients/github";
import { cloneRepo } from "./core/git.ts";
import { createNugetPkg } from "./core/dotnet.ts";

const ownerName = "KinsonDigital";
const repoName = "Velaptor";
const relativeProjectPath = `${repoName}/${repoName}.csproj`;
const nugetOutputDir = "K:/LocalNugetSource";
type TagOrBranch = "tag" | "branch";

const githubToken: string | undefined = Deno.env.get("CICD_TOKEN");


const chosenRefType = <TagOrBranch>(await Select.prompt({
	message: "Do you want to create the NuGet package from a tag or branch?",
	options: ["tag", "branch"],
}));

const tagsOrBranches: string[] = [];

switch (chosenRefType) {
	case "tag": {
		const tagClient = new TagClient(ownerName, repoName, githubToken);

		tagsOrBranches.push(...(await tagClient.getAllTags()).map((tag) => tag.name));
		break;
	}
	case "branch": {
		const client = new GitClient(ownerName, repoName, githubToken);

		tagsOrBranches.push(...(await client.getAllBranches()).map((branch) => branch.name));
		break;
	}
}

const chosenTagOrBranchName = await Select.prompt({
	message: `Select a ${chosenRefType}.`,
	options: tagsOrBranches,
});

const printStatusMsg = (msg: string): void => {
	console.log(`%c⌛ ${msg}`, "color:gray");
};

const printCompleteMsg = (msg: string): void => {
	console.log(`%c✅ ${msg}`, "color:gray");
	console.log();
};

const destDirPath = resolve(Deno.cwd(), "RepoSrc");

if (existsSync(destDirPath)) {
	printStatusMsg(`The clone directory path '${destDirPath}' already exists. Deleting...`);
	Deno.removeSync(destDirPath, { recursive: true });
	printCompleteMsg(`The clone directory path '${destDirPath}' was deleted successfully.`);
}

// Pull down Velaptor source code
printStatusMsg(`Cloning the ${chosenRefType} '${chosenTagOrBranchName}' of the 'Velaptor' repository...`);
await cloneRepo(chosenTagOrBranchName, destDirPath, true);
printCompleteMsg(`The Velaptor repository was cloned successfully to '${destDirPath}'.`);

// Create nuget package in local directory
const projFilePath = resolve(destDirPath, relativeProjectPath);

const nugetPkgFiles = ([...walkSync(nugetOutputDir, { exts: [".nupkg"] })]).map(f => f.path);

if (nugetPkgFiles.length > 0) {
	printStatusMsg("Deleting all local nuget packages...");
	nugetPkgFiles.forEach(f => Deno.removeSync(f));
	printCompleteMsg("All local nuget packages were deleted successfully.");
}

printStatusMsg(`Creating NuGet package from project file '${projFilePath}'...`);
await createNugetPkg(projFilePath, nugetOutputDir, true);
printCompleteMsg(`The NuGet package was created successfully in the local NuGet source directory '${nugetOutputDir}'.`);
