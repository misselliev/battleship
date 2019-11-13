const _ship = require('../js/ship');

const computeIdx = (posX, posY) => posX * boardSize + posY;
const boardSize = 5;

const game = {
  layout: [],
  shipPositions: [],
  missedHits: [],
  board: () => {
    for (let i = 0; i < boardSize; i += 1) {
      for (let j = 0; j < boardSize; j += 1) {
        game.layout.push({
          x: i,
          y: j,
          water: true,
          shipId: '',
          hit: false,
          used: false,
          length: 0
        });
      }
    }
    return game.layout;
  },
  getShips: () => game.layout.filter((cell) => !cell.water),
  getUsedCells: () => game.layout.filter((cell) => cell.used),
  setUsedCell: (posX, posY) => {
    const idx = computeIdx(posX, posY);
    game.layout[idx].used = true;
  },
  waterPosition: () => game.layout.filter((cell) => cell.water),
  setShipPosition: (ship) => {
    Object.keys(ship.pos).forEach((key) => {
      const idx = computeIdx(ship.pos[key].x, ship.pos[key].y);
      game.layout[idx].water = false;
      game.layout[idx].shipId = ship.id;
      game.layout[idx].length = ship.length;
    });
  },
  receiveAttack: (posX, posY) => {
    const myBoats = game.getShips();
    const temp = myBoats.filter((ship) => ship.x == posX && ship.y == posY);
    if (temp) {
      game.setUsedCell(posX, posY);
      _ship.hit(posX, posY);
    }
  }
};
module.exports = game;
