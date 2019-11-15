import { board } from "../js/gameboard";
import { ship } from "../js/ship";
import { game } from "../js/game";

let obj1, obj2, obj3;
let boardInit, playerObj, computerObj, gridPlayer, gridComputer;


beforeAll(() => {
  boardInit = game.setup();
  playerObj = boardInit[0];
  computerObj = boardInit[1];
  gridPlayer = playerObj.getGrid();
  gridComputer = computerObj.getGrid();

  obj1 = ship.generator([{ x: 4, y: 4 }], playerObj, 'human');
  obj2 = ship.generator([
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 }
  ], playerObj, 'human');
  obj3 = ship.generator([
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 3, y: 2 }
  ], computerObj, 'computer');

});

test("board object exists", () => {
  expect(boardInit).toBeDefined();
});

test("gridPlayer object exists", () => {
  expect(gridPlayer).toBeDefined();
});

describe("check game integrity", () => {
  test("board size must be 25 after inital game.board() setup", () => {
    expect(gridPlayer.length).toBe(25);
  });

  test("game.getShips() and game.waterPosition() must return the places occupied by ships and water", () => {
    expect(playerObj.waterPosition().length).toBe(21);
    expect(playerObj.getShips().length).toBe(4);
  });

  test("board cells where a ship is contained have its id", () => {
    const cells = playerObj.getShips();
    cells.forEach(ship => {
      const size = ship.length;
      expect(ship.shipId).toBe(`ship-${size}`);
    });
  });

  test("receiveAttack() must set the ship.float = false if the boat has only one position", () => {
    playerObj.receiveAttack(4, 4, 'human', playerObj);
    expect(obj1.float).toBe(false);
  });

  test("receiveAttack() must update certain cell as used in the layout.board", () => {
    const posX = 3;
    const posY = 0;
    playerObj.receiveAttack(posX, posY, 'computer', computerObj);
    const usedCell = computerObj
      .getUsedCells()
      .filter(cell => cell.x == posX && cell.y == posY);
    expect(usedCell[0].used).toBe(true);
  });

  test("gameOver() returns true if there are no ships to hit", () => {
    playerObj.receiveAttack(3, 1, 'computer', computerObj);
    playerObj.receiveAttack(3, 2, 'computer', computerObj);
    expect(computerObj.gameOver()).toBe(true);
  });

  test("getMissedHits() should return all the cells where the player has shoot and there are no ships", () => {
    expect(computerObj.getMissedHits().length).toBe(0);
    computerObj.receiveAttack(2, 1, 'computer', computerObj);
    expect(computerObj.getMissedHits().length).toBe(1);
    computerObj.receiveAttack(4, 1, 'computer', computerObj);
    expect(computerObj.getMissedHits().length).toBe(2);
  });
});
