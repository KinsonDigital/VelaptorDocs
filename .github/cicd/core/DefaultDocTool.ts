import { existsSync } from "@std/fs";
import { RepoClient } from "@kd-clients/github";
import { DotNetToolService } from "./services/DotNetToolService.ts";
import { Utils } from "./Utils.ts";

/**
 * Provides ability to generate documentation.
 */
export class DefaultDocTool {
	private readonly dotNetToolService: DotNetToolService;
	private readonly repoClient: RepoClient;
	private readonly defaultDocToolName = "defaultdocumentation.console";
	private readonly DEFAULT_DOC_DOTNET_TOOL_VERSION = "DEFAULT_DOC_DOTNET_TOOL_VERSION";

	/**
	 * Initializes a new instance of the DefaultDocTool class.
	 * @param token The GitHub token to use for accessing the GitHub API.
	 */
	constructor(token: string) {
		const ownerName = "KinsonDigital";
		const repoName = "VelaptorDocs";

		this.dotNetToolService = new DotNetToolService();
		this.repoClient = new RepoClient(ownerName, repoName, token);
	}

	/**
	 * Generates the documentation for the given assembly.
	 * @param assemblyPath The path to the assembly for generating the documentation.
	 * @param outputDirPath The directory path to output the documentation.
	 * @param configFilePath The path to the configuration file.
	 */
	public async generateDocumentation(
		assemblyPath: string,
		outputDirPath: string,
		configFilePath: string,
	): Promise<void> {
		Utils.isNothing(assemblyPath);
		Utils.isNothing(outputDirPath);
		Utils.isNothing(configFilePath);

		const defaultDocToolRepoVar = (await this.repoClient.getVariables()).find(
			(repoVar) => {
				return repoVar.name === this.DEFAULT_DOC_DOTNET_TOOL_VERSION;
			},
		);

		if (defaultDocToolRepoVar === undefined) {
			let errorMsg = `The required repo variable '${this.DEFAULT_DOC_DOTNET_TOOL_VERSION}' was not found.`;
			errorMsg += "\nPlease create the variable in the repo settings and try again.";
			errorMsg += "\nThe required variable is used to specify the version of the ";
			errorMsg += `dotnet tool '${this.defaultDocToolName}' to use.`;
			Deno.exit(1);
		}

		const defaultDocToolVersion = defaultDocToolRepoVar.value.toLowerCase().startsWith("v")
			? defaultDocToolRepoVar.value.substring(1)
			: defaultDocToolRepoVar.value;

		await this.dotNetToolService.setupDotNetTools(
			this.defaultDocToolName,
			defaultDocToolVersion,
		);

		if (existsSync(outputDirPath, { isDirectory: true })) {
			Deno.removeSync(outputDirPath, { recursive: true });
		}

		Deno.mkdirSync(outputDirPath, { recursive: true });

		const args = [
			"--AssemblyFilePath",
			`${assemblyPath}`,
			"--OutputDirectoryPath",
			`${outputDirPath}`,
			"--ConfigurationFilePath",
			`${configFilePath}`,
		];

		const command = `defaultdocumentation ${args.join(" ")}`;
		const commandResult = await this.runAsync(command);

		if (commandResult instanceof Error) {
			Utils.printGitHubError(commandResult.message);
			Deno.exit(1);
		}

		console.log(commandResult);
	}

	/**
	 * Runs the following CLI {@link command}.
	 * @param command The command to run.
	 * @returns The output of the command if successful, otherwise an error.
	 */
	public async runAsync(command: string): Promise<string | Error> {
		if (command === undefined || command === null || command === "") {
			const errorMsg = "The command parameter cannot be null or empty.";
			console.log(errorMsg);
			Deno.exit(1);
		}

		if (!command.includes(" ")) {
			const errorMsg = "The command parameter must include a space.";
			console.log(errorMsg);
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
