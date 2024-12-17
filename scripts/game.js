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
    if (cell.classList?.contains("mine")) {
      cell.classList.remove("mine");

      if (this.grid[row][col] === "*") {
        cell.classList.add("bomb");
        this.gameOver();
        return;
      }

      cell.classList.add("open");
      if (this.grid[row][col] === 0) {
        this.revealEmptyCells(row, col);
        return;
      }

      const proximityValue = this.grid[row][col];

      cell.setAttribute("data-value", proximityValue);
      cell.textContent = proximityValue;
    }
  }

  revealEmptyCells(row, col) {
    const cell = document.querySelector(
      `.cell[data-row="${row}"][data-col="${col}"]`
    );
    if (cell.classList.contains("empty")) {
      return;
    }

    cell.classList.add("empty");

    const directions = [
      { row: -1, col: 0 },
      { row: 1, col: 0 },
      { row: 0, col: -1 },
      { row: 0, col: 1 },
    ];

    directions.forEach((direction) => {
      const newRow = parseInt(row, 10) + direction.row;
      const newCol = parseInt(col, 10) + direction.col;

      if (
        newRow >= 0 &&
        newRow < DEFAULT_ROWS &&
        newCol >= 0 &&
        newCol < DEFAULT_COLS
      ) {
        this.revealCell(
          newRow,
          newCol,
          document.querySelector(
            `.cell[data-row="${newRow}"][data-col="${newCol}"]`
          )
        );
      }
    });
  }
}
