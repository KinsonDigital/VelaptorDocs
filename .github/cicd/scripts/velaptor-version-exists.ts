import { TagClient, Utils } from "../deps.ts";

const version = (Deno.env.get("VERSION") ?? "").trim().toLowerCase();

if (version === "") {
	Utils.printAsGitHubError("The environment variable 'VERSION' does not exist.");
	Deno.exit(1);
}

const token = (Deno.env.get("GITHUB_TOKEN") ?? "").trim();

if (token === "") {
	Utils.printAsGitHubError("The environment variable 'GITHUB_TOKEN' does not exist.");
	Deno.exit(1);
}

const versionRegex = /^v([1-9]\d*|0)\.([1-9]\d*|0)\.([1-9]\d*|0)(-preview\.([1-9]\d*))?$/gm;

if (!versionRegex.test(version)) {
	Utils.printAsGitHubError(`The version '${version}' is not a valid version.`);
	Deno.exit(1);
}

const ownerName = "KinsonDigital";
const repoName = "Velaptor";

const tagClient: TagClient = new TagClient(ownerName, repoName, token);

const versionDoesNotExist = !(await tagClient.tagExists(version));

if (versionDoesNotExist) {
	Utils.printAsGitHubError(`The Velaptor version '${version}' does not exist.`);
	Deno.exit(1);
}
