import { ArgService } from "./ArgService.ts";
import { Directory } from "./Directory.ts";
import { File } from "./File.ts";
import { MarkdownFileContentService } from "./MarkdownFileContentService.ts";
import { MarkdownService } from "./MarkdownService.ts";
import { Path } from "./Path.ts";

const argService: ArgService = new ArgService();
const [argsValid, errorMsg] = argService.argsAreValid(Deno.args);

if (!argsValid) {
    throw new Error(errorMsg);
}

const baseAPIDirPath: string = Path.normalizeSeparators(Deno.args[0]);
const fileContentService: MarkdownFileContentService = new MarkdownFileContentService();
const markDownService: MarkdownService = new MarkdownService();

try {
    const oldNamespaceFilePath = `${baseAPIDirPath}/index.md`;
    const newNamespaceFilePath = `${baseAPIDirPath}/Namespaces.md`;
    File.renameFileSync(oldNamespaceFilePath, newNamespaceFilePath);
    
    const filePaths: string[] = Directory.getFiles(baseAPIDirPath, ".md");
    // Go through each file and perform content processing
    filePaths.forEach((filePath: string) => {
        fileContentService.processMarkdownFile(filePath);
    });

    let namespaceContent:string = File.readTextFileSync(newNamespaceFilePath);
    namespaceContent = markDownService.renameHeader(namespaceContent, "Velaptor Assembly", "Velaptor API Namespaces");

    File.writeTextFileSync(newNamespaceFilePath, namespaceContent);
} catch (error) {
    console.error(error);
    throw error;
}
