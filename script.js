const GRIDSIZE = 600;
let colorChange = 'black';

const gridArea = document.querySelector("#grid-area");
gridArea.style.width = `${GRIDSIZE}px`;
gridArea.style.height = `${GRIDSIZE}px`;

function changeBackgroundColor() {
  this.style.backgroundColor = colorChange
}

function createCells(gridSide) {
  const gridSquareArea = gridSide * gridSide
  const gridWidthHeight = `${GRIDSIZE / gridSide - 2}px`
  for (let i = 0; i < gridSquareArea; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridWidthHeight;
    gridCell.style.height = gridWidthHeight;
    gridCell.classList.add("cell");

    gridArea.appendChild(gridCell);

    gridCell.addEventListener('mouseover', changeBackgroundColor)
   
  }
}

createCells(16)