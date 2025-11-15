import { existsSync } from "@std/fs";

/**
 * Creates a NuGet package from a .NET project file.
 * @param projectFilePath The path to the .NET project file.
 * @param outputPath The path to the directory where the NuGet package will be created.
 */
export async function createNugetPkg(projectFilePath: string, outputPath: string, quiet = false): Promise<void> {
	if (projectFilePath === undefined || projectFilePath === null || projectFilePath.trim() === "") {
		throw Error("The tag or branch name must not be null, undefined, or empty.");
	}

	if (!existsSync(projectFilePath)) {
		throw Error(`The project file path '${projectFilePath}' does not exist.`);
	}

	if (!existsSync(outputPath)) {
		throw Error(`The output directory path '${outputPath}' does not exist.`);
	}

	const quietOption = quiet ? ["-v", "quiet"] : [];

	const command = new Deno.Command("dotnet", {
		args: ["pack", projectFilePath, "-o", outputPath, "-c", "Debug", ...quietOption],
	});

	const { code, stdout, stderr } = await command.output();

	console.assert(code === 0);
	console.log(new TextDecoder().decode(stdout));
	console.log(new TextDecoder().decode(stderr));
}
