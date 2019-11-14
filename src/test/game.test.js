import { board } from "../js/gameboard";
import { ship } from "../js/ship";
import { player } from "../js/player";
import { game } from "../js/game";
let grid = {};
let obj1, obj2, obj3, obj4, obj5, obj6;
let ships = [];
beforeAll(() => {
  grid = game.setup();
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
  expect(grid.playerBoard).toBeDefined();
  expect(grid.computerBoard).toBeDefined();
  expect(ships.length).toBe(6);
});

test("setting up a boat randomnly", () => {});
