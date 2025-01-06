// import { Game } from "./game.js";
import { Game } from "./game.js";
import "./window-util.js";

let newGame;

document.addEventListener("DOMContentLoaded", () => {
  newGame = new Game("new-game");
  console.table(newGame.grid);
});
