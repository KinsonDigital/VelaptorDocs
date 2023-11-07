import { TagClient } from "../deps.ts";

if (Deno.args.length < 2) {
	const errorMsg = `The required number of arguments is 2 but received ${Deno.args.length}.`;
	console.log(`::error::${errorMsg}`);
	Deno.exit(1);
}

const containsPAT = (value: string): boolean => {
    const fineGrainedTokenPrefix = "github_pat_";
    const classicTokenPrefix = "ghp_";

    return value.startsWith(fineGrainedTokenPrefix) || value.startsWith(classicTokenPrefix);
}

const versionRegex = /^v[0-9]+\.[0-9]+\.[0-9]+(|-preview\.[0-9]+)$/gm;
const version = Deno.args[0].trim().toLowerCase();
const token = Deno.args[1].trim();

if (containsPAT(version)) {
	const errorMsg = "The version cannot contain a GitHub PAT.";
	console.log(`::error::${errorMsg}`);
	Deno.exit(1);
}

if (!containsPAT(token)) {
	const errorMsg = "The 2nd argument must be a GitHub PAT.";
	console.log(`::error::${errorMsg}`);
	Deno.exit(1);
}

if (!versionRegex.test(version)) {
	const errorMsg = `The version '${version}' is not a valid version.`;
	console.log(`::error::${errorMsg}`);
	Deno.exit(1);
}

const tagClient: TagClient = new TagClient(token);

const versionDoesNotExist = !(await tagClient.tagExists("Velaptor", version));

if (versionDoesNotExist) {
	const errorMsg = `The Velaptor version '${version}' does not exist.`;
	console.log(`::error::${errorMsg}`);
	Deno.exit(1);
}
