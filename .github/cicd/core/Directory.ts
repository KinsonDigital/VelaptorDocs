import { Guard } from "./Guard.ts";
import { Path } from "./Path.ts";
import { Utils } from "./Utils.ts";

/**
 * Provides directory related operations.
 */
export class Directory {
	/**
	 * Returns a value indicating whether or not the given directory path exists.
	 * @param {string} dirPath The directory path to check.
	 * @returns {boolean} True if the directory exists, otherwise false.
	 */
	public static exists(dirPath: string): boolean {
		try {
			return Deno.statSync(dirPath).isDirectory;
		} catch (error) {
			if (error instanceof (Deno.errors.NotFound)) {
				return false;
			} else {
				throw error;
			}
		}
	}

	/**
	 * Returns a value indicating whether or not the given directory path does not exist.
	 * @param {string} dirPath The directory path to check.
	 * @returns  {boolean} True if the directory does not exist, otherwise false.
	 */
	public static doesNotExist(dirPath: string): boolean {
		return !this.exists(dirPath);
	}

	/**
	 * Returns a list of all of the files in the given directory.
	 * @param {string} dirPath The path to the directory to the files of.
	 * @param {string} extension The extension filter of all of the files to get. If undefined or empty, all files will be returned. If not undefined or empty, the extension must start with a period. If the extension does not start with a period, it will be added automatically.
	 * @returns {string[]} The files in the given directory,
	 */
	public static getFiles(dirPath: string, extension = "*.*"): string[] {
		Guard.isNotUndefinedOrEmpty(dirPath);

		if (Path.isNotDirPath(dirPath)) {
			throw new Error(`The path '${dirPath}' is not a directory path.`);
		}

		if (this.doesNotExist(dirPath)) {
			throw new Error(`The path '${dirPath}' does not exist.`);
		}

		// Default value if undefined or empty
		extension = Utils.isNullOrEmpty(extension) ? "*.*" : extension;

		extension = extension != "*.*" && extension.startsWith("*") ? extension.replace("*", "") : extension;

		dirPath = Path.normalizeSeparators(dirPath);

		const filePaths: string[] = [];

		for (const dirEntry of Deno.readDirSync(dirPath)) {
			if (dirEntry.isFile) {
				const fileExtension: string = Path.getExtension(dirEntry.name);

				if (extension === "*.*" || extension === fileExtension) {
					filePaths.push(`${dirPath}${dirEntry.name}`);
				}
			}
		}

		return filePaths;
	}

	/**
	 * Returns all of the sub-directories of the given directory.
	 * @param {string} dirPath The path to the directory to get the sub-directories of.
	 * @returns {string[]} All of the sub-directories of the given directory.
	 */
	public static getDirs(dirPath: string): string[] {
		Guard.isNotUndefinedOrEmpty(dirPath);

		if (Path.isNotDirPath(dirPath)) {
			throw new Error(`The path '${dirPath}' is not a directory path.`);
		}

		if (this.doesNotExist(dirPath)) {
			throw new Error(`The path '${dirPath}' does not exist.`);
		}

		dirPath = Path.normalizeSeparators(dirPath);

		const filePaths: string[] = [];

		for (const dirEntry of Deno.readDirSync(dirPath)) {
			if (dirEntry.isDirectory) {
				filePaths.push(`${dirPath}${dirEntry.name}`);
			}
		}

		return filePaths;
	}

	/**
	 * Renames a directory from the old directory path to the new directory path.
	 * @param {string} oldDirPath The old directory to rename.
	 * @param {string} newDirPath The new directory name.
	 */
	public static rename(oldDirPath: string, newDirPath: string): void {
		Guard.isNotUndefinedOrEmpty(oldDirPath, "oldDirPath");
		Guard.isNotUndefinedOrEmpty(newDirPath, "newDirPath");

		const oldDirDoesNotExist: boolean = Directory.doesNotExist(oldDirPath);

		if (oldDirDoesNotExist && Directory.exists(newDirPath)) {
			return;
		}

		const oldDirLocation: string = Path.removeLastDir(oldDirPath);
		const newDirLocation: string = Path.removeLastDir(newDirPath);

		if (oldDirLocation != newDirLocation) {
			throw new Error(`The 'oldDirPath' and 'newDirPath' must be in the same directory.`);
		}

		Deno.renameSync(oldDirPath, newDirPath);
	}

	/**
	 * Deletes a directory and all of its contents recursively.
	 * @param {string} dirPath The path to the directory to delete.
	 */
	public static delete(dirPath: string): void {
		if (Utils.isNullOrEmpty(dirPath)) {
			return;
		}

		if (this.exists(dirPath)) {
			Deno.removeSync(dirPath, { recursive: true });
		}
	}
}
