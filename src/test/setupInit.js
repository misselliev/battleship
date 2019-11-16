import { game } from "../js/game";

let setup = game.setup();
let humanObj, computerObj, gridHuman, gridComputer, humanPlayer, computerPlayer;
export const init = (() => {
  const obj = {
    humanObj: setup.board1,
    computerObj: setup.board2,
    gridHuman: setup.humanBoard,
    gridComputer: setup.computerBoard,
    humanPlayer: setup.human,
    computerPlayer: setup.computer
  };
  return obj;
})();
