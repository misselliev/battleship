import { board } from "../js/gameboard";
import { ship } from "../js/ship";

let boardgame;
let obj1, obj2, obj3;

beforeAll(() => {
  boardgame = board.grid();
  obj1 = ship.generator([{ x: 4, y: 4 }]);
  obj2 = ship.generator([
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 }
  ]);
  obj3 = ship.generator([
    { x: 2, y: 4 },
    { x: 2, y: 3 }
  ]);
});

test("board object exists", () => {
  expect(boardgame).toBeDefined();
});

test("board.game object exists", () => {
  expect(board.grid).toBeDefined();
});

describe("check game integrity", () => {
  test("board size must be 25 after inital game.board() setup", () => {
    expect(board.layout.length).toBe(25);
  });

  test("game.getShips() and game.waterPosition() must return the places occupied by ships and water", () => {
    expect(board.waterPosition().length).toBe(19);
    expect(board.getShips().length).toBe(6);
  });

  test("board cells where a ship is contain its id", () => {
    const cells = board.getShips();
    cells.forEach(ship => {
      const size = ship.length;
      expect(ship.shipId).toBe(`ship-${size}`);
    });
  });

  test("receiveAttack() must set the ship.float = false if the boat has only one position left", () => {
    board.receiveAttack(4, 4);
    expect(obj1.float).toBe(false);
  });

  test("receiveAttack() must update certain cell as used in the layout.board", () => {
    const posX = 0;
    const posY = 2;
    board.receiveAttack(posX, posY);
    const usedCell = board
      .getUsedCells()
      .filter(cell => cell.x == posX && cell.y == posY);
    expect(usedCell[0].used).toBe(true);
  });

  test("gameOver() returns true if there are no ships to hit", () => {
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    board.receiveAttack(2, 4);
    board.receiveAttack(2, 3);
    expect(board.gameOver()).toBe(true);
  });

  test("getMissedHits() should return all the cells where the player has shoot and there are no ships", () => {
    expect(board.getMissedHits().length).toBe(0);
    board.receiveAttack(2, 1);
    expect(board.getMissedHits().length).toBe(1);
    board.receiveAttack(3, 1);
    expect(board.getMissedHits().length).toBe(2);
  });
});
