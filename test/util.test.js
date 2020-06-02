const { add } = require("../util/util");

describe("Add", () => {
  describe("Sucess", () => {
    it("Should return the sum of the two passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
});

describe("Failure", () => {
  it("Should throw an error if 1st argument isn't a string", () => {
    expect(() => add("2", 2)).toThrowError();
  });
});