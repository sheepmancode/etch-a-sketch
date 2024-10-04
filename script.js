//initializing grid container size and variable for setting the size of small grids inside
const gridContainerSize = 400;
let gridSize;

//selecting button and container element
let sizeButton = document.querySelector(".sizing-button");
let randomizerButton = document.querySelector(".randomizer-button"); // Fixed typo
const gridContainer = document.querySelector(".grid-container");

//setting width and height of container
gridContainer.style.width = `${gridContainerSize}px`;
gridContainer.style.height = `${gridContainerSize}px`;

//function for changing bg color
function changeBg() {
  this.style.backgroundColor = "black";
}

//flag to track random color mode
let randomFlag = false;

//function for random colors
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Function for displaying the specified size grid
// Function for displaying the specified size grid
function displayGrid(usergridContainerSize) {
  for (let i = 1; i <= usergridContainerSize * usergridContainerSize; i++) {
    let grid = document.createElement("div");
    grid.style.width = `${gridContainerSize / usergridContainerSize}px`;
    grid.style.height = `${gridContainerSize / usergridContainerSize}px`;
    grid.classList.add("small-grids");
    gridContainer.appendChild(grid);

    // Add a single event listener for both effects
    grid.addEventListener("mouseover", function () {
      if (randomFlag) {
        randomColor.call(this);
      } else {
        changeBg.call(this);
      }
    });
  }
}

// Button to get grid size from user
sizeButton.addEventListener("click", () => {
  gridSize = parseInt(
    prompt("Input size of the individual grid box (row or column size)")
  );
  gridContainer.innerHTML = ""; // Clear previous grids
  displayGrid(gridSize);
});

// Button to randomize grid squares
randomizerButton.addEventListener("click", () => {
  randomFlag = !randomFlag; // Toggle the random color mode flag
  randomizerButton.textContent = randomFlag ? "NORMAL" : "RANDOM"; // Update button text
});
