import { board as _board } from "../js/gameboard";
import { ship } from "../js/ship";
import { player } from "../js/player";
import { game } from "../js/game";

let board, gridPlayer, humanPlayer, boardObj;

beforeAll(() => {
  board = game.setup();
  boardObj = board[0];
  gridPlayer = boardObj.getGrid();
  humanPlayer = player();
  ship.generator([{ x: 4, y: 4 }], boardObj, "human");
  ship.generator(
    [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 }
    ],
    boardObj,
    "human"
  );
});

test("player object exists", () => {
  expect(humanPlayer).toBeDefined();
});
describe("check player integrity", () => {
  test("player can shoot", () => {
    humanPlayer.shoot(0, 0, "human", boardObj);
    expect(boardObj.getGrid()[0].used).toBe(true);
  });
  test("player can shoot and miss", () => {
    humanPlayer.shoot(1, 4, "human", boardObj);
    expect(boardObj.getGrid()[9].used).toBe(true);
  });
  test("random() ", () => {
    expect(boardObj.getUsedCells().length).toBe(2);
    humanPlayer.randomShoot("human", boardObj);
    expect(boardObj.getUsedCells().length).toBe(3);
  });

  test("bonus() increment the used cells while is hitting ships", () => {
    const numberOfCells = humanPlayer.bonus(true, "computer", boardObj);
    const usedSize = boardObj.getUsedCells().length;
    expect(numberOfCells).toBe(usedSize);
  });
});
