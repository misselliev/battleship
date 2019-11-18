import fav from "../src/img/favicon.ico";
import "../src/css/style.css";

(function setupFavicon() {
  const setFav = document.getElementById("favicon");
  setFav.href = fav;
})();

