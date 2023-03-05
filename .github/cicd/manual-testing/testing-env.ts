import { FlagService } from "./FlagService.ts";
import { VersionsFileService } from "./VersionsFileService.ts";

if (Deno.args.length <= 0) {
    let errorMsg = "The testing environment script must provide a single argument";
    errorMsg += "with the values of 'enable', 'disable', or 'toggle'.";
    throw new Error(errorMsg);
}

const arg: string = Deno.args[0].toLowerCase();
const isNotCorrectValue: boolean = arg != "enable" && arg != "disable" && arg != "toggle";

if (isNotCorrectValue) {
    let errorMsg = `The argument value of '${arg}' to the 'testing-env.ts' script `;
    errorMsg += "is not a value of 'enable', 'disable', or 'toggle'.";
    throw new Error(errorMsg);
}

const baseDirPath: string = Deno.cwd();
const docusaurusConfigFilePath = `${baseDirPath}/docusaurus.config.js`;
const sidebarsConfigFilePath = `${baseDirPath}/sidebars.js`;

const flagService: FlagService = new FlagService();
const versionService: VersionsFileService = new VersionsFileService();

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
