import { ship } from "./ship";
import { board } from "./gameboard";
import { player } from "./player";
import { giveMeOneFreeCell } from "./player";

export const game = {
  setup: () => {
    let playerBoard = board.grid();
    let computerBoard = board.grid();

    return { playerBoard, computerBoard };
  },
  randomizeShip: () => {
    let { x, y } = giveMeOneFreeCell();
    return ship.generator([{ x, y }]);
  }
};
