throw new Error("Next versioning has been disabled");

// // Check the arguments
// if (Deno.args.length < 2) {
// 	let errorMsg = "There must be 2 arguments";
// 	errorMsg += "Usage: deno run FlagService.ts <file-path> <flag-id> <[enable | disable]>";

// 	throw Error(errorMsg);
// }

// const filePath = Deno.args[0].trim();

// // Validate the file path argument
// if (!existsSync(filePath, { isFile: true })) {
// 	throw Error(`The file path '${filePath}' does not exist.`);
// }

// const setting: "enable" | "disable" = <"enable" | "disable">Deno.args[1];

// // Validate the enable disable argument
// if (setting != "enable" && setting != "disable") {
// 	throw Error(`The third argument must be either 'enable' or 'disable'.`);
// }

// // const baseDirPath = Deno.cwd();
// // const docuConfigFileName = "docusaurus.config.js";
// // const docuConfigFilePath = `${baseDirPath}/${docuConfigFileName}`;

// const fileDoesNotExist = !existsSync(filePath, { isFile: true });

// if (fileDoesNotExist) {
// 	const errorMsg = `The file '${filePath}' does not exist.`;
// 	console.error(errorMsg);
// 	Deno.exit(1);
// }

// const settingRegex = /includeCurrentVersion:\s(true|false).*/gm;

// let fileContent = Deno.readTextFileSync(filePath);

// if (!settingRegex.test(fileContent)) {
// 	const errorMsg = `The setting 'includeCurrentVersion' does not exist in the file '${filePath}'.` +
// 		"\nThe setting is enabled by default if it does not exist.";
// 	console.error(errorMsg);
// 	Deno.exit(1);
// }

// const replacement = setting === "enable" ? "includeCurrentVersion: true" : "includeCurrentVersion: false";
// fileContent = fileContent.replace(settingRegex, replacement);
// Deno.writeTextFileSync(filePath, fileContent);
