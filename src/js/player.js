import { computeIdx, board as _board } from "./gameboard";
import { getById } from "./dom/aux";

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
    const attack = boardObj.receiveAttack(cell.x, cell.y, oponent, boardObj);
    updateColor(cell.x, cell.y, attack);
    return attack;
  };

  const bonus = (shoot, oponent, boardObj) => {
    while (shoot && boardObj.getFreeCells().length > 0) {
      const cell = giveMeOneFreeCell(boardObj);
      shoot = boardObj.receiveAttack(cell.x, cell.y, oponent, boardObj);
      updateColor(cell.x, cell.y, shoot);
    }
    return shoot;
  };

  const updateColor = (xx, yy, status) => {
    const idx = computeIdx(xx, yy)
    if (status) {
      getById(`c-${idx}`).style.backgroundColor = "yellow";
    } else {
      getById(`c-${idx}`).style.backgroundColor = "purple";
    }
  }
  return { shoot, randomShoot, bonus };
};
