const wins = [
  [0, 1, 2],
  [2, 4, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let currentTurn = "X";
let gameOver = false;
let xWon = 0;
let oWon = 0;
let tie = 0;
let click = 0;

const changeTurn = () => {
  currentTurn = currentTurn === "X" ? "O" :"X";
  let turnDisplay = document.querySelector(".turn-display");
  turnDisplay.innerText = currentTurn;

}

const checkWin = () => {
  let boxSymbol = document.getElementsByClassName("box-symbol");
  wins.forEach(combination => {
    if(    
      boxSymbol[combination[0]] .innerText === 
        boxSymbol[combination[1]].innerText && 
      boxSymbol[combination[1]].innerText === 
        boxSymbol[combination[2]].innerText && 
      boxSymbol[combination[0]].innerText != ""    ){
        gameOver = true;
        if(boxSymbol[combination[0]].innerText === "X"){
          xWon++;
        }
        else if(boxSymbol[combination[0]].innerText === "O"){
          oWon++;
        }else if( !gameOver && click===9){
          tie++;
        }

        let xScore = document.querySelector(".x-Won");
        xScore.innerHTML = xWon;

        let oScore = document.querySelector(".o-Won");
        oScore.innerHTML = oWon;

        let ties = document.querySelector(".tie");
        ties.innerHTML = tie;
      }
    })
}

var boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
    let boxSymbol = element.querySelector(".box-symbol");
    element.addEventListener("click", () => {
      if (boxSymbol.innerText === "" && gameOver === false){
        click++;
        boxSymbol.innerText = currentTurn;
        changeTurn();
        checkWin();

      }
    })
    
})