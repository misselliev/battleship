import { board } from "./gameboard";

const container = [];
export const ship = {
  layoutUpdater: (player, positions) => {
    board.layout.map(item => {
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

    board.setShipPosition(ship);
    container.push(ship);
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
    if (boat[0]) {
      ship.isSunk(boat[0]);
      return true
    } else {
      return false
    }
  }
};
