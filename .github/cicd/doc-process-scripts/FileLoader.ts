import { File } from "./File.ts";

export class FileLoader {
    public readAllLinesSync(filePath: string): string[] {
        const data = File.readTextFileSync(filePath);
        const lines = data.split(/\r?\n/);

        return lines;
    }
}
