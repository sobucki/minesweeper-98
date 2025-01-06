// import { Game } from "./game.js";
import { Game as NewGame } from "./new-game.js";
import "./window-util.js";

let newGame;

document.addEventListener("DOMContentLoaded", () => {
  newGame = new NewGame("new-game");
  console.table(newGame.grid);
});
