// --------------------- Code Organization -------------------------- //

// 1) 3rd party libraries
// 2) Constants
// 3) App State - globally scoped variables
// 4) Cached DOM Elements
// 5) || 6) Event Listeners and Functions 

// APP STATE

const squareCount = 25;
let time = 3;

// CACHED DOM ELEMENTS

const start = document.getElementById('start');
const squaresContainer = document.getElementById('squares');
console.log(squaresContainer);

// EVENT LISTENERS 

start.addEventListener("click", handleStartGame);

// FUNCTION DECLARATIONS

function handleStartGame() {
    startTimer();
    createSquares();
}

function startTimer() {
    const timer = setInterval(() => {
        if (time > 0) {
            time--;
            console.log(time);
        } else {
            console.log('Time is up');
            clearInterval(timer);
        }
    }, 1000)
}

// How many squares
// Create a div element for each square
// Colors array of 'red', 'blue', 'green', and 'purple'
// Random number
// Random index to get a random color 
// Apply the random color to the div as background-color 
// Append the square to the parent '.squares' element

function createSquares(numberOfSquares) {
    const colors = ['red', 'blue', 'green', 'purple'];
    const square = document.createElement('div');
    square.style.backgroundColor = 'blue';
    console.log(square);
    console.log(squaresContainer.appendChild(square));
}