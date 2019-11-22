import { ship } from "./ship";
import { board as _board } from "./gameboard";
import { player } from "./player";
import { giveMeOneFreeCell } from "./player";
import { getZones, decode, decodeClick } from "./zone";
import { getById } from "./dom/aux";

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
  placeShips: (boardObj, name = "computer") => {
    let oneSize, twoSize, threeSize;

    oneSize = game.randomizeSmallShip(boardObj, name);
    threeSize = game.randomizeBigShip(boardObj, 3, name);
    twoSize = game.randomizeBigShip(boardObj, 2, name);
    return { oneSize, twoSize, threeSize };
  },
  randomizeSmallShip: (board, name = "computer") => {
    let { x, y } = giveMeOneFreeCell(board);
    let index = y * 5 + x;
    board.getOccupied().push(index);
    return ship.generator([{ x, y }], board, name);
  },
  randomizeBigShip: (board, size, name = "computer") => {
    const positions = getZones(board, size);
    let arr = decode(positions, board);
    return ship.generator(arr, board, name);
  },
  gameOver: (humanBoard, computerBoard) => {
    const computerShips = computerBoard.getShips().every(cell => cell.used);
    const humanShips = humanBoard.getShips().every(cell => cell.used);

    let winner = "";
    if (computerShips || humanShips) {
      winner = computerShips ? "Human" : "Computer";
      alert(`${winner} wins`);
    }
  }
};
export const humanAttack = async (boardObj, player, idx) => {
  const target = decodeClick(idx);
  const attack = await player.shoot(target.x, target.y, "computer", boardObj);
  if (attack) {
    getById(idx).style.backgroundColor = "yellow";
  } else {
    getById(idx).style.backgroundColor = "purple";
  }
  return attack;
};
