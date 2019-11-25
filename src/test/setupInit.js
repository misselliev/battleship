import { game } from "../js/game";

let setup = game.setup();

export const init = (() => {
  const obj = {
    humanObj: setup.humanObj,
    computerObj: setup.computerObj,
    gridHuman: setup.humanGrid,
    gridComputer: setup.computerGrid,
    humanPlayer: setup.humanPlayer,
    computerPlayer: setup.computerPlayer
  };
  return obj;
})();
