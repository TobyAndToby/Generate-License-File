import { getLicencesForProjects } from "./internal/getLicencesForProjects";
import { getLineEndingValue, LineEnding } from "./lineEndings";
import { License } from "./models/license";

const SUFFIX = "-----------";
const FOOTER =
  "This file was generated with generate-license-file! https://www.npmjs.com/package/generate-license-file";

/**
 * Scans the project found at the given path and returns a string containing the licenses for all the dependencies
 * @param pathToPackageJson A path to the package.json for the project
 * @optional @param lineEnding `"crlf"` or `"lf"`. Will use the system default if omitted
 * @returns A promise that resolves to the license file text
 */
export async function getLicenseFileText(
  pathToPackageJson: string,
  lineEnding?: LineEnding
): Promise<string>;

/**
 * Scans the projects found at the given paths and returns a string containing the licenses for all the dependencies across all the projects
 * @param pathsToPackageJsons An array of paths to the package.json files for the projects
 * @optional @param lineEnding `"crlf"` or `"lf"`. Will use the system default if omitted
 * @returns A promise that resolves to the license file text
 */
export async function getLicenseFileText(
  pathsToPackageJsons: string[],
  lineEnding?: LineEnding
): Promise<string>;

export async function getLicenseFileText(
  pathsToPackageJsons: string[] | string,
  lineEnding?: LineEnding
): Promise<string> {
  if (typeof pathsToPackageJsons === "string") {
    pathsToPackageJsons = [pathsToPackageJsons];
  }

  const EOL = getLineEndingValue(lineEnding);
  const licenses: License[] = await getLicencesForProjects(pathsToPackageJsons);
  let licenseFile = "";

  for (const license of licenses) {
    licenseFile += license.format(EOL) + EOL + EOL + SUFFIX + EOL + EOL;
  }

  licenseFile += FOOTER + EOL;
  return licenseFile;
}
