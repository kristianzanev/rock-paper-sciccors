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

  document.getElementById("oppScore").innerHTML = oppScore;
  document.getElementById("youScore").innerHTML = youScore;

  document.getElementById("whoWon").innerHTML = winnerOrLoser;

  console.log(youRockCount, youPaperCount,youScissorsCount);
}
