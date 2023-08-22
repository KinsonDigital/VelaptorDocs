import { Input } from "cliffy/prompt/mod.ts";
import { DocProcessor } from "../core/DocProcessor.ts";

if (Deno.args.length < 2) {
	const errorMsg = `The required number of arguments is 2 but only '${Deno.args.length}' were given.`;
	console.error(`::error::${errorMsg}`);
}

const apiDirPath: string = Deno.args[0];
let apiVersion = Deno.args[1].trim().toLowerCase();

const isInteractive = Deno.args.length >= 3 &&
	Deno.args.length === 3 &&
	Deno.args[2].trim().toLowerCase() === "true";

console.log(apiDirPath);

console.clear();

if (isInteractive) {
	apiVersion = await Input.prompt({
		message: "Enter the release version",
		minLength: 5,
		transform: (v) => v.startsWith("v") ? v : `v${v}`,
	});
} else {
	apiVersion = apiVersion.startsWith("v") ? apiVersion : `v${apiVersion}`;
}

const docProcessor = new DocProcessor();
await docProcessor.run(apiDirPath, apiVersion);
