export const getZones = (arr, size) => {
  let idxCollection = [];
  let zones = [];
  const randomDir = Math.round(Math.random() * 1);
  const direct = randomDir == 0 ? "horizontal" : "vertical";
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

let checker = [];
export const decode = array => {
  let positions = [];
  let pos = checkRepeated(array, checker);
  pos.forEach(item => {
    let x = item % 5;
    let y = Math.floor(item / 5);
    positions.push({ x, y });
  });
  console.log("positions!!!!!!", positions);
  return positions;
};

function checkRepeated(array, checker) {
  if (checker.length > 2) return checker;
  let random = Math.floor(Math.random() * array.length);
  let coord = array[random];
  let b = checker.toString().split(",");
  console.log("coord in fn", coord);
  if (checker.length > 0) {
    let a = coord.toString().split(",");
    a.forEach(item => {
      console.log("b", b);
      console.log("item", item);
      if (!b.includes(item)) {
        checker.push(coord);
        b = checker.toString().split(",");
      } else {
        random = Math.floor(Math.random() * array.length);
        coord = array[random];
        return checkRepeated(array, checker);
      }
      console.log("checker in for res:", checker);
    });
  } else {
    checker.push(coord);
  }
  return coord;
}
