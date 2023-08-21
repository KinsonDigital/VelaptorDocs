import { Directory } from "./Directory.ts";
import { Guard } from "./Guard.ts";

export class ArgService {
	public argsAreValid(args: string[]): [boolean, string] {
		Guard.isNotUndefined(args);

		if (args.length < 2) {
			const errorMsg = `The required number of arguments is 2 but the total number received is '${args.length}'.`;
			return [false, errorMsg];
		}

		if (args.length <= 0 || args[0] === undefined || args[0] === "") {
			const errorMsg = "The argument is null or undefined.";
			return [false, errorMsg];
		}

		// If the directory path does not exist
		if (Directory.doesNotExist(args[0])) {
			const errorMsg = `The directory '${args[0]}' does not exist.`;
			return [false, errorMsg];
		}

		return [true, ""];
	}
}
