import { FlagService } from "services/FlagService.ts";
import { VersionsFileService } from "services/VersionsFileService.ts";
import { Utils } from "../core/Utils.ts";
import { existsSync, walkSync } from "../deps.ts";

if (Deno.args.length <= 0) {
	const errorMsg = "The testing environment script must provide a single argument" +
					 "with the values of 'enable', 'disable', or 'toggle'.";
	Utils.printGitHubError(errorMsg);
	Deno.exit(1);
}

const arg: string = Deno.args[0].toLowerCase().trim();
const isNotCorrectValue: boolean = arg != "enable" && arg != "disable" && arg != "toggle";

if (isNotCorrectValue) {
	const errorMsg = `The argument value of '${arg}' sent to the 'testing-env.ts' script ` + 
				   "must be the value 'enable', 'disable', or 'toggle'.";
	Utils.printGitHubError(errorMsg);
	Deno.exit(1);
}

const baseDirPath: string = Deno.cwd().trim();

if (!existsSync(baseDirPath)) {
	const errorMsg = `The current working directory '${baseDirPath}' does not exist.`;
	Utils.printGitHubError(errorMsg);
	Deno.exit(1);
}

const docusaurusConfigFilePathEntries = walkSync(baseDirPath, {
	includeDirs: false,
	includeFiles: true,
	exts: [".js"],
	match: [new RegExp(`.*docusaurus.config.js$`, "gm")],
	skip: [new RegExp(".*node_modules.*")]
});

const docusaurusConfigFilePath = [...docusaurusConfigFilePathEntries].map((entry) => entry.path)[0];

if (Utils.isNothing(docusaurusConfigFilePath)) {
	const errorMsg = `The docusaurus config file could not be recursively found in the working directory '${baseDirPath}'.`;
	Utils.printGitHubError(errorMsg);
	Deno.exit(1);
}

const sidebarsConfigFilePathEntries = walkSync(baseDirPath, {
	includeDirs: false,
	includeFiles: true,
	exts: [".js"],
	match: [new RegExp(`.*sidebars.js$`, "gm")],
	skip: [new RegExp(".*node_modules.*")]
});

const sidebarsConfigFilePath = [...sidebarsConfigFilePathEntries].map((entry) => entry.path)[0];

if (Utils.isNothing(sidebarsConfigFilePath)) {
	const errorMsg = `The side bars js file could not be recursively found in the working directory '${baseDirPath}'.`;
	Utils.printGitHubError(errorMsg);
	Deno.exit(1);
}

const flagService: FlagService = new FlagService();
const versionService: VersionsFileService = new VersionsFileService(baseDirPath);

switch (arg) {
	case "enable":
		{
			flagService.enableFlag(docusaurusConfigFilePath, "testing");
			flagService.enableFlag(sidebarsConfigFilePath, "testing");

			flagService.disableFlag(docusaurusConfigFilePath, "api");
			flagService.disableFlag(sidebarsConfigFilePath, "api");

			versionService.enableTestVersion();
		}
		break;
	case "disable":
		{
			flagService.enableFlag(docusaurusConfigFilePath, "api");
			flagService.enableFlag(sidebarsConfigFilePath, "api");

			flagService.disableFlag(docusaurusConfigFilePath, "testing");
			flagService.disableFlag(sidebarsConfigFilePath, "testing");

			versionService.disableTestVersion();
		}
		break;
	case "toggle":
		{
			flagService.toggle(sidebarsConfigFilePath);
			flagService.toggle(docusaurusConfigFilePath);
			versionService.toggle();
		}
		break;
	default:
		break;
}
