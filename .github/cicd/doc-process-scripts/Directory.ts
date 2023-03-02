import { Guard } from "./Gaurd.ts";
import { Path } from "./Path.ts";
import { Utils } from "./Utils.ts";

export class Directory {
    public static exists(dirPath: string): boolean {
        try {
            return Deno.statSync(dirPath).isDirectory;
        } catch (error) {
            if (error instanceof(Deno.errors.NotFound)) {
                return false;
            } else {
                throw error;
            }
        }
    }

    public static doesNotExist(dirPath: string): boolean {
        return !this.exists(dirPath);
    }

    public static getFiles(dirPath: string, extension = "*.*"): string[] {
        Guard.isNotUndefinedOrEmpty(dirPath);

        if (Path.isNotDirPath(dirPath)) {
            throw new Error(`The path '${dirPath}' is not a directory path.`);
        }

        if (this.doesNotExist(dirPath)) {
            throw new Error(`The path '${dirPath}' does not exist.`);
        }

        // Default value if undefined or empty
        extension = Utils.isUndefinedOrEmpty(extension)
            ? "*.*"
            : extension;

        extension = extension !== "*.*" && extension.startsWith("*")
            ? extension.replace("*", "")
            : extension;

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

    public static rename(oldDirPath: string, newDirPath: string): void {
        Guard.isNotUndefinedOrEmpty(oldDirPath, "oldDirPath");
        Guard.isNotUndefinedOrEmpty(newDirPath, "newDirPath");
        
        const oldDirDoesNotExist: boolean = Directory.doesNotExist(oldDirPath);

        if (oldDirDoesNotExist && Directory.exists(newDirPath)) {
            return;
        }

        const oldDirLocation: string = Path.removeLastDir(oldDirPath);
        const newDirLocation: string = Path.removeLastDir(newDirPath);

        if (oldDirLocation !== newDirLocation) {
            throw new Error(`The 'oldDirPath' and 'newDirPath' must be in the same directory.`);
        }

        Deno.renameSync(oldDirPath, newDirPath);
    }

    public static delete(dirPath: string): void {
        if (Utils.isUndefinedOrEmpty(dirPath)) {
            return;
        }

        if (this.exists(dirPath)) {
            Deno.removeSync(dirPath);
        }
    }
}
