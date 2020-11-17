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

// EVENT LISTENERS 

start.addEventListener('click', handleStartGame);
squaresContainer.addEventListener('click', handleSquareClick);

// FUNCTION DECLARATIONS

function handleStartGame() {
    startTimer();
    createSquares(squareCount);
}

function startTimer() {
    const timer = setInterval(() => {
        if (time > 0) {
            time--;
            console.log(time);
            updateTime();
        } else {
            console.log('Time is up');
            clearInterval(timer);
        }
    }, 1000)
}

function updateTime() {
    // Select the time element
    // on each interval, update the time element with new time value
    const timer = document.getElementById('timer');
    timer.innerText = time;
}


function createSquares(numberOfSquares) {
    for (let i = 1; i <= numberOfSquares; i++) {

        const square = document.createElement('div');
        square.style.backgroundColor = getRandomColor();
        square.classList.add('square');
        squaresContainer.appendChild(square);

    }
}




function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    return randomColor;
    
}





function handleSquareClick(event) {
    
    if() {
        console.log('Square clicked!')
    }
}