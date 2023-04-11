import { readLines } from "https://deno.land/std@0.182.0/io/mod.ts";
import { writeAll } from "https://deno.land/std@0.182.0/streams/write_all.ts";

/**
 * Represents a service for running commands.
 */
export class RunnerService {
	/**
	 * Runs the given commands.
	 * @param {string[]} commands The commands to run.
	 * @param [boolean] doNotWriteToConsole Whether or not to write the output to the console.
	 * @returns {Promise<void>} A promise that resolves when the commands have been run.
	 */
	public async run(
		commands: string[],
		logStdToConsole = true,
		logErrToConsole = true,
	): Promise<[success: boolean, msg: string]> {
		try {
			const process = Deno.run({
				cmd: commands,
				stdout: "piped",
				stderr: "piped",
			});

			const output: string = await this.pipeThroughStdOut(
				process.stdout,
				Deno.stdout,
				commands[0],
				logStdToConsole,
			);
			await this.pipeThroughStdErr(process.stderr, Deno.stderr, commands[0], logErrToConsole);

			const result: [boolean, string] = [true, output];

			process.close();

			return result;
		} catch (error) {
			if (error instanceof Deno.errors.NotFound) {
				console.log(`\nThe program ${commands[0]} was not found.`);
				Deno.exit();
			}

			console.error(`\n${error.message}`);
			Deno.exit();
		}
	}

	/**
	 * Pipes the output of a command to the console.
	 * @param reader The reader to read from.
	 * @param writer The writer to write to.
	 * @param prefix The text to prefix to each line of output.
	 */
	private async pipeThroughStdOut(
		reader: Deno.Reader,
		writer: Deno.Writer,
		prefix = "",
		doNotWriteToConsole: boolean,
	): Promise<string> {
		const encoder = new TextEncoder();
		const collectedOutput: string[] = [];

		prefix = prefix === undefined || prefix === null || prefix === "" ? "" : `[${prefix.trim()}]`;

		for await (const line of readLines(reader)) {
			collectedOutput.push(line);

			if (doNotWriteToConsole) {
				await writeAll(writer, encoder.encode(`\n${prefix} ${line}`));
			}
		}

		return collectedOutput.join("\n");
	}

	/**
	 * Pipes the output of a command to the console.
	 * @param reader The reader to read from.
	 * @param writer The writer to write to.
	 * @param prefix The text to prefix to each line of output.
	 */
	private async pipeThroughStdErr(
		reader: Deno.Reader,
		writer: Deno.Writer,
		prefix = "",
		logErrToConsole: boolean,
	): Promise<void> {
		const encoder = new TextEncoder();

		prefix = prefix === undefined || prefix === null || prefix === "" ? "" : `[${prefix.trim()}]`;

		for await (const line of readLines(reader)) {
			if (logErrToConsole) {
				await writeAll(writer, encoder.encode(`\n${prefix} ${line}`));
			}
		}
	}
}
