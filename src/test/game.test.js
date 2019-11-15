import { board as _board} from "../js/gameboard";
import { ship } from "../js/ship";
import { player } from "../js/player";
import { game } from "../js/game";
import { getZones } from "../js/zone";

let grid = {};
let board, obj1, obj2, obj3, obj4, obj5, obj6;
let ships = [];
beforeAll(() => {
  board = _board()
  // grid = game.setup();
  grid = board.setGrid();
  // obj1 = ship.generator([{ x: 4, y: 4 }]);
  // obj2 = ship.generator([
  //   { x: 0, y: 0 },
  //   { x: 0, y: 1 },
  //   { x: 0, y: 2 }
  // ]);
  // obj3 = ship.generator([
  //   { x: 2, y: 4 },
  //   { x: 2, y: 3 }
  // ]);
  // obj4 = ship.generator([{ x: 2, y: 2 }]);
  // obj5 = ship.generator([
  //   { x: 1, y: 0 },
  //   { x: 1, y: 1 },
  //   { x: 1, y: 2 }
  // ]);
  // obj6 = ship.generator([
  //   { x: 3, y: 4 },
  //   { x: 3, y: 3 }
  // ]);
  ships = [obj1, obj2, obj3, obj4, obj5, obj6];
});

test("game exists", () => {
  expect(game).toBeDefined();
});

test("there are two boards and six ships to start", () => {
  // expect(grid.playerBoard).toBeDefined();
  // expect(grid.computerBoard).toBeDefined();
  expect(ships.length).toBe(6);
});

test("setting up a small boat randomnly", () => {
  const smallShip = game.randomizeSmallShip();
  if (smallShip) ships.push(smallShip);
  expect(ships.length).toBe(7);
});

let vertical2, vertical3, horizontal2, horizontal3, newShip;

test("setting up getZones for different types of ships", () => {
  
  horizontal3 = getZones(grid, 3, "horizontal");
  expect.arrayContaining(horizontal3);
  vertical2 = getZones(grid, 2, "vertical");
  expect.arrayContaining(vertical2);
  horizontal2 = getZones(grid, 2, "horizontal");
  expect.arrayContaining(horizontal3);
  vertical3 = getZones(grid, 3, "vertical");
  expect.arrayContaining(vertical2);
});

test("creating big boats randomnly vertical and horizontal", () => {
  newShip = game.randomizeBigShip(horizontal3);
  expect(newShip.id).toBe("ship-3");
  expect(newShip.length).toBe(3);
  if (newShip) ships.push(newShip);
  expect(ships.length).toBe(8);
  newShip = game.randomizeBigShip(vertical2);
  expect(newShip.id).toBe("ship-2");
  expect(newShip.length).toBe(2);
  if (newShip) ships.push(newShip);
  expect(ships.length).toBe(9);
});
