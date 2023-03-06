import { BranchType } from "./BranchType.ts";
import { BranchValidator } from "./BranchValidator.ts";

console.log("::notice::Checking that arguments exist . . .");
if (Deno.args.length < 2) {
    throw new Error("No arguments could be found.  You must pass in the branch and branch type.");
}

console.log("::notice::Validating arguments . . .");
const branch: string = Deno.args[0];
if (branch === undefined || branch === "") {
    throw new Error("The branch argument must not be undefined or empty.");
}

const type: string = Deno.args[1].trim().toLowerCase();
if (type != "master" && type != "feature") {
    throw new Error("The branch type argument value of 'master' or 'feature' must be passed in.");
}

const branchType: BranchType = type === "master"
    ? BranchType.master
    : BranchType.feature;

console.log(`::notice::Validating that the '${branch}' branch is correct.`);
const isInvalid = !BranchValidator.isValidBranch(branch, branchType);

if (isInvalid) {
    throw new Error(`The branch '${branch}' is invalid.`);
}

console.log(`::notice::The branch '${branch}' is a valid branch.`);
