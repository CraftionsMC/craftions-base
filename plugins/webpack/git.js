const child_process = require('child_process');
const fs = require("fs");
const path = require("path");

const repo = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json')).toString()).repository.url;

const commitHash = {
    long: child_process.execSync('git rev-parse HEAD').toString().trim(),
    short: child_process.execSync('git rev-parse --short HEAD').toString().trim()
};
const branch = child_process.execSync(`git branch --contains ${commitHash.short}`).toString().trim().split("* ")[1];

module.exports = {commitHash, branch, repo};