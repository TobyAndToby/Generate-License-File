import { join } from "path";
import { PackageJson, readPackageJson } from "../utils/packageJson.utils";
import { packageJsonLicense } from "./resolutions/packageJsonLicense";
import { licenseFile } from "./resolutions/licenseFile";
import { spdxExpression } from "./resolutions/spdxExpression";
import { readFile } from "../utils/file.utils";

export interface ResolutionInputs {
  directory: string;
  packageJson: PackageJson;
}

export type Resolution = (inputs: ResolutionInputs) => Promise<string | null>;

const resolutions: Resolution[] = [packageJsonLicense, licenseFile, spdxExpression];

export const resolveLicenseContent = async (
  directory: string,
  replacements: Record<string, string>,
): Promise<string | null> => {
  const packageJson = await readPackageJson(join(directory, "package.json"));

  const replacementPath = replacements[`${packageJson.name}@${packageJson.version}`];
  if (replacementPath) {
    return await readFile(replacementPath, { encoding: "utf-8" });
  }

  for (const resolution of resolutions) {
    const result = await resolution({ directory, packageJson });

    if (result) {
      return result;
    }
  }

  return null;
};
