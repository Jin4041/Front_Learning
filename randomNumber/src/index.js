const rangeForm = document.querySelector("#range-form");
const rangeInput = document.querySelector("#range-form input");
const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess-form input");
const resultForm = document.querySelector("#result");
const numResult = document.querySelector("#result h3");
const gameResult = document.querySelector("#result h2");

function handleRange() {
  const rangeNum = rangeInput.value;
  localStorage.setItem("rNum", rangeNum);
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max) + 1;
}

function onPlay(event) {
  event.preventDefault();
  const guessNum = guessInput.value;
  localStorage.setItem("gNum", guessNum);
  const rangeNum = parseInt(localStorage.getItem("rNum"));
  const randomNum = getRandomNum(rangeNum);
  resultForm.classList.remove("hidden");
  numResult.innerText = `You chose: ${guessNum}, the machine chose: ${randomNum}.`;
  if (parseInt(guessNum) === randomNum) {
    gameResult.innerText = "You won!";
  } else {
    gameResult.innerText = "You lost!";
  }
}

rangeForm.addEventListener("input", handleRange);
guessForm.addEventListener("submit", onPlay);
