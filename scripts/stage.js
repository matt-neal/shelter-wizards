const childProcess = require("child_process");
const fs = require("fs");
const request = require("request-promise");

const AUTH_TOKEN = "rgbn24ybh048tiheb24t9bin2hjt";

async function main() {
    const workingDir = process.cwd();
    // get current branch
    const branch = childProcess.execSync("git branch").toString()
        // parse `git branch` output
        .replace(/\r/g, "").split("\n").find(b => b.startsWith("* ")).slice(2);
    // set up staging redirect
    const result = await request.get(`https://services.boogaloo.xroadsed.com/add-web-branch.php?auth=${AUTH_TOKEN}&branch=${branch}`);
    console.log(result);
}

main().catch(console.error);
