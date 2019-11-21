import { getById, create, append } from "./aux";
import { decodeClick } from "../zone";
import { board } from "../gameboard";
import { player } from "../player";
import { game, humanAttack } from "../game";

export const gridGenerator = (destinyObj, contenderObj, divId, human) => {
  let userGrid = destinyObj.getGrid();
  let cell, row;

  userGrid.forEach((elem, idx) => {
    cell = create("div", [{ innerText: elem.shipId }, { className: "cell" }]);
    if (cell.innerText == "ship-1") cell.style.backgroundColor = "blue";
    if (cell.innerText == "ship-2") cell.style.backgroundColor = "red";
    if (cell.innerText == "ship-3") cell.style.backgroundColor = "orange";

    if (divId == "computer") {
      cell.id = idx;
      cell.addEventListener("click", () => {
        humanAttack(contenderObj, human, idx).then((resolve) => {
          if (resolve) {
            return
          } else {
            const res = human.randomShoot('human', destinyObj);
            human.bonus(res, 'human', destinyObj);
          }
          cell.removeEventListener('click', () => humanAttack(contenderObj, human, idx));
        }).catch(err => console.log('No more cells available!'));

      });
    } else {
      cell.id = `c-${idx}`;
    }
    append(getById(divId), [cell]);
  });
  // return append(getById(divId), [row]);
};
