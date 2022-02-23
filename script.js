const gridContainer = document.querySelector(".sketch");
const gridCount = document.querySelector('.grid-number');

//buttons
const colorCode = document.querySelector(".color-code");
const rainbowBtn = document.querySelector(".rainbow");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");


//input and buttons
const colorInput = document.querySelector(".color");
const gridRange = document.querySelector(".range");



//creating grid
let pixels;
let number = 16;
let gridNumber = 16 * 16;
let isMouseDown = false;

createGrid(number)

gridRange.addEventListener('input', function () {
    gridContainer.innerHTML = "";
    number = gridRange.value;
    createGrid(number)
})



gridContainer.addEventListener("mousedown", function () {
    isMouseDown = true;
    pixels.forEach(function (pixel) {

        pixel.addEventListener("mouseenter", function (e) {
            let currentTarget = e.target;
            if (isMouseDown === true) {
                currentTarget.style.backgroundColor = `${newColor}`;
            }
        })

    })
})
gridContainer.addEventListener("mouseup", function (e) {
    isMouseDown = false;
})







//create grid function

function createGrid(number) {
    pixels = "";
    gridNumber = number * number;
    gridCount.textContent = `${number} * ${number}`;
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    for (let i = 1; i < gridNumber + 1; i++) {
        const pixelGrid = document.createElement("div");
        pixelGrid.classList.add("pixel-grid");
        gridContainer.appendChild(pixelGrid);
    }
    pixels = document.querySelectorAll(".pixel-grid");
}

//input update
let newColor = '#000000';

colorInput.addEventListener("input", function (e) {
    newColor = e.target.value;
    colorCode.textContent = newColor;
})

clearBtn.addEventListener("click", function (e) {
    pixels.forEach(function (pixel) {
        pixel.style.backgroundColor = "white";
    })
})

eraserBtn.addEventListener("click", function (e) {
    pixels.forEach(function (pixel) {
        newColor = "white";
    })
})