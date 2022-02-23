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
let randomColor;

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
    rainbowBtnClicked = false;
    newColor = e.target.value;
    colorCode.textContent = newColor;
})

clearBtn.addEventListener("click", function (e) {
    rainbowBtnClicked = false;
    if (rainbowBtnClicked === false) { clearInterval(randomNumberGenerator) }
    pixels.forEach(function (pixel) {
        pixel.style.backgroundColor = "white";
    })
})

eraserBtn.addEventListener("click", function (e) {
    rainbowBtnClicked = false;
    if (rainbowBtnClicked === false) { clearInterval(randomNumberGenerator) }

    pixels.forEach(function (pixel) {
        newColor = "white";
    })
})
// let randomColor;
let rainbowBtnClicked = false;

rainbowBtn.addEventListener("click", function () {
    rainbowBtnClicked = true;
    console.log(rainbowBtnClicked);
    unlimitedRandomColor()
})


let random1;
let random2;
let random3;
let randomNumberGenerator;

function unlimitedRandomColor() {
    if (rainbowBtnClicked) {
        randomNumberGenerator = setInterval(() => {
            random1 = randomNumber();
            random2 = randomNumber();
            random3 = randomNumber();
            randomColor = `rgb(${random1},${random2},${random3})`;
            newColor = randomColor;
            console.log(newColor)
        }, 1);
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 256)
}