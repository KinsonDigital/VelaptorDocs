/**
 * Provides the ability for typescript to understand the importing of svg files.
 */
declare module "*.svg" {
	const content: any;
	export default content;
}
