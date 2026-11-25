/**
 * Sleep for the given amount of time in {@link milliseconds}.
 * @param milliseconds The amount of time to sleep.
 * @returns A promise that resolves after the specified amount of time.
 */
export function sleep(milliseconds: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
