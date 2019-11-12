const game = require('../js/gameboard');
const ship = require('../js/ship');

game.board();
// const obj3 = ship.generator([
//   { x: 0, y: 0 },
//   { x: 0, y: 1 },
//   { x: 0, y: 2 }
// ]);
// const obj2 = ship.generator([
//   { x: 0, y: 4 },
//   { x: 1, y: 4 }
// ]);
// const obj1 = ship.generator([{ x: 3, y: 3 }]);


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
    expect(game.layout.length).toBe(25);
  });
  
  test('game.fleetPosition() and game.waterPosition() must return the places occupied by ships and water', () => {
    // expect(game.fleetPosition().length).toBe(6);    
    // expect(game.waterPosition().length).toBe(19);
  });

});
