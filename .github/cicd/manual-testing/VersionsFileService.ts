import { extname } from "https://deno.land/std@0.182.0/path/mod.ts";
import { Guard } from "./Gaurd.ts";

export class VersionsFileService {
	private readonly newLine: string;
	private readonly filePath: string;

	constructor() {
		this.newLine = Deno.build.os === "windows" ? "\r\n" : "\n";
		this.filePath = `${Deno.cwd()}/versions.json`;
	}

	public enableTestVersion(): void {
		if (this.filePath === undefined || this.filePath === "") {
			throw new Error("The 'this.filePath' parameter must not be null or empty.");
		}

		if (extname(this.filePath) != ".json") {
			throw new Error(`The versions file '${this.filePath}' must be a '.json' file.`);
		}

		const testingVersion = "1.0.0-testing";
		const versions: string[] = this.getVersions();

		// If the version list does not contain the testing version,
		// add it and save back to the file
		if (versions.indexOf(testingVersion) === -1) {
			versions.push(testingVersion);

			const fileDataToWrite = `${JSON.stringify(versions, null, 2)}${this.newLine}`;

			Deno.writeTextFileSync(this.filePath, fileDataToWrite);

			console.log(`\tTesting version added to '${this.filePath}'`);
		}
	}

	public disableTestVersion(): void {
		if (this.filePath === undefined || this.filePath === "") {
			throw new Error("The 'this.filePath' parameter must not be null or empty.");
		}

		if (extname(this.filePath) != ".json") {
			throw new Error(`The versions file '${this.filePath}' must be a '.json' file.`);
		}

		const testingVersion = "1.0.0-testing";
		let versions: string[] = this.getVersions();

		// If the version list contains the testing version,
		// remove it and save back to the file
		if (versions.indexOf(testingVersion) != -1) {
			versions = versions.filter((version: string) => {
				return version != testingVersion;
			});

			const fileDataToWrite = `${JSON.stringify(versions, null, 2)}${this.newLine}`;

			Deno.writeTextFileSync(this.filePath, fileDataToWrite);
			console.log(`\tTesting version removed from '${this.filePath}'`);
		}
	}

	public toggle(): void {
		if (this.filePath === undefined || this.filePath === "") {
			throw new Error("The 'this.filePath' parameter must not be null or empty.");
		}

		if (extname(this.filePath) != ".json") {
			throw new Error(`The versions file '${this.filePath}' must be a '.json' file.`);
		}

		const testingVersion = "1.0.0-testing";
		let fileContents: string = Deno.readTextFileSync(this.filePath);
		let versions: string[] = this.getVersions();

		// If the version list contains the testing version,
		// remove it and save back to the file
		if (versions.indexOf(testingVersion) != -1) {
			versions = versions.filter((version: string) => {
				return version != testingVersion;
			});

			fileContents = `${JSON.stringify(versions, null, 2)}${this.newLine}`;

			console.log(`\tTesting version removed from '${this.filePath}'`);
		} else {
			versions.push(testingVersion);

			fileContents = `${JSON.stringify(versions, null, 2)}${this.newLine}`;
		}

		Deno.writeTextFileSync(this.filePath, fileContents);
	}

	/**
	 * Returns a list of all the versions from the versions file.
	 * @returns {string[]} The versions from the versions file.
	 */
	private getVersions(): string[] {
		const fileContents: string = Deno.readTextFileSync(this.filePath);
		const versions: string[] = JSON.parse(fileContents);

		return versions;
	}
}
