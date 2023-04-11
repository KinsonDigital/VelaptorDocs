/**
 * Provides coloring to text.
 */
export class ChalkColor {
	private static readonly gray: string = "\u001b[2m${TXT}\u001b[2m";
	private static readonly cyan: string = "\u001b[36m${TXT}\u001b[39m";
	private static readonly yellow: string = "\u001b[33m${TXT}\u001b[39m";
	private static readonly orange: string = "\u001b[38;2;220;130;63m${TXT}\u001b[39m";
	private static readonly red: string = "\u001b[31m${TXT}\u001b[39m";

	public static normal(value: string): string {
		return value;
	}

	public static dim(value: string): string {
		return ChalkColor.gray.replace("${TXT}", value);
	}

	public static header(value: string): string {
		return ChalkColor.cyan.replace("${TXT}", value);
	}

	public static prompt(value: string): string {
		return ChalkColor.yellow.replace("${TXT}", value);
	}

	public static warning(value: string): string {
		return ChalkColor.orange.replace("${TXT}", value);
	}

	public static error(value: string): string {
		return ChalkColor.red.replace("${TXT}", value);
	}
}
