import { resolve } from "https://deno.land/std@0.182.0/path/mod.ts";
import { RunnerService } from "./RunnerService.ts";
import { Utils } from "./Utils.ts";

/**
 * Closes the Velaptor repository.
 */
export class CloneRepoService {
	private readonly repoUrl: string = "https://github.com/KinsonDigital/Velaptor.git";
	private readonly repoSrcDirName: string = "RepoSrc";
	private readonly runnerService: RunnerService;

	/**
	 * Initializes a new instance of the CloneRepoService class.
	 */
	constructor() {
		this.runnerService = new RunnerService();
	}

	/**
	 * Clones the Velaptor repository.
	 * @param tag The tag of the repository to clone.
	 */
	public async cloneRepo(tag: string): Promise<void> {
		if (Utils.isNullOrEmpty(tag)) {
			throw Error("The tag must not be null, undefined, or empty.");
		}

		const fullCloneDir = resolve(Deno.cwd(), this.repoSrcDirName);
		const commands = ["git", "clone", "-b", tag, this.repoUrl, fullCloneDir];

		await this.runnerService.run(commands, false, false);
	}
}
