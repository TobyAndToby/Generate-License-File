﻿import { dirname, join } from "path";
import { doesFileExist } from "../../utils/file.utils";
import { Dependency, LicenseContent } from "../resolveLicenses";
import { resolveDependenciesForNpmProject } from "./resolveNpmDependencies";
import { resolveDependenciesForPnpmProject } from "./resolvePnpmDependencies";

type ResolveLicensesOptions = {
  replace?: Record<string, string>;
  exclude?: string[];
};

type PackageManager = "npm" | "pnpm";

export const resolveDependencies = async (
  packageJson: string,
  licensesMap: Map<LicenseContent, Dependency[]>,
  options?: ResolveLicensesOptions,
) => {
  const packageManager = await resolvePackageManager(packageJson);

  switch (packageManager) {
    case "npm":
      await resolveDependenciesForNpmProject(packageJson, licensesMap, options);
      break;

    case "pnpm":
      await resolveDependenciesForPnpmProject(packageJson, licensesMap, options);
      break;

    // istanbul ignore next
    default: {
      const _exhaustiveCheck: never = packageManager;
      throw new Error(`Unknown package manager: ${packageManager}`);
    }
  }
};

const resolvePackageManager = async (packageJson: string): Promise<PackageManager> => {
  const directory = dirname(packageJson);

  const potentialPnpmLockFile = join(directory, "pnpm-lock.yaml");
  if (await doesFileExist(potentialPnpmLockFile)) {
    return "pnpm";
  }

  return "npm";
};
