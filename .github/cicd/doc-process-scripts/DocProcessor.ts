import { ChalkColor } from "./ChalkColor.ts";
import { CloneRepoService } from "./CloneRepoService.ts";
import { DefaultDocTool } from "./DefaultDocTool.ts";
import { Directory } from "./Directory.ts";
import { File } from "./File.ts";
import { MarkdownFileContentService } from "./MarkdownFileContentService.ts";
import { MarkdownService } from "./MarkdownService.ts";
import { Path } from "./Path.ts";
import { Utils } from "./Utils.ts";
import { ValidateReleaseService } from "./ValidateReleaseService.ts";
import { Yarn } from "./Yarn.ts";

/**
 * Generates and performs post-processing on Velaptor API documentation.
 */
export class DocProcessor {
	private readonly cloneService: CloneRepoService;
	private readonly validateReleaseService: ValidateReleaseService;
	private readonly defaultDocTool: DefaultDocTool;
	private readonly yarn: Yarn;

	/**
	 * Initializes a new instance of the DocProcessor class.
	 */
	constructor() {
		this.cloneService = new CloneRepoService();
		this.validateReleaseService = new ValidateReleaseService();
		this.defaultDocTool = new DefaultDocTool();
		this.yarn = new Yarn();
	}

	/**
	 * Runs the documentation generation and post-processing process.
	 * @param apiDocDirPath The directory path to the API documentation output.
	 * @param releaseTag The Velaptor release tag.
	 */
	public async run(apiDocDirPath: string, releaseTag: string): Promise<void> {
		if (Utils.isNullOrEmpty(apiDocDirPath)) {
			console.log(ChalkColor.error("The API doc dir path is required."));
			Deno.exit();
		}

		if (Utils.isNullOrEmpty(releaseTag)) {
			console.log(ChalkColor.error("The release tag is required."));
			Deno.exit();
		}

		console.log(ChalkColor.header(`Validating Release '${releaseTag}'. . .`));
		const isValid = await this.validateReleaseService.releaseExists(releaseTag);

		if (!isValid) {
			console.log(ChalkColor.error(`The release '${releaseTag}' is not valid.`));
			Deno.exit();
		}

		console.log(ChalkColor.header(`Release '${releaseTag}' Valid.`));

		// Remove the RepoSrc directory if it exists.
		const repoSrcDirPath = `${Deno.cwd()}/RepoSrc`;
		if (Directory.exists(repoSrcDirPath)) {
			console.log(ChalkColor.normal("\n-----------------------------------------------------------------\n"));
			console.log(ChalkColor.header("Cleaning up previous clone and build. . ."));

			Deno.removeSync(repoSrcDirPath, { recursive: true });

			console.log(ChalkColor.header("Cleaning Complete."));
		}

		// Clone the Velaptor repository into the RepoSrc directory
		// so documentation can be generated from it.
		console.log(ChalkColor.normal("\n-----------------------------------------------------------------\n"));
		console.log(ChalkColor.header("Cloning Velaptor. . ."));

		this.cloneService.cloneRepo(releaseTag);

		console.log(ChalkColor.header("Cloning Complete."));

		// Build the project so the assembly can be used for generating documentation.
		console.log(ChalkColor.normal("\n-----------------------------------------------------------------\n"));
		console.log(ChalkColor.header("Building Velaptor. . ."));

		await this.buildVelaptor();

		console.log(ChalkColor.header("Building Complete."));

		// Generate the documentation.
		console.log(ChalkColor.normal("\n-----------------------------------------------------------------\n"));
		console.log(ChalkColor.header("Generating Documentation. . ."));

		await this.defaultDocTool.generateDocumentation(
			`${Deno.cwd()}/RepoSrc/BuildOutput/Velaptor.dll`,
			`${Deno.cwd()}/docs/api`,
			`${Deno.cwd()}/default-doc-config.json`,
		);

		console.log(ChalkColor.header("\n\nDocumentation Generation Complete."));

		// Perform post-processing on the documentation.
		console.log(ChalkColor.normal("\n-----------------------------------------------------------------\n"));
		console.log(ChalkColor.header("Performing Documentation Post-Processing. . ."));

		this.runPostProcessing(apiDocDirPath);

		console.log(ChalkColor.header("Documentation Post-Processing Complete."));

		// Create website version snapshot
		console.log(ChalkColor.normal("\n-----------------------------------------------------------------\n"));
		console.log(ChalkColor.header("Creating website version snapshot. . ."));

		await this.createAPIWebsiteVersion(releaseTag);

		console.log(ChalkColor.header("\n\nWebsite Version Snapshot Complete."));
	}

	/**
	 * Builds the Velaptor project.
	 */
	private async buildVelaptor(): Promise<void> {
		const csprojFilePath = `${Deno.cwd()}/RepoSrc/Velaptor/Velaptor.csproj`;
		const buildOutputDirPath = `${Deno.cwd()}/RepoSrc/BuildOutput`;

		const command = new Deno.Command("dotnet", {
			args: ["build", csprojFilePath, "-c", "Debug", "-o", buildOutputDirPath],
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
	 * Performs post-processing on the generated API documentation.
	 * @param apiDocDirPath The directory path to the generated API documentation.
	 */
	private runPostProcessing(apiDocDirPath: string): void {
		const baseAPIDirPath: string = Path.normalizeSeparators(apiDocDirPath);
		const fileContentService: MarkdownFileContentService = new MarkdownFileContentService();
		const markDownService: MarkdownService = new MarkdownService();

		try {
			const oldNamespaceFilePath = `${baseAPIDirPath}index.md`;
			const newNamespaceFilePath = `${baseAPIDirPath}Namespaces.md`;
			File.renameFileSync(oldNamespaceFilePath, newNamespaceFilePath);

			// Replace the extra table column in the Namespaces.md file
			let namespaceFileContent: string = File.readTextFileSync(newNamespaceFilePath);

			// Remove the extra column from the header and divider
			namespaceFileContent = namespaceFileContent.replace("| Namespaces | |", "| Namespaces |");
			namespaceFileContent = namespaceFileContent.replace("| :--- | :--- |", "| :--- |");

			// Remove the extra column from each row
			namespaceFileContent = namespaceFileContent.replaceAll(") | |", ") |");
			File.writeTextFileSync(newNamespaceFilePath, namespaceFileContent);

			const filePaths: string[] = Directory.getFiles(baseAPIDirPath, ".md");

			// Go through each file and perform content processing
			filePaths.forEach((filePath: string) => {
				fileContentService.processMarkdownFile(filePath);
			});

			let namespaceContent: string = File.readTextFileSync(newNamespaceFilePath);
			namespaceContent = markDownService.renameHeader(
				namespaceContent,
				"Velaptor Assembly",
				"Velaptor API Namespaces",
			);

			File.writeTextFileSync(newNamespaceFilePath, namespaceContent);
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	/**
	 * Creates a new version of the website documentation as it currently sits.
	 * @param version The version to create.
	 */
	private async createAPIWebsiteVersion(version: string): Promise<void> {
		version = version.startsWith("v") ? version.substring(1) : version;

		const commands = ["docusaurus", "docs:version", version];
		await this.yarn.run(commands);
	}
}
