import { createRandomGridMap } from "../utils";

describe("utils tests", () => {
  describe("createRandomGridMap", () => {
    it("should create a grid with correct number of mines", () => {
      const result = createRandomGridMap(1, 1, 1);
      expect(result).toEqual([["*"]]);

      const result2 = createRandomGridMap(2, 2, 2);
      expect(result2.flat().filter((cell) => cell === "*")).toHaveLength(2);

      const result3 = createRandomGridMap(3, 3, 3);
      expect(result3.flat().filter((cell) => cell === "*")).toHaveLength(3);
    });

    it("should create a grid with no mines if mine count is 0", () => {
      const result = createRandomGridMap(2, 2, 0);
      expect(result.flat().filter((cell) => cell === "*")).toHaveLength(0);
    });

    it("should create a grid with all mines if mine count equals grid size", () => {
      const result = createRandomGridMap(2, 2, 4);
      expect(result.flat().filter((cell) => cell === "*")).toHaveLength(4);
    });

    it("should throw an exception when too many mines are passed", () => {
      expect(() => {
        createRandomGridMap(2, 2, 5);
      }).toThrow("Too many mines");
    });
  });
});
