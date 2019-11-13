import { game } from "../js/gameboard";
import { ship } from "../js/ship";

const boardgame = game.board();

const obj1 = ship.generator([{ x: 4, y: 4 }]);
const obj2 = ship.generator([
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 }
]);

const obj3 = ship.generator([
  { x: 2, y: 4 },
  { x: 2, y: 3 }
]);

test("board object exists", () => {
  expect(boardgame).toBeDefined();
});

test("board.game object exists", () => {
  expect(game.board).toBeDefined();
});

describe("check game integrity", () => {
  test("board size must be 25 after inital game.board() setup", () => {
    expect(game.layout.length).toBe(25);
  });

  test("game.getShips() and game.waterPosition() must return the places occupied by ships and water", () => {
    expect(game.waterPosition().length).toBe(19);
    expect(game.getShips().length).toBe(6);
  });

  test("board cells where a ship is contain its id", () => {
    const cells = game.getShips();
    cells.forEach(ship => {
      const size = ship.length;
      expect(ship.shipId).toBe(`ship-${size}`);
    });
  });

  test("checking receiveAttack()", () => {
    game.receiveAttack(4, 4);
    expect(obj1.float).toBe(false);
  });
});
