const sizeField = 4;
let quantityClosed = sizeField * sizeField;
let quantityBombs = 1;

let CellsNode = document.querySelectorAll(`[name="cell"]`)

let labelNode = document.querySelector(`#Label`)

StatrGame();

function StatrGame() {

    for (let i = 0; i < CellsNode.length; i++) {
        CellsNode[i].onclick = function () {
            if (CellsNode[i].classList.contains(`item_closed`)) {
                if(!CellsNode[i].classList.contains(`item_bomb`)) 
                {
                    CellsNode[i].classList.remove(`item_closed`)
                    quantityClosed--;
                }
                else {
                    CellsNode[i].classList.remove(`item_closed`);
                    labelNode.innerHTML = `<div class="container">
                <h1 class="gameover">Game Over</h1>`

                }
            }
            if (quantityClosed == quantityBombs) {
                labelNode.innerHTML = ` <div class="container">
                <h1 class="gameover">You Win</h1>`
            }
        }
    }
}
