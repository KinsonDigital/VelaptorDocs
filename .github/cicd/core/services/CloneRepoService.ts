import { resolve } from "@std/path";
import { Utils } from "../Utils.ts";

/**
 * Closes the Velaptor repository.
 */
export class CloneRepoService {
	private readonly repoUrl: string = "https://github.com/KinsonDigital/Velaptor.git";
	private readonly repoSrcDirName: string = "RepoSrc";

	/**
	 * Clones the Velaptor repository.
	 * @param tagOrBranch The tag or branch name of the repository to clone.
	 */
	public cloneRepo(tagOrBranch: string): void {
		if (Utils.isNothing(tagOrBranch)) {
			throw Error("The tag or branch name must not be null, undefined, or empty.");
		}

		const fullCloneDir = resolve(Deno.cwd(), this.repoSrcDirName);

		const command = new Deno.Command("git", {
			args: ["clone", "-b", tagOrBranch, this.repoUrl, fullCloneDir],
		});

		const { code, stdout, stderr } = command.outputSync();
		console.assert(code === 0);
		console.log(new TextDecoder().decode(stdout));
		console.log(new TextDecoder().decode(stderr));
	}
}
