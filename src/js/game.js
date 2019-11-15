import { ship } from "./ship";
import { board as _board } from "./gameboard";
import { player } from "./player";
import { giveMeOneFreeCell } from "./player";
import { getZones, decode } from "./zone";

export const game = {
  setup: () => {
    const board1 = _board();
    const board2 = _board();
    board1.setGrid();
    board2.setGrid();
    board1.getGrid()[0].id = 'haaaa'
    board2.getGrid()[0].id = 'ohhh'
    return [board1, board2];
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
