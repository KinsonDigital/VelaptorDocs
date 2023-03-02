export class Utils {
    private static readonly isProdRegEx = /^v\d+\.\d+\.\d+(?:-preview){0}$/gm;
    private static readonly containsProdRegEx = /v\d+\.\d+\.\d+(?:-preview){0}/;
    private static readonly isPrevRegEx = /^v\d+\.\d+\.\d+(?:-preview\.\d+){1}$/gm;
    private static readonly containsPrevRegEx = /v\d+\.\d+\.\d+(?:-preview\.\d+){1}/;
    private static readonly newLineRegEx = /\r?\n/;

    public static isUndefinedOrEmpty<T>(value: T | T[]): boolean {
        const isUndefined = value === undefined;
        if (typeof(String) === "string") {
            return isUndefined || value === "";
        }

        const isEmpty: boolean = Array.isArray(value)
            ? (<T[]>value).length <= 0
            : false;
        
        return value === undefined || isEmpty;
    }

    public static cwd(): string {
        return Deno.cwd();
    }

    public static isWindows(): boolean {
        return Deno.build.os === "windows";
    }

    public static sortVersions(versions: string[]): string[] {
        return versions.sort((a: string, b:string) => this.compareVersions(a, b));
    }

    public static isProdVersion(version: string): boolean {
        if (Utils.isUndefinedOrEmpty(version)) {
            return false;
        }

        version = version.trim();

        const matches = version.match(this.isProdRegEx)
        
        return matches === null ? false : matches.length > 0;
    }
    
    public static containsProdVersion(value: string): boolean {
        if (Utils.isUndefinedOrEmpty(value)) {
            return false;
        }

        const matches = value.match(this.containsProdRegEx);

        return matches === null ? false : matches.length > 0;
    }

    public static isPrevVersion(version: string): boolean {
        if (Utils.isUndefinedOrEmpty(version)) {
            return false;
        }

        version = version.trim();

        const matches = version.match(this.isPrevRegEx);

        return matches === null ? false : matches.length > 0;
    }

    public static containsPrevVersion(value: string): boolean {
        if (Utils.isUndefinedOrEmpty(value)) {
            return false;
        }

        const matches = value.match(this.containsPrevRegEx);

        return matches === null ? false : matches.length > 0;
    }

    public static toLines(value: string): string[] {
        if (this.isUndefinedOrEmpty(value)) {
            return [];
        }

        return value.split(this.newLineRegEx);
    }

    public static takeTop<T>(items: T[], total: number): T[] {
        return items.filter((_: T, i: number) => i <= total - 1);
    }

    private static compareVersions(a: string, b: string): number {
        const aIsPrev = this.isPrevVersion(a);
        const bIsPrev = this.isPrevVersion(b);
        const aIsProd = this.isProdVersion(a);
        const bIsProd = this.isProdVersion(b);

        // If one of the versions is production and one is preview
        if (aIsProd && bIsProd) {
            return this.compareProdVersions(a, b);
        } else if (aIsPrev && bIsPrev) {
            return this.comparePrevVersions(a, b);
        } else {
            const aStart: string = aIsPrev
                ? a.split("-")[0]
                : a;
            const bStart: string = bIsPrev
                ? b.split("-")[0]
                : b;

            // If both versions have the same major, minor, and patch
            if (aStart === bStart) {
                return aIsPrev ? 1 : -1;
            } else {
                // Get the major, minor, and patch number sections
                const aNumSections: string[] = aIsPrev
                    ? a.replace("v", "").replace("-preview", "").split(".").slice(0, -1)
                    : a.replace("v", "").split(".");
                const bNumSections: string[] = bIsPrev
                    ? b.replace("v", "").replace("-preview", "").split(".").slice(0, -1)
                    : b.replace("v", "").split(".");

                const aNumbers = aNumSections.map((value: string) => Number(value));
                const bNumbers = bNumSections.map((value: string) => Number(value));

                return this.compareNumArrays(aNumbers, bNumbers);
            }
        }
    }

    private static compareProdVersions(a: string, b: string): number {
        // Get the major, minor, and patch number sections
        const aNumSections: string[] = a.replace("v", "").split(".");
        const bNumSections: string[] = b.replace("v", "").split(".");
        const aNumbers = aNumSections.map((value: string) => Number(value));
        const bNumbers = bNumSections.map((value: string) => Number(value));

        return this.compareNumArrays(aNumbers, bNumbers);
    }

    private static comparePrevVersions(a: string, b: string): number {
        // Get the major, minor, and patch number sections
        const aNumSections: string[] = a.replace("v", "").replace("-preview", "").split(".");
        const bNumSections: string[] = b.replace("v", "").replace("-preview", "").split(".");

        const aNumbers = aNumSections.map((value: string) => Number(value));
        const bNumbers = bNumSections.map((value: string) => Number(value));

        return this.compareNumArrays(aNumbers, bNumbers);
    }

    private static compareNumArrays(a: number[], b: number[]): number {
        if (a.length != b.length) {
            throw new Error("Both arrays must be the same length for sorting.");
        }

        for (let i = 0; i < a.length; i++) {
            const valueA = a[i];
            const valueB = b[i];
            
            if (valueA === valueB) {
                continue;
            }

            return valueA < valueB ? 1 : -1;
        }

        return 0;
    }
}
