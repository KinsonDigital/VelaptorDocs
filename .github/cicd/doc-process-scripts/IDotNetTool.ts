/**
 * Holds information about a dotnet tool.
 */
export interface IDotNetTool {
    /**
     * The name of the tool.
     */
    packageId: string;

    /**
     * The version of the tool installed.
     */
    version: string;

    /**
     * The commands that are available for the tool.
     */
    commands: string[];
}
