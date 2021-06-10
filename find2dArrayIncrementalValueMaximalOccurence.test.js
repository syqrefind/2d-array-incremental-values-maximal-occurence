const {
  find2dArrayIncrementalValueMaximalOccurence,
} = require("./find2dArrayIncrementalValueMaximalOccurence");

describe("Test Suite", () => {
  it("should return 0 for an empty input", () => {
    const test = { i: [], o: 0 };
    const output = find2dArrayIncrementalValueMaximalOccurence(test.i);
    expect(output).toBe(test.o);
  });
  test("1", () => {
    const test = { i: ["1 3", "2 2", "4 4"], o: 2 };
    const output = find2dArrayIncrementalValueMaximalOccurence(test.i);
    expect(output).toBe(test.o);
  });
  test("2", () => {
    const test = { i: ["4 4", "2 2", "3 1"], o: 2 };
    const output = find2dArrayIncrementalValueMaximalOccurence(test.i);
    expect(output).toBe(test.o);
  });
  test("3", () => {
    const test = { i: ["5 5"], o: 25 };
    const output = find2dArrayIncrementalValueMaximalOccurence(test.i);
    expect(output).toBe(test.o);
  });
  it("should return 0 for an empty input", () => {
    const test = { i: [], o: 0 };
    const output = find2dArrayIncrementalValueMaximalOccurence(test.i);
    expect(output).toBe(test.o);
  });
});