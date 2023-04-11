import { BranchType } from "./BranchType.ts";

export class BranchValidator {
	private static readonly featureBranchRegEx = /^(?!.*--)feature\/\d+-[^A-Z]+(?<!-)$/g;

	public static isValidBranch(branch: string, type: BranchType): boolean {
		switch (type) {
			case BranchType.master:
				return branch === "master";
			case BranchType.feature: {
				return this.featureBranchRegEx.test(branch);
			}
			default:
				return false;
		}
	}
}
