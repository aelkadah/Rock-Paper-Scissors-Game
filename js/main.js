let chooseBox = document.querySelector(".choose");
let chooseHands = document.querySelectorAll(".hand");
let pickBox = document.querySelector(".picked");
let userDiv = document.querySelector(".user div");
let userImg = document.querySelector(".user .image img");
let computerDiv = document.querySelector(".computer div");
let computerImg = document.querySelector(".computer .image img");
let resultStatus = document.querySelector(".result h1");
let againBtn = document.querySelector(".again");

let scoreBox = document.querySelector(".num");

let score = 0;
let userVal = 0;

document.onload = loadScore();
function loadScore() {
  scoreBox.innerHTML = localStorage.getItem("score");
  score = localStorage.getItem("score");
}

chooseHands.forEach((hand) => {
  hand.addEventListener("click", function () {
    userVal = this.getAttribute("data-value");
    chooseBox.classList.remove("active");
    pickBox.classList.add("active");
    userPick();
    setTimeout(function () {
      computerPick();
    }, 1000);
  });
});

function userPick() {
  if (userVal == "paper") {
    userDiv.classList.add("paper");
    userImg.setAttribute("src", "./imgs/icon-paper.svg");
  } else if (userVal == "scissors") {
    userDiv.classList.add("scissors");
    userImg.setAttribute("src", "./imgs/icon-scissors.svg");
  } else if (userVal == "rock") {
    userDiv.classList.add("rock");
    userImg.setAttribute("src", "./imgs/icon-rock.svg");
  }
}

function computerPick() {
  let values = ["rock", "paper", "scissors"];
  var compVal = values[Math.floor(Math.random() * values.length)];

  if (compVal == "paper") {
    computerDiv.classList.add("paper");
    computerImg.setAttribute("src", "./imgs/icon-paper.svg");
  } else if (compVal == "scissors") {
    computerDiv.classList.add("scissors");
    computerImg.setAttribute("src", "./imgs/icon-scissors.svg");
  } else if (compVal == "rock") {
    computerDiv.classList.add("rock");
    computerImg.setAttribute("src", "./imgs/icon-rock.svg");
  }

  //   thechecker
  if (userVal == compVal) {
    resultStatus.innerHTML = "You Draw";
    againBtn.classList.add("active");
  } else if (userVal == "paper" && compVal == "rock") {
    resultStatus.innerHTML = "You Win";
    againBtn.classList.add("active");
    score++;
    window.localStorage.setItem("score", score);
    loadScore();
  } else if (userVal == "rock" && compVal == "paper") {
    resultStatus.innerHTML = "You Lose";
    againBtn.classList.add("active");
  } else if (userVal == "paper" && compVal == "scissors") {
    resultStatus.innerHTML = "You Lose";
    againBtn.classList.add("active");
  } else if (userVal == "scissors" && compVal == "paper") {
    resultStatus.innerHTML = "You Win";
    againBtn.classList.add("active");
    score++;
    window.localStorage.setItem("score", score);
    loadScore();
  } else if (userVal == "scissors" && compVal == "rock") {
    resultStatus.innerHTML = "You Lose";
    againBtn.classList.add("active");
  } else if (userVal == "rock" && compVal == "scissors") {
    resultStatus.innerHTML = "You Win";
    againBtn.classList.add("active");
    score++;
    window.localStorage.setItem("score", score);
    loadScore();
  }
}

againBtn.addEventListener("click", removeLatest);

function removeLatest() {
  pickBox.classList.remove("active");
  chooseBox.classList.add("active");
  resultStatus.innerHTML = "";
  againBtn.classList.remove("active");
  userDiv.classList.remove("paper", "rock", "scissors");
  userImg.removeAttribute("src");
  computerDiv.classList.remove("paper", "rock", "scissors");
  computerImg.removeAttribute("src");
}

let rulesBtn = document.querySelector(".rulesBtn");
let closeBtn = document.querySelector(".topp .close");
let rulesBox = document.querySelector(".rulesBox");
rulesBtn.addEventListener("click", function () {
  rulesBox.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  rulesBox.classList.remove("active");
});

let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", function () {
  localStorage.setItem("score", 0);
  score = localStorage.getItem("score");
  loadScore();
});
