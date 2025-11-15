import { basename, extname } from "@std/path";
import { CodeBlockService } from "./CodeBlockService.ts";
import { HTMLService } from "./HTMLService.ts";
import { MarkdownHeaderService } from "./MarkdownHeaderService.ts";
import { MarkdownService } from "./MarkdownService.ts";
import { Utils } from "../Utils.ts";
import { ProcessFragmentService } from "./ProcessFragmentService.ts";

export class MarkdownFileContentService {
	private readonly markDownService: MarkdownService;
	private readonly markdownHeaderService: MarkdownHeaderService;
	private readonly htmlService: HTMLService;
	private readonly codeBlockService: CodeBlockService;
	private readonly singleLinkRegEx: RegExp;
	private readonly linkTagRegEx: RegExp;
	private readonly htmlArrow = "&#129106;";

	constructor() {
		this.markDownService = new MarkdownService();
		this.markdownHeaderService = new MarkdownHeaderService();
		this.htmlService = new HTMLService();
		this.codeBlockService = new CodeBlockService();
		this.singleLinkRegEx = /\[.+?\]\(.+?\)/g;
		this.linkTagRegEx = /<a\s+name\s*=\s*'(.+)'><\/a\s*>/;
	}

	public processMarkdownFile(filePath: string): void {
		Utils.isNothing(filePath);

		filePath = filePath.trim();

		let fileContent: string = Deno.readTextFileSync(filePath);
		fileContent = fileContent.replaceAll(this.htmlArrow, "→");

		// Replace all links to the 'index.md' file with the 'namespaces.md' file
		fileContent = this.replaceAllLinkUrls(
			fileContent,
			"Namespaces.md 'Velaptor Namespaces'",
			(_: string, url: string) => {
				return url.startsWith("index.md");
			},
		);

		// If the file is the index.md file
		if (filePath.toLowerCase().endsWith("index.md")) {
			fileContent = this.processTable(fileContent);
		}

		// Process all HTML entities in C# code blocks
		fileContent = this.processHTMLEntitiesInCodeDocs(fileContent);

		// Process all link tags which are these 👉🏼 <a name/>
		fileContent = this.processLinkTags(fileContent);

		// Process all markdown headers with no markdown links like these 👉🏼 ### MyHeader
		// This will replace all headers that contain angle brackets with html safe alternatives
		fileContent = this.processHeaderAngleBrackets(fileContent);

		// Process paragraph type content for angle brackets
		fileContent = this.processParagraphAngleBrackets(fileContent);

		// Process all headers to change them to the appropriate size
		fileContent = this.markdownHeaderService.processHeaders(fileContent);

		// Process all fragments in markdown links 👉🏼 [stuff](Item1.Item2#Item1.Item2) gets converted to [stuff](Item1.Item2#item2)
		fileContent = this.processMarkdownLinkFragments(fileContent);

		// Extract the name of the file without its extension
		const baseName = basename(filePath);
		const extension = extname(filePath);
		const fileNameWithoutExtension = baseName.slice(0, baseName.length - extension.length);

		const title: string = Utils.underscoresToAngles(fileNameWithoutExtension);
		const frontMatter: string = this.markDownService.createFrontMatter(title);

		fileContent = `${frontMatter}${fileContent}`;

		Deno.writeTextFileSync(filePath, fileContent);
	}

	private processLinkTags(fileContent: string): string {
		const fileLines: string[] = Utils.toLines(fileContent);

		for (let i = 0; i < fileLines.length; i++) {
			const line = fileLines[i];

			const linkTagMatches = line.match(this.linkTagRegEx);
			const isLinkTag: boolean = linkTagMatches !== null && linkTagMatches.length > 0;

			if (isLinkTag) {
				let nameValue: string = this.htmlService.getNameAttrValue(line);
				nameValue = Utils.underscoresToAngles(nameValue);

				fileLines[i] = this.htmlService.createLinkTag(nameValue);
			}
		}

		return Utils.toString(fileLines);
	}

	/**
	 * Processes the given {@link fileContent} by finding all markdown links that contain fragments
	 * in the url and changes the fragment by setting it to lowercase, replacing spaces with hyphens,
	 * and removing all api namespace prefixes.
	 * @param fileContent The content of the file to process.
	 * @returns The processed file content.
	 */
	private processMarkdownLinkFragments(fileContent: string): string {
		const fileLines: string[] = Utils.toLines(fileContent);

		const service = new ProcessFragmentService();

		for (let i = 0; i < fileLines.length; i++) {
			fileLines[i] = service.processFragments(fileLines[i]);
		}

		return `${fileLines.join("\n")}\n`;
	}

	/**
	 * Updates the url fragment in the given {@link markdownLink} if it contains some hover text
	 * and the fragment contains periods which means it is a fully qualified type name.
	 * @param markdownLink The markdown link.
	 * @returns The updated markdown link.
	 */
	private updateMarkdownLinkFragment(markdownLink: string): string {
		const hoverTextRegex = /'.+?'/gm;

		const linkText = this.markDownService.extractLinkText(markdownLink);
		const fullUrl = this.markDownService.extractLinkUrl(markdownLink);
		const containsHoverText = hoverTextRegex.test(fullUrl);
		const containsFragment = fullUrl.includes("#");

		if (containsHoverText && containsFragment) {
			const [urlSection, hoverTextSection] = fullUrl.split(" ");

			const [url, fragment] = urlSection.split("#");

			if (fragment.includes(".")) {
				const fragmentSections = fragment.split(".");
				const fragmentIsGenericParam = fragment.includes("_T_");

				const newFragment = fragmentIsGenericParam
					? "type-parameters"
					: fragmentSections[fragmentSections.length - 1].toLowerCase().replace(" ", "-");

				const newUrl = `${url}#${newFragment} ${hoverTextSection}`;
				return this.markDownService.createLink(linkText, newUrl);
			}
		}

		return "";
	}

	private processHeaderAngleBrackets(fileContent: string): string {
		if (Utils.isNothing(fileContent)) {
			return "";
		}

		const fileLines: string[] = Utils.toLines(fileContent);

		for (let i = 0; i < fileLines.length; i++) {
			const line = fileLines[i];

			if (this.markDownService.isHeaderLine(line) && this.markDownService.doesNotHaveLink(line)) {
				fileLines[i] = this.markDownService.replaceAngleBrackets(line);
			}
		}

		return Utils.toString(fileLines);
	}

	private processParagraphAngleBrackets(fileContent: string): string {
		const codeBlocks: [number, number][] = this.codeBlockService.getCodeBlockIndices(fileContent);

		const fileLines: string[] = Utils.toLines(fileContent);

		for (let i = 0; i < fileLines.length; i++) {
			const line = fileLines[i];

			const notEmpty = line !== "";
			const containsAngles: boolean = line.indexOf("<") !== -1 && line.indexOf(">") !== -1;
			const notCodeBlock = !this.codeBlockService.inAnyCodeBlocks(codeBlocks, i);
			const notHeader = !this.markDownService.isHeaderLine(line);
			const notHTMLLink = !this.htmlService.isHTMLLink(line);
			const containsMarkdownLink = this.markDownService.containsMarkdownLink(line);

			if (notEmpty && containsAngles && notCodeBlock && notHeader && notHTMLLink && containsMarkdownLink) {
				// Skip the processing of any markdown link content

				// Find the index of the first '[' and the last index of the ')'
				const start = line.indexOf("[");
				const end = line.lastIndexOf(")") + 1;

				// Get the markdown link content between
				const markdownLinkContent: string = line.slice(start, end);

				// Split the content by the markdown link content
				const nonMarkdownSections: string[] = line.split(markdownLinkContent);

				// Process any angle brackets from the non markdown link content
				for (let i = 0; i < nonMarkdownSections.length; i++) {
					nonMarkdownSections[i] = this.markDownService.replaceAngleBrackets(nonMarkdownSections[i]);
				}

				// Rejoin the items and the markdown link section
				const newLineSections: string[] = [];
				newLineSections.push(nonMarkdownSections[0]);
				newLineSections.push(markdownLinkContent);
				newLineSections.push(nonMarkdownSections[1]);

				const newLine: string = newLineSections.join("");

				fileLines[i] = newLine;
			}
		}

		return Utils.toString(fileLines);
	}

	private processTable(fileContent: string): string {
		const fileLines: string[] = Utils.toLines(fileContent);

		for (let i = 0; i < fileLines.length; i++) {
			const line = fileLines[i];

			if (line.lastIndexOf("| |") !== -1) {
				fileLines[i] = line.replace("| |", "|");
			} else if (line.indexOf("| :--- |") !== -1) {
				fileLines[i] = "| :--- |";
			}
		}

		return Utils.toString(fileLines);
	}

	private replaceAllLinkUrls(
		fileContent: string,
		newUrl: string,
		predicate: ((text: string, url: string) => boolean) | null = null,
	): string {
		const matches = fileContent.match(this.singleLinkRegEx);
		matches?.forEach((link) => {
			const text: string = this.markDownService.extractLinkText(link);
			const url: string = this.markDownService.extractLinkUrl(link);

			if (predicate === null || predicate(text, url)) {
				const newLink: string = this.markDownService.replaceUrl(link, newUrl);

				fileContent = fileContent.replaceAll(link, newLink);
			}
		});

		return fileContent;
	}

	private processHTMLEntitiesInCodeDocs(fileContent: string): string {
		const leftCurlyHTMLEntity = "&#123;";
		const rightCurlyHTMLEntity = "&#125;";

		const lines: string[] = fileContent.split(/\r?\n/);
		let insideCodeBlock = false;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			if (this.markDownService.isCodeBlockStartLine(line)) {
				insideCodeBlock = true;
			} else if (this.markDownService.isCodeBlockStopLine(line)) {
				insideCodeBlock = false;
			}

			if (insideCodeBlock) {
				continue;
			}

			lines[i] = lines[i].replaceAll("{", leftCurlyHTMLEntity);
			lines[i] = lines[i].replaceAll("}", rightCurlyHTMLEntity);
		}

		return lines.join("\n");
	}
}
