import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const execSyncWrapper = (command) => {
  let stdout = null;
  try {
    stdout = execSync(command).toString().trim();
  } catch (error) {
    console.error(error);
  }
  return stdout;
};

const main = () => {
  let gitBranch = execSyncWrapper("git rev-parse --abbrev-ref HEAD");
  let gitCommitHash = execSyncWrapper("git rev-parse --short=7 HEAD");

  const obj = {
    gitBranch,
    gitCommitHash,
    version: process.env.npm_package_version,
  };

  const fileContents = JSON.stringify(obj, null, 2);

  fs.writeFileSync(
    path.resolve("src-tauri", "target/debug/version.json"),
    fileContents
  );

  fs.writeFileSync(
    path.resolve("src-tauri", "target/release/version.json"),
    fileContents
  );

  console.log(`Wrote the following contents \n${fileContents}`);
};

main();
