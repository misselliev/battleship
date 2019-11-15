const arr = [
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1
];
export const getZones = (arr, size, direct) => {
  let idxCollection = [];
  let zones = [];

  arr.forEach((cell, idx) => {
    if (cell.water) idxCollection.push(idx);
  });

  const validateEdge = val => {
    return val == 4 || val == 9 || val == 14 || val == 19 || val == 24;
  };
  if (size == 2) {
    if (direct == "horizontal") {
      for (let i = 0; i < idxCollection.length - 1; i += 1) {
        if (
          idxCollection[i + 1] - idxCollection[i] == 1 &&
          !validateEdge(idxCollection[i])
        ) {
          zones.push([idxCollection[i], idxCollection[i + 1]]);
        }
      }
    } else {
      idxCollection.forEach(item => {
        if (idxCollection.includes(item + 5)) zones.push([item, item + 5]);
      });
    }
  } else {
    if (direct == "horizontal") {
      for (let i = 0; i < idxCollection.length - 1; i += 1) {
        if (
          idxCollection[i + 2] - idxCollection[i + 1] == 1 &&
          idxCollection[i + 1] - idxCollection[i] == 1 &&
          !validateEdge(idxCollection[i]) &&
          !validateEdge(idxCollection[i + 1])
        ) {
          zones.push([
            idxCollection[i],
            idxCollection[i + 1],
            idxCollection[i + 2]
          ]);
        }
      }
    } else {
      idxCollection.forEach(item => {
        if (
          idxCollection.includes(item + 5) &&
          idxCollection.includes(item + 10)
        )
          zones.push([item, item + 5, item + 10]);
      });
    }
  }
  return zones;
};

export const decode = array => {
  const random = Math.floor(Math.random() * array.length);
  const coord = array[random];
  let positions = [];
  coord.forEach(item => {
    let x = item % 5;
    let y = Math.floor(item / 5);
    positions.push({ x, y });
  });
  return positions;
};
