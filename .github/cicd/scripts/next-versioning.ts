import { FlagService } from "../core/services/FlagService.ts";
import { existsSync } from "../deps.ts";

// Check the arguments
if (Deno.args.length < 3) {
	let errorMsg = "There must be 2 arguments";
	errorMsg += "Usage: deno run FlagService.ts <file-path> <flag-id> <[enable | disable]>";

	throw Error(errorMsg);
}

// Validate the file path argument
if (!existsSync(Deno.args[0], { isFile: true })) {
	throw Error(`The file path '${Deno.args[0]}' does not exist.`);
}

// Validate the enable disable argument
if (Deno.args[2] != "enable" && Deno.args[2] != "disable") {
	throw Error(`The third argument must be either 'enable' or 'disable'.`);
}

const flagService: FlagService = new FlagService();

if (Deno.args[2] === "enable") {
	flagService.enableFlag(Deno.args[0], Deno.args[1]);
} else {
	flagService.disableFlag(Deno.args[0], Deno.args[1]);
}
