import { MarkdownFileContentService } from "./core/services/MarkdownFileContentService.ts";
import { MarkdownService } from "./core/services/MarkdownService.ts";
import { Utils } from "./core/Utils.ts";
import { walkSync } from "./deps.ts";

const _rootRepoDirPath = Deno.args[0];
const _token = Deno.args[1];
// const regex = /\[.+?\]\(.+#.+\)(?=.*\[.+?\]\(.+\))/gm;
// const line = "Implements [FilePath](Velaptor.Content.IAudio.md#Velaptor.Content.IAudio.FilePath 'Velaptor.Content.IAudio.FilePath'), [FilePath](Velaptor.Content.IContent.md#Velaptor.Content.IContent.FilePath 'Velaptor.Content.IContent.FilePath')";

// const getMatch = (value: string, regex: RegExp): string => {
// 	const firstLink = [...value.match(regex)?.entries() ?? []];

// 	return firstLink.length > 0 ? firstLink[0][1] : "";
// }

// // const firstLink = Array.from(line.matchAll(regex), m => m[0])[0];
// const theValue = getMatch(line, regex);

// debugger;

const apiDocsDirPath = "K:/SOFTWARE-DEVELOPMENT/PERSONAL/VelaptorDocs/docs/api";
const dirPaths = [
	"K:/SOFTWARE-DEVELOPMENT/PERSONAL/VelaptorDocs/docs/api",
	"K:/SOFTWARE-DEVELOPMENT/PERSONAL/VelaptorDocs/versioned_docs/version-1.0.0-preview.33/api",
	"K:/SOFTWARE-DEVELOPMENT/PERSONAL/VelaptorDocs/versioned_docs/version-1.0.0-preview.34/api",
	"K:/SOFTWARE-DEVELOPMENT/PERSONAL/VelaptorDocs/versioned_docs/version-1.0.0-preview.35/api",
	"K:/SOFTWARE-DEVELOPMENT/PERSONAL/VelaptorDocs/versioned_docs/version-1.0.0-preview.36/api",
	"K:/SOFTWARE-DEVELOPMENT/PERSONAL/VelaptorDocs/versioned_docs/version-1.0.0-preview.37/api",
];

/** NOTES:
 * Currently, we are having issues with the markdown in the 'Velaptor.md' file.  This is because the
 * file has a single line of text where there are 3 or more markdown links.  This is causing issues
 * with the regex not returning what it should return.
 * 
 * Possible Idea:
 * Maybe instead of detecting multiple markdown links, we can use a positive lookahead to check
 * if a markdown link exists with any text before and any text after it hopefully singling out
 * the markdown.
 */

const outputFilePath = "K:/TEMP/new-doc.md";

const markdownFileContentService = new MarkdownFileContentService();

for (let i = 0; i < dirPaths.length; i++) {
	const dirPath = dirPaths[i];
	const filesToProcess = [...walkSync(dirPath, { includeDirs: false, includeFiles: true, exts: [".md"] })]
		.map((entry) => entry.path);
	
	for (let k = 0; k < filesToProcess.length; k++) {
		const file = filesToProcess[k];
		const fileContent = Deno.readTextFileSync(file);
		const updatedContent = markdownFileContentService.processMarkdownLinkFragments(fileContent);
		
		Deno.writeTextFileSync(file, updatedContent);
	}
}
