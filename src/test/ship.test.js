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
});
test("ship object exists", () => {
  expect(obj1).toBeDefined();
});

describe("testing a ship integrity", () => {
  test("ship status is true for init", () => {
    expect(obj1.float).toBe(true);
  });
  test("ship has an id", () => {
    expect(obj1.id).toBeDefined();
  });
  test("ship length is correct for init", () => {
    expect(obj1.length).toBe(1);
  });
  test("ship length can not be other than specified", () => {
    expect(obj1.length).not.toBe(3);
  });
  test("ship length can not be other than specified", () => {
    expect(obj1.length).not.toBe(2);
  });
  test("ship position are correct", () => {
    expect(obj1.pos[0].x).toBe(4);
    expect(obj1.pos[0].y).toBe(4);
  });
  test("ship position can not be any other value than specified", () => {
    expect(obj1.pos[0].x).not.toBe(1);
    expect(obj1.pos[0].y).not.toBe(2);
  });
});

describe("testing a ship functions", () => {
  test("ship.pos.ok == false when a ship is impacted if position exists", () => {
    ship.hit(0, 0);
    expect(obj2.pos[0].ok).toBe(false);
  });
  test("a ship is not impacted if position doesnt exists", () => {
    ship.hit(0, 3);
    expect(obj2.pos[0].ok).toBe(false);
    expect(obj2.pos[1].ok).toBe(true);
    expect(obj2.pos[2].ok).toBe(true);
  });
  test("a ship isSunk() if all positions are hit", () => {
    ship.hit(0, 1);
    ship.hit(0, 2);
    expect(obj2.float).toBe(false);
  });
});
