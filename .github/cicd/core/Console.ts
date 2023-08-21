import { writeAllSync } from "std/streams/write_all.ts";

/**
 * Provides the ability read from and write to the console.
 */
export class Console {
	/**
	 * Writes the given text to the console.
	 * @param text The text to write to the console.
	 */
	public writeLine(text: string): void {
		const encodedText = new TextEncoder().encode(text);
		writeAllSync(Deno.stdout, encodedText);
	}

	/**
	 * Gets user input from the console.
	 * @returns Returns the user input from the console.
	 */
	public async readLine(): Promise<string> {
		// create a buffer to store input data
		const buf = new Uint8Array(1024);

		// read input data into the buffer
		const n = await Deno.stdin.read(buf);
		const totalInputChars = n === null ? 0 : n;

		// convert buffer data to string and remove any trailing whitespace
		const input = new TextDecoder().decode(buf.subarray(0, totalInputChars)).trim();

		return input;
	}
}
