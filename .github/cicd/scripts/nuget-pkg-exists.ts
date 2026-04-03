import { NuGetClient } from "@kd-clients";
import { Utils } from "../core/Utils.ts";

const pkgName = (Deno.env.get("PACKAGE_NAME") ?? "").trim();
const nugetVersion = (Deno.env.get("NUGET_VERSION") ?? "").trim();

if (Utils.isNothing(pkgName)) {
	console.log("%cThe 'PACKAGE_NAME' environment variable is missing.", "color:indianred");
	Deno.exit(1);
}

if (Utils.isNothing(nugetVersion)) {
	console.log("%cThe 'NUGET_VERSION' environment variable is missing.", "color:indianred");
	Deno.exit(1);
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const totalRetries = 40;

const nugetClient = new NuGetClient();

let currentRetryCount = 0;
let pkgExists = false;

// Keep checking until the package exists.
// Total amount of time possible to wait is 20 minutes (40 retries * 30 seconds wait time).
// The reason for multiple checks for 20 minutes is to wait for the Nuget package to become
// fully available after a Velaptor release.
while(currentRetryCount < totalRetries) {
	console.log(`%cChecking nuget package '${pkgName}' version '${nugetVersion}' attempt ${currentRetryCount + 1}.`, "color:cornflowerblue");
	pkgExists = await nugetClient.exists(pkgName, nugetVersion);
	currentRetryCount += 1;

	if (pkgExists) {
		console.log(`%cPackage '${pkgName}' version '${nugetVersion}' exists.`, "color:green");
		break;
	}
	
	// Wait for 30 seconds
	await delay(30_000);
}

if (!pkgExists) {
	console.log(`%cAttempted to find the package '${pkgName}' version '${nugetVersion}' ${totalRetries} times without success.  Stopping check process.`, "color:indianred");
	Deno.exit(1);
}
