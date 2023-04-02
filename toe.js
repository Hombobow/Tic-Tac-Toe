const scoreBoard = document.querySelector("#score_board");
const child = document.querySelectorAll(".child");
const againButton = document.querySelector("#again");
const winner = document.querySelector("#winner");
let turn = 0;
const gameState = [
    "", "", "",
    "", "", "",
    "", "", ""
]
let gameOver = false;

for(let i = 0; i < child.length; i++) {
    child[i].addEventListener("click", () => {
        if(gameOver) { 
            return;
        }
        if(turn % 2 === 0 && gameState[i] === "") {
            child[i].innerText = "X";
            scoreBoard.innerText = "O's turn"
            gameState[i] = "X";
            if(checkWinner("X")) {
                winner.innerHTML = "X wins";
                gameOver = true;
;            }
            turn++
        }else if(turn % 2 !== 0 && gameState[i] === "") {
            child[i].innerText = "O";
            scoreBoard.innerText = "X's turn"
            gameState[i] = "O";
            if(checkWinner("O")) {
                winner.innerText = "O wins";
                gameOver = true;
            }
            turn++
        }
        if(turn === 9) {
            winner.innerText = "Tie";
        }
    });
}

againButton.addEventListener("click", () => {
    console.log("clicked");
    for(let i = 0; i < gameState.length; i++) {
        gameState[i] = "";
    }
    for(let i = 0; i < child.length; i++) {
        child[i].innerText = "";
    }
    winner.innerText = "";
    gameOver = false;
    turn = 0;
});

function checkWinner(sign) {
    //rows
    //0 3, 6
    for(let i = 0; i < gameState.length; i+=3) {
        if(gameState[i] === sign 
            && gameState[i+1] === sign 
            && gameState[i+2] === sign) {
            return true;
        }
    }
    //columns
    for(let i = 0; i < 3; i++) {
        if(gameState[i] === sign 
            && gameState[i+3] === sign 
            && gameState[i+6] === sign) {
            return true;
        }
    }
    //diagonals
    if(gameState[0] == sign 
        && gameState[4] == sign 
        && gameState[8] === sign) {
        return true;
    } else if(gameState[2] == sign 
        && gameState[4] == sign 
        && gameState[6] === sign) {
        return true;
    }
    return false
}