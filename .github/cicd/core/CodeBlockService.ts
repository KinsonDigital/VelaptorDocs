import { Utils } from "./Utils.ts";

export class CodeBlockService {
	private readonly codeBlockStart: RegExp;
	private readonly codeBlockEnd: RegExp;

	constructor() {
		this.codeBlockStart = /^ *```csharp$/;
		this.codeBlockEnd = /^ *```$/;
	}

	public getCodeBlockIndices(fileContent: string): [number, number][] {
		const fileLines: string[] = Utils.toLines(fileContent);

		return this.getEnabledFlags(fileLines);
	}

	public inAnyCodeBlocks(blocks: [number, number][], lineIndex: number): boolean {
		for (const block of blocks) {
			if (this.inCodeBlock(block, lineIndex)) {
				return true;
			}
		}

		return false;
	}

	private inCodeBlock(block: [number, number], lineIndex: number): boolean {
		if (block[0] === block[1]) {
			return false;
		}

		return lineIndex >= block[0] && lineIndex <= block[1];
	}

	private getEnabledFlags(lines: string[]): [number, number][] {
		const result: [number, number][] = [];
		const starts: number[] = [];
		const stops: number[] = [];

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			if (this.isStart(line)) {
				starts.push(i);
			} else if (this.isEnd(line)) {
				stops.push(i);
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

	private isStart(value: string): boolean {
		const matches = value.match(this.codeBlockStart);

		return matches != null && matches.length > 0;
	}

	private isEnd(value: string): boolean {
		const matches = value.match(this.codeBlockEnd);

		return matches != null && matches.length > 0;
	}
}
