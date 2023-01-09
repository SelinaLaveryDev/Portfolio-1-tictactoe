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
let playerTurn = 1; //player 1 starts
let player1Clicks = []; //to record which cell player1 clicked
let player2Clicks = []; //to record which cell player2 clicked

//function to start game after start button pressed//
function startGame() {
    display.innerHTML = 'Player 1 to start'; //change display
    display.style.backgroundColor = '#4d9186'; //change display color
    playButton.innerHTML = 'Reset Game'; //change text to indicate different function
    player1Clicks = [];
    player2Clicks = [];
    cells.forEach(function(cell) {
        cell.innerHTML = ''; //the board clears
        cell.style.backgroundColor = 'white';
    });
    playerTurn = 1;
};

//click listener event for the cells on board//
cells.forEach((cell, index) => { //runs forEach function for each cell in grid//
    cell.addEventListener('click', event => { //when a cell is clicked
        if (playerTurn === 1) {
            if (cell.innerHTML !== '') {
                return;
            }
            cell.innerHTML = 'X'; //changes to cross
            // console.log(!(cell === '')); //=>true
            cell.style.backgroundColor = '#4d9186'; //and color changes
            player1Clicks.push(index);//push p1 cell log into array
            console.log(`player 1: ${player1Clicks}`);
            playerTurn = 2; //switch to player 2's turn
            display.innerHTML = 'Player 2 turn';//display changes to prompt player 2 to take their turn//
            display.style.backgroundColor = '#684d6b';//player 2 display color change//
        } else {
            //player 2's turn//
            cell.innerHTML = 'O'; //changes to circle
            // console.log(cell === '');//=>false
            cell.style.backgroundColor = '#684d6b'; //and color changes
            player2Clicks.push(index); //push p2 cell log into array
            console.log(`player 2: ${player2Clicks}`);
            playerTurn = 1; //switch to player 1's turn
            display.innerHTML = 'Player 1 turn';//display changes to prompt player 1 to take their turn//
            display.style.backgroundColor = '#4d9186';//player 1 display color change//
        }
            // cell.removeEventListener('click', event); //=> didnt work here. trying toggle.
    });
});

//event listener with anonymous function to call both functions in sequence//
playButton.addEventListener('click', function() {
    resetBoard();
    startGame();
});

//function to reset board//
function resetBoard(){
    display.innerHTML = 'Player 1 to start'; //change display
    display.style.backgroundColor = '#4d9186'; //change display color
    playButton.innerHTML = 'Reset Game'; //change text to indicate different function
    cells.forEach(function(cell) {
        cell.innerHTML = ''; //the board clears
        cell.style.backgroundColor = 'white';
    });
    playerTurn = 1;
    player1Clicks = [];
    player2Clicks = [];
};


// //function to reset board//
// function resetBoard(){
//     cells.forEach(function(cell) {
//         cell.innerHTML = ''; //the board clears
//         cell.style.backgroundColor = 'white';
//     });
// };


// function playerOneLog() {
    
//     cells.forEach((cell, index) => {
//         cell.addEventListener('click', event => {
//         player1Clicks.push(index);
//         console.log(player1Clicks);   
//             // console.log(`you clicked ${index}`);
//         })
//     })
// }

// function playerTwoLog() {
    
//     cells.forEach((cell, index) => {
//         cell.addEventListener('click', event => {
//         player2Clicks.push(index);
//         console.log(player2Clicks);   
//             // console.log(`you clicked ${index}`);
//         })
//     })
// }
