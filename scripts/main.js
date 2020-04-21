'use strict';

const game = document.querySelector('.game');

for (let i = 0; i < 9; i++) {
  game.innerHTML += `<div class='block'></div>`;
}

const arrBlock = document.querySelectorAll('.block');

game.addEventListener('click', click);

let numberOfMoves = 0;

function click() {
  if (event.target.innerHTML === 'x' || event.target.innerHTML === 'o') {
    alert('Вибери іншу клітинку!');
  } else {
    if (event.target.className === 'block' && numberOfMoves % 2 === 0) {
      event.target.innerHTML = 'x';
    }

    if (event.target.className === 'block' && numberOfMoves % 2 !== 0) {
      event.target.innerHTML = 'o';
    }
    numberOfMoves++;
  }

  setTimeout(checkWinner, 100);
}

function checkWinner() {
  if ((arrBlock[0].innerHTML === 'x' && arrBlock[1].innerHTML === 'x' && arrBlock[2].innerHTML === 'x')
  || (arrBlock[3].innerHTML === 'x' && arrBlock[4].innerHTML === 'x' && arrBlock[5].innerHTML === 'x')
  || (arrBlock[6].innerHTML === 'x' && arrBlock[7].innerHTML === 'x' && arrBlock[8].innerHTML === 'x')
  || (arrBlock[0].innerHTML === 'x' && arrBlock[3].innerHTML === 'x' && arrBlock[6].innerHTML === 'x')
  || (arrBlock[1].innerHTML === 'x' && arrBlock[4].innerHTML === 'x' && arrBlock[7].innerHTML === 'x')
  || (arrBlock[2].innerHTML === 'x' && arrBlock[5].innerHTML === 'x' && arrBlock[8].innerHTML === 'x')
  || (arrBlock[0].innerHTML === 'x' && arrBlock[4].innerHTML === 'x' && arrBlock[8].innerHTML === 'x')
  || (arrBlock[2].innerHTML === 'x' && arrBlock[4].innerHTML === 'x' && arrBlock[6].innerHTML === 'x')) {
    alert('Виграли Крестики');
    reset();
  }

  if ((arrBlock[0].innerHTML === 'o' && arrBlock[1].innerHTML === 'o' && arrBlock[2].innerHTML === 'o')
  || (arrBlock[3].innerHTML === 'o' && arrBlock[4].innerHTML === 'o' && arrBlock[5].innerHTML === 'o')
  || (arrBlock[6].innerHTML === 'o' && arrBlock[7].innerHTML === 'o' && arrBlock[8].innerHTML === 'o')
  || (arrBlock[0].innerHTML === 'o' && arrBlock[3].innerHTML === 'o' && arrBlock[6].innerHTML === 'o')
  || (arrBlock[1].innerHTML === 'o' && arrBlock[4].innerHTML === 'o' && arrBlock[7].innerHTML === 'o')
  || (arrBlock[2].innerHTML === 'o' && arrBlock[5].innerHTML === 'o' && arrBlock[8].innerHTML === 'o')
  || (arrBlock[0].innerHTML === 'o' && arrBlock[4].innerHTML === 'o' && arrBlock[8].innerHTML === 'o')
  || (arrBlock[2].innerHTML === 'o' && arrBlock[4].innerHTML === 'o' && arrBlock[6].innerHTML === 'o')) {
    alert('Виграли Нулики');
    reset();
  }

  if (numberOfMoves === 9) {
    setTimeout(() => alert('Ніхто не виграв'), 100);
    setTimeout(reset, 150);
  }
}

function reset() {
  window.location.reload();
}
