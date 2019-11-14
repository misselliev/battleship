const arr = [ 0,0,0,1,1,
              0,0,0,1,0,
              1,1,1,0,1,
              0,1,1,0,0,
              0,0,0,0,0]

const getFields = (arr, size, direct) => {
  let idxCollection = [];
  let zones = [];

  arr.forEach((cell, idx) => {
    if (cell == 0) idxCollection.push(idx)
  });

  const validateEdge = (val) => {
      return (val == 4 || val == 9 || val == 14 || val == 19 || val == 24)
  }
  
  if (direct == 'horizontal') {
    for(let i = 0; i < idxCollection.length - 1; i += 1){
      if((idxCollection[i + 1] - idxCollection[i] == 1) && !validateEdge(idxCollection[i])) {
        zones.push([idxCollection[i], idxCollection[i + 1]])
      }
    }
  } else {
    idxCollection.forEach(item => {
      if (idxCollection.includes(item + 5)) zones.push([item, (item + 5)])
    });
  }
  
  return zones
}

console.log(getFields(arr, 2, 'vertical'))
console.log(getFields(arr, 2, 'horizontal'))
