class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText.innerText.toString();
    this.currentOperandText = currentOperandText.innerText.toString();
  }

  clear() {
    this.currentOperandText = "";
    this.previousOperandText = "";
    this.operator = "";
  }

  del() {
    this.currentOperandText = this.currentOperandText.slice(0, -1);
  }

  appendNumber(number) {
    if (this.currentOperandText.includes(".") && number.innerText == ".")
      return;
    this.currentOperandText =
      this.currentOperandText + number.innerText.toString();
  }

  chooseOperation(operator) {
    if (this.currentOperandText == "") return;
    if (this.previousOperandText != "") {
      this.compute();
    }
    this.operator = operator.innerText;
    this.previousOperandText = this.currentOperandText + this.operator;
    this.currentOperandText = "";
  }

  compute() {
    if (this.previousOperandText == "") return;
    this.currentOperandNumber = +this.currentOperandText;
    this.previousOperandNumber = +this.previousOperandText.slice(0, -1);

    switch (this.operator) {
      case "+":
        this.currentOperandNumber =
          this.previousOperandNumber + this.currentOperandNumber;
        break;
      case "-":
        this.currentOperandNumber =
          this.previousOperandNumber - this.currentOperandNumber;
        break;
      case "*":
        this.currentOperandNumber =
          this.previousOperandNumber * this.currentOperandNumber;
        break
      case "÷":
        this.currentOperandNumber =
          this.previousOperandNumber / this.currentOperandNumber;
        break;
      default:
        return;
    }

    this.currentOperandText = this.currentOperandNumber.toString();
    this.operator=undefined
    this.previousOperandText=''
  }

  updateDisplay() {
    previousOperandText.innerText = this.previousOperandText;
    currentOperandText.innerText = this.currentOperandText;
  }
}

const allClear = document.querySelector("[all-clear]");
const del = document.querySelector("[del]");
const operators = document.querySelectorAll("[operator]");
const numbers = document.querySelectorAll("[number]");
const equal = document.querySelector("[equal]");
const previousOperandText = document.querySelector(".previousOperand");
const currentOperandText = document.querySelector(".currentOperand");

const calculator = new Calculator(previousOperandText, currentOperandText);

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.appendNumber(number);
    calculator.updateDisplay();
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator.chooseOperation(operator);
    calculator.updateDisplay();
  });
});

allClear.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equal.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

del.addEventListener("click", () => {
  calculator.del();
  calculator.updateDisplay();
});
