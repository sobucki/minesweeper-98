import { addNumbersToGrid, createRandomGridMap } from "./utils.js";

const DEFAULT_ROWS = 8;
const DEFAULT_COLS = 8;
const DEFAULT_MINES = 10;

export class Game {
  constructor(container) {
    this.container = container;
    this.grid = this.createGrid();
    this.drawGrid();
  }

  createGrid() {
    const grid = createRandomGridMap(DEFAULT_ROWS, DEFAULT_COLS, DEFAULT_MINES);
    const newGrid = addNumbersToGrid(grid);
    return newGrid;
  }

  drawGrid() {
    const gameBoard = document.querySelector(`#${this.container}`);

    const minesArea = gameBoard.querySelector(".mines-area");

    this.grid.forEach((row, _rowIndex) => {
      const rowElement = document.createElement("div");
      rowElement.className = "row";
      row.forEach((cell, _colIndex) => {
        const cellElement = document.createElement("div");
        cellElement.className = "mine";
        cellElement.textContent = cell;
        rowElement.appendChild(cellElement);
      });
      minesArea.appendChild(rowElement);
    });
  }
}
