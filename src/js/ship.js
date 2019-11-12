const game = require('./gameboard');

const ship = {
  layoutUpdater: (player, positions) => {
    game.layout.map((item) => {
      positions.forEach((pos) => {
        if (item.x == pos.x && item.y == pos.y) {
          item.water = false;
          item.owner = player;
        }
      });
    });
  },
  generator: (positions) => {
    const ship = {};
    ship.length = positions.length;
    ship.float = true;
    ship.pos = {};

    positions.forEach((data, idx) => {
      ship.pos[idx] = data;
      ship.pos[idx].ok = true;
    });
    game.setShipPosition(ship);
    return ship;
  },

  isSunk: (boat) => {
    const sunk = Object.keys(boat.pos).filter((element) => !element.ok);
    if (sunk.length === boat.length) boat.float = false;
  },

  hit: (boat, xx, yy) => {
    Object.keys(boat.pos).map((key) => {
      if (xx == boat.pos[key].x && yy == boat.pos[key].y)
        boat.pos[key].ok = false;
    });
    ship.isSunk(boat);
  }
};

module.exports = ship;
