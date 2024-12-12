import { Game } from "./game.js";

let game;

console.log("Hello from index.js");

document.addEventListener("DOMContentLoaded", () => {
  game = new Game("game-board");
  console.table(game.grid);
});
