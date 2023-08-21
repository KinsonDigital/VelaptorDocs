import { Guard } from "./Guard.ts";
import { Utils } from "./Utils.ts";

/**
 * Processes markdown headers.
 */
export class MarkdownHeaderService {
	private readonly classHeaderRegEx: RegExp;
	private readonly structRegEx: RegExp;
	private readonly interfaceRegEx: RegExp;
	private readonly ctorGroupHeaderRegex: RegExp;
	private readonly ctorHeaderRegex: RegExp;
	private readonly methodGroupHeaderRegex: RegExp;
	private readonly methodHeaderRegex: RegExp;
	private readonly propGroupHeaderRegex: RegExp;
	private readonly propHeaderRegex: RegExp;
	private readonly remarksGroupRegex: RegExp;
	private readonly fieldsGroupRegex: RegExp;
	private readonly headerLineRegEx: RegExp;
	private readonly newLine: string;

	/**
	 * Creates an instance of MarkdownHeaderService.
	 */
	constructor() {
		this.classHeaderRegEx = /^#{1,6} .+Class$/;
		this.structRegEx = /^#{1,6} .+Struct$/;
		this.interfaceRegEx = /^#{1,6} .+Interface$/;
		this.ctorGroupHeaderRegex = /^#{1,6} Constructors$/;
		this.ctorHeaderRegex = /^#{1,6} .+\(.*\) Constructor$/;
		this.methodGroupHeaderRegex = /^#{1,6} Methods$/;
		this.methodHeaderRegex = /^#{1,6} .+\(.*\) Method$/;
		this.propGroupHeaderRegex = /^#{1,6} Properties$/;
		this.propHeaderRegex = /^#{1,6} .+Property$/;
		this.remarksGroupRegex = /^#{1,6} Remarks$/;
		this.fieldsGroupRegex = /^#{1,6} Fields$/;
		this.headerLineRegEx = /^#{1,6} .+$/g;

		this.newLine = Utils.isWindows() ? "\r\n" : "\n";
	}

	/**
	 * Processes all of the headers in the file content to the correct size.
	 * @param fileContent The file content to process.
	 */
	public processHeaders(fileContent: string): string {
		Guard.isNotUndefinedOrEmpty(fileContent);

		const lines: string[] = fileContent.split(this.newLine);

		for (let i = 0; i < lines.length; i++) {
			const line: string = lines[i].trim();

			if (this.isValidHeader(line, this.classHeaderRegEx)) {
				lines[i] = this.decreaseHeaderSize(line, 2);
			} else if (this.isValidHeader(line, this.structRegEx)) {
				lines[i] = this.decreaseHeaderSize(line, 2);
			} else if (this.isValidHeader(line, this.interfaceRegEx)) {
				lines[i] = this.decreaseHeaderSize(line, 2);
			} else if (this.isValidHeader(line, this.ctorGroupHeaderRegex)) {
				lines[i] = this.increaseHeaderSize(line, 1);
			} else if (this.isValidHeader(line, this.ctorHeaderRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
			} else if (this.isValidHeader(line, this.methodGroupHeaderRegex)) {
				lines[i] = this.increaseHeaderSize(line, 1);
			} else if (this.isValidHeader(line, this.methodHeaderRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
				lines[i] = this.stripClassFromHeader(lines[i]);
				lines[i] = lines[i].replace("Method", "");
			} else if (this.isValidHeader(line, this.propGroupHeaderRegex)) {
				lines[i] = this.increaseHeaderSize(line, 1);
			} else if (this.isValidHeader(line, this.propHeaderRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
				lines[i] = this.stripClassFromHeader(lines[i]);
				lines[i] = lines[i].replace("Property", "");
			} else if (this.isValidHeader(line, this.remarksGroupRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
			} else if (this.isValidHeader(line, this.fieldsGroupRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
			}
		}

		return lines.join(this.newLine);
	}

	/**
	 * Returns a value indicating whether or not the header is valid header.
	 * @param header The header text to check.
	 * @param headerRegEx The regex to use to check the header.
	 * @returns True if the header is valid, false otherwise.
	 */
	public isValidHeader(header: string, headerRegEx?: RegExp): boolean {
		if (headerRegEx === undefined) {
			return this.headerLineRegEx.test(header);
		}

		return headerRegEx.test(header);
	}

	/**
	 * Increases the size of the given header by the given amount.
	 * @param header The header to increase in size by the given amount.
	 * @param increaseBy The amount to increase the header by.
	 * @returns The header with the increased size.
	 */
	private increaseHeaderSize(header: string, increaseBy: number): string {
		Guard.isNotUndefinedOrEmpty(header);

		increaseBy = increaseBy < 0 ? 0 : increaseBy;
		increaseBy = increaseBy > 6 ? 6 : increaseBy;

		if (header.startsWith("#") && increaseBy != 0) {
			const headerHashes: string[] = header.split("").filter((c) => c === "#");

			if (headerHashes.length <= increaseBy) {
				return header.replaceAll("#", "");
			}

			const headersToUse: string[] = [];

			for (let i = 0; i <= increaseBy; i++) {
				headersToUse.push("#");
			}

			return `${headersToUse.join("")}${header.replaceAll("#", "")}`;
		}

		return header;
	}

	/**
	 * Decreases the size of the given header by the given amount.
	 * @param header The header to decrease in size by the given amount.
	 * @param decreaseBy The amount to decrease the header by.
	 * @returns The header with the decreased size.
	 */
	private decreaseHeaderSize(header: string, decreaseBy: number): string {
		Guard.isNotUndefinedOrEmpty(header);

		decreaseBy = decreaseBy < 0 ? 0 : decreaseBy;
		decreaseBy = decreaseBy > 6 ? 6 : decreaseBy;

		if (header.startsWith("#") && decreaseBy != 0) {
			const totalHashes: number = this.getTotal(header, "#");
			const totalToAdd: number = totalHashes + decreaseBy;
			let newHeader = "";

			for (let i = 0; i < totalToAdd; i++) {
				newHeader += "#";
			}

			newHeader += header.replaceAll("#", "");

			return newHeader;
		}

		return header;
	}

	/**
	 * Strips the class name from the header.
	 * @param header The header to strip the class name from.
	 * @param className The name of the class to strip from the header.
	 * @returns The header with the class name stripped.
	 */
	private stripClassFromHeader(header: string): string {
		Guard.isNotUndefinedOrEmpty(header);

		if (header.indexOf(".") === -1) {
			return header;
		}

		const mainSections: string[] = header.split(".");

		const headerHashes: string = mainSections[0].split(" ")[0];

		return `${headerHashes} ${mainSections[1]}`;
	}

	/**
	 * Returns the total number that the given character is found in the given value.
	 * @param value The value containing the characters to count.
	 * @param char The character to count.
	 * @returns The total characters found in the value.
	 */
	private getTotal(value: string, char: string): number {
		let total = 0;

		for (let i = 0; i < value.length; i++) {
			if (value[i] === char) {
				total++;
			}
		}

		return total;
	}
}
