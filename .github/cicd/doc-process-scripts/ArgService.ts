import { Directory } from "./Directory.ts";
import { Guard } from "./Gaurd.ts";
import { Utils } from "./Utils.ts";

export class ArgService {
    public argsAreValid(args: string[]): [boolean, string] {
        Guard.isNotUndefined(args);

        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            const numOrdinal = `${i + 1}${this.getNumberOrdinal(i + 1)}`;

            if (arg === undefined || arg === "") {
                const errorMsg = `The ${numOrdinal} argument is null or undefined.`;
                return [false, errorMsg];
            }

            switch (i) {
                // Both the first and second args need to be a directory path
                case 0:
                    // If the directory path does not exist
                    if (Directory.doesNotExist(arg)) {
                        const errorMsg = `The ${numOrdinal} argument directory '${arg}' does not exist.`;
                        return [false, errorMsg];
                    }
                    break;
                // Needs to be a version with valid syntax
                case 1:
                    {
                        const isInvalidPrevVersion = !Utils.isProdVersion(arg);
                        const isInvalidProdVersion = !Utils.isPrevVersion(arg);
                        
                        if (isInvalidPrevVersion && isInvalidProdVersion) {
                            throw new Error("The version is an invalid production or preview version.");
                        }
                    }
                    
                    break;
            }
        }

        return [true, ""];
    }

    private getNumberOrdinal(i: number): string {
        switch (i) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }
}
