'use strict';

/* variables que necesito*/
const selectElement = document.querySelector('.js_select');
const btnPlay = document.querySelector('.js_btn');
const result = document.querySelector('.js_result');

const inputBet = document.querySelector('.js_bet');
const money = document.querySelector('.js_money');

const restart = document.querySelector('.js_restart');

let moneyValue = 50;



/*Función para el número random*/
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

/*Función del juego. Compara si coincide el número que cojo y el random y que salga un mensaje u otro. Suma o resta en función de si coinciden los números */

function game(selectValue, randomNumber) {
    const betValue = parseInt(inputBet.value);
    console.log(betValue);

    if (selectValue === randomNumber) {

        result.innerHTML = 'Has ganado el doble de lo apostado :)'

        moneyValue = betValue * 2 + moneyValue;

    }
    else {
        result.innerHTML = 'Has perdido todo lo apostado :('
        moneyValue = moneyValue - betValue
    }
    console.log(moneyValue);
    money.innerHTML = `Saldo: ${moneyValue}`
    restartGame();
}

function restartGame() {

    if (moneyValue <= 0 || moneyValue >= 200) {
        restart.classList.remove("hidden");
        btnPlay.classList.add("hidden");
    }

}

/*Función manejadora del botón,al hacer click en jugar coge el valor del select */
function handleClick(event) {
    event.preventDefault();
    const selectValue = parseInt(selectElement.value);
    const randomNumber = getRandomNumber(6);

    console.log(selectValue, randomNumber);

    game(selectValue, randomNumber)

}




btnPlay.addEventListener('click', handleClick);



