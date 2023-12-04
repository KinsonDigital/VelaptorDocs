import { Utils } from "../core/Utils.ts";
import { Select, TagClient, existsSync, walkSync } from "../deps.ts";

// If no args were passed
if (Deno.args.length < 3) {
	const errorMsg = "Please provide 3 arguments to update the tutorial projects." +
		"\n1. The root directory path to start searching for tutorial projects." +
		"\n2. The version number to update the Velaptor NuGet packages to." +
		"\n3. The GitHub token.";

	Utils.printGitHubError(errorMsg);
	Deno.exit(100);
}

const rootDirPath = Deno.args[0].trim().replaceAll("\\", "/");

// If the directory does not exist, throw and error

if (existsSync(rootDirPath, { isReadable: true })) {
	console.log(`::error::The given directory path '${rootDirPath}' does not exist.`);
	Deno.exit(200);
}

const tagRegex = /^v[0-9]+\.[0-9]+\.[0-9]+-preview\.[0-9]+$/;

const possibleVersion = Deno.args[1].trim().toLowerCase();
const isInteractive = possibleVersion === "interactive";

let newVersion = "";

if (isInteractive) {
	const token = Deno.args[2].trim();
	const tagClient = new TagClient("KinsonDigital", "Velaptor", token);

	const tags = (await tagClient.getAllTags()).map(tag => tag.name);

	newVersion = await Select.prompt({
		message: "Select a Velaptor version",
		options: tags,
		validate: (value: string) => tagRegex.test(value),
	});

	console.log(`The tag selected was: ${newVersion}`);
} else {
	newVersion = possibleVersion;
}

newVersion = newVersion.startsWith("v") ? newVersion : `v${newVersion}`;

const tutCompRegex =
	/<TutorialLink\s+projectName\s*=\s*\".+\"\s+version\s*=\s*\"v[0-9]+\.[0-9]+\.[0-9]+-preview\.[0-9]+\"\s*\/>/;

// Get all the mdx files
const projFileEntries = walkSync(rootDirPath, {
	includeDirs: false,
	includeFiles: true,
	exts: [".mdx"],
});

const mdxFiles = [...projFileEntries].map((entry) => entry.path);

// Replace the tutorial link component with the new one
mdxFiles.forEach(file => {
	const fileData = Deno.readTextFileSync(file);

	const tutCompRefs = tutCompRegex.exec(fileData)?.map(match => match.toString()) ?? [];

	if (tutCompRefs.length === 0) {
		Utils.printGitHubNotice(`The file '${file}' does not contain any tutorial components.`);
		return;
	}

	const tutCompRef = tutCompRefs.length >= 0 ? tutCompRefs[0] : "";
	const containsTutCompRef = !Utils.isNothing(tutCompRef);
	
	// If the file contains the nuget package
	if (containsTutCompRef) {
		const projName = tutCompRef.split("projectName=")[1].split(" ")[0].replaceAll("\"", "");
		const newTutComp = `<TutorialLink projectName="${projName}" version="${newVersion}"/>`;

		const versionRegex = /v[0-9]+\.[0-9]+\.[0-9]+-preview\.[0-9]+/;
		const oldVersion = versionRegex.exec(tutCompRef)?.map(match => match.toString())[0] ?? "";

		const newFileData = fileData.replace(tutCompRegex, newTutComp);

		Deno.writeTextFileSync(file, newFileData);

		const updateFileMsg = `The tutorial component was updated from version` +
		`'${oldVersion}' to version '${newVersion}' in the mdx file '${file}`;

		Utils.printGitHubNotice(updateFileMsg);
	}
});
