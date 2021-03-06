import { board } from "./gameboard";

export const getZones = (boardObj, size) => {
  let used = boardObj.getOccupied();
  let arr = boardObj.getGrid();
  let idxCollection = [];
  let zones = [];
  const randomDir = Math.round(Math.random() * 1);
  const direct = randomDir == 0 ? "horizontal" : "vertical";
  if (used.length > 0)
    used = used
      .toString()
      .split(",")
      .map(item => parseInt(item));
  arr.forEach((cell, idx) => {
    if (cell.water && !used.includes(idx)) idxCollection.push(idx);
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

export const decode = (array, boardObj) => {
  let used = boardObj.getOccupied();
  const random = Math.floor(Math.random() * array.length);
  const coord = array[random];
  used.push(coord);
  let positions = [];
  coord.forEach(item => {
    let x = item % 5;
    let y = Math.floor(item / 5);
    positions.push({ x, y });
  });
  return positions;
};

export const decodeClick = index => {
  const y = Math.floor(index / 5);
  const x = index % 5;
  return { x, y };
};
