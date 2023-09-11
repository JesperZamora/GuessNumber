const lblMessage = document.querySelector('.message');
const lblNumber = document.querySelector('.number');
const lblScore = document.querySelector('.score');
const lblHighScore = document.querySelector('.highscore');
const inpGuess = document.querySelector('.guess');

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');

btnAgain.addEventListener('click', againBtnSetup)
btnCheck.addEventListener('click', checkNumber);

let computerNumber;
let currentScore;
let isCorrect = false;


function checkNumber() {
    const userNumber = parseInt(inpGuess.value);
    currentScore = parseInt(lblScore.textContent);

    if(isCorrect) {
        return alert('You have already guessed the number! Start new game!');
    }

    if(userNumber === computerNumber) {
        lblScore.textContent = (currentScore + 1);
        lblNumber.textContent = computerNumber;
        lblMessage.textContent = 'You guessed correct!';
        isCorrect = true;
    } else {
        lblScore.textContent = (currentScore - 1);
        lblMessage.textContent = 'You guessed wrong!';
        console.log(computerNumber);
    }
}

function generateRandom() {
    return Math.floor(Math.random()*20) + 1;
}

function againBtnSetup() {
    lblMessage.textContent = 'Game is ready! Choose a number 1-20.';
    lblScore.textContent = '20';
    lblNumber.textContent = '?';
    computerGuess()
    isCorrect = false;

}

function computerGuess() {
    computerNumber = generateRandom();
}





