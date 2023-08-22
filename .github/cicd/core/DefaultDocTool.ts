import { Directory } from "./Directory.ts";
import { DotNetToolService } from "./DotNetToolService.ts";
import { Utils } from "./Utils.ts";

/**
 * Provides ability to generate documentation.
 */
export class DefaultDocTool {
	private readonly dotNetToolService: DotNetToolService;
	private readonly defaultDocToolVersion = "0.8.2";
	private readonly defaultDocToolName = "defaultdocumentation.console";

	/**
	 * Initializes a new instance of the DefaultDocTool class.
	 */
	constructor() {
		this.dotNetToolService = new DotNetToolService();
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
		Utils.isNullOrEmpty(assemblyPath);
		Utils.isNullOrEmpty(outputDirPath);
		Utils.isNullOrEmpty(configFilePath);

		await this.dotNetToolService.setupDotNetTools(this.defaultDocToolName, this.defaultDocToolVersion);

		if (Directory.exists(outputDirPath)) {
			Deno.removeSync(outputDirPath, { recursive: true });
		}

		Deno.mkdirSync(outputDirPath, { recursive: true });

		const command = new Deno.Command("defaultdocumentation", {
			args: [
				"--AssemblyFilePath",
				`${assemblyPath}`,
				"--OutputDirectoryPath",
				`${outputDirPath}`,
				"--ConfigurationFilePath",
				`${configFilePath}`,
			],
		});

		const { code, stdout, stderr } = await command.output();

		if (code === 0) {
			console.log(new TextDecoder().decode(stdout));
		} else {
			console.log(new TextDecoder().decode(stderr));
			Deno.exit(code);
		}
	}
}
