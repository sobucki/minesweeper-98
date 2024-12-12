import { addNumbersToGrid, createRandomGridMap } from "../utils";

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

    it("should throw an exception when passing above 1 for rows or cols", () => {
      expect(() => {
        createRandomGridMap(0, 2, 1);
      }).toThrow("Invalid rows or cols");
      expect(() => {
        createRandomGridMap(2, 0, 1);
      }).toThrow("Invalid rows or cols");
    });
  });

  describe("addValuesToMines", () => {
    it("should add correct value to proximity mines to 2x2", () => {
      const grid1 = [
        ["*", 0],
        [0, 0],
      ];

      expect(addNumbersToGrid(grid1)).toEqual([
        ["*", 1],
        [1, 1],
      ]);

      const grid2 = [
        ["*", "*"],
        [0, 0],
      ];

      expect(addNumbersToGrid(grid2)).toEqual([
        ["*", "*"],
        [2, 2],
      ]);

      const grid3 = [
        ["*", "*"],
        ["*", 0],
      ];

      expect(addNumbersToGrid(grid3)).toEqual([
        ["*", "*"],
        ["*", 3],
      ]);
    });

    it("should add correct value to proximity mines to 3x3", () => {
      const grid1 = [
        ["*", 0, 0],
        [0, 0, 0],
      ];

      expect(addNumbersToGrid(grid1)).toEqual([
        ["*", 1, 0],
        [1, 1, 0],
      ]);

      const grid2 = [
        ["*", 0, 0],
        [0, "*", 0],
      ];

      expect(addNumbersToGrid(grid2)).toEqual([
        ["*", 2, 1],
        [2, "*", 1],
      ]);

      const grid3 = [
        ["*", "*", 0],
        [0, "*", 0],
      ];

      expect(addNumbersToGrid(grid3)).toEqual([
        ["*", "*", 2],
        [3, "*", 2],
      ]);

      const grid4 = [
        ["*", "*", 0],
        ["*", "*", 0],
      ];

      expect(addNumbersToGrid(grid4)).toEqual([
        ["*", "*", 2],
        ["*", "*", 2],
      ]);

      const grid5 = [
        ["*", 0, "*"],
        ["*", 0, "*"],
      ];

      expect(addNumbersToGrid(grid5)).toEqual([
        ["*", 4, "*"],
        ["*", 4, "*"],
      ]);

      const grid6 = [
        ["*", "*", "*"],
        ["*", 0, "*"],
      ];

      expect(addNumbersToGrid(grid6)).toEqual([
        ["*", "*", "*"],
        ["*", 5, "*"],
      ]);
    });

    it("should add correct value to proximity mines to 4x4", () => {
      const grid1 = [
        ["*", 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      expect(addNumbersToGrid(grid1)).toEqual([
        ["*", 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);

      const grid2 = [
        [0, 0, 0, 0],
        [0, "*", 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      expect(addNumbersToGrid(grid2)).toEqual([
        [1, 1, 1, 0],
        [1, "*", 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ]);

      const grid3 = [
        [0, 0, 0, 0],
        [0, "*", "*", 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      expect(addNumbersToGrid(grid3)).toEqual([
        [1, 2, 2, 1],
        [1, "*", "*", 1],
        [1, 2, 2, 1],
        [0, 0, 0, 0],
      ]);

      const grid4 = [
        [0, 0, 0, 0],
        [0, "*", "*", 0],
        [0, "*", 0, 0],
        [0, 0, 0, 0],
      ];

      expect(addNumbersToGrid(grid4)).toEqual([
        [1, 2, 2, 1],
        [2, "*", "*", 1],
        [2, "*", 3, 1],
        [1, 1, 1, 0],
      ]);

      const grid5 = [
        [0, 0, 0, 0],
        [0, "*", "*", 0],
        [0, "*", 0, 0],
        [0, "*", 0, 0],
      ];

      expect(addNumbersToGrid(grid5)).toEqual([
        [1, 2, 2, 1],
        [2, "*", "*", 1],
        [3, "*", 4, 1],
        [2, "*", 2, 0],
      ]);

      const grid6 = [
        [0, 0, 0, 0],
        [0, "*", "*", 0],
        [0, "*", 0, 0],
        [0, "*", "*", 0],
      ];

      expect(addNumbersToGrid(grid6)).toEqual([
        [1, 2, 2, 1],
        [2, "*", "*", 1],
        [3, "*", 5, 2],
        [2, "*", "*", 1],
      ]);

      const grid7 = [
        [0, 0, 0, 0],
        [0, "*", "*", 0],
        [0, "*", 0, 0],
        [0, "*", "*", "*"],
      ];

      expect(addNumbersToGrid(grid7)).toEqual([
        [1, 2, 2, 1],
        [2, "*", "*", 1],
        [3, "*", 6, 3],
        [2, "*", "*", "*"],
      ]);

      const grid8 = [
        [0, 0, 0, 0],
        [0, "*", "*", 0],
        [0, "*", 0, "*"],
        [0, "*", "*", "*"],
      ];

      expect(addNumbersToGrid(grid8)).toEqual([
        [1, 2, 2, 1],
        [2, "*", "*", 2],
        [3, "*", 7, "*"],
        [2, "*", "*", "*"],
      ]);

      const grid9 = [
        [0, 0, 0, 0],
        [0, "*", "*", "*"],
        [0, "*", 0, "*"],
        [0, "*", "*", "*"],
      ];

      expect(addNumbersToGrid(grid9)).toEqual([
        [1, 2, 3, 2],
        [2, "*", "*", "*"],
        [3, "*", 8, "*"],
        [2, "*", "*", "*"],
      ]);

      const grid10 = [
        ["*", 0, 0, 0],
        [0, "*", 0, 0],
        [0, 0, "*", 0],
        [0, 0, 0, "*"],
      ];

      expect(addNumbersToGrid(grid10)).toEqual([
        ["*", 2, 1, 0],
        [2, "*", 2, 1],
        [1, 2, "*", 2],
        [0, 1, 2, "*"],
      ]);

      const grid11 = [
        ["*", 0, "*", 0],
        [0, "*", 0, "*"],
        ["*", 0, "*", 0],
        [0, "*", 0, "*"],
      ];

      expect(addNumbersToGrid(grid11)).toEqual([
        ["*", 3, "*", 2],
        [3, "*", 4, "*"],
        ["*", 4, "*", 3],
        [2, "*", 3, "*"],
      ]);
    });
  });
});
