import { board as _board } from "../js/gameboard";
import { ship } from "../js/ship";
import { init } from "../test/setupInit";

beforeAll(() => {
  ship.generator([{ x: 4, y: 4 }], init.humanObj, "human");
  ship.generator(
    [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 }
    ],
    init.humanObj,
    "human"
  );
});

test("player object exists", () => {
  expect(init.humanPlayer).toBeDefined();
});
