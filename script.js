const gridContainer = document.querySelector(".sketch");
const gridCount = document.querySelector('.grid-number');

//buttons
const colorInput = document.querySelector(".color");
const colorCode = document.querySelector(".color-code")
const rainbowBtn = document.querySelector(".rainbow")
const eraserBtn = document.querySelector(".eraser")
const clearBtn = document.querySelector(".clear")
const gridRange = document.querySelector(".range")

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
    console.log(isMouseDown)
    if (isMouseDown) {
        pixels.forEach(function (pixel) {
            pixel.addEventListener("mousemove", function (e) {

                let currentTarget = e.target;

                currentTarget.style.backgroundColor = "red";

            })
        })
    }
})

gridContainer.addEventListener("mouseup", function () {
    isMouseDown = false;
    console.log(isMouseDown)
})
//functions are not updating after value change

//this is true for pixels old value but not working with the updated value


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
