import { ArgService } from "./ArgService.ts";
import { Directory } from "./Directory.ts";
import { File } from "./File.ts";
import { MarkdownFileContentService } from "./MarkdownFileContentService.ts";
import { MarkdownService } from "./MarkdownService.ts";
import { Path } from "./Path.ts";
import { SummaryService } from "./SummaryService.ts";
import { Utils } from "./Utils.ts";

const argService: ArgService = new ArgService();
const [argsValid, errorMsg] = argService.argsAreValid(Deno.args);

if (!argsValid) {
    throw new Error(errorMsg);
}

const htmlArrow = "&#129106;";
const rootDirPath: string = Path.normalizeSeparators(Deno.args[0]);
const baseAPIDirPath = `${rootDirPath}API Reference`;
const version = Deno.args[1].replaceAll(".", "_"); // Set the version as directory friendly
const summaryFilePath = `${rootDirPath}SUMMARY.md`;

const summaryService: SummaryService = new SummaryService(baseAPIDirPath, summaryFilePath);
const fileContentService: MarkdownFileContentService = new MarkdownFileContentService();
const markDownService: MarkdownService = new MarkdownService();

// Get all directories that should be renamed
const versionDirPaths: string[] = Directory.getDirs(baseAPIDirPath);

const dirsToRename = versionDirPaths.filter((versionDirPath: string) => {
    const dirName: string = Path.getLastDirName(versionDirPath);

    return !dirName.startsWith(version) && dirName.endsWith("(latest)");
});

// Rename all of the directories that still have the '(latest)' string at the end
for (const dirPath of dirsToRename) {
    const dirName: string = Path.getLastDirName(dirPath);
    const newDirPath = `${Path.removeLastDir(dirPath)}${dirName.replace("(latest)", "")}`;

    Directory.rename(dirPath, newDirPath);
}

const docDirPath = `${baseAPIDirPath}/${version}(latest)`;

try {
    const filePaths: string[] = Directory.getFiles(docDirPath, ".md");
    
    // Go through each file and perform content processing
    filePaths.forEach((filePath: string) => {
        let fileContent: string = File.readTextFileSync(filePath);

        fileContent = fileContent.replaceAll(htmlArrow, "→");

        fileContent = fileContentService.prefixAllLinkUrls(fileContent, "./",
            (_: string, url: string) => {
                const hasNotBeenSet = !url.startsWith("./");
                const isNotWebUrl = !url.startsWith("http");

                return hasNotBeenSet && isNotWebUrl;
            });

        // Replace all links to the 'index.md' file with the 'namespaces.md' file
        fileContent = fileContentService.replaceAllLinkUrls(fileContent, "./namespaces.md 'Velaptor Namespaces'",
            (_: string, url: string) => {
                return url.startsWith("./index.md");
            });

        // Find the main velaptor header with the markdown link at the top of the file and add the version to it
        fileContent = fileContentService.updateHeader(
            fileContent,
            (header: string) => { // predicate
                return markDownService.containsMarkdownLink(header) && header.startsWith("#### [Velaptor](./");
            },
            (line: string) => { // update line
                return line.replace("[Velaptor]", `[Velaptor (${version.replaceAll("_", ".")})]`);
            }
        );

        File.writeTextFileSync(filePath, fileContent);
    });

    summaryService.buildSummaryFile();

    const oldNamespaceFilePath = `${docDirPath}/index.md`;
    const newNamespaceFilePath = `${docDirPath}/namespaces.md`;
    File.renameFileSync(oldNamespaceFilePath, newNamespaceFilePath);

    let namespaceContent:string = File.readTextFileSync(newNamespaceFilePath);
    namespaceContent = markDownService.renameHeader(namespaceContent, "Velaptor Assembly", "Velaptor API Namespaces");

    namespaceContent = namespaceContent.replaceAll("| :--- | :--- |", "| :--- |");
    namespaceContent = namespaceContent.replaceAll("| |", "|");

    File.writeTextFileSync(newNamespaceFilePath, namespaceContent);
} catch (error) {
    console.error(error);
    throw error;
}

// If there any extra directories to delete, delete them
if (versionDirPaths.length >= 6) {
    const versionDirs: string[] = versionDirPaths.filter((versionDirPath: string) => {
        const dirName: string = Path.getLastDirName(versionDirPath);

        return Utils.containsPrevVersion(dirName.replaceAll("_", "."));
    });
    let versions: string[] = Path.getLastDirNames(versionDirs);
    versions = versions.map((version: string) => version.replaceAll("_", "."));
    versions = versions.map((version: string) => version.replaceAll("(latest)", ""));
    versions = Utils.sortVersions(versions);
    versions = Utils.takeTop(versions, 5);

    const dirsToDelete: string[] = versionDirs.filter((dirPath: string) => {
        return !versions.some((version: string) => {
            version = version.replaceAll(".", "_");

            return dirPath.indexOf(version) != -1;
        });
    });

    for (const dirToDelete of dirsToDelete) {
        Directory.delete(dirToDelete);
    }
}