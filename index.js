// JavaScript code for the Tic-Tac-Toe game logic

// Selecting all the buttons (boxes), reset button, and new game button
let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#msg");

// Variable to keep track of the current player's turn
let turnO = true; // Player X, Player O

// Array defining winning patterns
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Function to reset the game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
}

// Adding click event listeners to each box
boxes.forEach((box) =>{
    box.addEventListener("click" , () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

// Function to disable all boxes
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

// Function to enable all boxes
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// Function to display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}

// Function to check for a winner
const checkWinner = () => {
    for(pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

// Adding event listeners to the new game and reset buttons
newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
