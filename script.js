const GRIDSIZE = 600;
let colorChange = "black";

const gridArea = document.querySelector("#grid-area");
gridArea.style.width = `${GRIDSIZE}px`;
gridArea.style.height = `${GRIDSIZE}px`;
const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector(".slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value}`;

function changeBackgroundColor() {
  this.style.backgroundColor = colorChange;
}

function createCells(gridSide) {
  const gridSquareArea = gridSide * gridSide;
  const gridWidthHeight = `${GRIDSIZE / gridSide - 2}px`;
  for (let i = 0; i < gridSquareArea; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridWidthHeight;
    gridCell.style.height = gridWidthHeight;
    gridCell.classList.add("cell");

    gridArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", changeBackgroundColor);
  }
}

function removeCells() {
  while (gridArea.firstChild) {
    gridArea.removeChild(gridArea.firstChild);
  }
}

slider.oninput = function() {
  sliderValue.textContent = `${slider.value} x ${slider.value}`;
  removeCells();
  createCells(this.value)
}

createCells(16);
