export class DocVersionUpdater {
    private readonly newLine: string = Deno.build.os === "windows" ? "\r\n" : "\n";
    private readonly newLineRegEx: RegExp = /\r?\n/;
    private readonly versionRegEx: RegExp = /\(v\d{4}\.\d{2}\.\d{2}\.\d{6}\)/;

    public updateVersion(envOutputFile: string): void {       
        const baseDirPath = Deno.cwd();
        const path = `${baseDirPath}/docusaurus.config.js`;
        let fileContent: string = Deno.readTextFileSync(path);
        const fileLines: string[] = this.toLines(fileContent);
        let workflowSetOutput = "";

        for (let i = 0; i < fileLines.length; i++) {
            const line = fileLines[i];
            
            // If the copyright line has been found
            if (line.indexOf("copyright: ") != -1) {
                const oldVersion: string = this.getCurrentVersion(line);
                const newVersion: string = this.createNewVersion();

                fileLines[i] = line.replace(oldVersion, newVersion);

                workflowSetOutput = `${this.newLine}version=${newVersion.replace("(", "").replace(")", "")}`;
                break;
            }
        }

        fileContent = fileLines.join(this.newLine);
        Deno.writeTextFileSync(path, fileContent);

        // Set the 'version' output of the step to the version value for the rest of the workflow
        Deno.writeTextFileSync(envOutputFile, workflowSetOutput, { append: true });
    }

    public updateVersionNew(envOutputFile: string): void {       
        const baseDirPath = Deno.cwd();
        const path = `${baseDirPath}/docusaurus.config.js`;
        let fileContent: string = Deno.readTextFileSync(path);
        const fileLines: string[] = this.toLines(fileContent);
        let version = "";

        for (let i = 0; i < fileLines.length; i++) {
            const line = fileLines[i];
            
            // If the copyright line has been found
            if (line.indexOf("copyright: ") != -1) {
                const oldVersion: string = this.getCurrentVersion(line);
                const newVersion: string = this.createNewVersion();

                fileLines[i] = line.replace(oldVersion, newVersion);

                version = `${newVersion.replace("(", "").replace(")", "")}`;
                break;
            }
        }

        fileContent = fileLines.join(this.newLine);
        Deno.writeTextFileSync(path, fileContent);

        console.log(version);
    }

    private toLines(value: string): string[] {
        if (value === undefined || value === "") {
            return [];
        }

        return value.split(this.newLineRegEx);
    }

    private getCurrentVersion(copyrightLine: string): string {
        const matches = copyrightLine.match(this.versionRegEx);

        if (matches === null || matches.length <= 0) {
            throw new Error("Could not find the current version for updating.");
        }

        return matches[0];
    }

    private createNewVersion(): string {
        const currentDate: Date = new Date();
        const year = currentDate.getFullYear().toString();
        let month = currentDate.getMonth().toString();
        let day = currentDate.getDay().toString();
        let hour = currentDate.getHours().toString();
        let minute = currentDate.getMinutes().toString();
        let second = currentDate.getSeconds().toString();
        
        // Make sure that the different numbers are 2 digits
        month = month.length == 1 ? `0${month}` : month;
        day = day.length == 1 ? `0${day}` : day;
        hour = hour.length == 1 ? `0${hour}` : hour;
        minute = minute.length == 1 ? `0${minute}` : minute;
        second = second.length == 1 ? `0${second}` : second;

        const version = `${year}.${month}.${day}.${hour}${minute}${second}`;

        return `(v${version})`;
    }
}

if (Deno.args.length <= 0 || Deno.args[0] === undefined || Deno.args[0] === "") {
    throw new Error("The environment file has not been provided to the 'DocVersionUpdater.ts' script.");
}

const envFile: string = Deno.args[0];

try {
    Deno.statSync(envFile);
} catch (error) {
    if (error instanceof(Deno.errors.NotFound)) {
        throw new Error(`The environment file '${envFile}' does not exist.`);
    } else {
        throw error;
    }
}

const updater = new DocVersionUpdater();
updater.updateVersionNew(envFile);
