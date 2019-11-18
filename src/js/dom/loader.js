import { getById, create, append } from './aux';

export const gridGenerator = (userGrid) => {
  let cell, row;
  console.log('gridGenerator')
  row = create('div');

  userGrid.forEach( (elem) => {
    console.log(elem)
    cell = create('div', [{ innerText: elem.shipId }])
    append(row, [cell]);    
  })

  console.log(row)
 
  return append(getById('player'), [row])
}