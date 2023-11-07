import { Utils } from "./Utils.ts";
import { dirname, extname } from "../deps.ts";

/**
 * Provides path related operations.
 */
export class Path {
	/**
	 * Gets the file name from the given file path.
	 * @param filePath The file path to get the file name from.
	 * @returns The file name.
	 */
	public static getFileName(filePath: string): string {
		if (Utils.isNothing(filePath)) {
			return "";
		}

		const hasPathSeparator = this.containsPathSeparator(filePath);

		if (hasPathSeparator) {
			filePath = hasPathSeparator ? filePath = filePath.replace("\\", "/") : filePath;

			if (filePath.endsWith("/")) {
				return "";
			}

			const pathSections = filePath.split("/");

			return pathSections[pathSections.length - 1];
		} else {
			return filePath;
		}
	}

	/**
	 * Gets the file name without the extension from the given file path.
	 * @param filePath The file path to get the file name from.
	 * @returns The file name without the extension.
	 */
	public static getFileNameWithoutExtension(filePath: string): string {
		let fileName: string = this.getFileName(filePath);

		if (fileName.indexOf(".") === -1) {
			return fileName;
		} else {
			const lastPeriodIndex: number = fileName.lastIndexOf(".");
			fileName = fileName.replaceAll(".", "*");

			let newFileName = "";
			for (let i = 0; i < fileName.length; i++) {
				newFileName += i === lastPeriodIndex ? "." : fileName[i];
			}

			let sections: string[] = newFileName.split(".");
			sections.pop(); // Remove the extension

			// Remove empty entires
			sections = sections.filter((value: string) => value != "");

			newFileName = sections[0];
			newFileName = newFileName.replaceAll("*", ".");

			return newFileName;
		}
	}

	/**
	 * Gets the directory path from the given file path.
	 * @param filePath The file path to get the directory from.
	 * @returns The directory path.
	 */
	public static getDirectory(filePath: string): string {
		if (Utils.isNothing(filePath)) {
			return "";
		}

		if (this.isFilePath(filePath)) {
			const fileName: string = this.getFileName(filePath);

			return this.normalizeSeparators(filePath.replace(fileName, ""));
		}

		return this.normalizeSeparators(filePath);
	}

	/**
	 * Returns a value indicating whether or not the given {@link path} is a file path.
	 * @param path The path to check.
	 * @returns True if the path is a file path, otherwise false.
	 */
	public static isFilePath(path: string): boolean {
		if (Utils.isNothing(path)) {
			return false;
		}

		return this.containsPathSeparator(path) && this.hasExtension(path);
	}

	/**
	 * Returns a value indicating whether or not the given {@link path} has the given {@link extension}.
	 * @param path The path to check.
	 * @param extension The extension to check for.
	 * @returns True if the path has the given extension, otherwise false.
	 * @remarks If no extension is provided, then this will return true if the path any extension.
	 */
	public static hasExtension(path: string, extension = ""): boolean {
		extension = extension === undefined ? "" : extension;

		extension = extension.startsWith("*") ? extension.slice(1, extension.length - 2) : extension;

		const pathExtension: string = extname(path);

		if (extension === "") {
			return pathExtension != "";
		} else {
			return pathExtension === extension;
		}
	}

	/**
	 * Gets the extension of the given file path.
	 * @param filePath The file path to get the extension from.
	 * @returns The extension of the file path.
	 */
	public static getExtension(filePath: string): string {
		if (Utils.isNothing(filePath)) {
			return "";
		}

		if (filePath.indexOf(".") === -1) {
			return "";
		}

		return `.${filePath.split(".").pop()}`;
	}

	/**
	 * Returns a value indicating whether or not the given {@link path} contains a path separator.
	 * @param path The path to check.
	 * @returns True if the path contains a path separator, otherwise false.
	 */
	public static containsPathSeparator(path: string): boolean {
		if (Utils.isNothing(path)) {
			return false;
		}

		path = this.normalizeSeparators(path);
		const containsForwardSlashes: boolean = path.indexOf("/") != -1;

		return containsForwardSlashes;
	}

	/**
	 * Returns a value indicating whether or not the given {@link dirPath} is a directory path.
	 * @param dirPath The directory path to check.
	 * @returns True if the directory path is a directory path, otherwise false.
	 */
	public static isDirPath(dirPath: string): boolean {
		if (Utils.isNothing(dirPath)) {
			return false;
		}

		dirPath = Path.normalizeSeparators(dirPath);

		const containsPathSeparator: boolean = this.containsPathSeparator(dirPath);
		const doesNotContainExtension = !this.hasExtension(dirPath);

		return containsPathSeparator && doesNotContainExtension;
	}

	/**
	 * Returns a value indicating whether or not the given {@link dirPath} is not a directory path.
	 * @param dirPath The directory path to check.
	 * @returns True if the directory path is not a directory path, otherwise false.
	 */
	public static isNotDirPath(dirPath: string): boolean {
		return !this.isDirPath(dirPath);
	}

	/**
	 * Normalizes the path separators to forward slashes.
	 * @param path The path to normalize.
	 * @returns The normalized path.
	 */
	public static normalizeSeparators(path: string): string {
		if (Utils.isNothing(path)) {
			return "";
		}

		path = path.replaceAll("\\", "/");

		return path.endsWith("/") ? path : `${path}/`;
	}

	/**
	 * Gets the the last directory name from the given directory path.
	 * @param dirPath The directory path to get the last directory name from.
	 * @returns The last directory name.
	 */
	public static getLastDirName(dirPath: string): string {
		if (Utils.isNothing(dirPath)) {
			return "";
		}

		const sectionToRemove = dirname(dirPath);

		const lastDir = dirPath.replace(`${sectionToRemove}/`, "");

		return lastDir.endsWith("/") ? lastDir.slice(0, lastDir.length - 1) : lastDir;
	}

	/**
	 * Returns a list of the last directory names from the directory paths.
	 * @param dirPaths The directory paths to pull the last directory name from.
	 * @returns The list of directory names from the directory paths.
	 */
	public static getLastDirNames(dirPaths: string[]): string[] {
		dirPaths = Utils.isNothing(dirPaths) ? [] : dirPaths;

		const result: string[] = [];

		dirPaths.forEach(path => {
			result.push(this.getLastDirName(path));
		});

		return result;
	}

	/**
	 * Removes the last directory from the given path.
	 * @param path The path to remove the last directory from.
	 * @returns The path with the last directory removed.
	 */
	public static removeLastDir(path: string): string {
		if (Utils.isNothing(path)) {
			return "";
		}

		if (!this.containsPathSeparator(path)) {
			return path;
		}

		const lastDirName: string = this.getLastDirName(path);
		const lastDirIndex: number = path.lastIndexOf(lastDirName);

		return path.slice(0, lastDirIndex);
	}
}
