import fav from "../src/img/favicon.ico";
import "../src/css/style.css";
import { game } from "../src/js/game";
import { gridGenerator } from "../src/js/dom/loader";

(function setupFavicon() {
  const setFav = document.getElementById("favicon");
  setFav.href = fav;
})();

(function startGame() {
  const start = game.setup();
  game.placeShips(start.humanObj, "human");
  game.placeShips(start.computerObj);
  gridGenerator(start.computerObj, "computer", start.computerPlayer);
  gridGenerator(start.humanObj, "human", start.humanPlayer);
  return start;
})();
