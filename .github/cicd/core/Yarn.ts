import chalk from "npm:chalk@5.3.0";

/**
 * Executes yarn commands.
 */
export class Yarn {
	/**
	 * Runs yarn commands.
	 */
	public async run(commands: string[]): Promise<void> {
		if (commands === undefined || commands.length === 0) {
			console.log(chalk.red("The commands parameter must not be empty."));
			Deno.exit();
		}

		const yarn = this.getYarnLocation();

		console.log(chalk.gray(`Running Yarn Command: ${commands.join(" ")}`));

		const command = new Deno.Command(yarn, {
			args: commands,
		});

		const { code, stdout, stderr } = await command.output();

		if (code === 0) {
			console.log(new TextDecoder().decode(stdout));
		} else {
			console.log(new TextDecoder().decode(stderr));
			Deno.exit(code);
		}
	}

	/**
	 * Returns the system user name.
	 * @returns The system user name.
	 */
	private sysUserName(): string {
		const envUserName: string | undefined = this.isWindowsEnv() ? Deno.env.get("USERNAME") : Deno.env.get("USER");

		if (envUserName === undefined) {
			console.log(chalk.red("Could not find the system user name."));
			Deno.exit();
		}

		return envUserName;
	}

	/**
	 * Returns the executable location of yarn.
	 * @returns The executable location of yarn.
	 */
	private getYarnLocation(): string {
		return this.isWindowsEnv() ? `C:/Users/${this.sysUserName()}/AppData/Roaming/npm/yarn.cmd` : "/user/bin/yarn";
	}

	/**
	 * Returns a value indicating whether or not the current environment is windows.
	 * @returns True if the current environment is windows; otherwise false.
	 */
	private isWindowsEnv(): boolean {
		return Deno.build.os === "windows";
	}
}
