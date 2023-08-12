const minutesOp = document.querySelector("#minutes")
const secondsOp = document.querySelector("#seconds")
const milisecondsOp = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#restartBtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resertTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }

            minutesOp.textContent = formatTime(minutes);
            secondsOp.textContent = formatTime(seconds);
            milisecondsOp.textContent = formatMiliseconds(miliseconds);

        }
    }, 10)
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function resertTimer() {
    clearInterval(interval);
    isPaused = false;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesOp.textContent = "00"
    secondsOp.textContent = "00"
    milisecondsOp.textContent = "000"

    startBtn.style.display = "block";
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}