//***GLOBAL VARIABLES of all board elements */

let display = document.querySelector(".display-score");
const board = document.querySelector(".board");
let playButton = document.querySelector("#start-btn");
let cells = document.querySelectorAll(".grid-item");
const heading = document.querySelector("h1");

const playerX = "X";
const playerO = "O";
let isWinner = false;
let isgameOver = false;
let playerTurn = playerX; //player 1 starts
let player1Clicks = []; //to record which cell player1 clicked
let player2Clicks = []; //to record which cell player2 clicked
//sound variables
const clickSound = new Audio("sounds/click_sound.mp3");
const winSound = new Audio("sounds/winning_sound.mp3");
const noWinSound = new Audio("sounds/no_winner_sound.mp3");

//***End of Global Variables */

//event listener for the play button//
playButton.addEventListener("click", function () {
  startGame();
});

function playerTurnToClick(cell, index) {
  if (isWinner) {
    return;
  }

  if (isgameOver) {
    return;
  }

  if (cell.innerHTML !== "") {
    return;
  }

  if (playerTurn === "X") {
    cell.innerHTML = "X";
    // console.log(!(cell === '')); //=>true
    cell.style.backgroundColor = "#2980b9";
    player1Clicks.push(index);
  } else {
    //player 2's turn//
    cell.innerHTML = "O";
    // console.log(cell === '');//=>false
    cell.style.backgroundColor = "#3FBFBF";
    player2Clicks.push(index);
  }

  isWinner = determineWinner(playerTurn);
  // console.log(isWinner);

  if (isWinner) {
    display.innerHTML = `Player ${playerTurn} WINS!`;
    display.style.backgroundColor = "#1E96FF";
    winSound.play();
    gameOver();
    return;
  }

  if (player1Clicks.length + player2Clicks.length === 9 && !isWinner) {
    display.innerHTML = "It's a DRAW!";
    display.style.backgroundColor = "#1E96FF";
    noWinSound.play();
    gameOver();
    return;
  }

  if (playerTurn === "X") {
    playerTurn = "O"; //switch to player 2's turn
    display.innerHTML = "Player O"; //display changes to prompt player 2 to take their turn//
    display.style.backgroundColor = "#3FBFBF"; //player 2 display color change//
  } else {
    playerTurn = "X"; //switch to player 1's turn
    display.innerHTML = "Player X"; //display changes to prompt player 1 to take their turn//
    display.style.backgroundColor = "#2980b9"; //player 1 display color change//
  }
  setPlayerHover();
  clickSound.play();
}

//click listener event for the cells on board//
cells.forEach((cell, index) => {
  //runs forEach function for each cell in grid//
  cell.addEventListener("click", () => playerTurnToClick(cell, index));
});

heading.addEventListener("click", function () {
  if (isWinner) {
    return;
  }
  if (isgameOver) {
    return;
  }
  location.href = "index.html";
});

//function to start game after start button pressed//
function startGame() {
  display.innerHTML = "Player X to start";
  display.style.backgroundColor = "#2980b9";
  playButton.innerHTML = "Reset Game";
  display.removeAttribute("id");
  player1Clicks = [];
  player2Clicks = [];
  cells.forEach(function (cell) {
    cell.innerHTML = "";
    cell.style.backgroundColor = "white";
  });

  playerTurn = playerX;
  isWinner = false;
  isgameOver = false;
  setPlayerHover();
}

function setPlayerHover() {
  if (isWinner) {
    return;
  }

  if (isgameOver) {
    return;
  }
  //remove all hover text
  cells.forEach((cell) => {
    cell.classList.remove("hoverX");
    cell.classList.remove("hoverO");
  });

  const hoverTurn = `hover${playerTurn}`;

  cells.forEach((cell) => {
    if (cell.innerHTML == "") {
      cell.classList.add(hoverTurn);
      // console.log(hoverTurn);
    }
  });
}

function determineWinner(playerTurn) {
  const winningCombinations = [
    [0, 1, 2], //row 1
    [3, 4, 5], //row 2
    [6, 7, 8], //row 3
    [0, 3, 6], //column 1
    [1, 4, 7], //column 2
    [2, 5, 8], //column 3
    [0, 4, 8], //diagonal 1
    [2, 4, 6], //diagonal 2
  ];
  let playerClicks = playerTurn === "X" ? player1Clicks : player2Clicks;
  // which player has the winning numbers //
  if (playerClicks.length >= 3) {
    const winningCombo = winningCombinations.some((combination) => {
      return combination.every((element) => {
        return playerClicks.includes(element);
      });
    });
    return winningCombo ? playerTurn : false;
  }
  return false;
}

function gameOver() {
  isgameOver = true;
  cells.forEach((cell) => {
    cell.classList.remove("hoverX");
    cell.classList.remove("hoverO");
  });
  display.setAttribute("id", "indicate");
}
