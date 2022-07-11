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
        this.typing = this.typing.toString().slice(0, -1)
    }

    appendNumber(number) {
        this.typing = this.typing.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.typing === "") return
        if (this.typed !== "") this.compute()
        this.operation = operation
        this.typed = this.typing
        this.typing = ""
    }

    compute() {

    }
    
    getDisplayedNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = stringNumber.split(".")[1]
        let integerDisplay
    
        if (isNaN(integerDigits)) {
            integerDisplay = ""
        } else {
            integerDisplay = integerDigits.toString()
        }
    
        if (decimalDigits != null) {
            const output = integerDisplay + "." + decimalDigits.toString()
            return output
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.typing.innerText = this.getDisplayedNumber
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
