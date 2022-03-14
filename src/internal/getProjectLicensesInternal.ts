import { ModuleInfo } from "license-checker";
import path from "path";
import { License } from "../models/license";
import console from "../utils/console.utils";
import { doesFileExist, readFileAsync } from "../utils/file.utils";
import { getProject, Project } from "../utils/license.utils";
import { readPackageJson } from "../utils/packageJson.utils";

const UTF8 = "utf-8";

export async function getLicensesInternal(pathsToPackageJson: string[]): Promise<License[]> {
  const dependencyLicenses = await getDependencyMapForProjects(pathsToPackageJson);

  const licenses = flattenDependencyMapToLicenseArray(dependencyLicenses);
  return licenses;
}

const getDependencyMapForProjects = async (
  pathsToPackageJson: string[]
): Promise<Map<string, string[]>> => {
  let projects: Project[] = [];

  for (const pathToPackageJson of pathsToPackageJson) {
    const directoryOfPackageJson: string = path.dirname(pathToPackageJson);
    const currentProjectIdentifier = await getCurrentProjectIdentifier(pathToPackageJson);

    const project: Project = await getProject({
      start: directoryOfPackageJson,
      production: true,
      excludePackages: currentProjectIdentifier
    });

    projects.push(project);
  }

  const dependencyMap = groupProjectDependenciesByLicenseText(projects);
  return dependencyMap;
};

const groupProjectDependenciesByLicenseText = async (projects: Project[]) => {
  const dependencyLicenses: Map<string, string[]> = new Map<string, string[]>();

  for (const project of projects) {
    for (const [dependencyName, dependencyValue] of Object.entries(project)) {
      const license: string = await getLicenseContent(dependencyValue);

      const listForLicense = dependencyLicenses.get(license) ?? [];
      listForLicense.push(dependencyName);

      dependencyLicenses.set(license, listForLicense);
    }
  }

  return dependencyLicenses;
};

const getLicenseContent = async (moduleInfo: ModuleInfo) => {
  const licenseFilePath: string | undefined = moduleInfo.licenseFile;

  if (!!licenseFilePath && (await doesFileExist(licenseFilePath))) {
    return await readFileAsync(licenseFilePath, { encoding: UTF8 });
  }

  return getLicenseType(moduleInfo);
};

const getLicenseType = (moduleInfo: ModuleInfo) => {
  const { licenses } = moduleInfo;

  if (!!licenses && licenses.length > 0) {
    const licenseType = typeof licenses === "string" ? licenses : licenses[0];
    return `(${licenseType})`;
  }

  console.warn(`No license found for ${moduleInfo.name}!`);
  return "Unknown license!";
};

const flattenDependencyMapToLicenseArray = (dependencyLicenses: Map<string, string[]>) => {
  const licenses: License[] = [];

  for (const [license, dependencies] of dependencyLicenses) {
    licenses.push(new License(license, dependencies));
  }

  return licenses;
};

const getCurrentProjectIdentifier = async (pathToPackageJson: string) => {
  const { name, version } = await readPackageJson(pathToPackageJson);

  if (!name) {
    throw new Error('Cannot find the "name" key in the package.json!');
  }

  if (!version) {
    throw new Error('Cannot find the "version" key in the package.json!');
  }

  const currentProjectIdentifier = `${name}@${version}`;
  return currentProjectIdentifier;
};
