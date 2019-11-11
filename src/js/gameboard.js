const game = {
  layout: [],
  shipPositions: [],
  board: () => {
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        game.layout.push({x: i, y: j})
      }
    }
  },
  fleetPosition: () => game.shipPositions,
  receiveAttack: (pos) => {

  }
};

module.exports = game;