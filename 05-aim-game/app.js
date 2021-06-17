const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = ['#00A08A', '#1E786C', '#00685A', '#34D0BA', '#5DD0C0',
    '#1049A9', '#29497F', '#052C6E', '#4479D4', '#6A92D4',
    '#25D500', '#3DA028', '#188A00', '#59EA3A', '#80EA69']

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomeNumber(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomeNumber(0, width - size);
    const y = getRandomeNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = `${getRandomColors()}`;

    board.append(circle);
}

function getRandomeNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColors() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}