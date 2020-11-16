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

const start = document.getElementById('start')

// EVENT LISTENERS 

start.addEventListener("click", handleStartGame);

// FUNCTION DECLARATIONS

function handleStartGame() {
    startTimer();
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

