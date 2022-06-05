import { mocked } from "ts-jest/utils";
import { getProjectLicenses } from "../src/getProjectLicenses";
import { getLicencesForProjects } from "../src/internal/getLicencesForProjects";
import { License } from "../src/models/license";

jest.mock("../src/internal/getLicencesForProjects", () => ({
  getLicencesForProjects: jest.fn()
}));

describe("getProjectLicenses", () => {
  const mockGetLicencesForProjects = mocked(getLicencesForProjects);

  beforeEach(() => {
    jest.resetAllMocks();

    mockGetLicencesForProjects.mockResolvedValue([]);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe("when one path is given", () => {
    it("should call the internal getProjectLicenses with the given path", async () => {
      const path = "given path value";

      await getProjectLicenses(path);

      expect(mockGetLicencesForProjects).toHaveBeenCalledWith([path]);
    });
  });

  describe("when an array of paths are given", () => {
    it("should call the internal getProjectLicenses with the given array of paths", async () => {
      const paths = ["the first path", "the second path"];

      await getProjectLicenses(paths);

      expect(mockGetLicencesForProjects).toHaveBeenCalledWith(paths);
    });
  });

  it("should return the response from the internal getProjectLicenses", async () => {
    const licenses: License[] = [
      new License("stuff", ["a", "b"]),
      new License("also stuff", ["c", "d"])
    ];

    mockGetLicencesForProjects.mockResolvedValue(licenses);

    const result = await getProjectLicenses("path");

    expect(result).toStrictEqual(licenses);
  });
});
