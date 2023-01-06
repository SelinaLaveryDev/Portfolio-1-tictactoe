/*PSEUDOCODE
Press play button:
-game starts (add event listener and function to listen for the play button 'click')
-board resets
-display shows who's turn it is (on 'click' display html = 'Player 1's Turn')

Click board:
-when grid is clicked it should display X or O (event listener and function to listen for on 'click' cell html = X or O)
-display should indicate turn (Now display HTML = 'Player 2s Turn')
-play button greys out or changes to 'Reset Game' (when play/reset is pressed, cells html = " ")
player_1 array = when player clicks a cell, the cell number is logged in array until winning combination.
player_2 array = when cell clicked, the cell number is logged in array

Winner:
- Array method () to detect winning combination in player_1 or player_2 array (filter() creates new array / or from() / includes() / some())
-3 in a row (create winning combinations in array)
-display the winner ('for' loop to detect a winning combination)
-play button activates
*/

//VARIABLES of all board elements//
// const playerX = 
// const playerO = 
// const winningCombinations = 

let display = document.querySelector('.display-score');
let board = document.querySelector('.board');
let cells = document.querySelectorAll('.grid-item');
let playButton = document.querySelector('#start-btn');
// console.log(playButton);

// startGame();

// for (let cell of cells) {
//     cell.addEventListener('click', handleCellClick);
// }

// function handleCellClick();
