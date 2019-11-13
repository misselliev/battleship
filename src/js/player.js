import {board} from './gameboard';

const giveMeOneFreeCell = () => {
  const freeCells = board.getFreeCells();
  const idx = Math.floor(Math.random() * freeCells.length);
  return freeCells[idx];
}

export const player = {
  shoot: (xx, yy) => board.receiveAttack(xx, yy),

  random: () => {
    let cell = giveMeOneFreeCell();
    return board.receiveAttack(cell.x, cell.y);
  },
  bonus: (shoot) => {
    while (shoot && board.getFreeCells().length > 0) {
      const cell = giveMeOneFreeCell();
      shoot = board.receiveAttack(cell.x, cell.y);
    }
    return board.getUsedCells().length;
  }
}