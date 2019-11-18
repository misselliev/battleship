import { getById, create, append } from './aux';

export const gridGenerator = (userGrid) => {
  let cell, row;
  row = create('div');

  userGrid.forEach( (elem) => {
    cell = create('div', [{ innerText: elem.shipId }])
    append(row, [cell]);    
  })
 
  return append(getById('player'), [row])
}