let image = "";
let imageOpp = "";
let youChoice = "";
let youRockCount = 0;
let youPaperCount = 0;
let youScissorsCount = 0;
let oppChoice = "";
let youScore = 0;
let oppScore = 0;
let winnerOrLoser = "";

function changeToRock() {
  image = document.getElementById("youImg");
  image.src = "./img/rock.jpg";
  youChoice = "rock";
  youPaperCount = 0;
  youRockCount += 1;
  youScissorsCount = 0;
}
function changeToPaper() {
  image = document.getElementById("youImg");
  image.src = "./img/paper.jpg";
  youChoice = "paper";
  youPaperCount += 1;
  youRockCount = 0;
  youScissorsCount = 0;
}
function changeToScissors() {
  image = document.getElementById("youImg");
  image.src = "./img/scissors.jpg";
  youChoice = "scissors";
  youRockCount = 0;
  youPaperCount = 0;
  youScissorsCount += 1;
}
function rockPaperScissors() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  //randomNumber = 1(is for rock),2(is for paper),3(is for scissors)
  if (
    (randomNumber == 1) &
    (youRockCount < 2) &
    (youPaperCount < 2) &
    (youScissorsCount < 2)
  ) {
    imageOpp = document.getElementById("opponentImg");
    imageOpp.src = "./img/rock.jpg";
    oppChoice = "rock";
  } else if (
    (randomNumber == 2) &
    (youRockCount < 2) &
    (youPaperCount < 2) &
    (youScissorsCount < 2)
  ) {
    imageOpp = document.getElementById("opponentImg");
    imageOpp.src = "./img/paper.jpg";
    oppChoice = "paper";
  } else if (
    (randomNumber == 3) &
    (youRockCount < 2) &
    (youPaperCount < 2) &
    (youScissorsCount < 2)
  ) {
    imageOpp = document.getElementById("opponentImg");
    imageOpp.src = "./img/scissors.jpg";
    oppChoice = "scissors";
  }
  // This logic is If you player is choosing only one option,
  // the computer will make contrary choice
  if (youRockCount > 2) {
    imageOpp = document.getElementById("opponentImg");
    imageOpp.src = "./img/paper.jpg";
    oppChoice = "paper";
  } else if (youPaperCount > 2) {
    imageOpp = document.getElementById("opponentImg");
    imageOpp.src = "./img/scissors.jpg";
    oppChoice = "scissors";
  } else if (youScissorsCount > 2) {
    imageOpp = document.getElementById("opponentImg");
    imageOpp.src = "./img/rock.jpg";
    oppChoice = "rock";
  }
  // Add a score and decide who is winner

  if ((oppChoice == "rock") & (youChoice == "paper")) {
    oppScore -= 1;
    youScore += 1;
    winnerOrLoser = "You won!";
  } else if ((oppChoice == "paper") & (youChoice == "rock")) {
    oppScore += 1;
    youScore -= 1;
    winnerOrLoser = "Opponent won!";
  } else if ((oppChoice == "rock") & (youChoice == "scissors")) {
    oppScore += 1;
    youScore -= 1;
    winnerOrLoser = "Opponent won!";
  } else if ((oppChoice == "scissors") & (youChoice == "rock")) {
    oppScore -= 1;
    youScore += 1;
    winnerOrLoser = "You won!";
  } else if ((oppChoice == "paper") & (youChoice == "scissors")) {
    oppScore -= 1;
    youScore += 1;
    winnerOrLoser = "You won!";
  } else if ((oppChoice == "scissors") & (youChoice == "paper")) {
    oppScore += 1;
    youScore -= 1;
    winnerOrLoser = "Opponent won!";
  } else {
    winnerOrLoser = "It's a draw";
  }
  // Loose Effects
  if (winnerOrLoser === "You won!") {
    let winEffect = document.getElementById("opponentImg");
    winEffect.classList.add("animate");
    let looseEffect = document.getElementById("youImg");
    looseEffect.classList.remove("animate");
  } else if (winnerOrLoser === "Opponent won!") {
    let winEffect = document.getElementById("youImg");
    winEffect.classList.add("animate");
    let looseEffect = document.getElementById("opponentImg");
    looseEffect.classList.remove("animate");
  } else {
    let looseEffect = document.getElementById("opponentImg");
    looseEffect.classList.remove("animate");
    let looseEffect2 = document.getElementById("youImg");
    looseEffect2.classList.remove("animate");
  }
  document.getElementById("oppScore").innerHTML = oppScore;
  document.getElementById("youScore").innerHTML = youScore;

  document.getElementById("whoWon").innerHTML = winnerOrLoser;

  // Progress bar change

  if (youScore < 0) {
    let looseProgressBar = document.getElementById("progressBar");
    looseProgressBar.classList.add("bg-danger");
    looseProgressBar.classList.remove("bg-success");
    switch (oppScore) {
      case 0:
        document.get("progressBar").style.width = "0%";
        break;
      case 1:
        document.getElementById("progressBar").style.width = "20%";
        break;
      case 2:
        document.getElementById("progressBar").style.width = "40%";
        break;
      case 3:
        document.getElementById("progressBar").style.width = "60%";
        break;
      case 4:
        document.getElementById("progressBar").style.width = "80%";
        break;
      case 5:
        document.getElementById("progressBar").style.width = "100%";
        break;
    }
  } else {
    let looseProgressBar = document.getElementById("progressBar");
    looseProgressBar.classList.remove("bg-danger");
    looseProgressBar.classList.add("bg-success");
    switch (youScore) {
      case 0:
        document.getElementById("progressBar").style.width = "0%";
        break;
      case 1:
        document.getElementById("progressBar").style.width = "20%";
        break;
      case 2:
        document.getElementById("progressBar").style.width = "40%";
        break;
      case 3:
        document.getElementById("progressBar").style.width = "60%";
        break;
      case 4:
        document.getElementById("progressBar").style.width = "80%";
        break;
      case 5:
        document.getElementById("progressBar").style.width = "100%";
        break;
    }
  }

  // Win or Lose the game modal pop up
  if (youScore >= 5) {
    $("#modalWinner").modal("show");
  } else if (youScore <= -5) {
    $("#modalLoser").modal("show");
  }
  console.log(youScore);
}
$(document).ready(function() {
  $("#modalPage").modal("show");
});
function clearScore() {
  youScore = 0;
  oppScore = 0;
  document.getElementById("oppScore").innerHTML = oppScore;
  document.getElementById("youScore").innerHTML = youScore;
  document.getElementById("progressBar").style.width = "0%";
  let looseEffect = document.getElementById("opponentImg");
  looseEffect.classList.remove("animate");
  let looseEffect2 = document.getElementById("youImg");
  looseEffect2.classList.remove("animate");
}
