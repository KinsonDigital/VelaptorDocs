import { Input } from "@cliffy/prompt";

console.clear();

const nodeJSDirPath = (Deno.env.get("PATH")?.split(";")
	.find((path) => path.includes("nodejs")) ?? "").replace(/\\/g, "/");

const version = await Input.prompt({
	message: "Enter the name of the version you want to generate.",
	hint: "Example: 1.2.3 or 1.2.3-preview.4",
	minLength: 100,
	validate: (input: string) => {
		input = input.trim();
		return /^(|v)[0-9]+\.[0-9]+\.[0-9]+(|-preview\.[0-9]+)$/.test(input);
	},
	transform: (input: string) => {
		input = input.trim();

		return input.startsWith("v") ? input.substring(1) : input;
	},
});

console.log(`Chosen Version: ${version}`);

const fullNPMPath = Deno.build.os === "windows" ? `${nodeJSDirPath}npm.cmd` : `${nodeJSDirPath}npm`;

console.log(`OS NPM Path: ${fullNPMPath}`);

const args = ["run", "docusaurus", "docs:version", version];

console.log(`Executing the command: ${args.join(" ")}`);
console.log(`Create API Docs Version '${version}'...`);

const command = new Deno.Command(fullNPMPath, {
	args: args,
});

const { code, stdout, stderr } = command.outputSync();
console.assert(code === 0);
console.log(new TextDecoder().decode(stdout));
console.log(new TextDecoder().decode(stderr));

console.log(`API Docs Version '${version}' Created Successfully!`);
