import * as fsPromises from "fs/promises";
import * as path from "path";
import * as fs from "fs";

const entrypointDir = path.join(__dirname, "../", "src");
const distDir = path.join(__dirname, "../", "dist");

function copyFileSync(source: string, target: string) {
  var targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }
  fs.writeFileSync(targetFile, fs.readFileSync(source));
  if (targetFile.endsWith('.js')) {
    fs.writeFileSync(targetFile.replace('.js', '.mjs'), fs.readFileSync(source));
  }
}

function copyFolderRecursiveSync(source: string, target: string) {
  var files = [];

  // Check if folder needs to be created or integrated
  var targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

const run = async () => {
  try {
    await fsPromises.mkdir(distDir);
  } catch (e) {}

  const entrypoints = await fsPromises.readdir(entrypointDir);

  console.log(entrypoints);
  for await (const entrypoint of entrypoints) {
    if(entrypoint === "test") {
      continue
    }
    if (entrypoint === "xmlns") {
      copyFolderRecursiveSync(path.join(entrypointDir, entrypoint), distDir);
      continue;
    }

    if (entrypoint === "utils.ts") {
      const entrypointBase = entrypoint.replace(".ts", "");
      console.log(path.join(distDir, `${entrypointBase}.js`))
      await fsPromises.copyFile(
        path.join(distDir, `${entrypointBase}.js`),
        path.join(distDir, `${entrypointBase}.mjs`),
      );
      continue;
    }

    const entrypointBase = entrypoint.replace(".d.ts", "");

    await fsPromises.writeFile(path.join(distDir, `${entrypointBase}.js`), "");
    await fsPromises.writeFile(path.join(distDir, `${entrypointBase}.mjs`), "");
    await fsPromises.copyFile(
      path.join(entrypointDir, entrypoint),
      path.join(distDir, `${entrypointBase}.d.ts`),
    );
  }
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
