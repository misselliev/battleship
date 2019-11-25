import { ship as _ship } from "./ship";

export const computeIdx = (posX, posY) => posY * boardSize + posX;
const boardSize = 5;
const gridGenerator = () => {
  const grid = [];
  for (let i = 0; i < boardSize; i += 1) {
    for (let j = 0; j < boardSize; j += 1) {
      grid.push({
        x: j,
        y: i,
        water: true,
        shipId: "",
        used: false,
        length: 0
      });
    }
  }
  return grid;
};

export const board = () => {
  let layout = [];
  let occupied = [];
  const getOccupied = () => occupied;
  const getGrid = () => layout;
  const setGrid = () => (layout = gridGenerator());
  const getShips = () => layout.filter(cell => !cell.water);
  const getUsedCells = () => layout.filter(cell => cell.used);
  const setUsedCell = (posX, posY) => {
    const idx = computeIdx(posX, posY);
    layout[idx].used = true;
  };
  const getFreeCells = () => layout.filter(cell => !cell.used);

  const getMissedHits = () => {
    return layout.filter(cell => cell.used && cell.water);
  };
  const waterPosition = () => {
    return layout.filter(cell => cell.water);
  };

  const setShipPosition = ship => {
    Object.keys(ship.pos).forEach(key => {
      const idx = computeIdx(ship.pos[key].x, ship.pos[key].y);
      layout[idx].water = false;
      layout[idx].shipId = ship.id;
      layout[idx].length = ship.length;
    });
  };
  const receiveAttack = (posX, posY, oponent, boardObj) => {
    const myBoats = boardObj.getShips();
    const temp = myBoats.filter(ship => ship.x == posX && ship.y == posY);
    boardObj.setUsedCell(posX, posY);
    if (temp) return _ship.hit(posX, posY, oponent, boardObj);
    if (!temp) return false;
  };

  return {
    getOccupied,
    getShips,
    getUsedCells,
    setUsedCell,
    getFreeCells,
    getMissedHits,
    waterPosition,
    getGrid,
    setGrid,
    setShipPosition,
    receiveAttack
  };
};
