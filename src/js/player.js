import { board as _board} from "./gameboard";

export const giveMeOneFreeCell = (board) => {
  const freeCells = board.getFreeCells();
  const idx = Math.floor(Math.random() * freeCells.length);
  return freeCells[idx];
};

export const player = {
  shoot: (xx, yy) => board.receiveAttack(xx, yy),

  random: () => {
    let cell = giveMeOneFreeCell(grid);
    return board.receiveAttack(cell.x, cell.y);
  },
  bonus: (shoot, grid) => {
    while (shoot && grid.getFreeCells().length > 0) {
      const cell = giveMeOneFreeCell(grid);
      shoot = grid.receiveAttack(cell.x, cell.y);
    }
    return grid.getUsedCells().length;
  }
};
