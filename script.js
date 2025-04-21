const container = document.getElementById('container');
const newGridButton = document.getElementById('new-grid-button');

function createGrid(size){
    container.innerHTML = '';
    const squareSize = 640 / size;
    for(i = 0; i<size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#000';
        });
        container.appendChild(square);
    }
}

function promptNewGrid(){
    let size = parseInt(prompt('Enter the number of squares per side: '));
    if (isNaN(size) || size < 1 || size > 100){
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    createGrid(size);
}

newGridButton.addEventListener('click', promptNewGrid);

createGrid(16);