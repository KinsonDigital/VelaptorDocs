import { Guard } from "./Guard.ts";
import { Path } from "./Path.ts";
import { Utils } from "./Utils.ts";

/**
 * Provides file related operations.
 */
export class File {
	public static exists(filePath: string): boolean {
		try {
			return Deno.statSync(filePath).isFile;
		} catch (error) {
			if (error instanceof (Deno.errors.NotFound)) {
				return false;
			} else {
				throw error;
			}
		}
	}

	public static doesNotExist(filePath: string): boolean {
		return !this.exists(filePath);
	}

	public static readTextFileSync(filePath: string): string {
		Guard.isNotUndefinedOrEmpty(filePath, "filePath");

		if (this.doesNotExist(filePath)) {
			throw new Error(`The file '${filePath}' does not exist.`);
		}

		return Deno.readTextFileSync(filePath);
	}

	public static writeTextFileSync(filePath: string, fileContent: string): void {
		Guard.isNotUndefinedOrEmpty(filePath, "filePath");

		if (Utils.isNullOrEmpty(fileContent)) {
			return;
		}

		if (Utils.isNullOrEmpty(filePath)) {
			throw new Error(`The parameter '${filePath}' must not be null or empty.`);
		}

		Deno.writeTextFileSync(filePath, fileContent, {
			create: true,
		});
	}

	public static renameFileSync(oldFilePath: string, newFilePath: string): void {
		Guard.isNotUndefinedOrEmpty(oldFilePath, "oldFilePath");
		Guard.isNotUndefinedOrEmpty(newFilePath, "newFilePath");

		if (!Path.isFilePath(oldFilePath)) {
			throw new Error(
				`The 'oldFilePath' parameter value of '${oldFilePath}' must be a file path, not a directory path.`,
			);
		}

		if (!Path.isFilePath(newFilePath)) {
			throw new Error(
				`The 'newFilePath' parameter value of '${newFilePath}' must be a file path, not a directory path.`,
			);
		}

		const oldFileDoesNotExist: boolean = File.doesNotExist(oldFilePath);

		if (oldFileDoesNotExist && File.exists(newFilePath)) {
			return;
		}

		const oldDirPath: string = Path.getDirectory(oldFilePath);
		const newDirPath: string = Path.getDirectory(newFilePath);

		if (oldDirPath != newDirPath) {
			throw new Error(`The 'oldFilePath' and 'newFilePath' must be in the same directory.`);
		}

		if (Path.isFilePath(oldFilePath)) {
			Deno.renameSync(oldFilePath, newFilePath);
		}
	}

	/**
	 * Deletes the specified file.
	 * @param {string} filePath The file to delete.
	 */
	public static deleteFile(filePath: string): void {
		if (Utils.isNullOrEmpty(filePath)) {
			throw new Error(`The 'filePath' parameter must not be null or empty.`);
		}

		if (File.doesNotExist(filePath)) {
			throw new Error(`The file '${filePath}' does not exist.`);
		}

		if (!Path.isFilePath(filePath)) {
			throw new Error(`The path '${filePath}' is not a file path.`);
		}

		Deno.removeSync(filePath);
	}
}
