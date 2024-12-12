import { addNumbersToGrid, createRandomGridMap } from "./utils";

const DEFAULT_ROWS = 8;
const DEFAULT_COLS = 8;
const DEFAULT_MINES = 10;

export class Game {
  constructor() {
    this.grid = this.createGrid();
  }

  createGrid() {
    const grid = createRandomGridMap(DEFAULT_ROWS, DEFAULT_COLS, DEFAULT_MINES);
    const newGrid = addNumbersToGrid(grid);
    console.log(newGrid);
    return newGrid;
  }
}
