
const board = document.querySelector("#board"); //game board
const startCells = [
    "", "", "", "", "", "", "", "", ""
] //starting cells are empty
const square = document.querySelectorAll("#square");//cells
const playerX = "X";
const playerO = "O";
let turn = playerX;

const winningMessage = document.getElementById("#winningMessage");//winning message area
const button = document.getElementById("#restartButton")//button



function startGame() {
    startCells.forEach(cell => {
        square.addEventListener('click', addSymbol())
        board.append(square);//pushing a cell to game board
    })
}
//might have a problem here




