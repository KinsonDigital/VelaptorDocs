/**
 * A simple CLI command wrapper.
 */
export class CLI {
	/**
	 * Runs the following CLI {@link command}.
	 * @param command The command to run.
	 * @returns The output of the command if successful, otherwise an error.
	 */
	public async runAsync(command: string): Promise<string | Error> {
		if (command === undefined || command === null || command === "") {
			const errorMsg = "The command parameter cannot be null or empty.";
			Deno.exit(1);
		}

		if (!command.includes(" ")) {
			const errorMsg = "The command parameter must include a space.";
			Deno.exit(1);
		}

		const sections: string[] = command.split(" ");

		const app = sections[0];
		const args = sections.slice(1);

		const cmd = new Deno.Command(app, { args: args });

		const { code, stdout, stderr } = await cmd.output();

		if (code === 0) {
			return new TextDecoder().decode(stdout);
		} else {
			return new Error(new TextDecoder().decode(stderr));
		}
	}
}
