//inbuit function approach

const previousDisplay = document.querySelector(".previous-display")
const currentDisplay = document.querySelector(".current-display")
const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach(btns =>{
    btns.addEventListener("click", (e)=>{
        switch (e.target.innerText) {
            case 'AC':
                previousDisplay.innerHTML = ''
                currentDisplay.innerHTML = ''
                break;
            case "=" :
                try {
                    previousDisplay.innerHTML = eval(previousDisplay.innerText)
                    currentDisplay.innerHTML = previousDisplay.innerHTML
                    previousDisplay.innerText = ""
                } catch (error) {
                    currentDisplay.innerText = "Syntax error"
                    previousDisplay.innerHTML = ''
                }
                break;
            default:
                previousDisplay.innerHTML += e.target.innerText

                if(currentDisplay.innerHTML == "Syntax error"){
                    currentDisplay.innerHTML = ""
                }
                if(currentDisplay.innerText){
                    previousDisplay.innerText = currentDisplay.innerHTML
                    previousDisplay.innerHTML += e.target.innerText
                    currentDisplay.innerText = ""
                }
                break;
        }
    })
})