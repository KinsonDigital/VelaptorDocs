/**
 * Provides coloring to text.
 */
export class chalk {
	private static readonly grayStr: string = "\u001b[2m${TXT}\u001b[2m";
	private static readonly cyanStr: string = "\u001b[36m${TXT}\u001b[39m";
	private static readonly yellowStr: string = "\u001b[33m${TXT}\u001b[39m";
	private static readonly orangeStr: string = "\u001b[38;2;220;130;63m${TXT}\u001b[39m";
	private static readonly redStr: string = "\u001b[31m${TXT}\u001b[39m";

	public static normal(value: string): string {
		return value;
	}

	public static gray(value: string): string {
		return chalk.grayStr.replace("${TXT}", value);
	}

	public static cyan(value: string): string {
		return chalk.cyanStr.replace("${TXT}", value);
	}

	public static yellow(value: string): string {
		return chalk.yellowStr.replace("${TXT}", value);
	}

	public static orange(value: string): string {
		return chalk.orangeStr.replace("${TXT}", value);
	}

	public static red(value: string): string {
		return chalk.redStr.replace("${TXT}", value);
	}
}
