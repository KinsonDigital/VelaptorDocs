import { Utils } from "./Utils.ts";
import { extname, dirname } from "https://deno.land/std@0.178.0/path/mod.ts";

export class Path {
    public static getFileName(filePath: string): string {
        if (Utils.isUndefinedOrEmpty(filePath)) {
            return "";
        }

        const hasPathSeparator = this.containsPathSeparator(filePath);

        if (hasPathSeparator)
        {
            filePath = hasPathSeparator
                ? filePath = filePath.replace("\\", "/")
                : filePath;
    
            if (filePath.endsWith("/")) {
                return "";
            }

            const pathSections = filePath.split("/");

            return pathSections[pathSections.length - 1];
        } else {
            return filePath;
        }
    }

    public static getFileNameWithoutExtension(filePath: string): string {
        let fileName: string = this.getFileName(filePath);

        if (fileName.indexOf(".") === -1) {
            return fileName;
        } else {
            const lastPeriodIndex: number = fileName.lastIndexOf(".");
            fileName = fileName.replaceAll(".", "*");

            let newFileName = "";
            for (let i = 0; i < fileName.length; i++) {
                newFileName += i === lastPeriodIndex
                    ? "."
                    : fileName[i];
            }

            let sections: string[] = newFileName.split(".");
            sections.pop(); // Remove the extension

            // Remove empty entires
            sections = sections.filter((value: string) => value !== "");
            
            newFileName = sections[0];
            newFileName = newFileName.replaceAll("*", ".");
            
            return newFileName;
        }
    }

    public static getDirectory(filePath: string): string {
        if (Utils.isUndefinedOrEmpty(filePath)) {
            return "";
        }

        if (this.isFilePath(filePath)) {
            const fileName: string = this.getFileName(filePath);

            return this.normalizeSeparators(filePath.replace(fileName, ""));
        }

        return this.normalizeSeparators(filePath);
    }

    public static isFilePath(path: string): boolean {
        if (Utils.isUndefinedOrEmpty(path)) {
            return false;
        }

        return this.containsPathSeparator(path) && this.hasExtension(path);
    }

    public static hasExtension(path: string, extension = ""): boolean {
        extension = extension === undefined
            ? ""
            : extension;

        extension = extension.startsWith("*")
            ? extension.slice(1, extension.length - 2)
            : extension;

        const pathExtension: string = extname(path);

        if (extension === "") {
            return pathExtension != "";
        } else {
            return pathExtension === extension;
        }
    }

    public static getExtension(filePath: string): string {
        if (Utils.isUndefinedOrEmpty(filePath)) {
            return "";
        }

        if (filePath.indexOf(".") === -1) {
            return "";
        }

        return `.${filePath.split(".").pop()}`;
    }

    public static containsPathSeparator(value: string): boolean {
        if (Utils.isUndefinedOrEmpty(value)) {
            return false;
        }
        const containsBackslashes: boolean = value.indexOf("\\") != -1;
        const containsForwardSlashes: boolean = value.indexOf("/") != -1;

        return containsBackslashes || containsForwardSlashes;
    }

    public static isDirPath(dirPath: string): boolean {
        if (Utils.isUndefinedOrEmpty(dirPath)) {
            return false;
        }

        dirPath = Path.normalizeSeparators(dirPath);

        const containsPathSeparator: boolean = this.containsPathSeparator(dirPath);
        const doesNotContainExtension = !this.hasExtension(dirPath);

        return containsPathSeparator && doesNotContainExtension;
    }

    public static isNotDirPath(dirPath: string): boolean {
        return !this.isDirPath(dirPath);
    }

    public static normalizeSeparators(path: string): string {
        if (Utils.isUndefinedOrEmpty(path)) {
            return "";
        }

        path = path.replaceAll("\\", "/");


        if (this.isFilePath(path)) {
            return path;
        }
        
        return path.endsWith("/")
            ? path
            : `${path}/`;
    }

    public static getLastDirName(dirPath: string): string {
        if (Utils.isUndefinedOrEmpty(dirPath)) {
            return "";
        }

        const sectionToRemove = dirname(dirPath);

        const lastDir = dirPath.replace(`${sectionToRemove}/`, "");

        return lastDir.endsWith("/")
            ? lastDir.slice(0, lastDir.length - 1)
            : lastDir;
    }

    public static getLastDirNames(dirPaths: string[]): string[] {
        if (Utils.isUndefinedOrEmpty(dirPaths)) {
            return [];
        }

        const result: string[] = [];

        for (const path of dirPaths) {
            result.push(this.getLastDirName(path));
        }

        return result;
    }

    public static removeLastDir(path: string): string {
        if (Utils.isUndefinedOrEmpty(path)) {
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
