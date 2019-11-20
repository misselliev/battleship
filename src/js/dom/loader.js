import { getById, create, append } from "./aux";
import { decodeClick } from "../zone";
import { board } from "../gameboard";

export const gridGenerator = (boardObj, divId) => {
  let userGrid = boardObj.getGrid();
  let cell, row;
  // row = create("div");

  userGrid.forEach((elem, idx) => {
    cell = create("div", [{ innerText: elem.shipId }, { id: idx }]);
    if (cell.innerText == "ship-1") cell.style.backgroundColor = "blue";
    if (cell.innerText == "ship-2") cell.style.backgroundColor = "red";
    if (cell.innerText == "ship-3") cell.style.backgroundColor = "orange";
    // append(row, [cell]);
    if (divId == "computer") {
      cell.addEventListener("click", () => {
        const target = decodeClick(idx);
        console.log("target", target);
        console.log("idx", idx);
        const result = boardObj.receiveAttack(
          target.x,
          target.y,
          "computer",
          boardObj
        );
        if (result) {
          elem.style.backgroundColor = "yellow";
        } else {
          elem.style.backgroundColor = "purple";
        }
      });
    }
    append(getById(divId), [cell]);
  });

  // return append(getById(divId), [row]);
};
