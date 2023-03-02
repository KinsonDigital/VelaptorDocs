export class Guard {
    public static isNotUndefined(value: unknown, paramName = ""): void {
        if (value === undefined) {
            paramName = paramName === undefined || paramName === ""
                ? ""
                : `'${paramName}'`;

            throw new Error(`The parameter ${paramName} must not be undefined.`);
        }
    }

    public static isNotUndefinedOrEmpty(value: string, paramName = ""): void {
        if (value === undefined || value === "") {
            paramName = paramName === undefined || paramName === ""
                ? ""
                : `'${paramName}'`;

            throw new Error(`The parameter ${paramName} must not be undefined or empty.`);
        }
    }
}