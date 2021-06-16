const board = document.querySelector('#board');
const colors = ['#00A08A', '#1E786C', '#00685A', '#34D0BA', '#5DD0C0',
    '#1049A9', '#29497F', '#052C6E', '#4479D4', '#6A92D4',
    '#25D500', '#3DA028', '#188A00', '#59EA3A', '#80EA69']
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
    
}

function setColor(element) {
    const color = getRandomColors();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColors() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}