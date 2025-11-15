import { existsSync } from "@std/fs";

const envVarValue: string | undefined = Deno.env.get("GITHUB_OUTPUT");

const newLine: string = Deno.build.os === "windows" ? "\r\n" : "\n";
const versionRegEx: RegExp = /\(v\d{4}\.\d{2}\.\d{2}\.\d{6}\)/;

const outputFilePath = envVarValue === undefined ? "" : envVarValue.trim();

const baseDirPath = Deno.cwd();
const path = `${baseDirPath}/docusaurus.config.ts`;
let fileContent: string = Deno.readTextFileSync(path);
const fileLines: string[] = toLines(fileContent);
let version = "";

for (let i = 0; i < fileLines.length; i++) {
	const line = fileLines[i];

	// If the copyright line has been found
	if (line.indexOf("copyright: ") != -1) {
		const oldVersion: string = getCurrentVersion(line);
		const newVersion: string = createNewVersion();

		fileLines[i] = line.replace(oldVersion, newVersion);

		version = `${newVersion.replace("(", "").replace(")", "")}`;
		break;
	}
}

fileContent = fileLines.join(newLine);
Deno.writeTextFileSync(path, fileContent);

// Append the version to the output file for the rest of the workflow to use
saveToOutputFile("version", version);

// This will log the version to the console which is captured by the workflows
console.log(version);

/**
 * Splits the given value into lines.
 * @param value The value to split into lines.
 * @returns The lines.
 */
function toLines(value: string): string[] {
	if (value === undefined || value === "") {
		return [];
	}

	return value.split(newLine).filter((item) => item != "");
}

/**
 * Gets the current version in the given copyright text line.
 * @param copyrightLine The copyright line to get the current version from.
 * @returns The current version.
 */
function getCurrentVersion(copyrightLine: string): string {
	const matches = copyrightLine.match(versionRegEx);

	if (matches === null || matches.length <= 0) {
		throw new Error("Could not find the current version for updating.");
	}

	return matches[0];
}

/**
 * Creates a new version string in the format of (vYYYY.MM.DD.HHMMSS).
 * @returns A new version.
 */
function createNewVersion(): string {
	const currentDate: Date = new Date();
	const year = currentDate.getFullYear().toString();
	let month = (currentDate.getMonth() + 1).toString();
	let day = currentDate.getDate().toString();
	let hour = currentDate.getHours().toString();
	let minute = currentDate.getMinutes().toString();
	let second = currentDate.getSeconds().toString();

	// Make sure that the different numbers are 2 digits
	month = month.length === 1 ? `0${month}` : month;
	day = day.length === 1 ? `0${day}` : day;
	hour = hour.length === 1 ? `0${hour}` : hour;
	minute = minute.length === 1 ? `0${minute}` : minute;
	second = second.length === 1 ? `0${second}` : second;

	const version = `${year}.${month}.${day}.${hour}${minute}${second}`;

	return `(v${version})`;
}

/**
 * Saves a workflow output to the output file.
 * @param name The name of the output.
 * @param value The value of the output.
 */
function saveToOutputFile(name: string, value: string): void {
	const output = `${name}=${value}`;

	if (!existsSync(outputFilePath, { isFile: true })) {
		throw new Error(
			`The GitHub outputs file '${outputFilePath}' does not exist.`,
		);
	}

	const envOutputFileData: string = Deno.readTextFileSync(outputFilePath);
	const fileLines: string[] = toLines(envOutputFileData);
	fileLines.push(output);

	const newFileData: string = fileLines.join(newLine);

	Deno.writeTextFileSync(outputFilePath, newFileData, { append: false });
}
