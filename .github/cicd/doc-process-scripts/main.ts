import { ArgService } from "./ArgService.ts";
import { DocProcessor } from "./DocProcessor.ts";
import { Console } from "./Console.ts";
import chalk from "npm:chalk@5.3.0";

const argService: ArgService = new ArgService();
const [argsValid, errorMsg] = argService.argsAreValid(Deno.args);

if (!argsValid) {
	throw new Error(errorMsg);
}

const apiDirPath: string = Deno.args[0];

console.clear();
const denoConsole: Console = new Console();
denoConsole.writeLine(chalk.yellow("? Enter the release version: "));

const result: string = await denoConsole.readLine();

// Make sure that there is a 'v' in front of the release version.
const releaseVersion: string = result.startsWith("v") ? result : `v${result}`;

const docProcessor = new DocProcessor();
await docProcessor.run(apiDirPath, releaseVersion);
