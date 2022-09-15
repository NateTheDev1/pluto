import fs from "fs";
import path from "path";

/**
 * Look ma, it's cp -R.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
const copyRecursiveSync = (src: string, dest: string) => {
  console.log(`Starting Move from ${src} to ${dest}`);

  const exists = fs.existsSync(src);

  if (!exists) {
    throw new Error("SRC is not defined");
  }

  const stats = fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }

    fs.readdirSync(src).forEach((childItemName: string) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }

  console.log(`Moved ${src} to ${dest}`);
};

copyRecursiveSync("./themes_dist/themes", "./src-tauri/target/debug/themes");
copyRecursiveSync("./themes_dist/themes", "./src-tauri/target/release/themes");
