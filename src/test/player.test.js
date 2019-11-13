import { board } from "../js/gameboard";
import { ship } from "../js/ship";
import { player } from "../js/player";
import { log } from "util";

test("player object exists", () => {
  expect(player).toBeDefined();
});

beforeAll(() => {
  board.grid();
  ship.generator([{ x: 4, y: 4 }]);
  ship.generator([
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 }
  ]);
});
describe("check player integrity", () => {
  test("player can shoot", () => {
    player.shoot(0, 0);
    expect(board.layout[0].used).toBe(true);
  });
  test("player can shoot and miss", () => {
    player.shoot(1, 4);
    expect(board.layout[9].used).toBe(true);
  });
  test("random() ", () => {
    expect(board.getUsedCells().length).toBe(2);
    player.random();
    expect(board.getUsedCells().length).toBe(3);
  });

  test("bonus() increment the used cells while is hitting ships", () => {
    const numberOfCells = player.bonus(true);
    const usedSize = board.getUsedCells().length;
    expect(numberOfCells).toBe(usedSize);
  });
});
