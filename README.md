# Portfolio-1-tictactoe
A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript.

## How to play
- The game is played on a 3x3 grid
- Player X starts the game, and players take turns placing their X or O on the grid
- The first player to get 3 of their symbols in a row (horizontally, vertically, or diagonally) wins the game
- If the grid is filled and no player has won, the game is a draw

## Technologies Used
- HTML
- CSS
- JavaScript

## Planning
- Created wireframe UI shows the game board with the display area above the 'game board' and one button underneath. You can view the wireframe below
- The game adhere's to a set of user stories, see below.
- Selected a color scheme using MDN color-picker tool https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool
- Developed MVP
- Audio files added to include sound effects that indicate to user when they click on the board, win and draw. https://pixabay.com/sound-effects/
- Hover class added to indicate next possible move

## User Stories
- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

## Wireframe
https://wireframe.cc/3qp3LU

## Setup
- Clone the repository to your local machine
- Open the `index.html` file in your browser to start the game

## Screenshots

![On page loading](https://user-images.githubusercontent.com/114579141/212066993-56536469-43db-4dfb-949e-9c03c88134b6.png)

## Live Demo
You can try out a live demo of the game [here](https://your-demo-link.com](https://sml-40.github.io/Portfolio-1-tictactoe/index.html)

## Determining the Winner
The determineWinner function checks if a player has won the game by comparing their moves to the winning combinations. It takes in the current player's symbol (either "X" or "O") as a parameter and returns a boolean value indicating whether or not the player has won. The function checks if any of the winning combinations (stored in an array of arrays) are a subset of the current player's moves. If a winning combination is found to be a subset of the player's moves, the function returns true and the game is over. Otherwise, the function returns false and the game continues.

<img width="664" alt="Determine Winner Function" src="https://user-images.githubusercontent.com/114579141/212081129-221b4a38-4f88-40f9-976d-bccb34297410.png">

## Key Functionality
- The "startGame" function resets the game board, clears the player's moves, sets the starting player, and updates the display message. It is called when the   player clicks the start button.
- The "playerTurnToClick" function handles the logic for each player's turn. It checks if the game is over or if the player has already clicked on the cell,   and updates the game board and player's moves accordingly. It also checks for a winner and updates the display message accordingly.
- The "setPlayerHover" function adds a hover class to the cells that the current player can click on, allowing them to see where their next move can be made.   This function is called after each player turn.
- The "gameOver" function is called when the game is over and disables all the click event listeners on the cells so that the game can't continue to be played.

## Known Bugs
- None at the moment

## Future Updates
- Add a scoreboard to keep track of wins and draws
- Add a feature that allows players to choose their symbols
- Add a feature that allows players to play against a computer
