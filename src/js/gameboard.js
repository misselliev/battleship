import { ship } from "./ship";
const _ship = ship;

const computeIdx = (posX, posY) => posX * boardSize + posY;
const boardSize = 5;

export const board = {
  layout: [],
  grid: () => {
    for (let i = 0; i < boardSize; i += 1) {
      for (let j = 0; j < boardSize; j += 1) {
        board.layout.push({
          x: i,
          y: j,
          water: true,
          shipId: "",
          used: false,
          length: 0
        });
      }
    }
    return board.layout;
  },
  getShips: () => board.layout.filter(cell => !cell.water),
  getUsedCells: () => board.layout.filter(cell => cell.used),
  getFreeCells: () => board.layout.filter(cell => !cell.used),
  setUsedCell: (posX, posY) => {
    const idx = computeIdx(posX, posY);
    const cell = board.layout[idx];
    cell.used = true;
  },
  getMissedHits: () => {
    return board.layout.filter(cell => cell.used && cell.water);
  },
  waterPosition: () => board.layout.filter(cell => cell.water),
  setShipPosition: ship => {
    Object.keys(ship.pos).forEach(key => {
      const idx = computeIdx(ship.pos[key].x, ship.pos[key].y);
      board.layout[idx].water = false;
      board.layout[idx].shipId = ship.id;
      board.layout[idx].length = ship.length;
    });
  },
  receiveAttack: (posX, posY) => {
    const myBoats = board.getShips();
    const temp = myBoats.filter(ship => ship.x == posX && ship.y == posY);
    board.setUsedCell(posX, posY);
    if (temp) {
      return _ship.hit(posX, posY);
    } else {
      board.setMissedHits(posX, posY);
      return false;
    }
  },
  gameOver: () => {
    return board.getShips().every(cell => cell.used);
  }
};
