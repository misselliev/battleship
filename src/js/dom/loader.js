import { getById, create, append } from "./aux";
import { decodeClick } from "../zone";
import { board } from "../gameboard";
import { player } from "../player";
import { game, humanAttack } from "../game";

export const gridGenerator = (humanObj, computerObj, divId, human) => {
  let userGrid = humanObj.getGrid();
  let cell, row;

  userGrid.forEach((elem, idx) => {
    cell = create("div", [{ innerText: elem.shipId }, { className: "cell" }]);

    if (divId == "computer") {
      cell.id = idx;
      cell.innerText = "";

      cell.addEventListener("click", () => {
        humanAttack(humanObj, human, idx)
          .then(resolve => {
            if (resolve) {
              game.gameOver(computerObj, humanObj);
              return;
            } else {
              const res = human.randomShoot("human", computerObj);
              game.gameOver(computerObj, humanObj);
              human.bonus(res, "human", humanObj);
              game.gameOver(computerObj, humanObj);
            }
          })
          .catch(err => console.log("No more cells available!"));
      });
    } else {
      if (cell.innerText == "ship-1") cell.style.backgroundColor = "blue";
      if (cell.innerText == "ship-2") cell.style.backgroundColor = "red";
      if (cell.innerText == "ship-3") cell.style.backgroundColor = "orange";
      cell.id = `c-${idx}`;
      cell.innerText = "";
    }
    append(getById(divId), [cell]);
  });
};
