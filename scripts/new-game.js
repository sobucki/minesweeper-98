import { addNumbersToGrid, createRandomGridMap } from "./utils.js";

const DEFAULT_ROWS = 8;
const DEFAULT_COLS = 8;
const DEFAULT_MINES = 10;

export class Game {
  constructor(container) {
    this.container = container;
    this.grid = this.createGrid();
    this.drawGrid();
    this.gameState = "playing";
  }

  createGrid() {
    const grid = createRandomGridMap(DEFAULT_ROWS, DEFAULT_COLS, DEFAULT_MINES);

    const newGrid = addNumbersToGrid(grid);
    return newGrid;
  }

  drawGrid() {
    const gameBoard = document.querySelector(`#${this.container}`);

    const minesArea = gameBoard.querySelector(".game-board");

    gameBoard.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    this.grid.forEach((row, rowIndex) => {
      const rowElement = document.createElement("div");
      rowElement.className = "row";
      row.forEach((cell, colIndex) => {
        const cellElement = document.createElement("button");
        cellElement.className = "cell";
        cellElement.dataset.row = rowIndex;
        cellElement.dataset.col = colIndex;
        cellElement.oncontextmenu = (event) => event.preventDefault();
        cellElement.addEventListener("click", this.clickCell.bind(this));
        cellElement.addEventListener("contextmenu", () =>
          this.addFlag(cellElement)
        );
        cellElement.addEventListener("mousedown", () =>
          this.changeButtonState("scary-face")
        );
        cellElement.addEventListener("mouseup", () =>
          this.changeButtonState("happy-face")
        );

        rowElement.appendChild(cellElement);
      });
      minesArea.appendChild(rowElement);
    });
  }

  clickCell(event) {
    if (this.gameState !== "playing") {
      return;
    }
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    this.revealCell(row, col, cell);
  }

  addFlag(cellElement) {
    if (cellElement.classList.contains("reveal")) {
      return;
    }
    cellElement.classList.toggle("flagged");
  }

  gameOver() {
    this.revealAllBombs();
    this.gameState = "game-over";
    this.changeButtonState("dead-face");
  }

  revealAllBombs() {
    this.grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === "*") {
          const cellElement = document.querySelector(
            `.cell[data-row="${rowIndex}"][data-col="${colIndex}"]`
          );
          cellElement.classList.add("bomb");
        }
      });
    });
  }

  changeButtonState(state) {
    const button = document.querySelector(".status-button");

    button.classList.remove("scary-face", "happy-face", "dead-face");
    button.classList.add(state);
  }

  revealCell(row, col, cell) {
    console.log(row, col, cell);
    if (
      !cell.classList.contains("reveal") &&
      !cell.classList.contains("flagged")
    ) {
      console.log(row, col, cell);

      if (this.grid[row][col] === "*") {
        cell.classList.add("bomb");
        cell.classList.add("exploded");
        cell.classList.add("reveal");
        this.gameOver();
        return;
      }
      if (this.grid[row][col] === 0) {
        this.revealEmptyCells(row, col);
        cell.classList.add("reveal");
        return;
      }
      cell.classList.add("reveal");
      const proximityValue = this.grid[row][col];

      cell.setAttribute("data-value", proximityValue);
      cell.textContent = proximityValue;
    }
  }

  revealEmptyCells(row, col) {
    console.log(row, col);
    const cell = document.querySelector(
      `.cell[data-row="${row}"][data-col="${col}"]`
    );
    if (cell.classList.contains("reveal")) {
      console.log("reveal-contains");
      return;
    }

    cell.classList.add("reveal");

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
