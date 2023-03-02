import { emptyDirSync } from "https://deno.land/std@0.178.0/fs/empty_dir.ts";
import { copySync } from "https://deno.land/std@0.178.0/fs/copy.ts";
import { ensureDirSync } from "https://deno.land/std@0.178.0/fs/ensure_dir.ts";

const blueText = "\u001b[1;34m";
const white = "\u001b[0m";
const prev16 = "v1_0_0-preview_16";
const prev17 = "v1_0_0-preview_17";
const prev13 = "v1_0_0-preview_13";
const baseDirPath: string = Deno.cwd();

const unprocessedDirPath = `${baseDirPath}/.vscode/unprocessed-docs`;
const apiRefPrevDirPath = `${baseDirPath}/.vscode/processed-docs/API Reference`;

console.clear();

console.log(blueText); // Set text color to blue

// Print out the information for debugging purposes
console.log("Resetting Docs");
console.log(`\tWorking Directory: ${baseDirPath}`);
console.log(`\tBase Unprocessed Dir Path: ${unprocessedDirPath}`);
console.log(`\tBase API Reference Dir Path: ${apiRefPrevDirPath}`);

// Reset the doc folders
console.log("\tClearing doc directories");

const processedPrev16DirPath = `${apiRefPrevDirPath}/${prev16}`;
deleteIfExists(processedPrev16DirPath);
emptyDirSync(`${processedPrev16DirPath}(latest)`);

const processedPrev17DirPath = `${apiRefPrevDirPath}/${prev17}(latest)`;
emptyDirSync(processedPrev17DirPath);

// Reset the API reference docs for preview.16
const unprocessedPrev16DirPath = `${unprocessedDirPath}/${prev16}`;
copySync(unprocessedPrev16DirPath, `${processedPrev16DirPath}(latest)`, { overwrite: true });

// Reset the API reference docs for preview.17
const unprocessedPrev17DirPath = `${unprocessedDirPath}/${prev17}`;
copySync(unprocessedPrev17DirPath, processedPrev17DirPath, { overwrite: true });

// Recreate the prev 13 directory that should be deleted if it does not exist
const processedPrev13DirPath = `${apiRefPrevDirPath}/${prev13}`;
if (!dirExists(processedPrev13DirPath)) {
    ensureDirSync(processedPrev13DirPath);
}

console.log(white); // Set text color to white

function dirExists(dirPath: string): boolean {
    try {
        Deno.statSync(dirPath);
        return true;
    } catch {
        return false;
    }
}

function deleteIfExists(dirPath: string): void {
    if (dirExists(dirPath)) {
        Deno.removeSync(dirPath, { recursive: true });
    }
}