import { CloneRepoService } from "services/CloneRepoService.ts";
import { MarkdownFileContentService } from "services/MarkdownFileContentService.ts";
import { ValidateReleaseService } from "services/ValidateReleaseService.ts";
import { MarkdownService } from "services/MarkdownService.ts";
import { DefaultDocTool } from "./DefaultDocTool.ts";
import { Utils } from "./Utils.ts";
import { Yarn } from "./Yarn.ts";
import chalk, { existsSync, walkSync } from "../deps.ts";

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
	 * @param token The GitHub token to use for accessing the GitHub API.
	 */
	constructor(token: string) {
		this.cloneService = new CloneRepoService();
		this.validateReleaseService = new ValidateReleaseService();
		this.defaultDocTool = new DefaultDocTool(token);
		this.yarn = new Yarn();
	}

	/**
	 * Generates the API documentation from the given release tag.
	 * @param apiDocDirPath The directory path to the API documentation output.
	 * @param releaseTag The Velaptor release tag.
	 */
	public async generateFromTag(apiDocDirPath: string, releaseTag: string): Promise<void> {
		if (Utils.isNothing(apiDocDirPath)) {
			console.log(chalk.red("The API doc dir path is required."));
			Deno.exit();
		}

		if (Utils.isNothing(releaseTag)) {
			console.log(chalk.red("The release tag is required."));
			Deno.exit();
		}

		console.log(chalk.cyan(`Validating Release '${releaseTag}'. . .`));
		const isValid = await this.validateReleaseService.releaseExists(releaseTag);

		if (!isValid) {
			console.log(chalk.red(`The release '${releaseTag}' is not valid.`));
			Deno.exit();
		}

		console.log(chalk.cyan(`Release '${releaseTag}' Valid.`));

		await this.run(apiDocDirPath, releaseTag);
	}

	/**
	 * Generates the API documentation from the given branch name.
	 * @param apiDocDirPath The directory path to the API documentation output.
	 * @param branchName The name of the branch to generate the API documentation from.
	 */
	public async generateFromBranch(apiDocDirPath: string, branchName: string): Promise<void> {
		if (Utils.isNothing(apiDocDirPath)) {
			console.log(chalk.red("The API doc dir path is required."));
			Deno.exit();
		}

		if (Utils.isNothing(branchName)) {
			console.log(chalk.red("The branch name is required."));
			Deno.exit();
		}

		console.log(chalk.cyan(`Branch Name '${branchName}' Valid.`));

		await this.run(apiDocDirPath, branchName);
	}

	/**
	 * Runs the documentation generation and post-processing process.
	 * @param apiDocDirPath The directory path to the API documentation output.
	 * @param tagOrBranch The Velaptor release tag or branch name.
	 */
	private async run(apiDocDirPath: string, tagOrBranch: string): Promise<void> {
		// Remove the RepoSrc directory if it exists.
		const repoSrcDirPath = `${Deno.cwd()}/RepoSrc`;
		
		if (existsSync(repoSrcDirPath)) {
			await this.runProcess(
				"Cleaning up previous clone and build. . .",
				() => Deno.removeSync(repoSrcDirPath, { recursive: true }),
				"Cleaning Complete.",
			);
		}

		// Clone the Velaptor repository into the RepoSrc directory
		// so documentation can be generated from it.
		await this.runProcess(
			"Cloning Velaptor. . .",
			() => this.cloneService.cloneRepo(tagOrBranch),
			"Cloning Complete.",
		);

		// Build the project so the assembly can be used for generating documentation.
		await this.runProcess(
			"Building Velaptor. . .",
			() => this.buildVelaptor(),
			"Building Complete.",
		);

		// Generate the documentation.
		await this.runProcess(
			"Generating Documentation. . .",
			() =>
				this.defaultDocTool.generateDocumentation(
					`${Deno.cwd()}/RepoSrc/BuildOutput/Velaptor.dll`,
					`${Deno.cwd()}/docs/api`,
					`${Deno.cwd()}/default-doc-config.json`,
				),
			"Documentation Generation Complete.",
		);

		// Perform post-processing on the documentation.
		await this.runProcess(
			"Performing Documentation Post-Processing. . .",
			() => this.runPostProcessing(apiDocDirPath),
			"Documentation Post-Processing Complete.",
		);
	}

	/**
	 * Runs the process represented by the {@link process} function.
	 * @param startMsg The message to display before the process runs.
	 * @param process The process function to execute.
	 * @param endMsg The message to display after the process runs.
	 */
	private async runProcess(startMsg: string, process: () => void | Promise<void>, endMsg: string): Promise<void> {
		console.log("\n-----------------------------------------------------------------\n");
		console.log(chalk.cyan(startMsg));

		await process();

		console.log(chalk.cyan(`\n\n${endMsg}`));
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
		const fileContentService: MarkdownFileContentService = new MarkdownFileContentService();
		const markDownService: MarkdownService = new MarkdownService();

		try {
			const oldNamespaceFilePath = `${apiDocDirPath}index.md`;
			const newNamespaceFilePath = `${apiDocDirPath}Namespaces.md`;

			Deno.renameSync(oldNamespaceFilePath, newNamespaceFilePath);
			console.log(`File renamed from '${oldNamespaceFilePath}' to '${newNamespaceFilePath}'.`);

			console.log("Performing post-processing on the API documentation. . .");

			// Replace the extra table column in the Namespaces.md file
			let namespaceFileContent: string = Deno.readTextFileSync(newNamespaceFilePath);

			// Remove the extra column from the header and divider
			namespaceFileContent = namespaceFileContent.replace("| Namespaces | |", "| Namespaces |");
			namespaceFileContent = namespaceFileContent.replace("| :--- | :--- |", "| :--- |");

			// Remove the extra column from each row
			namespaceFileContent = namespaceFileContent.replaceAll(") | |", ") |");
			Deno.writeTextFileSync(newNamespaceFilePath, namespaceFileContent);

			const filePathEntries = walkSync(apiDocDirPath, {
				includeDirs: false,
				includeFiles: true,
				exts: [".md"],
			});

			const filePaths: string[] = [...filePathEntries].map((entry) => entry.path);

			// Go through each file and perform content processing
			filePaths.forEach((filePath: string) => {
				console.log(`\tProcessing file '${filePath}' . . .`);
				fileContentService.processMarkdownFile(filePath);
			});

			let namespaceContent: string = Deno.readTextFileSync(newNamespaceFilePath);
			namespaceContent = markDownService.renameHeader(
				namespaceContent,
				"Velaptor Assembly",
				"Velaptor API Namespaces",
			);

			Deno.writeTextFileSync(newNamespaceFilePath, namespaceContent);

			console.log("API documentation post-processing complete.");
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
