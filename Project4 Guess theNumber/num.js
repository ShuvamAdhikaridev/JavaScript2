let randomNum = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //? Check whether the guess is Valid
  if (isNaN(guess)) {
    alert("Please enter a Valid number.");
  } else if (guess < 1) {
    alert("Enter a Valid number");
  } else if (guess > 100) {
    alert("Please enter a number i.e less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMassage(`Game Over.Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess();
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMassage(`You Guessed it right.`);
    endGame();
  } else if (guess < randomNum) {
    displayMassage(`Number is too Low`);
  } else if (guess > randomNum) {
    displayMassage(`Number is too High`);
  }
}

function displayGuess(guess) {
  userInput.value = ``;
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  lastResult.innerHTML = `${11 - numGuesses}`;
}

function displayMassage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ``;
  userInput.setAttribute(`disabled`, ``);
  p.classList.add(`button`);
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener(`click`, function (e) {
    randomNum = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = ``;
    lastResult.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute(`disabled`);
    startOver.removeChild(p);

    playGame = true;
  });
}
