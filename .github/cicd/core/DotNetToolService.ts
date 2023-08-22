import { IDotNetTool } from "./IDotNetTool.ts";
import { Utils } from "./Utils.ts";

/**
 * Provides functionality for setting up dotnet tools.
 */
export class DotNetToolService {
	/**
	 * Sets up any required dotnet tools.
	 */
	public async setupDotNetTools(toolName: string, toolVersion: string): Promise<void> {
		const isInstalled = await this.isToolInstalled(toolName, toolVersion);

		if (isInstalled) {
			console.log(`The dotnet tool '${toolName}' version '${toolVersion}' is already installed.`);
			return;
		}

		// Install the default documentation dotnet tool
		this.installTool(toolName, toolVersion);
	}

	/**
	 * Returns a value indicating whether or not the tool is installed.
	 * @param toolName The name of the tool to check if it is installed.
	 * @returns True if the tool is installed; otherwise false.
	 */
	private async isToolInstalled(toolName: string, version: string): Promise<boolean> {
		const command = new Deno.Command("dotnet", {
			args: ["tool", "list", "-g"],
		});

		const { code, stdout, stderr } = await command.output();

		if (code === 0) {
			const commandOutput = new TextDecoder().decode(stdout);
			const lines = this.toLines(commandOutput);
			const tools = this.parseToolList(lines);

			return tools.some((tool) => tool.packageId === toolName && tool.version === version);
		} else {
			console.log(new TextDecoder().decode(stderr));
			Deno.exit(code);
		}
	}

	/**
	 * Parses the list of tools into objects.
	 * @param list The list of tools to parse into objects.
	 * @returns The list of dotnet tool objects.
	 */
	private parseToolList(list: string[]): IDotNetTool[] {
		const tools: IDotNetTool[] = [];

		list.forEach((line: string) => {
			const parts = line.split(" ").filter((part) => part !== "");
			const tool: IDotNetTool = {
				packageId: parts[0],
				version: parts[1],
				commands: parts.slice(2),
			};

			tools.push(tool);
		});

		return tools;
	}

	/**
	 * Installs the dotnet tool with the given name and version.
	 * @param toolName The name of the dotnet tool to install.
	 * @param version The version of the dotnet tool to install.
	 */
	private async installTool(toolName: string, version: string): Promise<void> {
		console.log(`Installing tool ${toolName} version ${version} . . .`);

		const command = new Deno.Command("dotnet", {
			args: ["tool", "install", toolName, "-g", "--version", version],
		});

		const { code, stdout, stderr } = await command.output();
		console.log(new TextDecoder().decode(stdout));

		if (code !== 0) {
			console.log(`::error::There was a problem installing the dotnet tool '${toolName}' version '${version}'.`);
			console.log(new TextDecoder().decode(stderr));
			Deno.exit(code);
		}

		console.log(`The dotnet tool '${toolName}' version '${version}' was successfully installed.`);
	}

	/**
	 * Converts the given value into lines.
	 * @param value The value to split into lines.
	 * @returns The lines with empty lines removed.
	 */
	private toLines(value: string): string[] {
		if (Utils.isNullOrEmpty(value)) {
			return [];
		}

		return value.split("\n").filter((_, index) => index > 1);
	}
}
