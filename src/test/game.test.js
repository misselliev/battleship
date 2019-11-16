import { board as _board } from "../js/gameboard";
import { ship } from "../js/ship";
import { player } from "../js/player";
import { game } from "../js/game";
import { getZones } from "../js/zone";
import { init } from "../test/setupInit";

let obj1, obj2, obj3, obj4, obj5, obj6;
let ships = [];
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
      { x: 2, y: 4 },
      { x: 2, y: 3 }
    ],
    init.humanObj,
    "human"
  );
  obj4 = ship.generator([{ x: 2, y: 2 }], init.computerObj, "computer");
  obj5 = ship.generator(
    [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 }
    ],
    init.computerObj,
    "computer"
  );
  obj6 = ship.generator(
    [
      { x: 3, y: 4 },
      { x: 3, y: 3 }
    ],
    init.computerObj,
    "computer"
  );
  ships = [obj1, obj2, obj3, obj4, obj5, obj6];
});

test("game exists", () => {
  expect(init).toBeDefined();
});

test("there are two boards and six ships to start", () => {
  expect(init.gridHuman).toBeDefined();
  expect(init.gridComputer).toBeDefined();
  expect(ships.length).toBe(6);
});

test("setting up a small boat randomnly", () => {
  const smallShip = game.randomizeSmallShip(init.humanObj, "human");
  if (smallShip) ships.push(smallShip);
  expect(ships.length).toBe(7);
});

let vertical2, vertical3, horizontal2, horizontal3, newShip;

test("setting up getZones for different types of ships", () => {
  horizontal3 = getZones(init.gridHuman, 3, "horizontal");
  expect.arrayContaining(horizontal3);
  vertical2 = getZones(init.gridHuman, 2, "vertical");
  expect.arrayContaining(vertical2);
  horizontal2 = getZones(init.gridHuman, 2, "horizontal");
  expect.arrayContaining(horizontal3);
  vertical3 = getZones(init.gridComputer, 3, "vertical");
  expect.arrayContaining(vertical2);
});

test("creating big boats randomnly vertical and horizontal", () => {
  newShip = game.randomizeBigShip(horizontal3, init.humanObj, "human");
  expect(newShip.id).toBe("ship-3");
  expect(newShip.length).toBe(3);
  if (newShip) ships.push(newShip);
  expect(ships.length).toBe(8);
  newShip = game.randomizeBigShip(vertical2, init.computerObj);
  expect(newShip.id).toBe("ship-2");
  expect(newShip.length).toBe(2);
  if (newShip) ships.push(newShip);
  expect(ships.length).toBe(9);
});
