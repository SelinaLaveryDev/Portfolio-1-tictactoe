# Portfolio-1-tictactoe
I created this Tic-Tac-Toe game using HTML, CSS, and JavaScript. It was my initial solo project for General Assembly and enabled me to put into practice what I had learned in the preceding weeks.

![On page loading](https://user-images.githubusercontent.com/114579141/212066993-56536469-43db-4dfb-949e-9c03c88134b6.png)

## Features
 - Sound effects to indicate when the user wins or loses, and when they select a square
 - Hover affects for ease of use
 - Colour animation to indicate players turn

## Live Demo
You can try out a live demo of the game **[here](https://sml-40.github.io/Portfolio-1-tictactoe/index.html)**

## Technologies Used
- Languages used:
  - HTML
  - CSS
  - JavaScript
-Developer Tools:
  - Command Line
  - Visual Studio Code
- Code Versioning Tools
  -GitHub
-Deployment: GitHub Pages was used for deploying the project
-Wireframing and Design Tools:
  - Wireframe.cc
  - MDN Color Picker Tool
  - Google Fonts

### Technical Requirements

- Render a game board in the browser
- Switch turns between X and O (or whichever markers you select)
- Visually display which side won if a player gets three in a row, or show a draw if neither player wins
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)
- Have well-formatted, and well-commented code

### User Stories for minimum viable product (MVP)
- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

### Gold, silver, bronze planning for MVP
- Bronze: 
  - An HTML page with a table of 9 cells. Just enough Javascript to show you who the current player is and change the background color of a cell when you click on it. Just enough CSS to make the cells visible.

- Silver: 
  - Enough CSS to make it actually look like a game, and enough Javascript for a "reset" button.

- Gold: 
  - CSS transitions or animations, showing "X" and "O" instead of colors, and Javascript that tells you when the game is over and who won.

### Wireframe

A wireframe for a minimal looking board, with the display at the top to indicate the players turn and results, and a mandatory play button at the bottom which changes to the 'reset' button during play.

![Wireframe1](https://user-images.githubusercontent.com/114579141/212560309-f5949614-7363-43bb-8999-a0b45420613b.png)

## Build/Code Process

- Planning phase
  - Review of the User stories and technical requirements, listed above.
  - Wireframing used to create the intro screen, trying to keep the features as minimal looking as possible for a professional look
  - Repo created using GitHub
  - HTML, CSS and JS file created
  - Psuedocode written in JS file to start planning and break the process into smaller steps

- Coding phase
  - Using the wireframe, I then created my HTML document, including the essential elements by breaking them down into 3 main divs with class names
  - I began some basic styling with CSS, creating a grid for the gameboard
  - My initial code in JavaScript included:
      - Setting out my global variables
      - Grabbing elements from HTML using query selector
      - Initial event listeners for the play button and for the cells on the grid
     
## Key Functionality
- The "startGame" function resets the game board, clears the player's moves, sets the starting player, and updates the display message. It is called when the   player clicks the start button.
- The "playerTurnToClick" function handles the logic for each player's turn. It checks if the game is over or if the player has already clicked on the cell,   and updates the game board and player's moves accordingly. It also checks for a winner and updates the display message accordingly.
- The "setPlayerHover" function adds a hover class to the cells that the current player can click on, allowing them to see where their next move can be made.   This function is called after each player turn.
- The "gameOver" function is called when the game is over and disables all the click event listeners on the cells so that the game can't continue to be played.

## Determining the Winner
The determineWinner function checks if a player has won the game by comparing their moves to the winning combinations. It takes in the current player's symbol (either "X" or "O") as a parameter and returns a boolean value indicating whether or not the player has won. The function checks if any of the winning combinations (stored in an array of arrays) are a subset of the current player's moves. If a winning combination is found to be a subset of the player's moves, the function returns true and the game is over. Otherwise, the function returns false and the game continues.

<img width="664" alt="Determine Winner Function" src="https://user-images.githubusercontent.com/114579141/212081129-221b4a38-4f88-40f9-976d-bccb34297410.png">

## Known Bugs
- None at the moment

## Future Updates
- Add a scoreboard to keep track of wins and draws
- Add a scorethrough to highlight the winning row or column
- Add a feature that allows players to choose their symbols
- Add a feature that allows players to play against a computer
