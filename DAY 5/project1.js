let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// random number generate
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log("Random Number:", randomNumber); 

// score
let scr = 20;

// button check
checkBtn.addEventListener("click", () => {
  console.log("Check button clicked");

  const guessValue = Number(guess.value);

  if (!guessValue) {
    alert= "Please Enter The Number!";
    msg.textContent="Please enter the number!";

  } else if (guessValue === randomNumber) {
    msg.textContent = "Correct Number!";
    number.textContent = randomNumber;
    document.body.style.backgroundColor = "purple";

    if (scr > Number(highScore.textContent)) {
      highScore.textContent = scr;
    }

  } else {
    if (scr > 1) {
      msg.textContent = guessValue > randomNumber ? "Too High!" : "Too Low!";
      scr--;
      score.textContent = scr;
    } else {
      msg.textContent = "You lost the game!";
      score.textContent = 0;
    }
  }
});

// AGAIN button
againBtn.addEventListener("click", () => {
  scr = 20;
  score.textContent = scr;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  msg.textContent = "Start guessing...";
  number.textContent = "?";
  guess.value = "";
  document.body.style.backgroundColor = "#222";
});