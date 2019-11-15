import { board as _board } from "../js/gameboard";
import { ship } from "../js/ship";
import { player } from "../js/player";
import { game } from "../js/game";
import { getZones } from "../js/zone";

let grid = {};
let board,
  obj1,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  playerObj,
  computerObj,
  gridPlayer,
  gridComputer;
let ships = [];
beforeAll(() => {
  board = game.setup();
  playerObj = board[0];
  computerObj = board[1];
  gridPlayer = playerObj.getGrid();
  gridComputer = computerObj.getGrid();

  obj1 = ship.generator([{ x: 4, y: 4 }], playerObj, "human");
  obj2 = ship.generator(
    [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 }
    ],
    playerObj,
    "human"
  );
  obj3 = ship.generator(
    [
      { x: 2, y: 4 },
      { x: 2, y: 3 }
    ],
    playerObj,
    "human"
  );
  obj4 = ship.generator([{ x: 2, y: 2 }], computerObj, "computer");
  obj5 = ship.generator(
    [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 }
    ],
    computerObj,
    "computer"
  );
  obj6 = ship.generator(
    [
      { x: 3, y: 4 },
      { x: 3, y: 3 }
    ],
    computerObj,
    "computer"
  );
  ships = [obj1, obj2, obj3, obj4, obj5, obj6];
});

test("game exists", () => {
  expect(game).toBeDefined();
});

test("there are two boards and six ships to start", () => {
  expect(gridPlayer).toBeDefined();
  expect(gridComputer).toBeDefined();
  expect(ships.length).toBe(6);
});

test("setting up a small boat randomnly", () => {
  const smallShip = game.randomizeSmallShip(playerObj, "human");
  if (smallShip) ships.push(smallShip);
  expect(ships.length).toBe(7);
});

let vertical2, vertical3, horizontal2, horizontal3, newShip;

test("setting up getZones for different types of ships", () => {
  horizontal3 = getZones(gridPlayer, 3, "horizontal");
  expect.arrayContaining(horizontal3);
  vertical2 = getZones(gridPlayer, 2, "vertical");
  expect.arrayContaining(vertical2);
  horizontal2 = getZones(gridPlayer, 2, "horizontal");
  expect.arrayContaining(horizontal3);
  vertical3 = getZones(gridComputer, 3, "vertical");
  expect.arrayContaining(vertical2);
});

test("creating big boats randomnly vertical and horizontal", () => {
  newShip = game.randomizeBigShip(horizontal3, playerObj, "human");
  expect(newShip.id).toBe("ship-3");
  expect(newShip.length).toBe(3);
  if (newShip) ships.push(newShip);
  expect(ships.length).toBe(8);
  newShip = game.randomizeBigShip(vertical2, computerObj);
  expect(newShip.id).toBe("ship-2");
  expect(newShip.length).toBe(2);
  if (newShip) ships.push(newShip);
  expect(ships.length).toBe(9);
});
