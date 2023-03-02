import { MarkdownService } from "./MarkdownService.ts";
import { Utils } from "./Utils.ts";

export class MarkdownFileContentService {
    private readonly markDownService: MarkdownService;
    private readonly markDownLinkRegEx: RegExp;
    private readonly newLine: string;

    constructor() {
        this.markDownService = new MarkdownService();
        this.markDownLinkRegEx = /\[(.*?)\]\((.*?)\)/g;
        this.newLine = Utils.isWindows() ? "\r\n" : "\n";
    }

    public replaceAllLinkUrls(
            fileContent: string,
            newUrl: string,
            predicate: ((text: string, url: string) => boolean) | null = null): string {
        const matches = fileContent.match(this.markDownLinkRegEx);
        matches?.forEach(link => {
            const text: string = this.markDownService.extractLinkText(link);
            const url: string = this.markDownService.extractLinkUrl(link);

            if (predicate === null || predicate(text, url)) {
                const newLink: string = this.markDownService.replaceUrl(link, newUrl);

                fileContent = fileContent.replaceAll(link, newLink);
            }
        });

        return fileContent;
    }

    /**
     * Prefixes all of the URLs with the given prefix for every markdown link found
     * as long as the given predicate is null or returns true.
     * @param fileContent The file content containing all of the markdown links.
     * @param prefix The prefix to apply to each URL in the markdown link.
     * @param predicate If true or null, will allow the prefix to be applied.
     * @returns The changed content.
     */
    public prefixAllLinkUrls(
            fileContent: string,
            prefix: string,
            predicate: ((text: string, url: string) => boolean) | null = null): string {       
        const matches = fileContent.match(this.markDownLinkRegEx);
        matches?.forEach(link => {
            const text: string = this.markDownService.extractLinkText(link);
            const url: string = this.markDownService.extractLinkUrl(link);

            if (predicate === null || predicate(text, url)) {
                const newLink: string = this.markDownService.prefixUrl(link, prefix);

                fileContent = fileContent.replaceAll(link, newLink);
            }
        });

        return fileContent;
    }

    public updateHeader(
        fileContent: string,
        predicate: (header: string) => boolean,
        updateLine: (line: string) => string): string {
        const contentLines: string[] = Utils.toLines(fileContent);

        for (let i = 0; i < contentLines.length; i++) {
            const line = contentLines[i];
            
            // If the line is a markdown header line
            if (this.markDownService.isHeaderLine(line) &&
                predicate(line)) {
                contentLines[i] = updateLine(line);
            }
        }

        return contentLines.join(this.newLine);
    }
}
