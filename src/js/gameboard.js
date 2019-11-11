const game = {
  layout: [],
  shipPositions: [],
  missedHits: [],
  board: () => {
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        game.layout.push({ x: i, y: j, water: true, owner: '' })
      }
    }
  },
  fleetPosition: () => game.layout.filter(item => !item.water),
  waterPosition: () => game.layout.filter(item => item.water),
  receiveAttack: (pos) => {

  }
};

module.exports = game;