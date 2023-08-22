import { extname } from "std/path/mod.ts";
import { Guard } from "./Guard.ts";
import { Utils } from "./Utils.ts";

/**
 * Manages the versions file.
 */
export class VersionsFileService {
	private readonly newLine: string;
	private readonly filePath: string;

	constructor() {
		this.newLine = Deno.build.os === "windows" ? "\r\n" : "\n";
		this.filePath = `${Deno.cwd()}/versions.json`;
	}

	/**
	 * Deletes the given version from the versions file.
	 * @param {string} version The version to delete from the versions file.
	 */
	public deleteVersion(version: string): void {
		Guard.isNotUndefinedOrEmpty(version, "version");

		// If the version begins with a 'v', remove it
		version = version.startsWith("v") ? version.replace("v", "") : version;

		const versions: string[] = this.getVersions()
			.filter((v: string) => v != version);

		// If there is nothing to delete
		if (versions.length === 0) {
			return;
		}

		this.saveVersions(versions);
		console.log(`\tDeleted version '${version}' from '${this.filePath}'`);
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

			this.saveVersions(versions);
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

			this.saveVersions(versions);
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
		let versions: string[] = this.getVersions();

		// If the version list contains the testing version,
		// remove it and save back to the file
		if (versions.indexOf(testingVersion) != -1) {
			versions = versions.filter((version: string) => {
				return version != testingVersion;
			});

			this.saveVersions(versions);
			console.log(`\tTesting version removed from '${this.filePath}'`);
		} else {
			versions.push(testingVersion);

			this.saveVersions(versions);
			console.log(`\tTesting version added to '${this.filePath}'`);
		}
	}

	/**
	 * Returns a list of all the versions from the versions file.
	 * @returns {string[]} The versions from the versions file.
	 */
	public getVersions(): string[] {
		const fileContents: string = Deno.readTextFileSync(this.filePath);
		const versions: string[] = JSON.parse(fileContents);

		return versions;
	}

	/**
	 * Saves the given versions to the versions file.
	 * @param {string[]} versions The versions to save to the versions file.
	 */
	private saveVersions(versions: string[]): void {
		versions = Utils.sortVersions(versions);

		const fileDataToWrite = `${JSON.stringify(versions, null, 2)}${this.newLine}`;

		Deno.writeTextFileSync(this.filePath, fileDataToWrite);
	}
}
