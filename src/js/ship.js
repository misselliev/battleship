const game = require('./gameboard');

const ship = {
  layoutUpdater: (player, positions) => {
    game.layout.map(item => {
      positions.forEach(pos => {
        if (item.x == pos.x && item.y == pos.y) {
          item.water = false;
          item.owner = player;
        }
      });
    });
  },
  generatorOne: (player, positions) => {
    ship.layoutUpdater(player, positions);
    return {
      float: true,
      length: 1,
      pos: [{ x: positions[0].x, y: positions[0].y, ok: true }]
    };
  },
  generatorTwo: (player, positions) => {
    ship.layoutUpdater(player, positions);
    return {
      float: true,
      length: 2,
      pos: [
        { x: positions[0].x, y: positions[0].y, ok: true },
        { x: positions[1].x, y: positions[1].y, ok: true }
      ]
    };
  },
  generatorThree: (player, positions) => {
    ship.layoutUpdater(player, positions);
    return {
      float: true,
      length: 3,
      pos: [
        { x: positions[0].x, y: positions[0].y, ok: true },
        { x: positions[1].x, y: positions[1].y, ok: true },
        { x: positions[2].x, y: positions[2].y, ok: true }
      ]
    };
  },
  isSunk: (boat) => {
    const sunk = boat.pos.filter((element) => !element.ok);
    if (sunk.length === boat.length) boat.float = false;
  },

  hit: (boat, xx, yy) => {
    boat.pos.map((item) => {
      if (xx == item.x && yy == item.y) item.ok = false;
    });
    ship.isSunk(boat);
  }
};

module.exports = ship;
