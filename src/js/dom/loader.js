import { getById, create, append } from "./aux";
import { decodeClick } from "../zone";
import { board } from "../gameboard";
import { player } from "../player";
import { game, humanAttack } from "../game";

export const gridGenerator = (boardObj, divId, playerA) => {
  let userGrid = boardObj.getGrid();
  let cell, row;
  // row = create("div");

  userGrid.forEach((elem, idx) => {
    cell = create("div", [{ innerText: elem.shipId }, { className: "cell" }]);
    if (cell.innerText == "ship-1") cell.style.backgroundColor = "blue";
    if (cell.innerText == "ship-2") cell.style.backgroundColor = "red";
    if (cell.innerText == "ship-3") cell.style.backgroundColor = "orange";
    // append(row, [cell]);
    if (divId == "computer") {
      cell.id = idx;
      cell.addEventListener("click", () => {
        // const target = decodeClick(idx);
        // const result = boardObj.receiveAttack(
        //   target.x,
        //   target.y,
        //   "computer",
        //   boardObj
        // );
        // const humanAttack = async () => {
        //   const attack = await A.shoot(
        //     target.x,
        //     target.y,
        //     "computer",
        //     boardObj
        //   );
        //   if (attack) {
        //     getById(idx).style.backgroundColor = "yellow";
        //   } else {
        //     getById(idx).style.backgroundColor = "purple";
        //   }
        // };
        let a = humanAttack(boardObj, playerA, idx).then((resolve, reject) => {
          if (resolve) {
            player.randomShoot("human", boardObj);
          }
        });
      });
    }
    append(getById(divId), [cell]);
  });
  // return append(getById(divId), [row]);
};
