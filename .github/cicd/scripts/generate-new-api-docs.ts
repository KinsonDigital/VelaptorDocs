import { Input } from "cliffy/prompt/mod.ts";
import { ArgService } from "../core/ArgService.ts";
import { DocProcessor } from "../core/DocProcessor.ts";

const argService: ArgService = new ArgService();
const [argsValid, errorMsg] = argService.argsAreValid(Deno.args);

if (!argsValid) {
	throw new Error(errorMsg);
}

const apiDirPath: string = Deno.args[0];

const isInteractive = Deno.args.length >= 3 && Deno.args[2].trim().toLowerCase() === "true";

console.log(apiDirPath);

console.clear();

let apiVersion = "";

if (isInteractive) {
	apiVersion = await Input.prompt({
		message: "Enter the release version",
		minLength: 5,
		transform: (v) => v.startsWith("v") ? v : `v${v}`,
	});
} else {
	apiVersion = Deno.args[1].trim().toLowerCase();
	apiVersion = apiVersion.startsWith("v") ? apiVersion : `v${apiVersion}`;
}

const docProcessor = new DocProcessor();
await docProcessor.run(apiDirPath, apiVersion);
