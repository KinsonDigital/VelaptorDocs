/**
 * Processes URL fragments inside of markdown link URL text by converting them to lowercase and extracting only
 * the member name from the fully qualified C# type.
 */
export class ProcessFragmentService {
	private readonly leftBracket = "[";
	private readonly leftParen = "(";
	private readonly rightParen = ")";

	/**
	 * Processes all markdown links in the given {@link text}.
	 * @param text The text to process.
	 * @returns The processed text.
	 */
	public processFragments(text: string): string {
		const links: string[] = this.extractLinks(text);

		// Create all of the new links if they contain fragments
		links.forEach((link) => {
			const hoverTextRegex = /'.+'/g;

			const linkText = this.extractLinkText(link);
			let linkUrl = this.extractLinkUrl(link);

			if (linkUrl.includes("#")) {
				let hoverText = hoverTextRegex.exec(linkUrl)?.[0] ?? "";
				hoverText = hoverText === "" ? "" : ` ${hoverText}`;

				linkUrl = linkUrl.replace(hoverText, "").trimEnd();

				let [fragPrefix, fragment] = linkUrl.split("#");

				fragment = fragment.includes(".") ? fragment.split(".").pop() ?? "" : fragment;

				fragment = fragment.toLowerCase();

				const newLink = `[${linkText}](${fragPrefix}#${fragment}${hoverText})`;

				text = text.replaceAll(link, newLink);
			}
		});

		return text;
	}

	/**
	 * Extracts all links from the given {@link text}.
	 * @param text The text to extract links from.
	 * @returns The extracted links.
	 */
	private extractLinks(text: string): string[] {
		const links: string[] = [];
		const link: string[] = [];
		let insideLink = false;
		let parenNestLevel = 0;

		for (let i = 0; i < text.length; i++) {
			const char = text[i];

			switch (char) {
				case this.leftBracket:
					insideLink = true;
					link.push(char);
					continue;
				case this.leftParen:
					parenNestLevel = i < text.length - 1 ? parenNestLevel + 1 : parenNestLevel;
					break;
				case this.rightParen:
					link.push(char);
					parenNestLevel -= 1;

					// If the paren next level is 0, then we are not inside a link
					insideLink = parenNestLevel > 0;

					if (!insideLink) {
						links.push(link.join(""));

						// Empty the array
						link.length = 0;
					}
					continue;
			}

			if (insideLink) {
				link.push(char);
			}
		}

		return links;
	}

	/**
	 * Extracts the link text from the given {@link markdownLink}.
	 * @param markdownLink The link to extract the text from.
	 * @returns The extracted link text.
	 */
	private extractLinkText(markdownLink: string): string {
		const linkTextRegex = /\[.+?\]/g;
		const result = (linkTextRegex.exec(markdownLink)?.[0] ?? "").replace("[", "").replace("]", "");

		return result;
	}

	/**
	 * Extracts the link URL from the given {@link markdownLink}.
	 * @param markdownLink The link to extract the URL from.
	 * @returns The extracted link URL.
	 */
	private extractLinkUrl(markdownLink: string): string {
		const linkUrlRegex = /\(.+\)/;
		let result = linkUrlRegex.exec(markdownLink)?.[0] ?? "";

		result = result.startsWith("(") ? result.substring(1) : result;
		result = result.endsWith(")") ? result.substring(0, result.length - 1) : result;

		return result;
	}
}
