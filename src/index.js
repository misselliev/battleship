import fav from "../src/img/favicon.ico";
import "../src/css/style.css";
import {game} from './js/game'

(function setupFavicon() {
  const setFav = document.getElementById("favicon");
  setFav.href = fav;
})();

game.setup();
