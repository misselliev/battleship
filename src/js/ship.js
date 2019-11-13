const game = require("./gameboard");

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
    return ship;
  },

  isSunk: boat => {
    const sunk = Object.keys(boat.pos).filter(element => !element.ok);
    if (sunk.length === boat.length) boat.float = false;
  },

  hit: (xx, yy) => {
    const boat = container.filter(ship => ship.x == xx && ship.y == yy);
    const boat2 = container.forEach(ship => console.log(ship.pos));
    if (boat) {
      console.log("container" + JSON.stringify(container));
      console.log("positios" + Object.keys(boat));
      console.log("boat:" + JSON.stringify(boat));
      console.log("boat:" + JSON.stringify(boat2));
      Object.keys(boat.pos).map(key => {
        console.log(boat.pos[key].x + " ---y " + boat.pos[key].y);
        if (xx == boat.pos[key].x && yy == boat.pos[key].y) {
          console.log("en if");
          boat.pos[key].ok = false;
        }
      });
      ship.isSunk(boat);
    }
    console.log("cont" + JSON.stringify(container[0]));
    console.log("cont1" + JSON.stringify(container[1]));
  }
};

module.exports = ship;
