class Calculator {
    constructor(typed, typing) {
        this.typed = typed
        this.typing = typing
        this.clear()
    }

    clear() {
        this.typing = ""
        this.typed = ""
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    getDisplayedNumber(number) {

    }

    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll("[number]")
const operationButtons = document.querySelectorAll("[operation]")
const equalsButton = document.querySelector("[equals]")
const clearButton = document.querySelector("[all-clear]")
const deleteButton = document.querySelector("[delete]")
const typed = document.querySelector("[typed]")
const typing = document.querySelector("[typing]")

const calculator = new Calculator(typed, typing)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(operation => {
    operation.addEventListener("click", () => {
        calculator.chooseOperation(operation.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", () => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", () => {
    calculator.delete()
    calculator.updateDisplay()
})
