"use strict";
/**
 * The Button element that starts a new game
 * @type {Element} 
 */
const newGameBtn = document.querySelector("#newGame_btn");

/**
 * The select element of the different game modes difficulties
 * @type {Element} 
 */
const modeSelect = document.querySelector("#modeSelect");

/**
 * The container element of the grid
 * @type {Element} 
 */
const gridContainer = document.querySelector(".square_container");

//the click event on the start new game button
newGameBtn.addEventListener("click", startNewGame);

/**
 * Function that starts a new game
 */
function startNewGame() {
    let grid = [];

    switch (parseInt(modeSelect.value)) {
        //facile
        case 1:
            grid = createGrid(100);
            printGrid(grid, gridContainer);
            break;

        //medio
        case 2:
            grid = createGrid(81);
            printGrid(grid, gridContainer);
            break;
            
        
        //difficile
        case 3:
            grid = createGrid(49);
            printGrid(grid, gridContainer);
            break;
    }
}

/**
 * Create and retrive a new Grid
 * @param {number} cellNumber The Amout of cells that need to be in the grid
 * @returns The array of Cell elements that composes the grid
 */
function createGrid(cellNumber) {
    const newGrid = [];
    const rowCellCount = Math.sqrt(cellNumber);

    for(let i = 0; i < cellNumber; i++) {
        const newCell = createCell((i + 1).toString(), rowCellCount);

        newGrid.push(newCell);
    }

    return newGrid;
}

/**
 * Create and retrive a new cell element
 * @param {string} cellContent The content that need to be inside the cell
 * @param {number} cellPerRow The number of cells per row in the grid
 * @returns The new cell element created
 */
function createCell(cellContent, cellPerRow) {
    const cell = document.createElement("div");

    cell.classList.add("square_box");
    cell.textContent = cellContent;
    cell.style.flexBasis = `calc(100% / ${cellPerRow})`

    return cell;
}

/**
 * Print the Grid array into the HTML
 * @param {Element[]} gridtoPrint The grid array to print to the HTML
 * @param {Element} htmlContainer The HTML container where the grid will be printed
 */
function printGrid(gridtoPrint, htmlContainer) {
    htmlContainer.innerHTML = "";

    for(let i = 0; i < gridtoPrint.length; i++) {       
        htmlContainer.append(gridtoPrint[i]);
    }
}