import { CLI } from "../core/CLI.ts";
import { walkSync } from "../deps.ts";

const cwd = Deno.cwd().trim();

const fileEntries = walkSync(cwd, {
	includeDirs: false,
	includeFiles: true,
	exts: [".ts"],
	match: [new RegExp(".*cicd.*")],
	skip: [new RegExp(".*node_modules.*"), new RegExp(".*vendor.*")]
});

const files = [...fileEntries].map((entry) => entry.path);

const cli: CLI = new CLI();

console.clear();
console.log(`Checking ${files.length} files . . .`);

/**
 * Represents the result of checking a file.
 */
interface CheckResult {
	file: string;
	result: string;
	hasPassed: boolean;
}

/**
 * Checks a file using deno check.
 * @param file The file to check.
 * @returns A promise that resolves to a CheckResult.
 */
const checkFile = async (file: string): Promise<CheckResult> => {
	const checkResult: CheckResult = {
		file: file,
		result: "",
		hasPassed: true // Default to passed
	};
	
	checkResult.result += `Checking ${file}`;
	
	const result = await cli.runAsync(`deno check ${file}`);
	
	let commandResult = "";
	
	// If the result is an error type
	if (result instanceof Error)
	{
		checkResult.hasPassed = false;
		commandResult = "❌\n";
		
		const lines = result.message.split("\n");

		// Prefix each command output line with 3 spaces
		lines.forEach(line => {
			commandResult += `   ${line}\n`;
		});
	} else {
		commandResult = "✅\n";
	}
	
	checkResult.result += commandResult;

	return checkResult;
}

const filesToCheck: Promise<CheckResult>[] = [];

// Perform a deno check on all of the files
for await (const file of files) {
	filesToCheck.push(checkFile(file));	
};

// Wait for all of the checks to complete
const allCheckResults = await Promise.all(filesToCheck);

// Print all of the results
allCheckResults.forEach(checkResult => {
	Deno.stdout.writeSync(new TextEncoder().encode(checkResult.result));
});

// Collect the total number of passed and failed checks
const totalPassed = allCheckResults.filter(r => r.hasPassed).length;
const totalFailed = allCheckResults.filter(r => !r.hasPassed).length;

const resultsMsg = new TextEncoder().encode(`\nTotal Checks Passed✅: ${totalPassed}\nTotal Checks Failed❌: ${totalFailed}\n`);
Deno.stdout.writeSync(resultsMsg);

if (totalFailed > 0) {
	Deno.exit(1);
}
