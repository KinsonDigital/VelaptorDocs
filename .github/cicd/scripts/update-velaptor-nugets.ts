import { Utils } from "../core/Utils.ts";
import { existsSync, Select, TagClient, walkSync } from "../deps.ts";

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
if (!existsSync(rootDirPath, { isDirectory: true, isReadable: true })) {
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

	const tags = (await tagClient.getAllTags()).map((tag) => tag.name);

	newVersion = await Select.prompt({
		message: "Select a Velaptor version",
		options: tags,
		validate: (value: string) => tagRegex.test(value),
	});

	console.log(`The tag selected was: ${newVersion}`);
} else {
	newVersion = possibleVersion;
}

newVersion = newVersion.startsWith("v") ? newVersion.substring(1) : newVersion;

const newNugetPackage = `<PackageReference Include="KinsonDigital.Velaptor" Version="${newVersion}" />`;

const velaptorNuGetRegex =
	/<PackageReference\s+Include\s*=\s*\"KinsonDigital.Velaptor\"\s+Version\s*=\s*\"[0-9]+\.[0-9]+\.[0-9]+-preview\.[0-9]+\"\s*\/>/;

// Get all the csproj files
const projEntries = walkSync(rootDirPath, {
	includeDirs: false,
	includeFiles: true,
	exts: [".csproj"],
});

const csprojFiles = [...projEntries].map((entry) => entry.path);

// Replace the nuget package reference with the new version
csprojFiles.forEach((file) => {
	const fileData = Deno.readTextFileSync(file);

	const nugetRefs = velaptorNuGetRegex.exec(fileData)?.map((match) => match.toString()) ?? [];

	const velaptorNuGetRef = nugetRefs.length >= 0 ? nugetRefs[0] : "";
	const containsVelaptorNuGetRef = !Utils.isNothing(velaptorNuGetRef);

	// If the file contains the nuget package
	if (containsVelaptorNuGetRef) {
		const versionRegex = /[0-9]+\.[0-9]+\.[0-9]+-preview\.[0-9]+/;
		const oldVersion = versionRegex.exec(velaptorNuGetRef)?.map((match) => match.toString())[0] ?? "";

		const newFileData = fileData.replace(velaptorNuGetRegex, newNugetPackage);

		Deno.writeTextFileSync(file, newFileData);

		const updateFileMsg = `The NuGet package 'KinsonDigital.Velaptor' was updated from version` +
			`'${oldVersion}' to version '${newVersion}' in the csproj file '${file}`;
		Utils.printGitHubNotice(updateFileMsg);
	}
});
