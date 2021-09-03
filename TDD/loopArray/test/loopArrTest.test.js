const loopArr = require("../src/loopArr.js");

describe("test the loopArr function", () => {
  it("catch error of steps", () => {
    expect(() => loopArr([1, 3], "right", 3)).toThrow(
      new Error("steps should be less or equal to arrary length")
    );
  });

  describe("checks loopArr function switch right elements", () => {
    it("checks loopArr function switch right two elements", () => {
      expect(loopArr([1, 3, 8, 2], "right", 2)).toEqual([8, 2, 1, 3]);
    });
    it("checks loopArr function switch right 3 elements", () => {
      expect(loopArr([1, 3, 8, 2], "right", 3)).toEqual([3, 8, 2, 1]);
    });
  });

  describe("checks loopArr function switch left elements", () => {
    it("checks loopArr function switch left two elements", () => {
      expect(loopArr([1, 3, 8, 2, 7], "left", 2)).toEqual([8, 2, 7, 1, 3]);
    });
    it("checks loopArr function switch left 2 elements", () => {
      expect(loopArr([1, 3, 8, 2, 8, 9], "left", 2)).toEqual([
        8, 2, 8, 9, 1, 3,
      ]);
    });
  });
});
