import { ChalkColor } from "./ChalkColor.ts";
import { RunnerService } from "./RunnerService.ts";

/**
 * Executes yarn commands.
 */
export class Yarn {
	private readonly runnerService: RunnerService;

	/**
	 * Initializes a new instance of the YarnRunner class.
	 */
	constructor() {
		this.runnerService = new RunnerService();
	}

	/**
	 * Runs yarn commands.
	 */
	public async run(commands: string[]): Promise<void> {
		if (commands === undefined || commands.length === 0) {
			console.log(ChalkColor.error("The commands parameter must not be empty."));
			Deno.exit();
		}

		const yarn = this.getYarnLocation();

		// Make sure 'yarn' is the first command
		commands = commands.indexOf("yarn") === -1 ? [yarn, ...commands] : commands.map((c) => c === "yarn" ? yarn : c);

		await this.runnerService.run(commands, true, true);
	}

	/**
	 * Returns a value indicating whether or not the current environment is windows.
	 * @returns True if the current environment is windows; otherwise false.
	 */
	public isWindowsEnv(): boolean {
		return Deno.build.os === "windows";
	}

	/**
	 * Returns the system user name.
	 * @returns The system user name.
	 */
	public sysUserName(): string {
		const envUserName: string | undefined = this.isWindowsEnv() ? Deno.env.get("USERNAME") : Deno.env.get("USER");

		if (envUserName === undefined) {
			console.log(ChalkColor.error("Could not find the system user name."));
			Deno.exit();
		}

		return envUserName;
	}

	/**
	 * Returns the executable location of yarn.
	 * @returns The executable location of yarn.
	 */
	public getYarnLocation(): string {
		return this.isWindowsEnv() ? `C:/Users/${this.sysUserName()}/AppData/Roaming/npm/yarn.cmd` : "/user/bin/yarn";
	}
}
