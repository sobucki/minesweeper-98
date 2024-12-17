import { Game } from "../game";
import "@testing-library/jest-dom";

describe("Game tests", () => {
  describe("initializing values", () => {
    const game1 = [
      [0, 0, 0, 0],
      [0, "*", "*", 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    const resultGame1 = [
      [1, 2, 2, 1],
      [1, "*", "*", 1],
      [1, 2, 2, 1],
      [0, 0, 0, 0],
    ];

    it("should create a grid with correct number of mines", async () => {
      const createRandomGridMapMock = jest
        .spyOn(require("../utils"), "createRandomGridMap")
        .mockReturnValue(game1);
      const game = new Game("game-container");
      expect(game.grid).toEqual(resultGame1);
      createRandomGridMapMock.mockRestore();
    });
  });
});
