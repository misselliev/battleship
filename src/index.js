import fav from "../src/img/favicon.ico";
import "../src/css/style.css";
import { game } from "../src/js/game";
import { gridGenerator, resetDom } from "../src/js/dom/loader";
import { getById } from "../src/js/dom/aux";

(function setupFavicon() {
  const setFav = document.getElementById("favicon");
  setFav.href = fav;
})();

let start;
function startGame() {
  start = game.setup();
  game.placeShips(start.humanObj, "human");
  game.placeShips(start.computerObj);
  gridGenerator(
    start.computerObj,
    start.humanObj,
    "computer",
    start.computerPlayer
  );
  gridGenerator(start.humanObj, start.computerObj, "human", start.humanPlayer);
  return start;
};

getById("start").addEventListener("click", () => {
  resetDom();
  game.restart(start.humanObj, start.computerObj);
  startGame();
});

startGame();