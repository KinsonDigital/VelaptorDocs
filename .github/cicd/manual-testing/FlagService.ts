export class FlagService {
    private readonly newLine: string;
    private readonly enabledFlagLineStart: string;
    private readonly disabledFlagLineStart: string;
    private readonly flagLineEnd: string;

    constructor() {
        this.newLine = Deno.build.os === "windows" ? "\r\n" : "\n";
        this.enabledFlagLineStart = "// <flag enabled>";
        this.disabledFlagLineStart = "// <flag disabled>";
        this.flagLineEnd = "// </flag>";
    }

    public disableFlag(filePath: string): void {
        if (this.isUndefinedOrEmpty(filePath)) {
            throw new Error(`The parameter '${filePath}' must not be undefined or empty.`);
        }

        if (this.fileDoesNotExist(filePath)) {
            throw new Error(`The file '${filePath}' does not exist.`);
        }

        const fileContent: string = Deno.readTextFileSync(filePath);
        const fileLines: string[] = this.toLines(fileContent);

        const lineStartIndex: number = this.flagStartIndex(fileLines, this.enabledFlagLineStart);
        const lineEndIndex: number = this.flagEndIndex(fileLines);

        const noFlag: boolean = lineStartIndex === -1 || lineEndIndex === -1;
        const incompleteFlag: boolean =
            (lineStartIndex === -1 && lineEndIndex != -1) ||
            (lineStartIndex != -1 && lineEndIndex === -1);

        if (noFlag) {
            return;
        } else if (incompleteFlag) {
            throw new Error(`Incomplete flag structure in the file ${filePath}.`);
        }

        for (let i = 0; i < fileLines.length; i++) {
            // If the start is found, flip from enabled to disabled
            if (i === lineStartIndex) {
                fileLines[i] = fileLines[i].replace(this.enabledFlagLineStart, this.disabledFlagLineStart);
            }

            if (i > lineStartIndex && i < lineEndIndex) {
                fileLines[i] = `// ${fileLines[i]}`;
            }
        }

        const changedContent: string = this.toString(fileLines);

        Deno.writeTextFileSync(filePath, changedContent);
    }

    public enableFlag(filePath: string): void {
        if (this.isUndefinedOrEmpty(filePath)) {
            throw new Error(`The parameter '${filePath}' must not be undefined or empty.`);
        }

        if (this.fileDoesNotExist(filePath)) {
            throw new Error(`The file '${filePath}' does not exist.`);
        }

        const fileContent: string = Deno.readTextFileSync(filePath);
        const fileLines: string[] = this.toLines(fileContent);

        const lineStartIndex: number = this.flagStartIndex(fileLines, this.disabledFlagLineStart);
        const lineEndIndex: number = this.flagEndIndex(fileLines);

        const noFlag: boolean = lineStartIndex === -1 || lineEndIndex === -1;
        const incompleteFlag: boolean =
            (lineStartIndex === -1 && lineEndIndex != -1) ||
            (lineStartIndex != -1 && lineEndIndex === -1);

        if (noFlag) {
            return;
        } else if (incompleteFlag) {
            throw new Error(`Incomplete flag structure in the file ${filePath}.`);
        }

        for (let i = 0; i < fileLines.length; i++) {
            // If the start is found, flip from enabled to disabled
            if (i === lineStartIndex) {
                fileLines[i] = fileLines[i].replace(this.disabledFlagLineStart, this.enabledFlagLineStart);
            }

            if (i > lineStartIndex && i < lineEndIndex) {
                const commentLen = 3;
                const commentIndex: number = fileLines[i].indexOf("/");
                const indent: string = "".padEnd(commentIndex, " ");
                
                fileLines[i] = `${indent}${fileLines[i].slice(commentIndex + commentLen)}`;
            }
        }

        const changedContent: string = this.toString(fileLines);

        Deno.writeTextFileSync(filePath, changedContent);
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

    private flagStartIndex(lines: string[], flagStart: string): number {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.indexOf(flagStart) != -1) {
                return i;
            }
        }

        return -1;
    }

    private flagEndIndex(lines: string[]): number {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.indexOf(this.flagLineEnd) != -1) {
                return i;
            }
        }

        return -1;
    }

    private toLines(value: string): string[] {
        return value.split(/\r?\n/);
    }

    private toString(lines: string[]): string {
        return lines.join(this.newLine);
    }
}
