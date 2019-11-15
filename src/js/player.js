import { board as _board } from "./gameboard";

export const giveMeOneFreeCell = board => {
  const freeCells = board.getFreeCells();
  const idx = Math.floor(Math.random() * freeCells.length);
  return freeCells[idx];
};

export const player = () => {
  const shoot = (xx, yy, oponent, boardObj) =>
    boardObj.receiveAttack(xx, yy, oponent, boardObj);

  const randomShoot = (oponent, boardObj) => {
    let cell = giveMeOneFreeCell(boardObj);
    return boardObj.receiveAttack(cell.x, cell.y, oponent, boardObj);
  };
  const bonus = (shoot, oponent, boardObj) => {
    while (shoot && boardObj.getFreeCells().length > 0) {
      const cell = giveMeOneFreeCell(boardObj);
      shoot = boardObj.receiveAttack(cell.x, cell.y, oponent, boardObj);
    }
    return boardObj.getUsedCells().length;
  };
  return { shoot, randomShoot, bonus };
};
