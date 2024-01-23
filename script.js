// 'use strict';

// // Selecting  Elements
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// const diceEl = document.querySelector('.dice');
// const btnRoll = document.querySelector('.btn--roll');
// const btnNew = document.querySelector('.btn--new');
// const btnHold = document.querySelector('.btn--hold');




// // Starting Conditions
// score0El.textContent = 0;
// score1El.textContent = 0;

// diceEl.classList.add('hidden');

// let currentScore = 0;

// // Rolling Dice Functionality
// btnRoll.addEventListener('click', function(){

//     // 1. Generating a random dice roll:
//     const dice = Math.floor(Math.random() * 6 + 1);

//     // 2. Display Dice:
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3.Check for rolled 1:
//     if(dice !== 1){
//         // Add dice to current score
//         currentScore += dice;
//         current0El.textContent = currentScore;
//     }else{
//         // Switch to next player
//     }

// });





'use strict';

// Selecting  Elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');




// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

const scores = new Array();
let currentScore;
let activePlayer;
let playing;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const init = function(){
    console.log('Clening');
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    

    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;


    diceEl.classList.add('hidden');
}

init(); 


// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {

    if (playing) {

        // 1. Generating a random dice roll:
        const dice = Math.floor(Math.random() * 6 + 1);

        // 2. Display Dice:
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3.Check for rolled 1:
        if (dice !== 1) {
            // Add dice to current score

            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            // Switch to next player

            switchPlayer();

        }

    }

});

btnHold.addEventListener('click', function () {

    if (playing) {

        // 1. Add current score to active playes's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];




        // 2. Check if player's score is >=100
        if (scores[activePlayer] >= 30) {

            // Finish Game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

            diceEl.classList.add('hidden');

        } else {
            // Switch to the next player
            switchPlayer();
        }

    }

});

btnNew.addEventListener('click', init);