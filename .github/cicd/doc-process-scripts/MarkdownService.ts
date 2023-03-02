import { Guard } from "./Gaurd.ts";
import { Utils } from "./Utils.ts";

export class MarkdownService {
    private readonly textSectionRegEx: RegExp;
    private readonly urlSectionRegEx: RegExp;
    private readonly fullMarkdownLinkRegEx: RegExp;
    private readonly headerRegEx: RegExp;
    private readonly newLine: string;
    private readonly headerTypes: string[];

    constructor() {
        this.textSectionRegEx = /\[.+\]/g;
        this.urlSectionRegEx = /\(.+\)/g;
        this.fullMarkdownLinkRegEx = /\[.+\]\(.+\)/m;
        this.headerRegEx = /^#+ .+$/g;
        this.newLine = Utils.isWindows() ? "\r\n" : "\n";
        this.headerTypes = ["#", "##", "###", "####", "#####", "######"];
    }

    public createLink(text: string, url: string): string {
        Guard.isNotUndefinedOrEmpty(text);
        Guard.isNotUndefinedOrEmpty(url);

        // TODO: The URL link is going to have to change somehow
        // once we start having versions. Maybe bring in a version parameter somehow
        return `[${text}](<${url}>)`;
    }

    public prefixUrl(markDownLink: string, prefix: string): string {
        if (!this.containsMarkdownLink(markDownLink)) {
            throw new Error(`The markdown link is invalid.\`n${markDownLink}`);
        }

        const text: string = this.extractLinkText(markDownLink);
        const url: string = this.extractLinkUrl(markDownLink);

        return `[${text}](${prefix}${url})`;
    }

    public replaceUrl(markDownLink: string, newUrl: string): string {
        if (!this.containsMarkdownLink(markDownLink)) {
            throw new Error(`The markdown link is invalid.\`n${markDownLink}`);
        }

        const text: string = this.extractLinkText(markDownLink);

        return `[${text}](${newUrl})`;
    }

    public extractLinkText(markDownLink: string): string {
        if (!this.containsMarkdownLink(markDownLink)) {
            throw new Error(`The markdown link is invalid.\`n${markDownLink}`);
        }

        const results = markDownLink.match(this.textSectionRegEx);
        let result = "";

        results?.forEach(value => {
            result = value.replace("[", "");
            result = result.replace("]", "");
        });

        return result;
    }

    public extractLinkUrl(markDownLink: string): string {
        if (!this.containsMarkdownLink(markDownLink)) {
            throw new Error(`The markdown link is invalid.\`n${markDownLink}`);
        }

        const results = markDownLink.match(this.urlSectionRegEx);
        let result = "";

        results?.forEach(value => {
            result = value.replace("(", "");
            result = result.replace(")", "");
        });

        return result;
    }

    public renameHeader(content: string, currentName: string, newName: string): string {
        if (!this.headerExists(currentName, content)) {
            return content;
        }

        const currentHeader: string = this.getHeader(content, currentName);
        const newHeader = `${currentHeader.split(" ")[0]} ${newName}`;

        return content.replace(currentHeader, newHeader);
    }

    public insertAfterHeader(name: string, contentLines: string[], linesToAdd: string[]): string {
        Guard.isNotUndefinedOrEmpty(name);

        const noContentLines: boolean = contentLines === undefined || contentLines.length <= 0;
        const hasContentLines = !noContentLines;
        const noLinesToAdd: boolean = linesToAdd === undefined || linesToAdd.length <= 0;
        const hasLinesToAdd = !noLinesToAdd;

        if (noContentLines && noLinesToAdd) {
            return "";
        }

        if (hasContentLines && noLinesToAdd) {
            return contentLines.join(this.newLine);    
        }

        if (noContentLines && hasLinesToAdd) {
            return linesToAdd.join(this.newLine);
        }

        const insertIndex: number = this.headerLineIndexOf(name, contentLines) + 1;

        for (let i = 0; i < linesToAdd.length; i++) {
            const line = linesToAdd[i];
            
            contentLines.splice(i + insertIndex, 0, line);
        }

        return contentLines.join(this.newLine);
    }

    public headerExists(name: string, lines: string[]): boolean;
    public headerExists(name: string, content: string): boolean;
    public headerExists(name: string, linesOrContent: string[] | string): boolean {
        if (Utils.isUndefinedOrEmpty(name)) {
            return false;
        }
        
        const isArray: boolean = Array.isArray(linesOrContent);

        name = name.trim();

        if (isArray) {
            for (let i = 0; i < linesOrContent.length; i++) {
                const line = linesOrContent[i];
                
                if (this.isHeaderLine(line)) {
                    const currentHeaderName: string = line.replaceAll("#", "").trim();
                    
                    if (name === currentHeaderName)
                    {
                        return true;
                    }
                }
            }
        } else {
            for (let i = 0; i < this.headerTypes.length; i++) {
                const type = this.headerTypes[i];
                
                if (linesOrContent.indexOf(`${type} ${name}`) != -1) {
                    return true;
                }
            }
        }

        return false;
    }

    public headerLineIndexOf(startIndex: number, lines: string[]): number;
    public headerLineIndexOf(headerName: string, lines: string[]): number;
    public headerLineIndexOf(nameOrIndex: string | number, lines: string[]): number {
        const paramIsNum = Number.isInteger(nameOrIndex);
        const startIndex: number = paramIsNum ? <number>nameOrIndex : 0;

        for (let i = startIndex; i < lines.length; i++) {
            if (this.isHeaderLine(lines[i])) {
                if (paramIsNum) {
                    return i;
                } else {
                    const name: string = <string>nameOrIndex;
                    const currentHeaderName: string = lines[i].replaceAll("#", "").trim();

                    if (currentHeaderName === name) {
                        return i;
                    }
                }
            }
        }

        return -1;
    }

    public isHeaderLine(line: string): boolean {
        if (Utils.isUndefinedOrEmpty(line)) {
            return false;
        }

        const matches = line.match(this.headerRegEx);
        return matches !== null && matches.length > 0;
    }

    public containsMarkdownLink(markDownLink: string): boolean {
        if (Utils.isUndefinedOrEmpty(markDownLink)) {
            return false;
        }

        const textResults = markDownLink.match(this.textSectionRegEx);
        const urlResults = markDownLink.match(this.urlSectionRegEx);

        const containsValidTextSection: boolean = textResults !== null && textResults.entries.length >= 0;
        const containsValidUrlSection: boolean = urlResults !== null && urlResults.entries.length >= 0;

        return containsValidTextSection && containsValidUrlSection;
    }

    private getHeader(content: string, headerName: string): string {
        if (!this.headerExists(headerName, content)) {
            return "";
        }

        const possibleHeaders: string[] = [];

        headerName = headerName.trim();

        this.headerTypes.forEach(type => {
            possibleHeaders.push(`${type} ${headerName}`);
        });

        const headerRegExStr = `^#+ ${headerName}`;
        const regEx = new RegExp(headerRegExStr, "gm");

        for (let i = 0; i < possibleHeaders.length; i++) {
            const matches = regEx.exec(content);

            if (matches != null && matches.length > 0) {
                return matches[0];
            }
        }

        return "";
    }
}
