import devkit from "@nx/devkit";
import chalk from "chalk";
import { execSync } from "child_process";

const { readCachedProjectGraph, createProjectGraphAsync } = devkit;

function invariant(condition, message) {
  if (!condition) {
    console.error(chalk.bold.red(message));
    process.exit(1);
  }
}

const [, , name, tag = "next"] = process.argv;

await createProjectGraphAsync();
const graph = readCachedProjectGraph();
const project = graph.nodes[name];

invariant(
  project,
  `Could not find project "${name}" in the workspace. Is the project.json configured correctly?`,
);

const packOutputPath = project.data?.targets?.pack?.options?.outputPath;
invariant(
  packOutputPath,
  `Could not find "pack.options.outputPath" of project "${name}". Is project.json configured correctly?`,
);

process.chdir(packOutputPath);

execSync(`npm publish --access public --provenance --tag ${tag} --dry-run`);
