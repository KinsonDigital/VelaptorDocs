export class Utils {
	private static readonly prevVersionRegex = /^v[0-9]+\.[0-9]+\.[0-9]+-preview\.[0-9]+$/;
	private static readonly prodVersionRegex = /^v[0-9]+\.[0-9]+\.[0-9]+$/;
	private static readonly newLineRegEx = /\r?\n/;
	private static readonly newLine: string = Utils.isWindows() ? "\r\n" : "\n";

	public static isNullOrEmpty<T>(value: T | T[]): boolean {
		const isUndefined = value === undefined;
		const isNull = value === null;
		const isEmpty: boolean = Array.isArray(value) ? (<T[]> value).length <= 0 : value === "";

		return isUndefined || isNull || isEmpty;
	}

	/**
	 * Checks if the value is null, undefined, or empty.
	 * @param value The value to check.
	 * @returns True if the value is null, undefined, or empty, otherwise false.
	 */
	public static isNothing<T>(
		value: undefined | null | string | number | boolean | T[] | (() => T) | object,
	): value is undefined | null | "" | number | T[] | (() => T) | object {
		if (value === undefined || value === null) {
			return true;
		}

		if (typeof value === "string") {
			return value === "";
		}

		if (Array.isArray(value)) {
			return value.length === 0;
		}

		return false;
	}

	public static cwd(): string {
		return Deno.cwd();
	}

	public static isWindows(): boolean {
		return Deno.build.os === "windows";
	}

	/**
	 * Sorts the given {@link versions} in descending order.
	 * @param versions The versions to sort.
	 * @returns The sorted versions.
	 * @remarks This method will sort the given {@link versions} in descending order.
	 */
	public static sortVersions(versions: string[]): string[] {
		return versions.sort(Utils.semverSort);
	}

	/**
	 * Gets the oldest version from the given list of {@link versions}.
	 * @param versions The list of versions to look through.
	 */
	public static getOldestVersion(versions: string[]): string {
		if (Utils.isNothing(versions)) {
			throw new Error("The 'versions' parameter must not be null or empty.");
		}

		const sortedVersions = Utils.sortVersions(versions);
		let oldestVersion = sortedVersions[sortedVersions.length - 1];
		oldestVersion = Utils.isNothing(oldestVersion) ? "" : oldestVersion;
		oldestVersion = oldestVersion.startsWith("v") ? oldestVersion : `v${oldestVersion}`;

		return oldestVersion;
	}

	/**
	 * Returns a value indicating whether or not the given {@link version} is a production version.
	 * @param version The version to check.
	 * @returns True if the version is a preview or production version; Otherwise, false.
	 */
	public static isProdVersion(version: string): boolean {
		if (Utils.isNothing(version)) {
			return false;
		}

		return this.prodVersionRegex.test(version);
	}

	/**
	 * Returns a value indicating whether or not the given {@link version} is a preview version.
	 * @param version The version to check.
	 * @returns True if the version is a preview or production version; Otherwise, false.
	 */
	public static isPrevVersion(version: string): boolean {
		if (Utils.isNothing(version)) {
			return false;
		}

		return this.prevVersionRegex.test(version);
	}

	/**
	 * Returns a value indicating whether or not the given {@link version} is a preview or production version.
	 * @param version The version to check.
	 * @returns True if the version is a preview or production version; Otherwise, false.
	 */
	public static isPrevOrProdVersion(version: string): boolean {
		if (Utils.isNothing(version)) {
			return false;
		}

		return this.prevVersionRegex.test(version) || this.prodVersionRegex.test(version);
	}

	public static toLines(value: string): string[] {
		if (this.isNullOrEmpty(value)) {
			return [];
		}

		return value.split(this.newLineRegEx);
	}

	public static toString(lines: string[]): string {
		return lines.join(this.newLine);
	}

	public static takeTop<T>(items: T[], total: number): T[] {
		return items.filter((_: T, i: number) => i <= total - 1);
	}

	public static underscoresToAngles(value: string): string {
		if (Utils.isNothing(value)) {
			return "";
		}

		if (value.indexOf("_") === -1) {
			return value;
		}

		let currentChar = "<";

		while (true) {
			const doesNotContainUnderscore: boolean = value.indexOf("_") === -1;

			if (doesNotContainUnderscore) {
				break;
			}

			value = value.replace("_", currentChar);
			currentChar = currentChar === "<" ? ">" : "<";
		}

		return value;
	}

	/**
	 * Sorts the given version strings in descending order.
	 * @param a The left version string to compare to the right.
	 * @param b The right version string to compare to the left
	 * @returns The sort result used by the Array.sort() method.
	 */
	public static semverSort(a: string, b: string): number {
		// split the version strings into arrays of numbers
		const aParts = a.split(".").map((part) => parseInt(part));
		const bParts = b.split(".").map((part) => parseInt(part));

		// compare the major, minor, and patch versions
		for (let i = 0; i < 3; i++) {
			if (aParts[i] > bParts[i]) {
				return -1;
			} else if (aParts[i] < bParts[i]) {
				return 1;
			}
		}

		// if the versions are the same, check if one is a pre-release and the other is not
		if (a.includes("-preview") && !b.includes("-preview")) {
			return 1;
		} else if (!a.includes("-preview") && b.includes("-preview")) {
			return -1;
		}

		// if the versions are the same, check if one is a pre-release and the other is not
		if (a.includes("-preview") && b.includes("-preview")) {
			const aParts = a.split("-preview.");
			const bParts = b.split("-preview.");

			if (aParts[1] > bParts[1]) {
				return -1;
			} else if (aParts[1] < bParts[1]) {
				return 1;
			}
		}

		return 0;
	}
}
