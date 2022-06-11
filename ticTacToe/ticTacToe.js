const cells = document.querySelectorAll(".cell");
console.log(cells);
console.log([...cells]);
const board = document.querySelector("#board");
const winningPage = document.querySelector(".winningPage");
const winningText = document.querySelector(".winningText");
const restartBtn = document.querySelector(".restartButton");
const circleClass = "circle";
const xClass = "x";
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentTurn;
startGame();

function startGame() {
  currentTurn = false;
  refreshBoardClass();
  refreshCellsClass();

  cells.forEach((cell) => {
    //cell.removeEventListener("click", handleCellClick);
    cell.addEventListener("click", handleCellClick, { once: true });
  });
}

function handleCellClick(cell) {
  let currentClass = currentTurn ? xClass : circleClass;
  cell = cell.target;
  markCell(cell);
  if (checkWin(currentClass)) {
    winningText.innerHTML = `${currentClass == "x" ? "X" : "Circle"} Wins!`;
    winningPage.classList.add("show");
  } else if (checkdraw()) {
    winningText.innerHTML = `No Winner`;
    winningPage.classList.add("show");
  } else {
    swapTurn();
    refreshBoardClass();
  }
}

restartBtn.addEventListener("click", () => {
  winningPage.classList.remove("show");
  startGame();
});

function swapTurn() {
  currentTurn = !currentTurn;
}

function refreshBoardClass() {
  board.classList.remove(xClass);
  board.classList.remove(circleClass);
  if (currentTurn) {
    board.classList.add(xClass);
  } else {
    board.classList.add(circleClass);
  }
}

function markCell(cell) {
  if (currentTurn) {
    cell.classList.add(xClass);
  } else {
    cell.classList.add(circleClass);
  }
}

function checkWin(currentClass) {
  if (win(currentClass)) {
    return true;
  } else {
    return false;
  }
}

function win(currentClass) {
  return winningCombinations.some((combination) => {
    return combination.every((idx) => {
      return cells[idx].classList.contains(currentClass);
    });
  });
}

function refreshCellsClass() {
  cells.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(circleClass);
  });
}

function checkdraw() {
  if (
    [...cells].every((cell) => {
      return (
        cell.classList.contains(xClass) || cell.classList.contains(circleClass)
      );
    })
  ) {
    return true;
  } else {
    return false;
  }
}
