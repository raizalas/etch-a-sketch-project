const GRIDSIZE = 600;
let gridRows = 24;
let gridColumns = 24;

const gridArea = document.querySelector("#grid-area");
gridArea.style.width = `${GRIDSIZE}px`;
gridArea.style.height = `${GRIDSIZE}px`;

function createCells() {
  for (let i = 0; i < gridRows * gridColumns; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${GRIDSIZE / gridColumns - 2}px`;
    gridCell.style.height = `${GRIDSIZE / gridRows - 2}px`;
    gridCell.classList.add("cell");

    gridArea.appendChild(gridCell);
  }
}

createCells()