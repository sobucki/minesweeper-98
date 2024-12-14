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

    this.grid.forEach((row, rowIndex) => {
      const rowElement = document.createElement("div");
      rowElement.className = "row";
      row.forEach((cell, colIndex) => {
        const cellElement = document.createElement("div");
        cellElement.className = "cell mine";
        // cellElement.textContent = cell;
        cellElement.dataset.row = rowIndex;
        cellElement.dataset.col = colIndex;
        rowElement.appendChild(cellElement);
      });
      minesArea.appendChild(rowElement);
    });
  }

  gameOver() {
    console.log("Game Over");
  }

  revealCell(row, col, cell) {
    if (cell.classList.contains("mine")) {
      cell.classList.remove("mine");

      if (this.grid[row][col] === "*") {
        cell.classList.add("bomb");
        this.gameOver();
        return;
      }

      cell.classList.add("open");
      if (this.grid[row][col] === 0) {
        cell.classList.add("empty");
        return;
        // this.revealEmptyCells(row, col);
      }

      const proximityValue = this.grid[row][col];

      cell.setAttribute("data-value", proximityValue);
      cell.textContent = proximityValue;
    }
  }
}
