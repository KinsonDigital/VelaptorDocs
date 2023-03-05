import { Utils } from "../doc-process-scripts/Utils.ts";

export class FlagService {
    private readonly newLine: string;
    private readonly enabledFlagStartRegEx: RegExp;
    private readonly disabledFlagStartRegEx: RegExp;
    private readonly flagEndRegEx: RegExp;
    private readonly idRegEx: RegExp;

    constructor() {
        this.newLine = Deno.build.os === "windows" ? "\r\n" : "\n";

        this.flagEndRegEx = /<\/flag>/;
        this.idRegEx = /id=[a-z-]+ /;

        this.enabledFlagStartRegEx = /\/\/ <flag id=[a-z-]+ enabled=true>/;
        this.disabledFlagStartRegEx = /\/\/ <flag id=[a-z-]+ enabled=false>/;
    }

    public enableFlag(filePath: string, id: string): void {
        const fileContent: string = this.loadFileContent(filePath);

        let fileLines: string[] = this.toLines(fileContent);
        id = this.isUndefinedOrEmpty(id)
            ? ""
            : id.toLowerCase();

        const enabledFlags: [number, number][] = this.getDisabledFlags(fileLines, id);
        
        fileLines = this.flipFlags(fileLines, enabledFlags, true);

        const toggledContent: string = Utils.toString(fileLines);

        Deno.writeTextFileSync(filePath, toggledContent);
    }

    public disableFlag(filePath: string, id: string): void {
        const fileContent: string = this.loadFileContent(filePath);

        let fileLines: string[] = this.toLines(fileContent);
        id = this.isUndefinedOrEmpty(id)
            ? ""
            : id.toLowerCase();

        const enabledFlags: [number, number][] = this.getEnabledFlags(fileLines, id);
        
        fileLines = this.flipFlags(fileLines, enabledFlags, false);

        const toggledContent: string = Utils.toString(fileLines);

        Deno.writeTextFileSync(filePath, toggledContent);
    }

    public enableFlags(filePath: string): void {
        const fileContent: string = this.loadFileContent(filePath);

        let fileLines: string[] = this.toLines(fileContent);
        const disabledFlags: [number, number][] = this.getDisabledFlags(fileLines);

        if (disabledFlags.length <= 0) {
            return;
        }

        // Flip the enabled flags and content to disabled
        fileLines = this.flipFlags(fileLines, disabledFlags, true);

        const toggledContent: string = Utils.toString(fileLines);

        Deno.writeTextFileSync(filePath, toggledContent);
    }

    public disableFlags(filePath: string): void {
        const fileContent: string = this.loadFileContent(filePath);

        let fileLines: string[] = this.toLines(fileContent);

        const enabledFlags: [number, number][] = this.getEnabledFlags(fileLines);

        if (enabledFlags.length <= 0) {
            return;
        }

        // Flip the disabled flags and content to enabled
        fileLines = this.flipFlags(fileLines, enabledFlags, false);

        const toggledContent: string = Utils.toString(fileLines);

        Deno.writeTextFileSync(filePath, toggledContent);
    }

    public toggle(filePath: string): void {
        const fileContent: string = this.loadFileContent(filePath);

        let fileLines: string[] = this.toLines(fileContent);

        const enabledFlags: [number, number][] = this.getEnabledFlags(fileLines);
        const disabledFlags: [number, number][] = this.getDisabledFlags(fileLines);

        // Flip the enabled flags and content to disabled
        fileLines = this.flipFlags(fileLines, enabledFlags, false);

        // Flip the disabled flags and content to enabled
        fileLines = this.flipFlags(fileLines, disabledFlags, true);

        const toggledContent: string = Utils.toString(fileLines);

        Deno.writeTextFileSync(filePath, toggledContent);
    }

    private loadFileContent(filePath: string): string {
        if (this.isUndefinedOrEmpty(filePath)) {
            throw new Error(`The parameter '${filePath}' must not be undefined or empty.`);
        }

        if (this.fileDoesNotExist(filePath)) {
            throw new Error(`The file '${filePath}' does not exist.`);
        }

        const fileContent: string = Deno.readTextFileSync(filePath);

        const incompleteFlag: boolean = this.hasIncompleteFlags(fileContent);
        if (incompleteFlag) {
            throw new Error(`Incomplete flag structure in the file ${filePath}.`);
        }
        
        return fileContent;
    }

    private flipFlags(lines: string[], flags: [number, number][], areEnabledFlags: boolean): string[] {
        // Flip the enabled flags and content to disabled
        for (const flag of flags) {
            const start: number = flag[0];
            const stop: number = flag[1];

            for (let i = start; i <= stop; i++) {
                if (i === start) {
                    const preContent: string = lines[i].slice(0, lines[i].indexOf("// <flag"));
                    lines[i] = areEnabledFlags
                        ? lines[i] = `${preContent}${this.createFlagStart(this.getFlagID(lines[i]), true)}`
                        : lines[i] = `${preContent}${this.createFlagStart(this.getFlagID(lines[i]), false)}`;
                }

                if (i > start && i < stop) {
                    const prefixContent = areEnabledFlags
                        ? ""
                        : "".padStart(this.charIndexOf(lines[i]), " ");

                    lines[i] = areEnabledFlags
                        ? this.removeForwardSlashes(lines[i])
                        : lines[i] = `${prefixContent}// ${lines[i].trimStart()}`;
                }
            }
        }

        return lines;
    }

    private getEnabledFlags(lines: string[], id = ""): [startIndex: number, stopIndex: number][] {
        const result: [number, number][] = [];
        const starts: number[] = [];
        const stops: number[] = [];

        let foundStart = false;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (this.contains(line, this.enabledFlagStartRegEx)) {
                const flagId: string = id === ""
                    ? ""
                    : this.getFlagID(line);

                if (flagId === id) {
                    starts.push(i);
                    foundStart = true;
                }
            } else if (foundStart && this.contains(line, this.flagEndRegEx)) {
                stops.push(i);
                foundStart = false;
            }
        }

        if (starts.length === stops.length) {
            for (let i = 0; i < starts.length; i++) {
                const start = starts[i];
                const stop = stops[i];

                result.push([start, stop]);
            }
        }

        return result;
    }

    private getDisabledFlags(lines: string[], id = ""): [startIndex: number, stopIndex: number][] {
        const result: [number, number][] = [];
        const starts: number[] = [];
        const stops: number[] = [];

        let foundStart = false;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (this.contains(line, this.disabledFlagStartRegEx)) {
                const flagId: string = id === ""
                    ? ""
                    : this.getFlagID(line);

                if (flagId === id) {
                    starts.push(i);
                    foundStart = true;
                }
            } else if (foundStart && this.contains(line, this.flagEndRegEx)) {
                stops.push(i);
                foundStart = false;
            }
        }

        if (starts.length === stops.length) {
            for (let i = 0; i < starts.length; i++) {
                const start = starts[i];
                const stop = stops[i];

                result.push([start, stop]);
            }
        }

        return result;
    }

    private isUndefinedOrEmpty<T>(value: T[] | string | undefined) {
        if (value === undefined) {
            return true;
        }

        if (typeof(value) === "string") {
            return value === "";
        }

        return Array.isArray(value) && value.length <= 0;
    }

    private fileDoesNotExist(filePath: string): boolean {
        if (this.isUndefinedOrEmpty(filePath)) {
            throw new Error(`The parameter '${filePath}' must not be undefined or empty.`);
        }

        try {
            Deno.statSync(filePath);
            return false;
        } catch (error) {
            if (error instanceof Deno.errors.NotFound) {
                return true;
            }

            throw error;
        }
    }

    private getFlagID(flagStart: string): string {
        const matches = flagStart.match(this.idRegEx);

        if (matches === null || matches.length <= 0) {
            return "";
        }

        return matches[0].trim().split("=")[1];
    }

    private createFlagStart(id:string, enabled: boolean): string {
        return `// <flag id=${id} enabled=${enabled}>`;
    }

    private charIndexOf(line: string): number {
        if (this.isUndefinedOrEmpty(line)) {
            return 0;
        }

        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char != " " && char != "\t") {
                return i;
            }
        }

        return 0;
    }

    private toLines(value: string): string[] {
        return value.split(/\r?\n/);
    }

    private removeForwardSlashes(value: string): string {
        const commentLen = 3;
        const commentIndex: number = value.indexOf("/");
        const indent: string = "".padEnd(commentIndex, " ");
        
        return `${indent}${value.slice(commentIndex + commentLen)}`;
    }

    private hasIncompleteFlags(content: string): boolean {
        if (this.isUndefinedOrEmpty(content)) {
            return false;
        }

        const totalEnableStarts: number = this.totalCount(content, this.enabledFlagStartRegEx);
        const totalDisableStarts: number = this.totalCount(content, this.disabledFlagStartRegEx);
        const totalEnableEnds: number | null = this.totalCount(content, this.flagEndRegEx);

        if (totalEnableStarts + totalDisableStarts != totalEnableEnds) {
            return true;
        }

        return false;
    }

    private totalCount(value: string, regEx: RegExp): number {
        if (this.contains(value, regEx)) {
            return 0;
        }

        return value.match(regEx)?.length ?? 0;
    }

    private contains(value: string, regEx: RegExp): boolean {
        const enableStartMatches: RegExpMatchArray | null = value.match(regEx);

        return enableStartMatches != null && enableStartMatches.length > 0;
    }
}
