import { existsSync } from "@std/fs";
import { Utils } from "../Utils.ts";

/**
 * Makes the DefaultDocumentation generated anchors and markdown link fragments compatible with Docusaurus.
 *
 * Docusaurus only recognizes markdown headings (h2-h6) as anchor targets.  DefaultDocumentation emits
 * raw HTML anchor tags (<a name='...'></a>), which Docusaurus does not recognize as anchors, and creates
 * markdown link fragments that do not match the auto-generated heading ids of the target pages.
 * This causes the Docusaurus build to report broken anchor warnings for the API documentation.
 *
 * This service performs the following processing:
 * - Adds the fully qualified member id of each HTML anchor tag as an explicit id to the markdown
 *   heading that directly follows it.  This is done using the Docusaurus classic heading id syntax
 *   `\{#id}` so the heading id exactly matches the ids used in the generated link fragments.
 * - Rewrites the fragment of every internal markdown link to an explicit heading id that exists on
 *   the target page.  The fully qualified target id is taken from the link hover text:
 *   - Members: the fragment is set to the normalized id of the member's heading.
 *   - Parameters and type parameters: the fragment points to the heading of the member that owns them.
 *   - Enum members: the fragment is removed because enum members do not have headings.
 */
export class AnchorService {
	/** Matches a line that only contains a DefaultDocumentation HTML anchor tag. */
	private static readonly anchorLineRegEx = /^<a name='(.+)'><\/a>\s*$/;
	/** Matches a markdown heading line. */
	private static readonly headingLineRegEx = /^#{1,6}\s/;
	/** Matches the end of a heading line that already contains a Docusaurus classic heading id. */
	private static readonly headingIdSuffixRegEx = /\\\{#[^{}]*\}\s*$/;
	/** Matches internal markdown link urls to other API documentation pages. */
	private static readonly internalLinkUrlRegEx = /^[A-Za-z0-9_.\-]+\.md$/;

	private readonly headingIdsCache = new Map<string, Set<string> | undefined>();

	/**
	 * Normalizes the given fully qualified member id into the anchor id form that is used for
	 * heading ids and link fragments.  All spaces are removed and angle brackets are replaced
	 * with underscores.
	 * @param fullId The fully qualified id to normalize.
	 * @returns The normalized anchor id.
	 */
	public static toAnchorId(fullId: string): string {
		return fullId.replaceAll(" ", "").replaceAll("<", "_").replaceAll(">", "_");
	}

	/**
	 * Unescapes all markdown escaped characters in the given {@link value}.
	 * @param value The value to unescape.
	 * @returns The unescaped value.
	 */
	private static unescape(value: string): string {
		return value.replace(/\\(.)/g, "$1");
	}

	/**
	 * Adds an explicit Docusaurus heading id to every markdown heading that directly follows an
	 * HTML anchor tag.  The id is the normalized value of the anchor tag's name attribute.
	 * @param fileContent The file content to process.
	 * @returns The processed file content.
	 */
	public addHeadingIds(fileContent: string): string {
		const lines = Utils.toLines(fileContent);
		let inCodeBlock = false;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			if (line.startsWith("```")) {
				inCodeBlock = !inCodeBlock;
				continue;
			}

			if (inCodeBlock) {
				continue;
			}

			const match = AnchorService.anchorLineRegEx.exec(line);
			if (match === null) {
				continue;
			}

			const headingLineIndex = this.nextNonEmptyLineIndex(lines, i + 1);
			if (headingLineIndex === -1) {
				continue;
			}

			const headingLine = lines[headingLineIndex];
			if (!AnchorService.headingLineRegEx.test(headingLine) ||
				AnchorService.headingIdSuffixRegEx.test(headingLine)
			) {
				continue;
			}

			const anchorId = AnchorService.toAnchorId(AnchorService.unescape(match[1]));
			lines[headingLineIndex] = `${headingLine.trimEnd()} \\{#${anchorId}}`;
		}

		return Utils.toString(lines);
	}

	/**
	 * Rewrites the fragment of every internal markdown link so it points to an explicit heading id
	 * that exists on the target page.  The fully qualified target id is extracted from the link
	 * hover text.  Links that cannot be resolved to a heading are rewritten to link to the target
	 * page itself.  Malformed links that are missing their closing square bracket are repaired.
	 * @param fileContent The file content to process.
	 * @param getTargetHeadingIds A function that returns all heading anchor ids of the target page
	 * with the given file name, or undefined if the target page does not exist.
	 * @param onLinkRewritten An optional callback that is invoked for every rewritten link.
	 * @returns The processed file content.
	 */
	public rewriteLinkFragments(
		fileContent: string,
		getTargetHeadingIds: (mdFileName: string) => Set<string> | undefined,
		onLinkRewritten?: (info: { url: string; oldFragment: string; newFragment: string; targetId: string }) => void,
	): string {
		const lines = Utils.toLines(fileContent);
		let inCodeBlock = false;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			if (line.startsWith("```")) {
				inCodeBlock = !inCodeBlock;
				continue;
			}

			if (inCodeBlock) {
				continue;
			}

			lines[i] = this.processLine(line, getTargetHeadingIds, onLinkRewritten);
		}

		return Utils.toString(lines);
	}

	/**
	 * Gets all heading anchor ids of the target page with the given {@link mdFileName} located in
	 * the given {@link dirPath}.  A heading anchor id is the normalized name attribute value of an
	 * HTML anchor tag that directly precedes a markdown heading.  The result is cached.
	 * @param dirPath The directory path that contains the target page.
	 * @param mdFileName The file name of the target page.
	 * @returns All heading anchor ids of the target page, or undefined if the target page does not exist.
	 */
	public getHeadingAnchorIds(dirPath: string, mdFileName: string): Set<string> | undefined {
		const cacheKey = `${dirPath}/${mdFileName}`;

		if (this.headingIdsCache.has(cacheKey)) {
			return this.headingIdsCache.get(cacheKey);
		}

		const filePath = `${dirPath}/${mdFileName}`;
		let headingIds: Set<string> | undefined = undefined;

		if (existsSync(filePath)) {
			const lines = Utils.toLines(Deno.readTextFileSync(filePath));
			headingIds = new Set<string>();

			for (let i = 0; i < lines.length; i++) {
				const match = AnchorService.anchorLineRegEx.exec(lines[i]);
				if (match === null) {
					continue;
				}

				const headingLineIndex = this.nextNonEmptyLineIndex(lines, i + 1);
				if (headingLineIndex === -1 || !AnchorService.headingLineRegEx.test(lines[headingLineIndex])) {
					continue;
				}

				headingIds.add(AnchorService.toAnchorId(AnchorService.unescape(match[1])));
			}
		}

		this.headingIdsCache.set(cacheKey, headingIds);
		return headingIds;
	}

	/**
	 * Processes all markdown links in the given {@link line}.
	 * @param line The line to process.
	 * @param getTargetHeadingIds A function that returns all heading anchor ids of a target page.
	 * @param onLinkRewritten An optional callback that is invoked for every rewritten link.
	 * @returns The processed line.
	 */
	private processLine(
		line: string,
		getTargetHeadingIds: (mdFileName: string) => Set<string> | undefined,
		onLinkRewritten?: (info: { url: string; oldFragment: string; newFragment: string; targetId: string }) => void,
	): string {
		let result = "";
		let i = 0;

		while (i < line.length) {
			const char = line[i];

			// Copy escaped characters verbatim
			if (char === "\\" && i + 1 < line.length) {
				result += line.slice(i, i + 2);
				i += 2;
				continue;
			}

			// Copy inline code spans verbatim
			if (char === "`") {
				const codeSpanEnd = this.findCodeSpanEnd(line, i);
				result += line.slice(i, codeSpanEnd);
				i = codeSpanEnd;
				continue;
			}

			if (char === "[") {
				const parsedLink = this.parseLink(line, i);
				if (parsedLink === null) {
					result += char;
					i += 1;
					continue;
				}

				result += this.buildLink(parsedLink, getTargetHeadingIds, onLinkRewritten);
				i = parsedLink.endIndex;
				continue;
			}

			result += char;
			i += 1;
		}

		return result;
	}

	/**
	 * Finds the index directly after the closing backticks of the inline code span that starts
	 * at the given {@link startIndex}.  Unterminated code spans run until the end of the line.
	 * @param line The line to search.
	 * @param startIndex The index of the opening backtick.
	 * @returns The index directly after the closing backticks.
	 */
	private findCodeSpanEnd(line: string, startIndex: number): number {
		let runLength = 0;
		let i = startIndex;

		while (i < line.length && line[i] === "`") {
			runLength++;
			i++;
		}

		while (i < line.length) {
			if (line[i] !== "`") {
				i++;
				continue;
			}

			let closeRunLength = 0;
			let closeIndex = i;

			while (closeIndex < line.length && line[closeIndex] === "`") {
				closeRunLength++;
				closeIndex++;
			}

			if (closeRunLength === runLength) {
				return closeIndex;
			}

			i = closeIndex;
		}

		return line.length;
	}

	/**
	 * Parses the markdown link that starts at the given {@link startIndex} in the given {@link line}.
	 * A link is considered malformed when its link text contains square brackets but is missing its
	 * closing square bracket before the opening parenthesis of the url.
	 * @param line The line to parse.
	 * @param startIndex The index of the opening square bracket of the link text.
	 * @returns The parsed link, or null if there is no markdown link at the given index.
	 */
	private parseLink(line: string, startIndex: number): { text: string; dest: string; repairClosingBracket: boolean; raw: string; endIndex: number } | null {
		let i = startIndex + 1;
		let text = "";
		let bracketDepth = 0;
		let containsBrackets = false;

		while (i < line.length) {
			const char = line[i];

			if (char === "\\" && i + 1 < line.length) {
				const escapedChar = line[i + 1];
				containsBrackets = containsBrackets || escapedChar === "[" || escapedChar === "]";
				text += char + escapedChar;
				i += 2;
				continue;
			}

			if (char === "[") {
				bracketDepth++;
				containsBrackets = true;
				text += char;
				i += 1;
				continue;
			}

			if (char === "]") {
				if (bracketDepth > 0) {
					bracketDepth--;
					containsBrackets = true;
					text += char;
					i += 1;
					continue;
				}

				// A ']' that is directly followed by '(' closes the link text
				if (i + 1 < line.length && line[i + 1] === "(") {
					return this.parseDestination(line, i + 2, text, false, startIndex);
				}

				return null;
			}

			if (char === "(") {
				// A '(' while the link text is still open means the closing ']' is missing.
				// Only repair links that contain square brackets in their text.
				if (!containsBrackets) {
					return null;
				}

				return this.parseDestination(line, i + 1, text, true, startIndex);
			}

			text += char;
			i += 1;
		}

		return null;
	}

	/**
	 * Parses the url section of a markdown link that starts at the given {@link startIndex} in the
	 * given {@link line}.  The url ends at the parenthesis that matches the opening parenthesis.
	 * @param line The line to parse.
	 * @param startIndex The index of the opening parenthesis of the url.
	 * @param text The raw text of the link.
	 * @param repairClosingBracket Whether the link text is missing its closing square bracket.
	 * @param linkStartIndex The index of the opening square bracket of the link text.
	 * @returns The parsed link, or null if the url is unterminated.
	 */
	private parseDestination(
		line: string,
		startIndex: number,
		text: string,
		repairClosingBracket: boolean,
		linkStartIndex: number,
	): { text: string; dest: string; repairClosingBracket: boolean; raw: string; endIndex: number } | null {
		let i = startIndex;
		let parenDepth = 1;
		let dest = "";

		while (i < line.length) {
			const char = line[i];

			if (char === "\\" && i + 1 < line.length) {
				dest += char + line[i + 1];
				i += 2;
				continue;
			}

			if (char === "(") {
				parenDepth++;
				dest += char;
				i += 1;
				continue;
			}

			if (char === ")") {
				parenDepth--;
				if (parenDepth === 0) {
					break;
				}

				dest += char;
				i += 1;
				continue;
			}

			dest += char;
			i += 1;
		}

		if (parenDepth !== 0) {
			return null;
		}

		return {
			text: text,
			dest: dest,
			repairClosingBracket: repairClosingBracket,
			raw: line.slice(linkStartIndex, i + 1),
			endIndex: i + 1,
		};
	}

	/**
	 * Builds the markdown link for the given {@link link} with a fragment that resolves to an
	 * explicit heading id on the target page.
	 * @param link The parsed link to build.
	 * @param getTargetHeadingIds A function that returns all heading anchor ids of a target page.
	 * @param onLinkRewritten An optional callback that is invoked for every rewritten link.
	 * @returns The markdown link.
	 */
	private buildLink(
		link: { text: string; dest: string; repairClosingBracket: boolean; raw: string; endIndex: number },
		getTargetHeadingIds: (mdFileName: string) => Set<string> | undefined,
		onLinkRewritten?: (info: { url: string; oldFragment: string; newFragment: string; targetId: string }) => void,
	): string {
		const spaceIndex = link.dest.indexOf(" ");
		let urlSection = spaceIndex === -1 ? link.dest : link.dest.slice(0, spaceIndex);
		let hoverSection = spaceIndex === -1 ? "" : link.dest.slice(spaceIndex + 1).trim();

		// Treat the section after the first space as hover text only if it is quoted
		if (hoverSection !== "" && !hoverSection.startsWith("'")) {
			urlSection = link.dest;
			hoverSection = "";
		}

		const fragmentIndex = urlSection.indexOf("#");
		const urlWithoutFragment = fragmentIndex === -1 ? urlSection : urlSection.slice(0, fragmentIndex);
		const isInternalLink = AnchorService.internalLinkUrlRegEx.test(urlWithoutFragment);

		// Leave external links and links without a fragment untouched
		if (!isInternalLink || fragmentIndex === -1) {
			return link.repairClosingBracket ? this.rebuildLink(link, urlSection, hoverSection) : link.raw;
		}

		const targetPageHeadingIds = getTargetHeadingIds(urlWithoutFragment);

		// Leave the link untouched if the target page does not exist
		if (targetPageHeadingIds === undefined) {
			return link.raw;
		}

		const url = urlSection.slice(0, fragmentIndex);
		const oldFragment = urlSection.slice(fragmentIndex + 1);
		const hoverTextMatch = /^'(.*)'$/.exec(hoverSection);
		const targetId = hoverTextMatch === null ? "" : AnchorService.toAnchorId(AnchorService.unescape(hoverTextMatch[1]));

		let newFragment = "";

		if (targetId !== "" && targetPageHeadingIds.has(targetId)) {
			newFragment = targetId;
		} else {
			// Parameters and type parameters point to the heading of the member that owns them
			const ownerId = this.stripLastSegment(targetId);
			if (targetId !== "" && ownerId !== "" && targetPageHeadingIds.has(ownerId)) {
				newFragment = ownerId;
			} else if (targetId === "" && targetPageHeadingIds.has(oldFragment)) {
				// Keep fragments of links without hover text that already resolve
				newFragment = oldFragment;
			}
		}

		if (!link.repairClosingBracket && newFragment === oldFragment) {
			return link.raw;
		}

		if (onLinkRewritten !== undefined) {
			onLinkRewritten({ url: url, oldFragment: oldFragment, newFragment: newFragment, targetId: targetId });
		}

		return this.rebuildLink(link, newFragment === "" ? url : `${url}#${newFragment}`, hoverSection);
	}

	/**
	 * Rebuilds the markdown link for the given {@link link} using the given {@link urlSection}
	 * and {@link hoverSection}.
	 * @param link The parsed link to rebuild.
	 * @param urlSection The url section of the link including the fragment.
	 * @param hoverSection The quoted hover text of the link without the leading space.
	 * @returns The rebuilt markdown link.
	 */
	private rebuildLink(
		link: { text: string; repairClosingBracket: boolean },
		urlSection: string,
		hoverSection: string,
	): string {
		const hoverPart = hoverSection === "" ? "" : ` ${hoverSection}`;

		// For repaired links the template's closing square bracket restores the missing
		// bracket of the link text.
		return `[${link.text}](${urlSection}${hoverPart})`;
	}

	/**
	 * Removes the last top level segment from the given fully qualified {@link id}.  Top level
	 * segments are separated by dots that are not located inside parenthesis or square brackets.
	 * @param id The fully qualified id to strip.
	 * @returns The id without its last segment, or an empty id if there is no segment to strip.
	 */
	private stripLastSegment(id: string): string {
		let depth = 0;
		let lastTopLevelDotIndex = -1;

		for (let i = 0; i < id.length; i++) {
			const char = id[i];

			if (char === "(" || char === "[") {
				depth++;
			} else if (char === ")" || char === "]") {
				if (depth > 0) {
					depth--;
				}
			} else if (char === "." && depth === 0) {
				lastTopLevelDotIndex = i;
			}
		}

		return lastTopLevelDotIndex === -1 ? "" : id.slice(0, lastTopLevelDotIndex);
	}

	/**
	 * Gets the index of the next line that is not empty, starting at the given {@link startIndex}.
	 * @param lines The lines to search.
	 * @param startIndex The index to start the search at.
	 * @returns The index of the next non-empty line, or -1 if there is none.
	 */
	private nextNonEmptyLineIndex(lines: string[], startIndex: number): number {
		for (let i = startIndex; i < lines.length; i++) {
			if (lines[i].trim() !== "") {
				return i;
			}
		}

		return -1;
	}
}
