import { ship } from "./ship";
import { board as _board } from "./gameboard";
import { player } from "./player";
import { giveMeOneFreeCell } from "./player";
import { getZones, decode } from "./zone";
import { gridGenerator } from '../js/dom/loader';


export const game = {
  setup: () => {
    const humanObj = _board();
    const computerObj = _board();
    const humanPlayer = player();
    const computerPlayer = player();
    const playerGrid = humanObj.setGrid();
    const computerGrid = computerObj.setGrid();

    return {
      humanObj,
      computerObj,
      humanPlayer: humanPlayer,
      computerPlayer: computerPlayer,
      humanGrid: playerGrid,
      computerGrid: computerGrid
    };
  },
  placeShips: (boardObj, name = 'computer') => {
    let oneSize, twoSize, threeSize;

    oneSize = game.randomizeSmallShip(boardObj, name);
    twoSize = game.randomizeBigShip(boardObj, 2);
    threeSize = game.randomizeBigShip(boardObj, 3);
    return { oneSize, twoSize, threeSize }
  },
  randomizeSmallShip: (board, name = "computer") => {
    let { x, y } = giveMeOneFreeCell(board);
    return ship.generator([{ x, y }], board, name);
  },
  randomizeBigShip: (board, size, name = "computer") => {
    const positions = getZones(board.getGrid(), size)
    let arr = decode(positions);
    return ship.generator(arr, board, name);
  }
};
