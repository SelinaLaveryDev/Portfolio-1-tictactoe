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
// const playerX = code
// const playerO = 
// const winningCombinations = 

let display = document.querySelector('.display-score');
const board = document.querySelector('.board');
let playButton = document.querySelector('#start-btn');

let cells = document.querySelectorAll('.grid-item');

//click listener event added for the cells on the board//
cells.forEach(cell => {
    cell.addEventListener('click', event => {
        alert('You clicked a cell!');
    });
});

//function to reset board//
function resetBoard(){
    cells.forEach(function(cell) {
        cell.innerHTML = '';
    });
};

//function to change display after start button pressed//
function playerOne() {
    display.innerHTML = "Player 1 to start"
    playButton.innerHTML = "Reset Game"
};

//event listener with anonymous function to call both functions in sequence//
playButton.addEventListener('click', function() {
    resetBoard();
    playerOne();
});

