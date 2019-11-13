const game = require("../js/gameboard");

const container = [];
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
  generator: positions => {
    const ship = {};
    ship.id = `ship-${positions.length}`;
    ship.length = positions.length;
    ship.float = true;
    ship.pos = {};

    positions.forEach((data, idx) => {
      ship.pos[idx] = data;
      ship.pos[idx].ok = true;
    });

    game.setShipPosition(ship);
    container.push(ship);
    console.log('==== OK =====')
    return ship;
  },

  isSunk: boat => {
    const status = Object.keys(boat.pos).filter(key => !boat.pos[key].ok);
    if (status.length === boat.length) boat.float = false;
  },

  hit: (xx, yy) => {
    const boat = container.filter(ship => {
      for (let key in ship.pos) {
        if (xx == ship.pos[key].x && yy == ship.pos[key].y) {
          ship.pos[key].ok = false;
          return ship;
        }
      }
    });
    if (boat[0]) ship.isSunk(boat[0]);
  }
};

module.exports = ship;
