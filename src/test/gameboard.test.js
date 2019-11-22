import { ship } from "../js/ship";
import { init } from "../test/setupInit";
import { game } from "../js/game";

let obj1, obj2, obj3;

beforeAll(() => {
  obj1 = ship.generator([{ x: 4, y: 4 }], init.humanObj, "human");
  obj2 = ship.generator(
    [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 }
    ],
    init.humanObj,
    "human"
  );
  obj3 = ship.generator(
    [
      { x: 3, y: 0 },
      { x: 3, y: 1 },
      { x: 3, y: 2 }
    ],
    init.computerObj,
    "computer"
  );
});

test("board object exists", () => {
  expect(init.humanObj).toBeDefined();
  expect(init.computerObj).toBeDefined();
});

test("gridHuman object exists", () => {
  expect(init.gridHuman).toBeDefined();
});

describe("check game integrity", () => {
  test("board size must be 25 after inital game.board() setup", () => {
    expect(init.gridHuman.length).toBe(25);
  });

  test("game.getShips() and game.waterPosition() must return the places occupied by ships and water", () => {
    expect(init.humanObj.waterPosition().length).toBe(21);
    expect(init.humanObj.getShips().length).toBe(4);
  });

  test("board cells where a ship is contained have its id", () => {
    const cells = init.humanObj.getShips();
    cells.forEach(ship => {
      const size = ship.length;
      expect(ship.shipId).toBe(`ship-${size}`);
    });
  });

  test("receiveAttack() must set the ship.float = false if the boat has only one position", () => {
    init.humanObj.receiveAttack(4, 4, "human", init.humanObj);
    expect(obj1.float).toBe(false);
  });

  test("receiveAttack() must update certain cell as used in the layout.board", () => {
    const posX = 3;
    const posY = 0;
    init.humanObj.receiveAttack(posX, posY, "computer", init.computerObj);
    const usedCell = init.computerObj
      .getUsedCells()
      .filter(cell => cell.x == posX && cell.y == posY);
    expect(usedCell[0].used).toBe(true);
  });

  test("getMissedHits() should return all the cells where the player has shoot and there are no ships", () => {
    expect(init.computerObj.getMissedHits().length).toBe(0);
    init.computerObj.receiveAttack(2, 1, "computer", init.computerObj);
    expect(init.computerObj.getMissedHits().length).toBe(1);
    init.computerObj.receiveAttack(4, 1, "computer", init.computerObj);
    expect(init.computerObj.getMissedHits().length).toBe(2);
  });
});
