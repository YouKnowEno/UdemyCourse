//Square object variables
var allSquares = document.querySelectorAll(".square");
var square1 = document.querySelector("#square1");

//Variables to randomize the square colors
var red = 0;
var green = 0;
var blue = 0;

//Variables to pick the correct square
var correctSquareIndex = 0;
var redCorrect = 0;
var greenCorrect = 0;
var blueCorrect = 0;

//Variables to set RGB Display
var redDisplay = document.querySelector("#redDisplay");
var greenDisplay = document.querySelector("#greenDisplay");
var blueDisplay = document.querySelector("#blueDisplay");

//Variable to create progress message
var progressMessage = document.querySelector("#progressMessage");

//Variables for Squares at index 3~5
var squareIndex3 = document.querySelector("#three");
var squareIndex4 = document.querySelector("#four");
var squareIndex5 = document.querySelector("#five");

//Code to randomize the square colors
function getRandomValue(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
};

function setColors(x) {
    // numOfSquares = Number(numOfSquares);
    console.log("return value: " + pickTheCorrectSquare(x));
    correctSquareIndex = pickTheCorrectSquare(x);
    console.log("Correct Square Index: " + correctSquareIndex);
    allSquares.forEach(function (square, index) {
        red = getRandomValue(251);
        green = getRandomValue(251);
        blue = getRandomValue(251);
        if (correctSquareIndex === index) {
            saveCorrectColorValues(red, green, blue, index);
        }
        square.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    })
};

setColors(6);

//Code to randomly select the "correct" square:
function pickTheCorrectSquare(max) {
    console.log("Max1 is: " + max);
    console.log(typeof max);
    max = Math.floor(max);
    console.log("Max2 is: " + max);
    return Math.floor(Math.random() * max);
};

function saveCorrectColorValues(red, green, blue) {
    redCorrect = red;
    greenCorrect = green;
    blueCorrect = blue;
    console.log("redCorrect: " + redCorrect);
    console.log("greenCorrect: " + greenCorrect);
    console.log("blueCorrect: " + blueCorrect);
}

//Code to make square transparent on click
function transparentBoxes() {
    allSquares.forEach(function (square) {
        square.addEventListener("click", function () {
            square.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0 + ')';
            //Code for progress message
            progressMessage.textContent = "Try Again!"
        })
    })
};

transparentBoxes();

function transparentBackground() {
    square.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0 + ')';
    //Code for progress message
    progressMessage.textContent = "Try Again!"
}

function removeTransparentBoxes() {
    allSquares.forEach(function (square) {
        square.removeEventListener("click", function () {
            square.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0 + ')';
            //Code for progress message
            progressMessage.textContent = "Try Again!"
        })
    })
};



//Code to make ALL SQUARES turn the correct color on click of the correct square
allSquares.forEach(function (square, index) {
    square.addEventListener("click", function () {
        if (correctSquareIndex === index) {
            console.log("success");
            console.log("redCorrect: " + redCorrect);
            console.log("greenCorrect: " + greenCorrect);
            console.log("blueCorrect: " + blueCorrect);
            allSquares.forEach(function (square) {
                square.style.backgroundColor = 'rgb(' + redCorrect + ',' + greenCorrect + ',' + blueCorrect + ')';
            })
            headerBackgroundColorChange();
            removeTransparentBoxes();
            //Code for progress message
            progressMessage.textContent = "Success!"
        }
    })
});



//Code to make the HEADER BACKGROUND turn the correct color on the click of the correct square
var headerDiv = document.querySelector("div");

function headerBackgroundColorChange() {
    headerDiv.style.backgroundColor = 'rgb(' + redCorrect + ',' + greenCorrect + ',' + blueCorrect + ')';
}


//Code to set RGB Display
function setRGBDisplay() {
    redDisplay.textContent = redCorrect;
    greenDisplay.textContent = greenCorrect;
    blueDisplay.textContent = blueCorrect;
};
setRGBDisplay();

//Code for NavBar
//Code for New Colors tab
var newColorsTab = document.querySelector("#newColors");

function newColors() {
    newColorsTab.addEventListener("click", function () {
        if (hardSelected === true) {
            setColors(6);
            console.log("hard Selected True. 6 Colors Set.")
        } else if (easySelected === true) {
            setColors(3);
            console.log("easySelected True. 3 Colors Set.")
        }
        setRGBDisplay();
        progressMessage.textContent = "";
        headerDiv.style.backgroundColor = "dodgerblue";

    });
}

newColors();

//Code for EASY and HARD tabs

var easyTab = document.querySelector("#easy");
var hardTab = document.querySelector("#hard");
var hardSelected = true;
var easySelected = false;


hardTab.addEventListener("click", function () {
    if (hardSelected === false) {
        hardTab.classList.add("hard");
        easyTab.classList.remove("easy");
        hardSelected = true;
        easySelected = false;
        squareIndex3.classList.remove("invisible");
        squareIndex4.classList.remove("invisible");
        squareIndex5.classList.remove("invisible");
        setColors(6);
        setRGBDisplay();
        headerDiv.style.backgroundColor = "dodgerblue";
        progressMessage.textContent = "";


    }
});

easyTab.addEventListener("click", function () {
    if (easySelected === false) {
        easyTab.classList.add("easy");
        hardTab.classList.remove("hard");
        easySelected = true;
        hardSelected = false;
        squareIndex3.classList.add("invisible");
        squareIndex4.classList.add("invisible");
        squareIndex5.classList.add("invisible");
        setColors(3);
        setRGBDisplay();
        headerDiv.style.backgroundColor = "dodgerblue";
        progressMessage.textContent = "";


    }
});


easyTab.addEventListener("click", function () {
});
