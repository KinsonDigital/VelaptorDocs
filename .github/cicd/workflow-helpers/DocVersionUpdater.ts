export class DocVersionUpdater {
	private readonly newLine: string = Deno.build.os === "windows" ? "\r\n" : "\n";
	private readonly newLineRegEx: RegExp = /\r?\n/;
	private readonly versionRegEx: RegExp = /\(v\d{4}\.\d{2}\.\d{2}\.\d{6}\)/;

	public updateVersion(): void {
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

		// This will log the version to the console which is captured by the workflows
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
		let day = currentDate.getDate().toString();
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

const updater = new DocVersionUpdater();
updater.updateVersion();
