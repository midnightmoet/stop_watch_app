// Variables
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

// Variables
let startTime = 0;
let lapsedTime = 0;
let timerInterval;

// Start the timer
function startTimer() {
  startTime = Date.now() - lapsedTime
  
  timerInterval = setInterval(() => {
    lapsedTime = Date.now() - startTime
    timerEl.textContent = formatTime(lapsedTime);
  }, 10)

  startEl.disabled = true;
  stopEl.disabled = false;
}

// Format the time
function formatTime(lapsedTime){
  const milliseconds = Math.floor((lapsedTime % 1000) / 10);
  const seconds = Math.floor(lapsedTime % (1000 * 60) / 1000);
  const minutes = Math.floor(lapsedTime % (1000 * 60 * 60) / (1000 * 60));
  const hours = Math.floor(lapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00")
    + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
    + ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
    + ":" +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  )
}


// Stop the timer
function stopTimer(){
  clearInterval(timerInterval);
}


// Reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  timerEl.textContent = "00:00:00:00";
  startEl.disabled = false;
  stopEl.disabled = true;
  lapsedTime = 0;
}


// Event listeners
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);