//Es6 and class appraoch in calculator in javascript

class Calculator {
    constructor(previousDisplay, currentDisplay){
        this.previousDisplayOperand = previousDisplay
        this.currentDisplayOperand = currentDisplay
    }

    allClear(){

    }

    delete(){

    }

    Operations(operation){

    }

    appendNumbers(number){

    }

    computeResult(){

    }

    updateDisplay(){
        this.currentDisplayOperand.innerText = this.previousDisplay 

    }

    historyDiplay(){

    }
}

//variables
const previousDisplay = document.querySelector(".previous-display")
const currentDisplay = document.querySelector(".current-display")
const history = document.querySelector(".history")
const historyBtn = document.getElementById("history")
const delBtn = document.getElementById("delBtn")
const numberBtns = document.querySelectorAll('[data-number]')
const operationBtns = document.querySelectorAll("[data-operation]")
const btnAllClear = document.querySelector("[data-all-clear]")
const equalToBtn  = document.querySelector("[data-all-clear]")

let calculator = new Calculator (previousDisplay, currentDisplay)

numberBtns.forEach((button) => {
    button.addEventListener(('click', ()=>{
        calculator.appendNumbers(button.innerText)
        calculator.updateDisplay()
    }))
})

// for(num in numberBtns){
//     numberBtns.addEventListener("click", ()=>{
//         calculator.appendNumbers(numberBtns.innerText)
//         calculator.updateDisplay()
//     })
// }
