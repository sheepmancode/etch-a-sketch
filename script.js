//initializing grid container size and variable for setting the size of small grids inside
const gridSize = 400;
let smallsize;

//selecting button and container element
let sizeButton = document.querySelector(".sizing-button");
const gridContainer = document.querySelector(".grid-container");

//setting width and height of container
gridContainer.style.width = `${gridSize}px`;
gridContainer.style.height = `${gridSize}px`;

//function for changing bg color
function changeBg() {
  this.style.backgroundColor = "rgb(50, 50, 50)";
}

// Function for displaying the specified size grid
function displayGrid(smallGridSize) {
  for (let i = 1; i <= smallGridSize * smallGridSize; i++) {
    let grid = document.createElement("div");
    grid.style.width = `${gridSize / smallGridSize}px`;
    grid.style.height = `${gridSize / smallGridSize}px`;
    grid.classList.add("small-grids");
    gridContainer.appendChild(grid);

    //changing background color when mouse hovers
    grid.addEventListener("mouseover", changeBg);
  }
}

// Button to get grid size from user
sizeButton.addEventListener("click", () => {
  smallsize = parseInt(
    prompt("Please give the size of grid you want in rows or columns")
  );
  gridContainer.innerHTML = ""; // Clear previous grids
  displayGrid(smallsize);
});
