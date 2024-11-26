# SEI Project 1 - Tic-Tac-Toe
I created this Tic-Tac-Toe game using HTML, CSS, and JavaScript. It was my first project for General Assembly and enabled me to put into practice what I had learned in the first few weeks of the course.

![Tic-Tac-Toe game](https://imgur.com/3fIgdrb.gif)

## Live Demo
You can try out a live demo of the game **[here](https://selinalaverydev.github.io/Portfolio-1-tictactoe/)**

### Timeframe
6 days - solo project


## Technologies Used
 - Languages used:
    - HTML
    - CSS
    - JavaScript
 - Developer Tools:
    - Command Line
    - Visual Studio Code
 - Code Versioning Tools:
    - GitHub
 - Deployment: GitHub Pages was used for deploying the project
 - Wireframing and Design Tools:
    - Wireframe.cc
    - MDN Color Picker Tool
    - Google Fonts
 - Audio:
    - Pixabay


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

## Day 1 - Planning
### Wireframe

I used Wireframe.cc, a free, online wireframing tool, to begin my design. I wanted to create a user-friendly, minimal looking board with the display at the top to indicate the players turn and results, and a mandatory play button at the bottom which changes to the 'reset' button during play.


![Wireframe1](https://user-images.githubusercontent.com/114579141/212560309-f5949614-7363-43bb-8999-a0b45420613b.png)

### Pseudocoding and Basic Structure

Checklist:
 - Create a 3 x 3 grid
 - Press ‘play’ button:
    - Game starts
    - Board resets
    - Display to show player turn
 - Click board:
    - When grid is clicked it should display X or O
    - Display changes to indicate player turn
    - Play button grey’s out
 - Winner:
    - When 3 in a row play stops
    - Display winner
    - Play button activates
 - Event listeners:
    - Play button
    - Cell clicks


## Day 2 - Build Process

HTML - I began by creating a 3 x 3 grid with in the main grid-container:

<img width="570" alt="P1-HTML" src="https://user-images.githubusercontent.com/114579141/230222553-6fc547c3-1413-4ba7-a35d-66804f49f6a7.png">

My next challenge was to add an event listener for the ‘cells’ on the grid. To do this I selected all elements that have a class of ‘grid-item’ using the querySelectorAll() method. This created a NodeList of all matching elements, which I stored in the ‘cells’ variable.

I then used the forEach() method to loop over each element in the ‘cells’ NodeList, and added a click event listener to each element using the addEventListener() method.

I used the same logic for the ‘resetBoard’ method which I later incorporated into the startGame function:

![Screenshot 2023-04-05 at 23 16 13](https://user-images.githubusercontent.com/114579141/230224011-b9ee301e-7488-4a87-84af-ca5ee6b256ff.png)

## Day 3 & 4 - Functionality for each player’s turn

To enable the game to record each player's choice of square and to have the board respond between turns, I created an empty array for each player:

![Screenshot 2023-04-05 at 23 20 45](https://user-images.githubusercontent.com/114579141/230224691-c1813c4e-3031-440d-905f-c315b172aa33.png)

I spent most of day 3 creating the startGame() function. This function is called after the player clicks the ‘Start’ button, and it initiates the game with the following features:
 
 - The display updates to show that it's Player X's turn to start, and the background colour of the display changes to a pleasing blue shade.
 - The text on the ‘Start’ button changes to ‘Reset Game’ to allow the player to restart the game if necessary.
 - Any existing id attribute is removed from the display, and the player1Clicks and player2Clicks arrays are reset to empty arrays in preparation for a new game.
 - The innerHTML of each cell on the game board is cleared, and their background colors are reset to white.
 - playerTurn is set to playerX, indicating that it's Player X's turn to play.
 - isWinner is set to false, indicating that no player has won yet.
 - isGameOver is set to false, indicating that the game is not yet over.
 - setPlayerHover() is called to set the hover class on the game board to reflect the current player's turn.

![Screenshot 2023-04-05 at 23 26 24](https://user-images.githubusercontent.com/114579141/230225347-5e47b987-d7ca-49dd-a086-76a5f75427d8.png)

In the playerTurnToClick function the cell index is pushed and stored in the array for that player:

![Screenshot 2023-04-05 at 23 28 03](https://user-images.githubusercontent.com/114579141/230225541-3f9a9fd7-f82b-4e39-9c0f-def20d0caa36.png)

I wanted to add a hover aesthetic during game play so that if player X was taking their turn, they could visualise their next move with the help of the setPlayerHover function:

![Screenshot 2023-04-05 at 23 29 47](https://user-images.githubusercontent.com/114579141/230225780-0b817d03-fd11-4635-b2c9-0bc35e5fdde2.png)

## Determining the Winner
The determineWinner function checks if a player has won the game by comparing their moves to the winning combinations. It takes in the current player's symbol (either "X" or "O") as a parameter and returns a boolean value indicating whether or not the player has won. The function checks if any of the winning combinations (stored in an array of arrays) are a subset of the current player's moves. If a winning combination is found to be a subset of the player's moves, the function returns true and the game is over. Otherwise, the function returns false and the game continues.

<img width="664" alt="Determine Winner Function" src="https://user-images.githubusercontent.com/114579141/212081129-221b4a38-4f88-40f9-976d-bccb34297410.png">

## Challenges
During the testing of my Tic-Tac-Toe game, I observed that many users would accidentally click on the display section at the top of the game board instead of the start button at the bottom. To address this usability issue, I added a hover function that would highlight the start button when the user hovers over the display section.
 
However, linking the two elements presented a challenge since there are other divs in between them. To solve this problem, I wrote the CSS code with the following selector:

![Screenshot 2023-04-05 at 23 35 55](https://user-images.githubusercontent.com/114579141/230226748-280c49e3-e064-4df1-ab91-7bbb03813dbc.png)

This selector uses the ~ (general sibling) selector to match any element with an id of flash that comes after an element with an id of indicate and then targets the #start-btn element within that matched flash element. When the user hovers over the #indicate element, the background-color of the #start-btn element is changed to red to highlight it.

## Wins
 - I'm proud to have met the MVP for my first JavaScript project and achieved all three bronze, silver, and gold requirements.
 - Additionally, I added sound effects to create a more immersive experience for the user. 

## Key Learnings
Throughout the Tic-Tac-Toe project, I gained confidence in several technologies and tools. For example:

 - I learned to use the ternary operator to simplify conditional assignments and avoid the clutter of multiple if-else statements. 
 - Console logging was also essential for testing and debugging my code. 
 - And I became more comfortable with array methods, such as, some, every, and includes.
 
In addition to technical skills, I also gained valuable experience with engineering processes like daily stand-ups. These meetings helped me understand my colleagues' progress and challenges and allowed us to provide mutual support and feedback. Overall, the project taught me the importance of collaboration, communication, and continuous learning in software development.


## Future Updates
- Add a scoreboard to keep track of wins and draws.
- Add a scorethrough to highlight the winning row or column.
- Add a feature that allows players to choose their symbols.
- Add a feature that allows players to play against a computer.
