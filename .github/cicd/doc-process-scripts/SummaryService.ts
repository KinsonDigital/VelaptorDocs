import { Directory } from "./Directory.ts";
import { File } from "./File.ts";
import { FileLoader } from "./FileLoader.ts";
import { Guard } from "./Gaurd.ts";
import { MarkdownService } from "./MarkdownService.ts";
import { Path } from "./Path.ts";
import { Utils } from "./Utils.ts";

export class SummaryService {
    private readonly markDownService: MarkdownService;
    private readonly baseAPIDirPath: string;
    private readonly summaryFilePath: string;
    private readonly apiHeaderName: string;
    private readonly singleIndent: string;
    private readonly doubleIndent: string;
    private readonly fileLoader: FileLoader;
    private readonly markdownService: MarkdownService;

    constructor(baseAPIDirPath: string, summaryFilePath: string) {
        Guard.isNotUndefinedOrEmpty(baseAPIDirPath);
        Guard.isNotUndefinedOrEmpty(summaryFilePath);

        this.markDownService = new MarkdownService();
        this.baseAPIDirPath = Path.normalizeSeparators(baseAPIDirPath);
        this.summaryFilePath = summaryFilePath;
        this.apiHeaderName = "API Reference";
        this.singleIndent = "  ";
        this.doubleIndent = "    ";
        this.fileLoader = new FileLoader();
        this.markdownService = new MarkdownService();
    }

    public buildSummaryFile(): void {
        const contentLines: string[] = this.clearAPISection();

        const versionDirs: string[] = Directory.getDirs(this.baseAPIDirPath);
        let versions: string[] = versionDirs.map((path: string) => {
                return Path.getLastDirName(path);
            });

        let latestVersions: string[] = versions.filter((version: string) => {
            return version.endsWith("(latest)");
        });
        latestVersions = latestVersions.map((value: string) => value.replaceAll("_", "."));
        latestVersions = latestVersions.map((value: string) => value.replaceAll("(latest)", ""));

        // Change the version syntax for the purpose of sorting
        versions = versions.map((value: string) => value.replaceAll("_", "."));
        versions = versions.map((value: string) => value.replaceAll("(latest)", ""));
        versions = Utils.sortVersions(versions);

        // Change the sorted version back to the dir name form
        versions = versions.map((version: string) => {
            const isLatest: boolean = latestVersions.includes(version);
            
            version = version.replaceAll(".", "_");

            return isLatest ? `${version}(latest)` : version;
        });
        
        let allAPILines: string[] = [];
        allAPILines.push(`* ${this.markdownService.createLink("API Reference", "api-ref-intro.md")}`);

        for (const version of versions) {
            const isLatest: boolean = version.endsWith("(latest)");
            const versionAPILines: string[] = this.createAPISummaryAsLines(version, isLatest);
            
            allAPILines = allAPILines.concat(versionAPILines);
        }

        // Update the summary file
        const completeSummary: string = this.markDownService.insertAfterHeader(this.apiHeaderName, contentLines, allAPILines);

        File.writeTextFileSync(this.summaryFilePath, completeSummary);
    }

    private clearAPISection(): string[] {
        let fileLines: string[] = this.fileLoader.readAllLinesSync(this.summaryFilePath);

        if (!this.markDownService.headerExists(this.apiHeaderName, fileLines)) {
            throw new Error(`The header '${this.apiHeaderName}' does not exist.`);
        }

        const apiSectionStartIndex: number = this.markDownService.headerLineIndexOf(this.apiHeaderName, fileLines);

        // Get the index of the next header that may exist after the API header name
        let apiSectionStopIndex: number = this.markDownService.headerLineIndexOf(apiSectionStartIndex + 1, fileLines);
        apiSectionStopIndex = apiSectionStopIndex === -1
            ? fileLines.length - 1
            : apiSectionStopIndex;

        fileLines = fileLines.filter((_: string, i: number) => {
            return i <= apiSectionStartIndex || i >= apiSectionStopIndex;
        });

        return fileLines;
    }

    private createAPISummaryAsLines(version: string, isLatest: boolean): string[] {
        const result: string[] = [];
        const apiVersionDirPath = `${this.baseAPIDirPath}${version}`;
        const filePaths: string[] = Directory.getFiles(apiVersionDirPath);
        
        let text = version.replaceAll("_", ".");
        text = isLatest
            ? text
            : text.replaceAll("(latest)", "");

        const url = `./API Reference/${version}/namespaces.md`;
        
        result.push(`${this.singleIndent}* ${this.markdownService.createLink(text, url)}`);

        filePaths.forEach(filePath => {
            let text = Path.getFileNameWithoutExtension(filePath);
            text = this.processGeneric(text);

            const url = `./API Reference/${version}/${Path.getFileName(filePath)}`;

            const markdownLink = this.markdownService.createLink(text, url);
            result.push(`${this.doubleIndent}* ${markdownLink}`);
        });

        return result;
    }

    private processGeneric(value: string): string {
        const isUndefinedOrEmpty = Utils.isUndefinedOrEmpty(value);
        const noUnderscores = value.indexOf("_") <= -1;
        if (isUndefinedOrEmpty || noUnderscores) {
            return value;
        }

        let currentChar = "<";

        while(true) {
            const doesNotContainUnderscore: boolean = value.indexOf("_") === -1;

            if (doesNotContainUnderscore) {
                break;
            }

            value = value.replace("_", currentChar);
            currentChar = currentChar === "<" ? ">" : currentChar;
        }

        return value;
    }
}
