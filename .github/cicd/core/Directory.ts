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
	 * Gets a list of files in the given {@link dirPath}.  This will search recursively
	 * if {@link recursive} is true.
	 * @param dirPath The path of the directory start searching.
	 * @param extension The file extension to search for.
	 * @param recursive True to search recursively, otherwise false.
	 * @returns {string[]} A list of files in the given {@link dirPath}.
	 */
	public static getFiles(dirPath: string, extension:string, recursive = false): string[] {
		let files: string[] = [];

		extension = Utils.isNothing(extension) ? "*.*" : extension;
		extension = extension.startsWith(".") ? extension : `.${extension}`;

		if (dirPath === undefined || dirPath === null || dirPath === "") {
			const errorMsg = "The dirPath parameter cannot be null or empty.";
			console.log(errorMsg);
			Deno.exit(1);
		}

		dirPath = dirPath === "." || dirPath === "/" ? "." : dirPath;

		for (const dirEntry of Deno.readDirSync(dirPath)) {
			const entry = dirPath + "/" + dirEntry.name;

			if (recursive && dirEntry.isDirectory) {
				files = [...files, ...(Directory.getFiles(entry, extension, recursive))];
			} else if (dirEntry.isFile) {
				if (extension === "*.*") {
					files.push(entry);
				} else {
					if (entry.endsWith(extension)) {
						files.push(entry);
					}
				}
			}
		}

		return files;
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
		if (Utils.isNothing(dirPath)) {
			return;
		}

		if (this.exists(dirPath)) {
			Deno.removeSync(dirPath, { recursive: true });
		}
	}
}
