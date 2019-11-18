import { ship } from "./ship";
import { board as _board } from "./gameboard";
import { player } from "./player";
import { giveMeOneFreeCell } from "./player";
import { getZones, decode } from "./zone";
import { gridGenerator } from '../js/dom/loader';


export const game = {
  setup: () => {
    const board1 = _board();
    const board2 = _board();
    board1.setGrid();
    board2.setGrid();
    const humanPlayer = player();
    const computerPlayer = player();
    const playerObj = board1.getGrid();
    const computerObj = board2.getGrid();

    return {
      board1,
      board2,
      human: humanPlayer,
      computer: computerPlayer,
      humanBoard: playerObj,
      computerBoard: computerObj
    };
  },
  randomizeSmallShip: (board, name = "computer") => {
    let { x, y } = giveMeOneFreeCell(board);
    return ship.generator([{ x, y }], board, name);
  },
  randomizeBigShip: (positions, board, name = "computer") => {
    let arr = decode(positions);
    return ship.generator(arr, board, name);
  }
};
