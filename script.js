let timer;
let seconds = 0;

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = new Date(seconds * 1000).toISOString().substr(11, 8);
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById('timer').textContent = '0:00:00';
}

// Start the timer when the page loads
window.onload = startTimer;
