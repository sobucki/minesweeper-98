import { Game } from "./game.js";

let game;

document.addEventListener("DOMContentLoaded", () => {
  game = new Game("game-board");

  const mineArea = document.querySelector(".mines-area");

  mineArea.addEventListener("click", (event) => {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (event.target.classList.contains("mine")) {
      game.revealCell(row, col, cell);
    }
  });

  console.table(game.grid);
});
