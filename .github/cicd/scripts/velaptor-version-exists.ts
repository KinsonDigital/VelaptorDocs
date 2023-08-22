import { TagClient } from "clients/TagClient.ts";


if (Deno.args.length < 1) {
	const errorMsg = "No arguments exist.  Please provide a velaptor version to check."
	console.log(`::error::${errorMsg}`);
	Deno.exit(1);
}

const versionRegex = /^v[0-9]+\.[0-9]+\.[0-9]+(|-preview\.[0-9]+)$/gm;
const version = Deno.args[0].trim().toLowerCase();

if (!versionRegex.test(version)) {
	const errorMsg = `The version '${version}' is not a valid version.`;
	console.log(`::error::${errorMsg}`);
	Deno.exit(1);
}

const tagClient: TagClient = new TagClient();

const versionDoesNotExist = !(await tagClient.tagExists("Velaptor", version));

if (versionDoesNotExist) {
	const errorMsg = `The Velaptor version '${version}' does not exist.`;
	console.log(`::error::${errorMsg}`);
	Deno.exit(1);
}
