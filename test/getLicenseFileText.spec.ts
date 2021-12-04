import * as os from "os";
import { mocked } from "ts-jest/utils";
import { LineEnding } from "../src/generateLicenseFile";
import { getLicenseFileText } from "../src/getLicenseFileText";
import { getProjectLicensesInternal } from "../src/internal/getProjectLicensesInternal";
import { License } from "../src/models/license";

jest.mock("../src/internal/getProjectLicensesInternal", () => ({
  getProjectLicensesInternal: jest.fn()
}));

describe("getLicenseFileText", () => {
  const mockGetProjectLicensesInternal = mocked(getProjectLicensesInternal);

  beforeEach(() => {
    jest.resetAllMocks();

    mockGetProjectLicensesInternal.mockResolvedValue([]);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should call the internal getProjectLicenses", async () => {
    await getLicenseFileText("path");

    expect(mockGetProjectLicensesInternal).toHaveBeenCalledTimes(1);
  });

  it("should call the internal getProjectLicenses with the given path", async () => {
    const path = "the given path";

    await getLicenseFileText(path);

    expect(mockGetProjectLicensesInternal).toHaveBeenCalledWith(path);
  });

  it("should format each returned licence", async () => {
    const licenses = [getNewMockedLicense(), getNewMockedLicense(), getNewMockedLicense()];

    mockGetProjectLicensesInternal.mockResolvedValue(licenses);

    await getLicenseFileText("path");

    for (const license of licenses) {
      expect(license.format).toHaveBeenCalledTimes(1);
    }
  });

  (
    [
      { name: "windows", value: "\r\n" },
      { name: "posix", value: "\n" },
      { name: undefined, value: os.EOL }
    ] as { name: LineEnding; value: string }[]
  ).forEach(lineEnding =>
    it(`should format each returned licence with the appropriate line ending for ${lineEnding.name}`, async () => {
      const licenses = [getNewMockedLicense(), getNewMockedLicense(), getNewMockedLicense()];

      mockGetProjectLicensesInternal.mockResolvedValue(licenses);

      await getLicenseFileText("path", lineEnding.name);

      for (const license of licenses) {
        const firstCallFirstArg = mocked(license.format).mock.calls[0][0];
        expect(firstCallFirstArg).toBe(lineEnding.value);
      }
    })
  );

  it("should return the concatenated formatted licenses", async () => {
    const licenses = [getNewMockedLicense(), getNewMockedLicense(), getNewMockedLicense()];
    mocked(licenses[0].format).mockReturnValue("first");
    mocked(licenses[1].format).mockReturnValue("second");
    mocked(licenses[2].format).mockReturnValue("third");

    mockGetProjectLicensesInternal.mockResolvedValue(licenses);

    const result = await getLicenseFileText("path");

    expect(/.*?first.*?second.*?third.*/s.test(result)).toBeTruthy();
  });

  it("should return formatted licenses concatenated by dashes and EOLs", async () => {
    const licenses = [getNewMockedLicense(), getNewMockedLicense(), getNewMockedLicense()];
    mocked(licenses[0].format).mockReturnValue("first");
    mocked(licenses[1].format).mockReturnValue("second");
    mocked(licenses[2].format).mockReturnValue("third");

    mockGetProjectLicensesInternal.mockResolvedValue(licenses);

    const result = await getLicenseFileText("path", "posix");

    expect(
      /.*?first\n\n-----------\n\nsecond\n\n-----------\n\nthird\n\n-----------\n\n.*/s.test(result)
    ).toBeTruthy();
  });

  it("should return formatted licenses with the footer", async () => {
    const licenses = [getNewMockedLicense(), getNewMockedLicense(), getNewMockedLicense()];
    mocked(licenses[0].format).mockReturnValue("first");
    mocked(licenses[1].format).mockReturnValue("second");
    mocked(licenses[2].format).mockReturnValue("third");

    mockGetProjectLicensesInternal.mockResolvedValue(licenses);

    const result = await getLicenseFileText("path", "posix");

    expect(
      result.endsWith(
        "\n\nThis file was generated with generate-license-file! https://www.npmjs.com/package/generate-license-file\n"
      )
    ).toBeTruthy();
  });
});

const getNewMockedLicense = () => {
  return {
    format: jest.fn()
  } as any as License;
};
