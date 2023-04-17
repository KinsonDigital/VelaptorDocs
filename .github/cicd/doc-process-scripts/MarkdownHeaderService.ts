import { Guard } from "./Gaurd.ts";
import { Utils } from "./Utils.ts";

/**
 * Processes markdown headers.
 */
export class MarkdownHeaderService {
	private ctorGroupHeaderRegex: RegExp;
	private ctorHeaderRegex: RegExp;
	private methodGroupHeaderRegex: RegExp;
	private methodHeaderRegex: RegExp;
	private propGroupHeaderRegex: RegExp;
	private propHeaderRegex: RegExp;
	private remarksGroupRegex: RegExp;
	private fieldsGroupRegex: RegExp;
	private readonly headerLineRegEx: RegExp;
	private readonly newLine: string;

	/**
	 * Creates an instance of MarkdownHeaderService.
	 */
	constructor() {
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
			let line: string = lines[i].trim();

			if (this.isValidHeader(line, this.ctorGroupHeaderRegex)) {
				lines[i] = this.increaseHeaderSize(line, 1);
			} else if(this.isValidHeader(line, this.ctorHeaderRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
			} else if(this.isValidHeader(line, this.methodGroupHeaderRegex)) {
				lines[i] = this.increaseHeaderSize(line, 1);
			} else if(this.isValidHeader(line, this.methodHeaderRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
				lines[i] = this.stripClassFromHeader(lines[i]);
			} else if(this.isValidHeader(line, this.propGroupHeaderRegex)) {
				lines[i] = this.increaseHeaderSize(line, 1);
			} else if(this.isValidHeader(line, this.propHeaderRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
				lines[i] = this.stripClassFromHeader(lines[i]);
			} else if(this.isValidHeader(line, this.remarksGroupRegex)) {
				lines[i] = this.decreaseHeaderSize(line, 1);
			} else if(this.isValidHeader(line, this.fieldsGroupRegex)) {
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
			let headerHashes: string[] = header.split("").filter(c => c === "#");

			if (headerHashes.length <= increaseBy) {
				return header.replaceAll("#", "");
			}

			let headersToUse: string[] = [];

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
			let newHeader = "";

			for (let i = 0; i <= decreaseBy; i++) {
				newHeader += "#";
			}

			newHeader += header.substring(decreaseBy);

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
}
