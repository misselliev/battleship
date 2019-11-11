const game = require('../js/gameboard');
const ship = require('../js/ship');

const obj2 = ship.generatorThree([
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 }
]);
const obj3 = ship.generatorTwo([
  { x: 0, y: 4 },
  { x: 1, y: 4 }
]);
const obj4 = ship.generatorOne([
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 }
]);


const res = [ { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 0, y: 3 },
  { x: 0, y: 4 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 2, y: 0 },
  { x: 2, y: 1 },
  { x: 2, y: 2 },
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 3, y: 0 },
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 0 },
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 4, y: 4 } ]
test('board object exists', () => {
  expect(game).toBeDefined();
});

test('board.game object exists', () => {
  expect(game.board).toBeDefined();
});

describe('check game integrity', () => {
  test('board size must be 25 after inital game.board() setup', () => {
    game.board();
    expect(game.layout.length).toBe(25);
  });
  
  test('game.fleetPosition() must save registers of the shoots', () => {
    expect(game.fleetPosition().length).toBe(3);
  

  });

});
