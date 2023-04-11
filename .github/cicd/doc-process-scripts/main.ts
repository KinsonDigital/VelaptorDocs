import { ArgService } from "./ArgService.ts";
import { DocProcessor } from "./DocProcessor.ts";
import { Console } from "./Console.ts";
import { ChalkColor } from "./ChalkColor.ts";

const argService: ArgService = new ArgService();
const [argsValid, errorMsg] = argService.argsAreValid(Deno.args);

if (!argsValid) {
	throw new Error(errorMsg);
}

const apiDirPath: string = Deno.args[0];

console.clear();
const denoConsole: Console = new Console();
denoConsole.writeLine(ChalkColor.prompt("? Enter the release version: "));

const result: string = await denoConsole.readLine();

// Make sure that there is a 'v' in front of the release version.
const releaseVersion: string = result.startsWith("v") ? result : `v${result}`;

const docProcessor = new DocProcessor();
await docProcessor.run(apiDirPath, releaseVersion);
