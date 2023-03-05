import { emptyDirSync } from "https://deno.land/std@0.178.0/fs/empty_dir.ts";
import { copySync } from "https://deno.land/std@0.178.0/fs/copy.ts";
import { ensureDirSync } from "https://deno.land/std@0.178.0/fs/ensure_dir.ts";

const blueText = "\u001b[1;34m";
const white = "\u001b[0m";
const baseDirPath: string = Deno.cwd();

const unprocessedDirPath = `${baseDirPath}/.github/cicd/manual-testing/unprocessed-docs`;
const apiTestingDirPath = `${baseDirPath}/versioned_docs/version-1.0.0-testing/api`;

console.clear();

console.log(blueText); // Set text color to blue

// Print out the information for debugging purposes
console.log("Resetting Docs");
console.log(`\tWorking Directory: ${baseDirPath}`);
console.log(`\tBase Unprocessed Dir Path: ${unprocessedDirPath}`);
console.log(`\tAPI Doc Testing Reference Dir Path: ${apiTestingDirPath}`);

console.log(`\tDocument testing directory '${apiTestingDirPath}' reset.`);
ensureDirSync(apiTestingDirPath);
emptyDirSync(apiTestingDirPath);

console.log(`\tTesting documents copied to '${apiTestingDirPath}'`);
copySync(unprocessedDirPath, apiTestingDirPath, { overwrite: true });

console.log(white); // Set text color to white
