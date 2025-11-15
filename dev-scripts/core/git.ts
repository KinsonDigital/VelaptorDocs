import { existsSync } from "@std/fs";
import { resolve } from "@std/path";

const repoUrl: string = "https://github.com/KinsonDigital/Velaptor.git";

/**
 * Clones the Velaptor repository.
 * @param tagOrBranch The tag or branch name of the repository to clone.
 * @param destDirPath The path to the directory where the repository will be cloned.
 * @param quiet Whether to suppress output messages. Default is false.
 */
export async function cloneRepo(tagOrBranch: string, destDirPath: string, quiet = false): Promise<void> {
	if (tagOrBranch === undefined || tagOrBranch === null || tagOrBranch.trim() === "") {
		throw Error("The tag or branch name must not be null, undefined, or empty.");
	}

	if (existsSync(destDirPath)) {
		throw Error(`The destination directory path '${destDirPath}' already exists.`);
	}

	const fullCloneDir = resolve(Deno.cwd(), destDirPath);

	const command = new Deno.Command("git", {
		args: ["clone", quiet ? "--quiet" : "", "-b", tagOrBranch, repoUrl, fullCloneDir],
	});

	const { code, stdout, stderr } = await command.output();

	console.assert(code === 0);
	console.log(new TextDecoder().decode(stdout));
	console.log(new TextDecoder().decode(stderr));
}
