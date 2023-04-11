import { Directory } from "./Directory.ts";
import { DotNetToolService } from "./DotNetToolService.ts";
import { RunnerService } from "./RunnerService.ts";

/**
 * Provides ability to generate documentation.
 */
export class DefaultDocTool {
    private readonly dotNetToolService: DotNetToolService;
    private readonly runnerService: RunnerService;
    private readonly defaultDocToolVersion = "0.8.2";
    private readonly defaultDocToolName = "defaultdocumentation.console";

    /**
     * Initializes a new instance of the DefaultDocTool class.
     */
    constructor() {
        this.dotNetToolService = new DotNetToolService();
        this.runnerService = new RunnerService();
    }

    /**
     * Generates the documentation for the given assembly.
     * @param assemblyPath The path to the assembly for generating the documentation.
     * @param outputDirPath The directory path to output the documentation.
     * @param configFilePath The path to the configuration file.
     */
    public async generateDocumentation(assemblyPath: string, outputDirPath: string, configFilePath: string): Promise<void> {
        await this.dotNetToolService.setupDotNetTools(this.defaultDocToolName, this.defaultDocToolVersion);

        if (Directory.exists(outputDirPath)) {
            Deno.removeSync(outputDirPath, { recursive: true });
        }

        Deno.mkdirSync(outputDirPath, { recursive: true });

        const commands = [
            "defaultdocumentation",
            "--AssemblyFilePath",
            `${assemblyPath}`,
            "--OutputDirectoryPath",
            `${outputDirPath}`,
            "--ConfigurationFilePath",
            `${configFilePath}`];

        const result = await this.runnerService.run(commands, false, false);

        if (result[0] === true) {
            return;
        }

        console.error(result[1]);
    }
}
