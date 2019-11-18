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
describe("check player integrity", () => {
  test("player can shoot", () => {
    init.humanPlayer.shoot(0, 0, "human", init.humanObj);
    expect(init.humanObj.getGrid()[0].used).toBe(true);
  });
  test("player can shoot and miss", () => {
    init.humanPlayer.shoot(1, 4, "human", init.humanObj);
    expect(init.humanObj.getGrid()[9].used).toBe(true);
  });
  test("random() ", () => {
    expect(init.humanObj.getUsedCells().length).toBe(2);
    init.humanPlayer.randomShoot("human", init.humanObj);
    expect(init.humanObj.getUsedCells().length).toBe(3);
  });

  test("bonus() increment the used cells while is hitting ships", () => {
    const numberOfCells = init.humanPlayer.bonus(
      true,
      "computer",
      init.humanObj
    );
    const usedSize = init.humanObj.getUsedCells().length;
    expect(numberOfCells).toBe(usedSize);
  });
});
