import { Game } from "../game";

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

    it("should create a grid with correct number of mines", () => {
      jest
        .spyOn(require("../utils"), "createRandomGridMap")
        .mockReturnValue(game1);
      const game = new Game();
      expect(game.grid).toEqual(resultGame1);
    });
  });
});
