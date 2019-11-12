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
          used: false
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
    });
  },
  receiveAttack: (pos) => {}
};

module.exports = game;
