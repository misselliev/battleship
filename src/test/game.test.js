import { board as _board } from "../js/gameboard";
import { game } from "../js/game";
import { init } from "../test/setupInit";

let shipsComputer = {};
let shipsHuman = {};
beforeAll(() => {
  shipsComputer = game.placeShips(init.computerObj);
  shipsHuman = game.placeShips(init.humanObj, "human");
});

test("game exists", () => {
  expect(init).toBeDefined();
});

test("there are two boards and six ships to start", () => {
  expect(init.gridHuman).toBeDefined();
  expect(init.gridComputer).toBeDefined();
  expect(init.computerObj.getShips().length).toBe(6);
  expect(init.humanObj.getShips().length).toBe(6);
});

test("placing ships automatically for computer", () => {
  expect(shipsComputer.oneSize.id).toBe("ship-1");
  expect(shipsComputer.twoSize.id).toBe("ship-2");
  expect(shipsComputer.threeSize.id).toBe("ship-3");
  expect(shipsComputer.oneSize.length).toBe(1);
  expect(shipsComputer.twoSize.length).toBe(2);
  expect(shipsComputer.threeSize.length).toBe(3);
  expect(init.computerObj.waterPosition().length).toBe(19);
});

test("placing ships automatically for human", () => {
  expect(shipsHuman.oneSize.id).toBe("ship-1");
  expect(shipsHuman.twoSize.id).toBe("ship-2");
  expect(shipsHuman.threeSize.id).toBe("ship-3");
  expect(shipsHuman.oneSize.length).toBe(1);
  expect(shipsHuman.twoSize.length).toBe(2);
  expect(shipsHuman.threeSize.length).toBe(3);
  expect(init.humanObj.waterPosition().length).toBe(19);
});
