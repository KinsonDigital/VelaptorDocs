import { resolve } from "std/path/mod.ts";
import { Utils } from "./Utils.ts";

/**
 * Closes the Velaptor repository.
 */
export class CloneRepoService {
	private readonly repoUrl: string = "https://github.com/KinsonDigital/Velaptor.git";
	private readonly repoSrcDirName: string = "RepoSrc";

	/**
	 * Clones the Velaptor repository.
	 * @param tag The tag of the repository to clone.
	 */
	public cloneRepo(tag: string): void {
		if (Utils.isNullOrEmpty(tag)) {
			throw Error("The tag must not be null, undefined, or empty.");
		}

		const fullCloneDir = resolve(Deno.cwd(), this.repoSrcDirName);

		const command = new Deno.Command("git", {
			args: ["clone", "-b", tag, this.repoUrl, fullCloneDir],
		});

		const { code, stdout, stderr } = command.outputSync();
		console.assert(code === 0);
		console.log(new TextDecoder().decode(stdout));
		console.log(new TextDecoder().decode(stderr));
	}
}
