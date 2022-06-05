import { ModuleInfo } from "license-checker";
import path from "path";
import { License } from "../models/license";
import console from "../utils/console.utils";
import { doesFileExist, readFile } from "../utils/file.utils";
import { getProject, Project } from "../utils/license.utils";
import { readPackageJson } from "../utils/packageJson.utils";

export async function getLicencesForProjects(pathsToPackageJsons: string[]): Promise<License[]> {
  const licensesMap: Map<string, string[]> = new Map<string, string[]>();

  const projects: Project[] = await getProjectsForPackageJsons(pathsToPackageJsons);

  for (const project of projects) {
    for (const [dependencyName, dependencyInfo] of Object.entries(project)) {
      const licenseContent: string = await getLicenseContent(dependencyInfo);

      const dependenciesUsingLicense = licensesMap.get(licenseContent) ?? [];
      dependenciesUsingLicense.push(dependencyName);

      licensesMap.set(licenseContent, dependenciesUsingLicense);
    }
  }

  return flattenDependencyMapToLicenseArray(licensesMap);
}

const getProjectsForPackageJsons = async (pathsToPackageJsons: string[]): Promise<Project[]> => {
  const projects: Project[] = [];

  for (const pathToPackageJson of pathsToPackageJsons) {
    const project = await getProjectFromPackageJsonPath(pathToPackageJson);
    projects.push(project);
  }

  return projects;
};

const getProjectFromPackageJsonPath = async (pathToPackageJson: string): Promise<Project> => {
  const directoryOfPackageJson: string = path.dirname(pathToPackageJson);
  const currentProjectIdentifier = await getCurrentProjectIdentifier(pathToPackageJson);

  const project: Project = await getProject({
    start: directoryOfPackageJson,
    production: true,
    excludePackages: currentProjectIdentifier
  });

  return project;
};

const getLicenseContent = async (moduleInfo: ModuleInfo) => {
  const licenseFilePath: string | undefined = moduleInfo.licenseFile;

  if (!!licenseFilePath && (await doesFileExist(licenseFilePath))) {
    return await readFile(licenseFilePath);
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
