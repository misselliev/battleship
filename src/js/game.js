import { ship } from "./ship";
import { board } from "./gameboard";
import { player } from "./player";
import { giveMeOneFreeCell } from "./player";
import { getZones, decode } from "./zone";
// import { decode } from "./zone";

export const game = {
  setup: () => {
    let playerBoard = board.grid();
    let computerBoard = board.grid();
    // playerBoard[0].id = "holaa";

    return { playerBoard, computerBoard };
  },
  randomizeSmallShip: () => {
    let { x, y } = giveMeOneFreeCell();
    return ship.generator([{ x, y }]);
  },
  randomizeBigShip: positions => {
    let arr = decode(positions);
    return ship.generator(arr);
  }
};
